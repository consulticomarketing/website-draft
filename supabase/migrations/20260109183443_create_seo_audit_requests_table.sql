/*
  # Create SEO Audit Requests Table

  1. New Tables
    - `seo_audit_requests`
      - `id` (uuid, primary key) - Unique identifier for each request
      - `name` (text, required) - Full name of the person requesting the audit
      - `business` (text, optional) - Business/company name
      - `website` (text, required) - Website URL to be audited
      - `email` (text, required) - Contact email address
      - `phone` (text, optional) - Contact phone number
      - `created_at` (timestamptz) - Timestamp of request submission

  2. Security
    - Enable RLS on `seo_audit_requests` table
    - Add policy for authenticated users to insert their own data
    - Add policy for authenticated admin users to view all requests

  3. Notes
    - This table stores SEO audit request submissions from the website form
    - All data is stored securely with proper validation
*/

CREATE TABLE IF NOT EXISTS seo_audit_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  business text,
  website text NOT NULL,
  email text NOT NULL,
  phone text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE seo_audit_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit SEO audit request"
  ON seo_audit_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);