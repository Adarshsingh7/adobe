const BusinessOverview = () => {
  return (
    <div className="bg-blue-50 py-20 my-32">
      <div className="container flex mx-auto px-4">
        <div className="container mx-auto px-4" style={{ flex: "0 0 70%" }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Business Overview
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            When it comes to moving petroleum products around the world,
            Infinite-energy has multiple resources set up at one of the best
            supply getaways of the world to refine, supply, store petroleum
            products, and metal commodities. It has emerged as one of the most
            conducive players in the oil industry, having vision to become an
            esteemed organization with international presence.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            We provide simple yet effective solutions that meet our customer's
            demand with a different range of petroleum and petrochemical
            products with quality and service delivery systems that are
            responsive, reliable, and related to today's fast-moving business
            environment through our shipping and bunkering services.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We are a company that is trusted by and works with the parties
            engaged in the petroleum market. We are a company that has
            experienced a team of experts that thrives on operating within a
            fast-paced, high-energy environment to meet customer's needs quickly
            and efficiently, no matter what the challenge is.
          </p>
        </div>
        <div
          className="mt-8 bg-white shadow-md rounded-lg p-6"
          style={{ flex: "0 0 30%" }}
        >
          <div className="flex">
            <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 focus:outline-none">
              Our Mission
            </button>
            <button className="px-4 py-2 text-gray-500 hover:text-blue-600 focus:outline-none">
              Our Vision
            </button>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">
              Our Mission is truly aligned with our Vision. We are committed to
              providing our clients top-of-the-line customer services, at par
              with the best industry standards and practices. Backed by high
              moral and integrity values, we fulfill all our commitments without
              any compromises on the aspect of quality from the beginning of the
              project to the end.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessOverview;
