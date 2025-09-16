import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export interface ContactFormSubmission {
  id?: string
  name: string
  email: string
  phone?: string
  service_needed: string
  budget_range?: string
  project_details: string
  is_student: boolean
  status?: 'new' | 'contacted' | 'completed'
  created_at?: string
  updated_at?: string
}

// Function to submit contact form
export async function submitContactForm(data: Omit<ContactFormSubmission, 'id' | 'created_at' | 'updated_at' | 'status'>) {
  const { data: submission, error } = await supabase
    .from('contact_form_submissions')
    .insert([data])
    .select()
    .single()

  if (error) {
    throw error
  }

  return submission
}

// Function to get all contact form submissions (admin only)
export async function getContactSubmissions() {
  const { data, error } = await supabase
    .from('contact_form_submissions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw error
  }

  return data
}

// Function to update submission status
export async function updateSubmissionStatus(id: string, status: 'new' | 'contacted' | 'completed') {
  const { data, error } = await supabase
    .from('contact_form_submissions')
    .update({ status })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}
