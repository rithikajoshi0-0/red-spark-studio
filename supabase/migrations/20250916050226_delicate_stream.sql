/*
  # Fix contact form submission permissions

  1. Permissions
    - Grant ALL on contact_form_submissions table to public role
    - Grant USAGE and SELECT on submission_status enum to public role
    - Grant USAGE on sequence for UUID generation

  2. Notes
    - Ensures anonymous users can submit contact forms
    - Fixes RLS policy violations
*/

-- Grant permissions on the enum type
GRANT USAGE ON TYPE submission_status TO public;

-- Grant permissions on the table
GRANT INSERT ON contact_form_submissions TO public;

-- Grant usage on the UUID generation function
GRANT EXECUTE ON FUNCTION gen_random_uuid() TO public;

-- Update the RLS policy to be more explicit
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON contact_form_submissions;

CREATE POLICY "Public can insert contact forms"
  ON contact_form_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);
