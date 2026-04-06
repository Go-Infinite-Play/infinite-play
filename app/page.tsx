export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-white font-heading tracking-tight mb-4">
          Infinite Play
        </h1>
        <p className="text-lg text-[#A3A3A3] mb-8">
          Something new is coming.
        </p>
        <a
          href="mailto:jeremy@infiniteplay.ai"
          className="text-[#FB5B3D] hover:text-white transition-colors text-sm font-medium"
        >
          jeremy@infiniteplay.ai
        </a>
      </div>
    </div>
  );
}
