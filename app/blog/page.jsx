'use client'
const BlogPage = ()  =>{
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      summary:
        'Learn how useState, useEffect, and other hooks simplify functional components in React.',
      author: 'Enock A.',
      date: 'July 5, 2025',
      image: 'IMG-20250503-WA0002.jpg',
      link: '/blog/react-hooks',
    },
    {
      id: 2,
      title: 'Styling with Tailwind CSS',
      summary:
        'A beginner-friendly guide to building beautiful UI with utility-first Tailwind classes.',
      author: 'Enock A.',
      date: 'July 1, 2025',
      image: 'IMG_20250706_170214587.jpg',
      link: '/blog/tailwind-styling',
    },
    {
      id: 3,
      title: 'Build a REST API with Node.js & Express',
      summary:
        'Learn to set up a RESTful API using Express and connect it to MongoDB.',
      author: 'Enock A.',
      date: 'June 20, 2025',
      image: 'fa6546731061c9fc0f4cac80026db4ac.jpg',
      link: '/blog/express-api',
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-white text-center">
        <h1 className="text-4xl font-bold mb-4">Blog & Insights</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Tips, tutorials, and updates on web development, design, and more.
        </p>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white  overflow-hidden shadow hover:shadow-md transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-150 object-cover rounded"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.summary}</p>
                <div className="text-sm text-gray-500 mb-4">
                  By {post.author} • {post.date}
                </div>
                <a
                  href={`/blog/${post.id}`}
                  className="inline-block text-blue-600 hover:underline font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BlogPage