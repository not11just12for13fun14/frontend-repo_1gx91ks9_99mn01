import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl"
        >
          <a href="#" className="inline-flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-violet-500 to-blue-500 shadow-lg">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-white">VibeCircle</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#join" className="hover:text-white">Join</a>
          </div>
          <a href="#join" className="inline-flex items-center rounded-full bg-white px-4 py-2 text-gray-900 hover:opacity-90">
            Get started
          </a>
        </motion.nav>
      </div>
    </header>
  );
}
