export default function ServicesPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="py-16 text-center bg-white">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          We build full-stack web applications with modern technologies that are fast, scalable, and user-friendly.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card */}
            {[
              {
                title: 'Frontend Development',
                desc: 'We build modern, responsive, and accessible UIs.',
                skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js'],
              },
              {
                title: 'Backend Development',
                desc: 'Scalable and secure server-side logic with RESTful APIs.',
                skills: ['Node.js', 'Express.js', 'MongoDB'],
              },
              {
                title: 'Full Stack Projects',
                desc: 'End-to-end web apps with smooth frontend-backend integration.',
                skills: ['React', 'Node.js', 'MongoDB', 'Next.js'],
              },
              {
                title: 'API Development',
                desc: 'Robust APIs for frontend consumption and integration.',
                skills: ['Express.js', 'REST API', 'Postman'],
              },
              {
                title: 'Testing & QA',
                desc: 'Automated and manual testing to ensure app reliability.',
                skills: ['Jest', 'Cypress', 'Postman'],
              },
              {
                title: 'Deployment & Optimization',
                desc: 'We handle build optimization and deployment processes.',
                skills: ['Vercel', 'Netlify', 'CI/CD', 'GitHub'],
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="p-3 flex align-center justify-between bg-blue-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-2">Let's Build Something Great</h2>
        <p className="mb-3">Need a custom project or want to collaborate?</p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-3 py-2 rounded-lg hover:bg-gray-100"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
