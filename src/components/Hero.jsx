import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b12]">
      {/* Grainy gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-24 opacity-60" style={{
          background: 'radial-gradient(1200px 600px at 20% 10%, rgba(139,92,246,0.25), transparent), radial-gradient(1000px 500px at 80% 20%, rgba(59,130,246,0.25), transparent), radial-gradient(800px 400px at 50% 90%, rgba(99,102,241,0.25), transparent)'
        }} />
        <div className="absolute inset-0 mix-blend-soft-light" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 160 160\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.12\'/%3E%3C/svg%3E")'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10 md:pt-28 md:pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              <Sparkles className="h-4 w-4 text-violet-400" />
              <span className="text-xs tracking-wide text-white/80">Gen Z community engine</span>
            </div>

            <h1 className="mt-6 font-bold leading-tight text-4xl md:text-6xl text-white">
              Find your people.
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                Build a vibe that spreads.
              </span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/70 max-w-xl mx-auto md:mx-0">
              We make it effortless to attract more people like you into a thriving online community. Aesthetically bold, ridiculously simple, built for the internet-native generation.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
              <a href="#join" className="group inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-6 py-3 font-medium shadow-[0_0_0_0_rgba(255,255,255,0.4)] transition-all hover:shadow-[0_0_50px_10px_rgba(168,85,247,0.15)]">
                <Rocket className="h-4 w-4" />
                Start your circle
              </a>
              <a href="#how" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white/90 backdrop-blur hover:bg-white/10">
                See how it works
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center md:justify-start gap-4 text-white/60">
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-7 w-7 rounded-full ring-2 ring-[#0b0b12] bg-gradient-to-br from-violet-500 to-blue-500" />
                ))}
              </div>
              <p className="text-sm">Trusted by 10k+ creators & community leaders</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-indigo-950/60 to-fuchsia-950/30"
          >
            {/* Spline 3D scene */}
            <Spline
              scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />

            {/* Subtle overlay gradient for depth - non-blocking */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b12] via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
