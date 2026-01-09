import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { ServiceProcess } from './components/ServiceProcess';
import { CaseStudies } from './components/CaseStudies';
import { Reviews } from './components/Reviews';
import { Credentials } from './components/Credentials';
import { InteractiveDots } from './components/InteractiveDots';
import { Quiz } from './components/Quiz';
import { SEOPage } from './components/SEOPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'seo':
        return <SEOPage />;
      case 'home':
      default:
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
    }
  };

  return (
    <div className="min-h-screen relative bg-white">
      <InteractiveDots />
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
