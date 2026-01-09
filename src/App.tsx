import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { ServiceProcess } from './components/ServiceProcess';
import { CaseStudies } from './components/CaseStudies';
import { Reviews } from './components/Reviews';
import { Credentials } from './components/Credentials';
import { InteractiveDots } from './components/InteractiveDots';
import { Quiz } from './components/Quiz';
import { SEOPage } from './components/SEOPage';
import { Footer } from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [displayPage, setDisplayPage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionState, setTransitionState] = useState<'idle' | 'exit' | 'enter'>('idle');

  const handleNavigate = (page: string) => {
    if (page === currentPage) return;

    setIsTransitioning(true);
    setTransitionState('exit');

    setTimeout(() => {
      setDisplayPage(page);
      setCurrentPage(page);
      setTransitionState('enter');

      setTimeout(() => {
        setTransitionState('idle');
        setIsTransitioning(false);
      }, 250);
    }, 250);
  };

  const renderPage = () => {
    switch (displayPage) {
      case 'home':
        return <Home />;
      case 'think-first-programme':
        return (
          <div className="relative z-10">
            <Hero />
            <ProblemSolution />
            <ServiceProcess />
            <CaseStudies />
            <Reviews />
            <Credentials />
            <Quiz />
          </div>
        );
      case 'seo':
        return <SEOPage />;
      default:
        return <Home />;
    }
  };

  const getTransitionClasses = () => {
    if (transitionState === 'exit') {
      return 'translate-x-[-100%] opacity-0';
    } else if (transitionState === 'enter') {
      return 'translate-x-[100%] opacity-0';
    }
    return 'translate-x-0 opacity-100';
  };

  return (
    <div className="min-h-screen relative bg-white overflow-x-hidden">
      <InteractiveDots />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <div
        className={`transition-all duration-250 ease-in-out ${getTransitionClasses()}`}
        style={{ willChange: 'transform, opacity' }}
      >
        {renderPage()}
      </div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
