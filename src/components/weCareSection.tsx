export function WeCareSection() {
  return (
    <section className="py-24 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center space-y-8">
      {/* WE CARE Text */}
      <div className="relative">
        <div className="grid">
          {/* W */}
          <img
            src="public/weCare.png"
            alt="wecare"
            className="w-full max-w-[800px] mx-auto"
          />
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
