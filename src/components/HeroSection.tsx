export function HeroSection() {
  return (
    <div className="py-20 sm:py-24 lg:py-32 animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 flex items-center justify-center gap-x-6">
            <button
                disabled
                className="rounded-full bg-primary/20 px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition-all duration-200 flex items-center gap-2 cursor-default pointer-events-none"
                >
                Professional File Tools
                </button>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Transform Your Documents with Ease
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Powerful tools for PDF conversion, splitting, merging, and more. Plus, comprehensive exam resources all in one place.
            </p>
        </div>
      </div>
    </div>
  );
}