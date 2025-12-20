import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Peter Davis',
    business: 'Norfolk Boards',
    text: "This workshop came at exactly the right time. It was highly relevant to our business and gave us clear, actionable guidance that made a real difference. It had far more impact than any generic advice we'd seen before.",
    rating: 5
  },
  {
    name: 'Marcus Binnie',
    business: 'Promo Designs',
    text: "Consultico are a pleasure to work with. The team is incredibly friendly, knowledgeable, and always willing to go the extra mile. They made the whole process straightforward and effective. I couldn't recommend them more highly.",
    rating: 5
  },
  {
    name: 'Ant Vitale',
    business: 'The Boiler Co',
    text: "I can't thank Consultico enough. My business had hit a slump - busy with existing clients but getting no new ones. After dealing with pushy agencies and expensive quotes, I almost lost hope. Then I found Paul, who was genuine, knowledgeable, and always willing to explain things clearly.",
    rating: 5
  }
];

export function Reviews() {
  return (
    <section className="bg-transparent py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#007bff]">
          What Business Owners Are Saying
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#007bff] text-[#007bff]"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{review.text}</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">{review.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
