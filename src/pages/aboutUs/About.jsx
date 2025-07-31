const About = () => {
  return (
    <>
      <div className="md:ml-64 p-6 bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <div
          className="relative h-64 bg-cover bg-center rounded-lg shadow-lg mb-12"
          // style="background-image: url('/path/to/hero-image.jpg')"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              About Us
            </h1>
          </div>
        </div>

        {/* Who We Are */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We’re a passionate team building intuitive products and experiences
            for real humans.
          </p>
        </div>

        {/* Our Vision */}

        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To create inclusive, innovative solutions that empower people and
            businesses worldwide. We envision a future where technology elevates
            everyday life and brings meaningful change to communities.
          </p>
        </div>

        {/* Team Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Card 1 --> */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <img
              src="/path/to/image3.jpg"
              alt="Team Member"
              className="h-48 w-full object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">Card One</h3>
            <p className="text-gray-600 mt-2">
              This is the first card with a short description.
            </p>
          </div>

          {/* <!-- Card 2 --> */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <img
              src="/path/to/image3.jpg"
              alt="Team Member"
              className="h-48 w-full object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">Card Two</h3>
            <p className="text-gray-600 mt-2">
              This is the second card with some info.
            </p>
          </div>

          {/* <!-- Card 3 --> */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <img
              src="/path/to/image3.jpg"
              alt="Team Member"
              className="h-48 w-full object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">Card Three</h3>
            <p className="text-gray-600 mt-2">
              This is the third card with more content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
