export function WeCareSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* WE CARE Text */}
          <div className="relative">
            <div className="grid grid-cols-6 gap-2">
              {/* W */}
              <div className="relative aspect-square bg-red-100/80">
                <span className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-red-900/90">
                  W
                </span>
              </div>
              {/* E */}
              <div className="relative aspect-square bg-green-100/80">
                <span className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-green-900/90">
                  E
                </span>
              </div>
              {/* C */}
              <div className="relative aspect-square bg-orange-100/80">
                <span className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-orange-900/90">
                  C
                </span>
              </div>
              {/* A */}
              <div className="relative aspect-square bg-yellow-100/80">
                <span className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-yellow-900/90">
                  A
                </span>
              </div>
              {/* R */}
              <div className="relative aspect-square bg-orange-100/80">
                <span className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-orange-900/90">
                  R
                </span>
              </div>
              {/* E */}
              <div className="relative aspect-square bg-yellow-100/80">
                <span className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-yellow-900/90">
                  E
                </span>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We believe in the power of energy to help transform lives, enhance
            communities, and advance human progress.
          </p>
        </div>
      </div>
    </section>
  );
}
