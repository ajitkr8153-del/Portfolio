import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';

export default function App() {
  const [toast, setToast] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const showToast = ({ type = 'info', message }) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const handleCopyEmail = (email) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email)
        .then(() => {
          showToast({
            type: 'success',
            message: `Copied ${email} to clipboard!`
          });
        })
        .catch(() => {
          showToast({
            type: 'info',
            message: `Email: ${email}`
          });
        });
    } else {
      showToast({
        type: 'info',
        message: `Email: ${email}`
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-brand-500 selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          onCopyEmail={handleCopyEmail}
        />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact 
          onShowToast={showToast}
          onCopyEmail={handleCopyEmail}
        />
      </main>

      {/* Bottom Footer */}
      <Footer onCopyEmail={handleCopyEmail} />

      {/* Interactive Resume View/Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onCopyEmail={handleCopyEmail}
      />

      {/* Toast Notification Container */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
