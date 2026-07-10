export default function Footer() {
  return (
    <footer className="bg-bg text-white/60 py-6 mt-16 text-[13px]">
      <div className="container max-w-[1240px] mx-auto px-6">
        <p>© {new Date().getFullYear()} Habitect. Find. Book. Live.</p>
      </div>
    </footer>
  );
}