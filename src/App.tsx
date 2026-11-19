import { useState } from 'react';
import { ParticlesBackground } from './components/ui/ParticlesBackground';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Certifications } from './components/sections/Certifications';
import { SoftSkills } from './components/sections/SoftSkills';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { ResumeModal } from './components/modals/ResumeModal';
import { Toast } from './components/ui/Toast';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-[#070709] text-slate-100 selection:bg-purple-500/30 selection:text-purple-200">
      {/* Background Neural Particles & Glowing Ambient Canvas */}
      <ParticlesBackground />

      {/* Sticky Navigation Bar */}
      <Navbar 
        onOpenResume={() => setIsResumeModalOpen(true)} 
        onShowToast={showToast} 
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero Landing Section */}
        <Hero 
          onOpenResume={() => setIsResumeModalOpen(true)} 
          onShowToast={showToast} 
        />

        {/* 2. About Me Section */}
        <About 
          onOpenResume={() => setIsResumeModalOpen(true)} 
        />

        {/* 3. Technical Skills Section */}
        <Skills />

        {/* 4. Internship Experience Section */}
        <Experience />

        {/* 5. Projects Section */}
        <Projects />

        {/* 6. Education Section */}
        <Education />

        {/* 7. Certifications Section */}
        <Certifications />

        {/* 8. Soft Skills & Languages Section */}
        <SoftSkills />

        {/* 9. Contact Section */}
        <Contact 
          onShowToast={showToast} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Toast Notification Container */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </div>
  );
}

export default App;
