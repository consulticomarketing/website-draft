import { useState, useEffect } from 'react';
import {
  GraduationCap,
  Heart,
  Briefcase,
  TrendingUp,
  Trophy,
  Target,
  Lightbulb,
  Users,
  Home,
  Coffee,
  ArrowRight,
  MapPin,
  Clock,
  Handshake,
  Star
} from 'lucide-react';
import { supabase } from '../lib/supabase';

interface JobPosition {
  id: string;
  title: string;
  description: string;
  category: string;
  location_type: string;
  employment_type: string;
  hours: string | null;
  is_student_training: boolean;
  is_partner_company: boolean;
  is_students_only: boolean;
  sort_order: number;
}

export function Careers() {
  const [jobPositions, setJobPositions] = useState<JobPosition[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobPositions();
  }, []);

  const fetchJobPositions = async () => {
    try {
      const { data, error } = await supabase
        .from('job_positions')
        .select('*')
        .eq('is_active', true)
        .order('sort_order', { ascending: true });

      if (error) throw error;
      setJobPositions(data || []);
    } catch (error) {
      console.error('Error fetching job positions:', error);
    } finally {
      setLoading(false);
    }
  };

  const scrollToPositions = () => {
    document.getElementById('open-positions')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'design':
        return <Briefcase className="w-4 h-4" />;
      case 'sales':
        return <TrendingUp className="w-4 h-4" />;
      case 'student training':
        return <GraduationCap className="w-4 h-4" />;
      case 'business development':
        return <Target className="w-4 h-4" />;
      default:
        return <Briefcase className="w-4 h-4" />;
    }
  };

  const getCardBackground = (index: number) => {
    const backgrounds = [
      'bg-green-50 border-green-200',
      'bg-blue-50 border-blue-200',
      'bg-gray-50 border-gray-200',
      'bg-purple-50 border-purple-200',
      'bg-orange-50 border-orange-200'
    ];
    return backgrounds[index % backgrounds.length];
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                A career where you{' '}
                <span className="text-[#007bff]">make real impact</span> and
                grow daily.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join a team that values your growth, celebrates your wins, and gives
                you the autonomy to do your best work.
              </p>
              <button
                onClick={scrollToPositions}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#007bff] text-white font-semibold text-lg rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="mt-12 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-[#007bff] border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-[#007bff] border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-white"></div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 fill-[#007bff]"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 font-medium">
                    Championing student employability since 2024
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/dsc01896_(1).jpeg"
                alt="Team working together"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#007bff]"></div>
              <p className="text-lg font-semibold">Student-Friendly Employer</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#007bff]"></div>
              <p className="text-lg font-semibold">Learning & Upskilling First</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#007bff]"></div>
              <p className="text-lg font-semibold">Remote Work Options*</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              What Makes Us <span className="text-[#007bff]">Different</span>
            </h2>
            <p className="text-xl text-gray-600">
              Our approach to student development and professional growth
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid md:grid-cols-[400px,1fr] gap-0 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-blue-50 p-12 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <GraduationCap className="w-10 h-10 text-[#007bff]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Student-Friendly<br />Focus
                </h3>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  With a close relationship with <strong>Strathclyde University in Glasgow</strong>, our team has
                  always prioritised student employability, upskilling, and training. We have developed
                  student-specific training in marketing and built strong relationships with partners
                  that share our student-centred business model.
                </p>
                <div className="border-l-4 border-[#007bff] pl-6 bg-blue-50 py-4">
                  <p className="text-gray-700 leading-relaxed">
                    Our marketing training is designed with academic schedules in mind, offering flexible
                    opportunities that enhance your employability while supporting your studies.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[1fr,400px] gap-0 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-12 flex flex-col justify-center order-2 md:order-1">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  We are proud that our primary focus, internally and externally, is on <strong>building
                  connections and helping each other</strong> strive towards better results. A strong team
                  focus and good results for our clients take precedence over profit, and we celebrate
                  team wins properly.
                </p>
                <div className="border-l-4 border-red-400 pl-6 bg-red-50 py-4">
                  <p className="text-gray-700 leading-relaxed">
                    Success is a team effort. We invest in relationships, mentorship, and creating an
                    environment where everyone can thrive and achieve their best work.
                  </p>
                </div>
              </div>
              <div className="bg-red-50 p-12 flex flex-col items-center justify-center text-center order-1 md:order-2">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Heart className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Relationship-<br />Focused Work
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-[400px,1fr] gap-0 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-green-50 p-12 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Briefcase className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Student Micro-<br />Internships
                </h3>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  We have developed a unique <strong>100-hour training course</strong> for students, focused on
                  developing crucial skills needed to work effectively with businesses. What's at the
                  end? Access to a Consultico-supported micro-internship in marketing, where we
                  support you as you work with companies over short internship programs.
                </p>
                <div className="border-l-4 border-green-600 pl-6 bg-green-50 py-4">
                  <p className="text-gray-700 leading-relaxed">
                    Gain real-world experience, build your professional network, and develop in-demand
                    skills that set you apart in the job market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="open-positions" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Open <span className="text-[#007bff]">Positions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Find your next opportunity and join a team that's building something special
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-8 h-8 border-4 border-[#007bff] border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600">Loading positions...</p>
            </div>
          ) : (
            <div className="max-h-[800px] overflow-y-auto space-y-6 pr-4 scrollbar-custom">
              {jobPositions.map((position, index) => (
                <div
                  key={position.id}
                  className={`${getCardBackground(index)} border-2 rounded-2xl p-8 transition-all duration-200 hover:shadow-lg relative`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {position.title}
                        </h3>
                        {position.is_partner_company && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#007bff] text-white text-sm font-semibold rounded-full">
                            <Handshake className="w-4 h-4" />
                            Partner Company
                          </span>
                        )}
                        {position.is_students_only && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-500 text-white text-sm font-semibold rounded-full">
                            <Star className="w-4 h-4" />
                            Students Only
                          </span>
                        )}
                        {position.is_student_training && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-600 text-white text-sm font-semibold rounded-full">
                            <GraduationCap className="w-4 h-4" />
                            Student Training Opportunity
                          </span>
                        )}
                      </div>

                      <p className="text-gray-700 text-base leading-relaxed mb-6">
                        {position.description}
                      </p>

                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(position.category)}
                          <span>{position.category}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location_type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>
                            {position.employment_type}
                            {position.hours && ` (${position.hours})`}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button className="flex-shrink-0 w-12 h-12 bg-[#007bff] text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Why Work <span className="text-[#007bff]">With Us</span>
            </h2>
            <p className="text-xl text-gray-600">
              We're learning-first, student-friendly, and focused on making you more employable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-[#007bff]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Training & Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive upskilling programs, mentorship, and continuous learning opportunities
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-[#007bff]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Career Progression
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Clear pathways to advance your career and prepare for your next role
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Trophy className="w-7 h-7 text-[#007bff]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Performance Rewards
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Heavily rewarded for success with bonuses and recognition programs
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#007bff]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Student-Friendly Schedules
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Flexible hours that work around your studies and commitments
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-[#007bff]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Skills Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Real-world experience building your employability for future opportunities
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#007bff]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Profit-Second Culture
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Privately owned business that reinvests profits into better work environment
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Home className="w-7 h-7 text-[#007bff]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Remote Options*
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Work from anywhere opportunities when available
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Coffee className="w-7 h-7 text-[#007bff]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Team Environment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Supportive culture focused on your growth and success
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Application <span className="text-[#007bff]">Process</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Our straightforward hiring process designed to find the right fit for both sides
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apply</h3>
              <p className="text-gray-600 leading-relaxed">
                Submit your application through our open positions. We review every application carefully.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Initial Chat</h3>
              <p className="text-gray-600 leading-relaxed">
                We'll have an informal conversation to learn about your goals and answer your questions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete a practical task or interview that showcases your skills and approach.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Offer</h3>
              <p className="text-gray-600 leading-relaxed">
                If it's a great match, we'll extend an offer and get you started on your journey with us.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={scrollToPositions}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold text-lg rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              View All Open Positions
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .scrollbar-custom::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: #007bff;
          border-radius: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: #0056b3;
        }
      `}</style>
    </div>
  );
}
