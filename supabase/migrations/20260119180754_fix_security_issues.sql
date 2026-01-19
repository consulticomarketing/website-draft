/*
  # Fix Security Issues
  
  ## Changes
  
  1. **Drop Unused Indexes**
     - Remove `idx_quiz_responses_email` - Not being used in queries
     - Remove `idx_quiz_responses_created_at` - Not being used in queries
     - Remove `idx_quiz_responses_tier` - Not being used in queries
     - Remove `idx_quiz_responses_phone` - Not being used in queries
     - Remove `idx_quiz_responses_preferred_time` - Not being used in queries
     
  2. **Improve RLS Policies**
     - Update `quiz_responses` INSERT policy to validate required fields are not empty
     - Update `seo_audit_requests` INSERT policy to validate required fields are not empty
     - This maintains public form access while adding basic data validation
     
  ## Security Notes
  
  - The policies still allow anonymous (anon) users to submit data, which is required for lead generation forms
  - However, we now validate that required fields contain actual data
  - This prevents completely empty or invalid submissions while maintaining functionality
*/

-- Drop unused indexes on quiz_responses table
DROP INDEX IF EXISTS idx_quiz_responses_email;
DROP INDEX IF EXISTS idx_quiz_responses_created_at;
DROP INDEX IF EXISTS idx_quiz_responses_tier;
DROP INDEX IF EXISTS idx_quiz_responses_phone;
DROP INDEX IF EXISTS idx_quiz_responses_preferred_time;

-- Drop and recreate the quiz_responses INSERT policy with validation
DROP POLICY IF EXISTS "Anyone can submit quiz responses" ON quiz_responses;

CREATE POLICY "Anyone can submit quiz responses"
  ON quiz_responses
  FOR INSERT
  TO anon
  WITH CHECK (
    email IS NOT NULL 
    AND length(trim(email)) > 0 
    AND email LIKE '%@%'
    AND name IS NOT NULL 
    AND length(trim(name)) > 0
    AND phone IS NOT NULL 
    AND length(trim(phone)) > 0
    AND preferred_time IS NOT NULL 
    AND length(trim(preferred_time)) > 0
  );

-- Drop and recreate the seo_audit_requests INSERT policy with validation
DROP POLICY IF EXISTS "Anyone can submit SEO audit request" ON seo_audit_requests;

CREATE POLICY "Anyone can submit SEO audit request"
  ON seo_audit_requests
  FOR INSERT
  TO anon
  WITH CHECK (
    name IS NOT NULL 
    AND length(trim(name)) > 0
    AND email IS NOT NULL 
    AND length(trim(email)) > 0 
    AND email LIKE '%@%'
    AND website IS NOT NULL 
    AND length(trim(website)) > 0
  );