

import ArticleSection from "./artcle";
export default function AboutUsPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">About Our Company</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          We are dedicated to delivering exceptional value and quality to our clients through innovation, teamwork, and excellence.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            To empower businesses through cutting-edge solutions, prioritizing sustainability, collaboration, and customer success.
          </p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 text-lg mb-4">
              With years of industry experience, we bring reliability, expertise, and innovation to every project.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Customer-Centered Approach</li>
              <li>Expert Team Members</li>
              <li>Innovative & Scalable Solutions</li>
              <li>Transparent Communication</li>
            </ul>
          </div>
          <img
            src="https://www.nps.gov/common/uploads/cropped_image/primary/7357F452-9461-A974-DF84E7F4C6A616BC.jpg?width=1600&quality=90&mode=crop"
            alt="Company Vision"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Articles / Feature Sections */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What We Value</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">We believe in doing what’s right, not what’s easy.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">We continuously challenge ourselves to push boundaries.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">We support local and global communities through our work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Enock EAGLE 1', role: 'CEO', img: 'IMG_20250706_170214587.jpg' },
              { name: 'ANGEL K', role: 'CTO', img: '/IMG-20260817-WA0023.jpg' },
              { name: 'Lily Adams', role: 'Product Manager', img: 'IMG-20250503-WA0002.jpg' },
            ].map((member, i) => (
              <div key={i} className="bg-gray-100 p-6 rounded-xl shadow text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-28 mx-auto block position-center m-auto rounded-full object-cover mb-4"
                /> 
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
            <ArticleSection/>
      {/* Contact Call To Action */}
      <section className="p-4 flex align-center justify-between bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-2">Ready to work with us?</h2>
        <p className="mt-2">Get in touch to discuss your next big idea.</p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-500 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
