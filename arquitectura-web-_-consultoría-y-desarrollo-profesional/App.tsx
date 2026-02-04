
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Standards from './components/Standards';
import Methodology from './components/Methodology';
import TrustContact from './components/TrustContact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-slate-200 selection:text-slate-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Philosophy />
        <Services />
        <Standards />
        <Methodology />
        <TrustContact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default App;
