/*
  # Fix RLS permissions for contact form submissions

  1. Permissions
    - Grant USAGE on submission_status enum to public role
    - This allows anonymous users to insert records with the default status value

  2. Notes
    - Fixes the "new row violates row-level security policy" error
    - Allows public users to submit contact forms as intended
*/

-- Grant usage on the enum type to public role
GRANT USAGE ON TYPE submission_status TO public;
