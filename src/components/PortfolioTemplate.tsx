import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  summary: string;
  image: string;
  content: string;
}

interface ClickPosition {
  x: number;
  y: number;
  top: number;
}

export function PortfolioTemplate() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [clickPosition, setClickPosition] = useState<ClickPosition>({ x: 0, y: 0, top: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedCase) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
        if (modalRef.current) {
          modalRef.current.scrollTop = 0;
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [selectedCase]);

  const handleCaseClick = (study: CaseStudy, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;

    const modalHeight = window.innerHeight * 0.9;
    const viewportHeight = window.innerHeight;
    const padding = 20;

    let calculatedTop = rect.top + scrollY;

    if (calculatedTop + modalHeight > scrollY + viewportHeight - padding) {
      calculatedTop = Math.max(scrollY + padding, scrollY + viewportHeight - modalHeight - padding);
    }

    calculatedTop = Math.max(calculatedTop, scrollY + padding);

    setClickPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      top: calculatedTop
    });
    setSelectedCase(study);
  };

  const skills = [
    { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
    { name: 'WordPress', logo: 'https://s.w.org/style/images/about/WordPress-logotype-standard.png' },
    { name: 'FreeAgent', logo: 'https://www.freeagent.com/wp-content/themes/freeagent/img/logo.svg' },
    { name: 'Google Workspace', logo: 'https://lh3.googleusercontent.com/23K9TDTOdlo57Pi9JvNtPc9K-utoed1JM7BxbvBd7QAr4-hi5SypEbOiFvW2SGZH2TOo8jYn-sd5yaf6I3JMGO_vLvSIvFaTnWLnGWk' },
    { name: 'Meta Business Suite', logo: 'https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/S3Y3TH1pIuX.png' }
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'Digital Transformation for Tech Startup',
      category: 'Strategy & Growth',
      summary: 'Led complete brand repositioning and go-to-market strategy for B2B SaaS company',
      image: '/screenshot_2026-01-16_at_13.56.31.png',
      content: `This project involved a comprehensive digital transformation initiative for a rapidly growing tech startup. The challenge was to scale their marketing operations while maintaining brand consistency and message clarity across multiple channels.

We implemented a data-driven approach to customer acquisition, developing detailed buyer personas and mapping the complete customer journey. This included restructuring their content strategy, optimizing their sales funnel, and implementing marketing automation systems.

Key deliverables included:
- Complete brand audit and repositioning strategy
- Multi-channel marketing campaign framework
- Sales enablement materials and processes
- Performance tracking and analytics dashboard
- Team training and capability development

The results exceeded expectations, with a 240% increase in qualified leads within the first quarter and a 35% improvement in sales cycle efficiency. The company successfully scaled from 10 to 45 employees during the engagement period.`
    },
    {
      id: 2,
      title: 'E-Commerce Platform Optimization',
      category: 'Conversion & Revenue',
      summary: 'Increased revenue by 180% through strategic UX improvements and conversion optimization',
      image: '/screenshot_2026-01-16_at_13.56.31.png',
      content: `This engagement focused on transforming an underperforming e-commerce platform into a revenue-generating powerhouse. The client was experiencing high traffic but low conversion rates, indicating fundamental issues with user experience and purchase flow.

Our approach combined quantitative analytics with qualitative user research to identify friction points throughout the customer journey. We conducted extensive A/B testing, heat mapping analysis, and user session recordings to understand exactly where potential customers were dropping off.

Strategic interventions included:
- Complete checkout process redesign
- Personalized product recommendation engine
- Mobile-first responsive optimization
- Strategic pricing and promotion framework
- Customer retention and lifecycle marketing programs

The transformation resulted in a 180% revenue increase year-over-year, with conversion rates improving from 1.2% to 3.8%. Average order value increased by 45%, and customer lifetime value grew by 62%.`
    },
    {
      id: 3,
      title: 'Content Marketing & Brand Authority',
      category: 'Thought Leadership',
      summary: 'Built industry-leading content platform generating 500K monthly organic visitors',
      image: '/screenshot_2026-01-16_at_13.56.31.png',
      content: `The objective was to establish the client as a thought leader in their industry through strategic content marketing and brand positioning. Starting from minimal online presence, we developed a comprehensive content strategy that would drive organic traffic and establish credibility.

We created a content framework based on search intent analysis, competitive gaps, and audience research. This included developing a robust editorial calendar, establishing content production workflows, and implementing SEO best practices throughout.

Program components:
- Comprehensive SEO and content strategy
- Multi-format content production (articles, videos, podcasts, infographics)
- Strategic partnership and guest contribution program
- Social media amplification strategy
- Performance measurement and optimization framework

Within 18 months, the platform grew to 500,000 monthly organic visitors, with multiple pieces of content ranking #1 for competitive industry keywords. The content hub became a primary lead generation channel, contributing to 45% of all new business opportunities.`
    },
    {
      id: 4,
      title: 'Acquisition Integration & Growth',
      category: 'M&A Strategy',
      summary: 'Structured and executed post-acquisition integration for media company portfolio add-on',
      image: '/screenshot_2026-01-16_at_13.56.31.png',
      content: `This project involved the strategic acquisition and integration of a complementary business in the media and content space. The engagement spanned from deal structuring through post-acquisition integration and growth acceleration.

Working closely with the founding team, we developed a seller-financed acquisition structure that aligned incentives and ensured business continuity. The integration strategy focused on preserving core strengths while implementing operational improvements and growth initiatives.

Key workstreams included:
- Deal structuring and negotiation strategy
- Financial modeling and due diligence oversight
- Integration planning and execution
- Team alignment and culture integration
- Commercial strategy and revenue optimization
- Systems and process standardization

The acquisition closed successfully with structured financing terms favorable to both parties. Post-acquisition, we achieved synergies ahead of schedule, with combined revenue growing 85% in the first year while maintaining strong profitability margins.`
    }
  ];

  const galleryItems = [
    {
      id: 1,
      image: '/image copy copy.png',
      description: 'Podcast recording with one of my colleagues to promote our new services and publish content online'
    },
    {
      id: 2,
      image: '/photo_18-10-2025,_1_18_00_pm_(5)_(2).jpg',
      description: 'This is a photo of me and my team, whom were all hired and trained directly under me in 2025'
    },
    {
      id: 3,
      image: '/instagram_post_-_6.png',
      description: 'This was part of a marketing campaign we ran to raise awareness with students and businesses of who we are'
    },
    {
      id: 4,
      image: '/img_2542.jpeg',
      description: 'Part of our second podcast trial, produced by a client as part of a consultation around marketing strategy, purchasing process, and process building'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Paul Wilson
              </h1>
              <h2 className="text-2xl text-gray-600 font-medium">
                Founder, Marketing Strategist, Operating Investor
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Managing Partner of Consultico Group, where I lead growth strategy,
                capital deployment, and structured acquisitions in founder-led businesses.
                I focus on building scalable commercial systems and turning strong brands
                into durable, profitable operations. My work sits at the intersection of
                strategy, execution, and governance. Alongside Consultico, I invest in and
                support portfolio companies through hands-on, outcome-driven leadership.
                Recent activity includes a seller-financed acquisition in the media and
                content space.
              </p>
            </div>

            <div className="relative">
              <img
                src="/screenshot_2026-01-16_at_13.56.31.png"
                alt="Paul Wilson presenting"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 w-full h-32"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="max-w-full max-h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Portfolio
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Case Studies</h3>
              <div className="space-y-4">
                {caseStudies.slice(0, 3).map((study) => (
                  <div
                    key={study.id}
                    onClick={(e) => handleCaseClick(study, e)}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group"
                  >
                    <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                      {study.category}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors">
                      {study.title}
                    </h4>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      {study.summary}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-4">More Case Studies</h4>
                <div className="max-h-48 overflow-y-auto space-y-3 pr-2">
                  {caseStudies.slice(3).map((study) => (
                    <div
                      key={study.id}
                      onClick={(e) => handleCaseClick(study, e)}
                      className="bg-white rounded-lg p-4 hover:shadow-md transition-all duration-200 cursor-pointer group border border-gray-100"
                    >
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                        {study.category}
                      </span>
                      <h5 className="text-base font-bold text-gray-900 mt-1 group-hover:text-blue-600 transition-colors">
                        {study.title}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h3>
              <div className="grid grid-cols-2 gap-4">
                {galleryItems.map((item) => (
                  <div
                    key={item.id}
                    className="relative group overflow-hidden rounded-xl aspect-square"
                  >
                    <img
                      src={item.image}
                      alt={item.description}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedCase && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          style={{
            animation: 'fadeIn 0.3s ease-out'
          }}
          onClick={() => setSelectedCase(null)}
        >
          <div
            ref={modalRef}
            className="absolute left-1/2 -translate-x-1/2 bg-white rounded-2xl max-w-4xl w-[calc(100%-2rem)] max-h-[90vh] overflow-y-auto shadow-2xl mx-4"
            style={{
              top: `${clickPosition.top}px`,
              transformOrigin: `${clickPosition.x}px ${clickPosition.y}px`,
              animation: isAnimating ? 'none' : 'modalExpand 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              transform: isAnimating ? 'scale(0) translateX(-50%)' : 'scale(1) translateX(-50%)',
              opacity: isAnimating ? 0 : 1
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
              <div>
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                  {selectedCase.category}
                </span>
                <h3 className="text-3xl font-bold text-gray-900 mt-1">
                  {selectedCase.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="px-8 py-6">
              <img
                src={selectedCase.image}
                alt={selectedCase.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />

              <div className="prose prose-lg max-w-none">
                {selectedCase.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalExpand {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
