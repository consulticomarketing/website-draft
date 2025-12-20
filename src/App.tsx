import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { ServiceProcess } from './components/ServiceProcess';
import { CaseStudies } from './components/CaseStudies';
import { Reviews } from './components/Reviews';
import { Credentials } from './components/Credentials';
import { InteractiveDots } from './components/InteractiveDots';
import { Quiz } from './components/Quiz';

function App() {
  return (
    <div className="min-h-screen relative bg-white">
      <InteractiveDots />
      <div className="relative z-10">
        <Hero />
        <ProblemSolution />
        <ServiceProcess />
        <CaseStudies />
        <Reviews />
        <Credentials />
        <Quiz />
      </div>
    </div>
  );
}

export default App;
