import React from "react";

const ContactUs = () => {
  return (
    <div className="py-8 px-4 md:px-12 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:flex">
        {/* Left Side - Image */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src="/images/contact-us.jpg"
            alt="Contact"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-6 md:p-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you. Please fill out the form below to get in
            touch with us.
          </p>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full mt-2 px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full mt-2 px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your Message"
                className="w-full mt-2 px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
<div className=" flex justify-center items-center py-4">
  <div className="w-full max-w-lg md:max-w-4xl bg-white shadow-lg rounded-lg p-6 md:p-12">
    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
      Contact Us
    </h2>
    <p className="text-center text-gray-600 mb-6">
      We'd love to hear from you. Please fill out the form below to get in touch
      with us.
    </p>

    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-gray-700 font-semibold">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          className="w-full mt-2 px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700 font-semibold">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          className="w-full mt-2 px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-700 font-semibold">
          Your Message
        </label>
        <textarea
          id="message"
          placeholder="Your Message"
          rows="4"
          className="w-full mt-2 px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</div>;
