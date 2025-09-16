/*
  # Create contact form submissions table

  1. New Tables
    - `contact_form_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, optional)
      - `service_needed` (text, required)
      - `budget_range` (text, optional)
      - `project_details` (text, required)
      - `is_student` (boolean, default false)
      - `status` (enum: new, contacted, completed)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `contact_form_submissions` table
    - Add policy for public to insert submissions
    - Add policy for authenticated users to view submissions (admin access)

  3. Indexes
    - Index on email for quick lookups
    - Index on status for filtering
    - Index on created_at for sorting
*/

-- Create enum for submission status
CREATE TYPE submission_status AS ENUM ('new', 'contacted', 'completed');

-- Create contact form submissions table
CREATE TABLE IF NOT EXISTS contact_form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  service_needed text NOT NULL,
  budget_range text,
  project_details text NOT NULL,
  is_student boolean DEFAULT false,
  status submission_status DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can submit contact forms"
  ON contact_form_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all submissions"
  ON contact_form_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update submissions"
  ON contact_form_submissions
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_form_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_form_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_form_submissions(created_at DESC);

-- Create trigger for updated_at
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_form_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
