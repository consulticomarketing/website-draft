import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { QuizAnswers, calculateTotalScore, calculateQ3Score, getTierFromScore, TierResult } from '../lib/quizUtils';
import { StartScreen } from './quiz/StartScreen';
import { RegistrationForm } from './quiz/RegistrationForm';
import { SingleChoiceQuestion } from './quiz/SingleChoiceQuestion';
import { MultiSelectQuestion } from './quiz/MultiSelectQuestion';
import { CalculatingScreen } from './quiz/CalculatingScreen';
import { Results } from './quiz/Results';

type Screen = 'start' | 'registration' | 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'q6' | 'calculating' | 'results';

const questions = {
  q1: {
    question: 'How would you describe how your marketing is performing right now?',
    options: [
      { text: "We're spending, but it's hard to tell what's actually working.", points: 1 },
      { text: "We've tried ads or agencies, but nothing has been reliably consistent.", points: 2 },
      { text: "We're getting some results, but we're not sure what to focus on next.", points: 3 },
      { text: "We're growing, but we don't know where the next profitable lever is.", points: 4 },
    ],
  },
  q2: {
    question: 'How confident do you feel about what your marketing needs in the next 3–6 months?',
    options: [
      { text: "Honestly, we're guessing. We don't have a clear plan.", points: 1 },
      { text: "We have ideas, but we're not sure what will actually work.", points: 2 },
      { text: "We know some of the right moves, but need clarity on priority.", points: 3 },
      { text: "We're confident, but want to validate our next growth steps.", points: 4 },
    ],
  },
  q3: {
    question: 'What marketing activity are you currently running?',
    options: [
      "We post a bit on social media.",
      "We run paid ads (Meta / Google).",
      "We send emails or run automations.",
      "We work with an agency or freelancer.",
      "We're not doing much right now.",
    ],
  },
  q4: {
    question: 'How clear are you on what your next growth move should be?',
    options: [
      { text: "Not clear at all — everything feels like a guess.", points: 1 },
      { text: "We have ideas, but not sure what will actually work.", points: 2 },
      { text: "We're fairly clear, but unsure about priority or order.", points: 3 },
      { text: "We're clear, but want validation that we're choosing right.", points: 4 },
    ],
  },
  q5: {
    question: 'How well do you understand which parts of your marketing make money?',
    options: [
      { text: "We're unsure — we don't really know what's driving results.", points: 1 },
      { text: "We know some of it, but there are big blind spots.", points: 2 },
      { text: "We understand the basics but need clearer data to scale confidently.", points: 3 },
      { text: "We have solid tracking and want to optimise further.", points: 4 },
    ],
  },
  q6: {
    question: 'What best describes your growth plans for the next 6 months?',
    options: [
      { text: "We want stable, predictable performance before investing more.", points: 1 },
      { text: "We want to fix our foundation so we can start scaling.", points: 2 },
      { text: "We're ready to scale but need clarity on the right strategy.", points: 3 },
      { text: "We're pushing for aggressive growth and want a proven roadmap.", points: 4 },
    ],
  },
};

