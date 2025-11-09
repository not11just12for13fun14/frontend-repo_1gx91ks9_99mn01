import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="join" className="relative bg-[#0b0b12] py-20">
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-900/40 via-fuchsia-900/20 to-blue-900/40 p-10 text-center backdrop-blur"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -inset-24 opacity-50" style={{
              background: 'radial-gradient(600px 300px at 10% 20%, rgba(139,92,246,0.25), transparent), radial-gradient(600px 300px at 90% 30%, rgba(59,130,246,0.25), transparent)'
            }} />
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-white">Ready to make more people like you?</h3>
          <p className="mt-3 text-white/70">Spin up a welcoming space in seconds. No code, no cringe, just pure connection.</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto_1fr] items-center">
            <input
              type="email"
              placeholder="your@email"
              className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white placeholder-white/50 outline-none focus:border-white/30"
            />
            <span className="hidden sm:block text-white/50">or</span>
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-gray-900 hover:opacity-90">
              Start free <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
