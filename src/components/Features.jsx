import { motion } from 'framer-motion';
import { Users, Share2, HeartHandshake, Zap } from 'lucide-react';

const items = [
  {
    icon: Users,
    title: 'Attract your people',
    desc: 'Smart profiles and vibe-matching bring the right people into your circle.'
  },
  {
    icon: Share2,
    title: 'Content that spreads',
    desc: 'Launch shareable drops, prompts, and moments that amplify your presence.'
  },
  {
    icon: HeartHandshake,
    title: 'Safe & welcoming',
    desc: 'Modern tools for moderation, culture-building, and inclusive spaces.'
  },
  {
    icon: Zap,
    title: 'Zero friction',
    desc: 'Ridiculously simple onboarding and daily rituals that feel fun.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0b0b12] py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-48 w-[60%] rounded-full blur-3xl opacity-30 bg-gradient-to-r from-violet-600/30 via-fuchsia-500/20 to-blue-600/30" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Built for internet-native communities</h2>
          <p className="mt-3 text-white/70">Everything you need to welcome the right people and let the vibe grow naturally.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-violet-500 to-blue-500 shadow-lg">
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
