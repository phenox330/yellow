import { useState } from 'react';
import { PreRegisterForm } from './components/PreRegisterForm';
import { Features } from './components/Features';
import { RegisterModal } from './components/RegisterModal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe2 } from 'lucide-react';
import { Toaster } from 'sonner';

function App() {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const openRegisterModal = () => setRegisterModalOpen(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      <Toaster />
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Globe2 className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold">Yellow</span>
        </div>
        <Button variant="ghost" onClick={openRegisterModal}>Contact Us</Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Speak Buisness English Confidently in Every Virtual Meeting 
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Access real-time transcription, intelligent suggestions during your meetings.
          </p>
          
          {/* Pre-registration form */}
          <div className="flex justify-center mb-12">
            <PreRegisterForm />
          </div>

          {/* Early bird offer */}
          <div className="inline-block rounded-full bg-white/10 backdrop-blur-lg px-6 py-2 text-sm text-gray-300">
            <span className="text-emerald-400 font-semibold">Limited Time Offer:</span>
            {' '}Get lifetime access for 50$ only
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Transform Your English Speaking Experience
        </h2>
        <Features />
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your English Skills?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our early access list today and get exclusive lifetime access when we launch.
          </p>
          <Button size="lg" className="group" onClick={openRegisterModal}>
            Get Started Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400 border-t border-white/10">
        <p>© 2024 Yellow. All rights reserved.</p>
      </footer>

      <RegisterModal 
        open={registerModalOpen} 
        onOpenChange={setRegisterModalOpen}
      />
    </div>
  );
}

export default App;