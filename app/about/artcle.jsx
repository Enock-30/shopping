export default function ArticleSection() {
  return (
    <section className="bg-white py-16 px-6 text-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-center">
          A Week on the Road with the Carry Case
        </h2>

        {/* Author & Date */}
        <p className="text-sm text-gray-500 text-center mb-8">
          By Enock A. | July 2025
        </p>

        {/* Paragraphs */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Some journeys aren't measured in miles but in moments—those early morning walks down brightly lit corridors,
            the quiet confidence of being prepared, and the tools you carry that make everything possible.
          </p>
            <img src="IMG_20250706_170214587.jpg" alt="my photo" />
          <p>
            <strong>📍 Day One: Ready for Anything</strong><br />
            The hallway was silent, but my head was loud with plans. Dressed in a simple black top and navy trousers, I didn’t need flash—just focus.
            My carry case, neatly packed with my laptop, planner, and development notes, felt like an extension of who I am: efficient, grounded, and forward-facing.
          </p>

          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
            “It’s not about having everything, it’s about having what matters.”
          </blockquote>

          <p>
            <strong>📱 Midweek Momentum</strong><br />
            Midway through the week, I found myself standing in front of a smart TV in a cozy space—scrolling through notifications, catching up on work,
            and mentally resetting. Dressed the same, yet with renewed energy, I realized how consistency in appearance builds identity.
          </p>

          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
            “I carry more than tech in my bag—I carry mindset, ambition, and resilience.”
          </blockquote>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4GEZ6Ywta5U0dIaSWq7iwXuBkv6Q_mEsuaQ&s" alt="tech company" />
          <p>
            <strong>🧠 Lessons from the Carry Case</strong><br />
            What surprised me most wasn't how much I got done, but how little I needed to get there. Every tool was intentional.
            Every moment in the hallway, every quiet moment scrolling through tasks, reminded me: when you’re prepared, the world opens up.
          </p>
        </div>

        {/* Final Thoughts */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Final Thoughts</h3>
          <p className="text-lg text-gray-700">
            Life as a developer or digital nomad isn’t just about being on the move. It’s about being <strong>ready</strong> wherever you land.
            And for me, that starts with how I carry myself—and what I carry with me.
          </p>
        </div>
      </div>
    </section>
  );
}
