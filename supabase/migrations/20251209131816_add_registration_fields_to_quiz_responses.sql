/*
  # Add registration and webinar fields to quiz_responses table

  1. Changes to quiz_responses table
    - Add `name` (text, required) - User's full name
    - Add `phone` (text, required) - User's phone number
    - Add `preferred_time` (text, required) - Selected webinar time slot

  2. Purpose
    - Combines quiz responses with webinar registration data
    - Eliminates need for separate webinar_registrations table
    - Streamlines the lead capture and qualification process

  3. Notes
    - All new fields are required to ensure complete registration data
    - Existing records (if any) are handled gracefully with conditional logic
    - No data loss - only additive changes
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'quiz_responses' AND column_name = 'name'
  ) THEN
    ALTER TABLE quiz_responses ADD COLUMN name text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'quiz_responses' AND column_name = 'phone'
  ) THEN
    ALTER TABLE quiz_responses ADD COLUMN phone text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'quiz_responses' AND column_name = 'preferred_time'
  ) THEN
    ALTER TABLE quiz_responses ADD COLUMN preferred_time text;
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'quiz_responses' AND column_name = 'name'
    AND is_nullable = 'YES'
  ) THEN
    ALTER TABLE quiz_responses ALTER COLUMN name SET NOT NULL;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'quiz_responses' AND column_name = 'phone'
    AND is_nullable = 'YES'
  ) THEN
    ALTER TABLE quiz_responses ALTER COLUMN phone SET NOT NULL;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'quiz_responses' AND column_name = 'preferred_time'
    AND is_nullable = 'YES'
  ) THEN
    ALTER TABLE quiz_responses ALTER COLUMN preferred_time SET NOT NULL;
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_quiz_responses_phone ON quiz_responses(phone);
CREATE INDEX IF NOT EXISTS idx_quiz_responses_preferred_time ON quiz_responses(preferred_time);
