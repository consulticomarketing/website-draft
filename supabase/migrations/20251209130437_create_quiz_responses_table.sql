/*
  # Create quiz_responses table for Marketing Clarity Quiz

  1. New Tables
    - `quiz_responses`
      - `id` (uuid, primary key) - Unique identifier for each quiz response
      - `email` (text, required) - User's email address
      - `business_name` (text, optional) - User's business name
      - `total_score` (integer, required) - Total calculated score (6-24 range)
      - `tier_result` (text, required) - Tier classification (foundation, growth_ready, scale_potential, strategic_scaling)
      - `q1_answer` (integer) - Answer to question 1 (points value)
      - `q2_answer` (integer) - Answer to question 2 (points value)
      - `q3_answers` (jsonb) - Array of selected options for question 3
      - `q3_score` (integer) - Calculated score for question 3
      - `q4_answer` (integer) - Answer to question 4 (points value)
      - `q5_answer` (integer) - Answer to question 5 (points value)
      - `q6_answer` (integer) - Answer to question 6 (points value)
      - `created_at` (timestamptz) - Timestamp of quiz completion
      
  2. Security
    - Enable RLS on `quiz_responses` table
    - Add policy for inserting quiz responses (public access for lead generation)
    - Add policy for authenticated admin users to read all responses
    
  3. Indexes
    - Index on email for faster lookups
    - Index on created_at for analytics queries
    - Index on tier_result for segmentation queries
*/

CREATE TABLE IF NOT EXISTS quiz_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  business_name text,
  total_score integer NOT NULL CHECK (total_score >= 6 AND total_score <= 24),
  tier_result text NOT NULL CHECK (tier_result IN ('foundation', 'growth_ready', 'scale_potential', 'strategic_scaling')),
  q1_answer integer NOT NULL CHECK (q1_answer >= 1 AND q1_answer <= 4),
  q2_answer integer NOT NULL CHECK (q2_answer >= 1 AND q2_answer <= 4),
  q3_answers jsonb NOT NULL DEFAULT '[]'::jsonb,
  q3_score integer NOT NULL CHECK (q3_score >= 1 AND q3_score <= 4),
  q4_answer integer NOT NULL CHECK (q4_answer >= 1 AND q4_answer <= 4),
  q5_answer integer NOT NULL CHECK (q5_answer >= 1 AND q5_answer <= 4),
  q6_answer integer NOT NULL CHECK (q6_answer >= 1 AND q6_answer <= 4),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quiz_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit quiz responses"
  ON quiz_responses
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all quiz responses"
  ON quiz_responses
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_quiz_responses_email ON quiz_responses(email);
CREATE INDEX IF NOT EXISTS idx_quiz_responses_created_at ON quiz_responses(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quiz_responses_tier ON quiz_responses(tier_result);