export function Quiz() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('start');
  const [answers, setAnswers] = useState<QuizAnswers>({
    q1: 0,
    q2: 0,
    q3: [],
    q4: 0,
    q5: 0,
    q6: 0,
  });
  const [registrationData, setRegistrationData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: ''
  });
  const [tier, setTier] = useState<TierResult>('foundation');
  const [totalScore, setTotalScore] = useState(0);

  const handleStart = () => {
    setCurrentScreen('registration');
  };

  const handleRegistrationSubmit = (data: { name: string; businessName: string; email: string; phone: string }) => {
    setRegistrationData(data);
    setCurrentScreen('q1');
  };

  const handleSingleChoiceAnswer = (question: keyof Pick<QuizAnswers, 'q1' | 'q2' | 'q4' | 'q5' | 'q6'>, points: number) => {
    setAnswers(prev => ({ ...prev, [question]: points }));
  };

  const handleMultiSelectToggle = (option: string) => {
    setAnswers(prev => ({
      ...prev,
      q3: prev.q3.includes(option)
        ? prev.q3.filter(o => o !== option)
        : [...prev.q3, option]
    }));
  };

  const handleNext = (currentQuestion: Screen) => {
    const screenOrder: Screen[] = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];
    const currentIndex = screenOrder.indexOf(currentQuestion);
    if (currentIndex !== -1 && currentIndex < screenOrder.length - 1) {
      setCurrentScreen(screenOrder[currentIndex + 1]);
    } else if (currentQuestion === 'q6') {
      setCurrentScreen('calculating');
      calculateAndShowResults();
    }
  };

  const handleBack = (currentQuestion: Screen) => {
    const screenOrder: Screen[] = ['start', 'registration', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6'];
    const currentIndex = screenOrder.indexOf(currentQuestion);
    if (currentIndex > 0) {
      setCurrentScreen(screenOrder[currentIndex - 1]);
    }
  };

  const calculateAndShowResults = () => {
    const score = calculateTotalScore(answers);
    const tierResult = getTierFromScore(score);

    setTotalScore(score);
    setTier(tierResult);
  };

  const handleCalculatingComplete = () => {
    setCurrentScreen('results');
  };

  const handleFinalSubmit = async (preferredTime: string) => {
    const q3Score = calculateQ3Score(answers.q3);

    try {
      await supabase.from('quiz_responses').insert([{
        name: registrationData.name,
        email: registrationData.email,
        business_name: registrationData.businessName,
        phone: registrationData.phone,
        preferred_time: preferredTime,
        total_score: totalScore,
        tier_result: tier,
        q1_answer: answers.q1,
        q2_answer: answers.q2,
        q3_answers: answers.q3,
        q3_score: q3Score,
        q4_answer: answers.q4,
        q5_answer: answers.q5,
        q6_answer: answers.q6,
      }]);
    } catch (error) {
      console.error('Error saving quiz response:', error);
      throw error;
    }
  };

  return (
    <div className="relative">
      {currentScreen === 'start' && (
        <StartScreen onStart={handleStart} />
      )}

      {currentScreen === 'registration' && (
        <RegistrationForm
          onSubmit={handleRegistrationSubmit}
          onBack={() => setCurrentScreen('start')}
        />
      )}

      {currentScreen === 'q1' && (
        <SingleChoiceQuestion
          questionNumber={1}
          totalQuestions={6}
          question={questions.q1.question}
          options={questions.q1.options}
          selectedValue={answers.q1 || null}
          onSelect={(points) => handleSingleChoiceAnswer('q1', points)}
          onNext={() => handleNext('q1')}
          onBack={() => handleBack('q1')}
        />
      )}

      {currentScreen === 'q2' && (
        <SingleChoiceQuestion
          questionNumber={2}
          totalQuestions={6}
          question={questions.q2.question}
          options={questions.q2.options}
          selectedValue={answers.q2 || null}
          onSelect={(points) => handleSingleChoiceAnswer('q2', points)}
          onNext={() => handleNext('q2')}
          onBack={() => handleBack('q2')}
        />
      )}

      {currentScreen === 'q3' && (
        <MultiSelectQuestion
          questionNumber={3}
          totalQuestions={6}
          question={questions.q3.question}
          options={questions.q3.options}
          selectedOptions={answers.q3}
          onToggle={handleMultiSelectToggle}
          onNext={() => handleNext('q3')}
          onBack={() => handleBack('q3')}
        />
      )}

      {currentScreen === 'q4' && (
        <SingleChoiceQuestion
          questionNumber={4}
          totalQuestions={6}
          question={questions.q4.question}
          options={questions.q4.options}
          selectedValue={answers.q4 || null}
          onSelect={(points) => handleSingleChoiceAnswer('q4', points)}
          onNext={() => handleNext('q4')}
          onBack={() => handleBack('q4')}
        />
      )}

      {currentScreen === 'q5' && (
        <SingleChoiceQuestion
          questionNumber={5}
          totalQuestions={6}
          question={questions.q5.question}
          options={questions.q5.options}
          selectedValue={answers.q5 || null}
          onSelect={(points) => handleSingleChoiceAnswer('q5', points)}
          onNext={() => handleNext('q5')}
          onBack={() => handleBack('q5')}
        />
      )}

      {currentScreen === 'q6' && (
        <SingleChoiceQuestion
          questionNumber={6}
          totalQuestions={6}
          question={questions.q6.question}
          options={questions.q6.options}
          selectedValue={answers.q6 || null}
          onSelect={(points) => handleSingleChoiceAnswer('q6', points)}
          onNext={() => handleNext('q6')}
          onBack={() => handleBack('q6')}
        />
      )}

      {currentScreen === 'calculating' && (
        <CalculatingScreen onComplete={handleCalculatingComplete} />
      )}

      {currentScreen === 'results' && (
        <Results
          tier={tier}
          score={totalScore}
          onSubmitWebinar={handleFinalSubmit}
        />
      )}
    </div>
  );
}
