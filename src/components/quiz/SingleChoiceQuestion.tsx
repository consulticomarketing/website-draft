import { Check } from 'lucide-react';

interface Option {
  text: string;
  points: number;
}

interface SingleChoiceQuestionProps {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  options: Option[];
  selectedValue: number | null;
  onSelect: (points: number) => void;
  onNext: () => void;
  onBack: () => void;
}

export function SingleChoiceQuestion({
  questionNumber,
  totalQuestions,
  question,
  options,
  selectedValue,
  onSelect,
  onNext,
  onBack,
}: SingleChoiceQuestionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl mx-auto w-full">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-500">
              Question {questionNumber} of {totalQuestions}
            </span>
            <div className="flex gap-1">
              {Array.from({ length: totalQuestions }).map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 w-8 rounded-full transition-colors ${
                    idx < questionNumber ? 'bg-[#007bff]' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {question}
          </h2>
        </div>

        <div className="space-y-4 mb-8">
          {options.map((option) => (
            <button
              key={option.points}
              onClick={() => onSelect(option.points)}
              className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                selectedValue === option.points
                  ? 'border-[#007bff] bg-blue-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-[#007bff] hover:shadow-md'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-lg text-gray-900 flex-1">{option.text}</span>
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    selectedValue === option.points
                      ? 'border-[#007bff] bg-[#007bff]'
                      : 'border-gray-300'
                  }`}
                >
                  {selectedValue === option.points && (
                    <Check className="w-4 h-4 text-white" />
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          {questionNumber > 1 && (
            <button
              onClick={onBack}
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
          )}
          <button
            onClick={onNext}
            disabled={selectedValue === null}
            className="flex-1 bg-[#007bff] hover:bg-[#0056b3] text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {questionNumber === totalQuestions ? 'Continue' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
}
