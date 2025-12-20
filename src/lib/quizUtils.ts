export type TierResult = 'foundation' | 'growth_ready' | 'scale_potential' | 'strategic_scaling';

export interface QuizAnswers {
  q1: number;
  q2: number;
  q3: string[];
  q4: number;
  q5: number;
  q6: number;
}

export function calculateQ3Score(selectedOptions: string[]): number {
  const count = selectedOptions.length;

  if (count === 1) return 1;
  if (count <= 3) return 2;
  if (count === 4) return 3;
  if (count === 5) return 4;

  return 1;
}

export function calculateTotalScore(answers: QuizAnswers): number {
  const q3Score = calculateQ3Score(answers.q3);
  return answers.q1 + answers.q2 + q3Score + answers.q4 + answers.q5 + answers.q6;
}

export function getTierFromScore(score: number): TierResult {
  if (score >= 6 && score <= 10) return 'foundation';
  if (score >= 11 && score <= 15) return 'growth_ready';
  if (score >= 16 && score <= 20) return 'scale_potential';
  if (score >= 21 && score <= 24) return 'strategic_scaling';

  return 'foundation';
}

export function getTierDisplayName(tier: TierResult): string {
  switch (tier) {
    case 'foundation':
      return 'Foundation Stage';
    case 'growth_ready':
      return 'Growth Ready';
    case 'scale_potential':
      return 'Scale Potential';
    case 'strategic_scaling':
      return 'Strategic Scaling';
  }
}
