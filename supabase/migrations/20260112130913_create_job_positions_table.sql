/*
  # Create job positions table for careers page

  1. New Tables
    - `job_positions`
      - `id` (uuid, primary key) - Unique identifier for each position
      - `title` (text) - Job title (e.g., "Graphic Designer")
      - `description` (text) - Full job description
      - `category` (text) - Job category (e.g., "Design", "Sales", "Business Development")
      - `location_type` (text) - Remote, Hybrid, or On-site
      - `employment_type` (text) - Full-time, Part-time, etc.
      - `hours` (text) - Hours information (e.g., "100 hours")
      - `is_student_training` (boolean) - Whether this is a student training opportunity
      - `is_partner_company` (boolean) - Whether this is from a partner company
      - `is_students_only` (boolean) - Whether this position is students only
      - `is_active` (boolean) - Whether the position is currently active/published
      - `sort_order` (integer) - For ordering positions in the list
      - `created_at` (timestamptz) - When the position was created
      - `updated_at` (timestamptz) - When the position was last updated

  2. Security
    - Enable RLS on `job_positions` table
    - Add policy for public read access to active positions
    - Restrict write access (would be done through admin interface)

  3. Initial Data
    - Seed with sample positions from the design mockups
*/

CREATE TABLE IF NOT EXISTS job_positions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  location_type text NOT NULL DEFAULT 'Remote / Hybrid',
  employment_type text NOT NULL DEFAULT 'Full-time',
  hours text,
  is_student_training boolean DEFAULT false,
  is_partner_company boolean DEFAULT false,
  is_students_only boolean DEFAULT false,
  is_active boolean DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE job_positions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active job positions"
  ON job_positions
  FOR SELECT
  USING (is_active = true);

INSERT INTO job_positions (title, description, category, location_type, employment_type, hours, is_student_training, is_partner_company, is_students_only, sort_order) VALUES
(
  'Micro-Internship Pathway',
  'Complete our unique 100-hour training course focused on developing crucial skills needed to work effectively with businesses. Gain real-world experience through Consultico-supported micro-internships with partner companies. Build your professional network and develop in-demand skills that set you apart in the job market.',
  'Student Training',
  'Remote / Hybrid',
  'Part-time',
  '100 hours',
  true,
  false,
  false,
  1
),
(
  'Sales Development Representative',
  'Drive our growth through proactive outreach and engagement with target businesses. Build lasting relationships and help companies discover solutions that transform their operations. Join a supportive, friendly team where success is celebrated and rewarded with uncapped commissions.',
  'Sales',
  'Remote / Hybrid',
  'Full-time',
  null,
  false,
  false,
  false,
  2
),
(
  'Graphic Designer',
  'Join a new indie game studio looking for a graphic design student or graduate to join their team, helping to design new characters and sets for their game. With potential for long-term work, this job has the chance to come with published artwork and royalties.',
  'Design',
  'Remote / Hybrid',
  'Full-time',
  null,
  false,
  true,
  true,
  3
),
(
  'Animator',
  'Join a new beverage company looking for an animation student or graduate to design emotive, exciting animated advertisements. Bring products to life through creative storytelling and dynamic visuals that connect with audiences and build brand identity.',
  'Design',
  'Remote / Hybrid',
  'Full-time',
  null,
  false,
  true,
  true,
  4
),
(
  'Business Development Manager',
  'Lead strategic business development initiatives and forge partnerships that drive company growth. Identify new market opportunities, develop relationships with key stakeholders, and create innovative solutions that align with our mission of connecting students with meaningful career opportunities.',
  'Business Development',
  'Remote / Hybrid',
  'Full-time',
  null,
  false,
  false,
  false,
  5
);