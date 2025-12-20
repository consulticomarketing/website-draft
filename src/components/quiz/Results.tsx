import { useState, useEffect } from 'react';
import { TierResult, getTierDisplayName } from '../../lib/quizUtils';
import { CheckCircle, Calendar, ExternalLink } from 'lucide-react';

interface ResultsProps {
  tier: TierResult;
  score: number;
  onSubmitWebinar: (preferredTime: string) => Promise<void>;
}

const CALENDAR_URL = 'https://api.leadconnectorhq.com/widget/booking/gNiCvEOt1hrqwcPYQFmJ';

interface TierContent {
  headline: string;
  summary: string;
  whatThisMeans: string[];
  opportunity: string;
  opportunityPoints: string[];
}

const tierContent: Record<TierResult, TierContent> = {
  foundation: {
    headline: "You're in the Foundation Stage — Clarity Comes Before Scaling",
    summary: "You're doing some marketing, but the picture isn't clear enough to make confident decisions. Your growth is limited not by effort, but by uncertainty around what's working and what to do next.",
    whatThisMeans: [
      "You may be spending time or money without knowing the return",
      "It's difficult to prioritise because nothing is clearly defined",
      "You're relying on guesses or inconsistent advice"
    ],
    opportunity: "You're closer to predictable performance than you think. With a clear roadmap, you can see:",
    opportunityPoints: [
      "what's driving results",
      "what to fix first",
      "what to invest in next"
    ]
  },
  growth_ready: {
    headline: "You're Growth Ready — You Have Momentum, But Need Direction",
    summary: "You're doing the right things, but your next move isn't obvious. You've outgrown trial-and-error marketing and need structure to scale.",
    whatThisMeans: [
      "Some channels work, but not consistently",
      "You're missing prioritisation and sequencing",
      "Small improvements could unlock meaningful growth"
    ],
    opportunity: "Your business will scale faster once you know:",
    opportunityPoints: [
      "what to stop",
      "what to double down on",
      "the exact order to implement changes"
    ]
  },
  scale_potential: {
    headline: "You're in the Scale Potential Stage — One or Two Levers Will Unlock Significant Growth",
    summary: "Your marketing works, but not at the level it could. You're hitting a ceiling because the system isn't compounding yet.",
    whatThisMeans: [
      "You understand your channels, but growth isn't predictable",
      "Something in the strategy or execution is blocking scale",
      "You need structure more than more activity"
    ],
    opportunity: "Most brands at this stage scale faster once they identify the key bottleneck — usually messaging, channel inefficiency, sequencing, or tracking.",
    opportunityPoints: []
  },
  strategic_scaling: {
    headline: "You're in the Strategic Scaling Stage — You're Ready for Precision Growth",
    summary: "You're ahead of most brands. You have structure, momentum, and a clear view of your marketing — now you want sharper strategy and validated direction.",
    whatThisMeans: [
      "You're executing, but want higher confidence in your next move",
      "The wrong investment could slow momentum",
      "Precision will multiply returns"
    ],
    opportunity: "At this level, growth comes from:",
    opportunityPoints: [
      "selecting the right high-leverage move",
      "eliminating inefficiencies",
      "sequencing the next 6–12 months with precision"
    ]
  }
};

export function Results({ tier, score, onSubmitWebinar }: ResultsProps) {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const content = tierContent[tier];
  const tierName = getTierDisplayName(tier);

  useEffect(() => {
    if (!hasSubmitted) {
      onSubmitWebinar('calendar_booking').catch(console.error);
      setHasSubmitted(true);
    }
  }, [hasSubmitted, onSubmitWebinar]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-8">
          <div className="inline-block bg-[#007bff] text-white px-6 py-2 rounded-full font-semibold mb-4">
            Your Score: {score}/24
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#007bff] mb-4">
            {content.headline}
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 space-y-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Summary</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {content.summary}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">What This Means</h3>
            <ul className="space-y-3">
              {content.whatThisMeans.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#007bff] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">The Opportunity</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {content.opportunity}
            </p>
            {content.opportunityPoints.length > 0 && (
              <ul className="space-y-3">
                {content.opportunityPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#34A853] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="pt-6 border-t border-gray-200">
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#007bff]" />
                Next Step: Book Your Webinar Time
              </h4>
              <p className="text-gray-700 mb-4">
                {tier === 'foundation' && "Join the free training — I'll walk you through the exact roadmap to build profitable, predictable marketing."}
                {tier === 'growth_ready' && "Join the free training — you'll walk away knowing exactly what to focus on first, second, and third."}
                {tier === 'scale_potential' && "Join the free training — we'll show you how to identify and fix your highest-leverage growth lever."}
                {tier === 'strategic_scaling' && "Join the free training — it'll help you validate the right direction and sharpen your next scale move."}
              </p>
              <p className="text-gray-900 font-medium">
                Choose your preferred time below to secure your spot.
              </p>
            </div>

            <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden mb-6">
              <iframe
                src={CALENDAR_URL}
                style={{
                  width: '100%',
                  border: 'none',
                  overflow: 'hidden',
                  minHeight: '600px'
                }}
                scrolling="no"
                id="gNiCvEOt1hrqwcPYQFmJ_1765286804734"
                title="Webinar Booking Calendar"
              />
            </div>

            <div className="text-center">
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#007bff] hover:text-[#0056b3] font-semibold transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Open calendar in new window
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
