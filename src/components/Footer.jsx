export default function Footer() {
  return (
    <footer className="bg-[#0b0b12] pb-10 pt-8">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-sm">© {new Date().getFullYear()} VibeCircle. All rights reserved.</p>
        <div className="flex items-center gap-6 text-white/60 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
