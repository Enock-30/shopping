import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF} from '@fortawesome/free-solid-svg-icons'
// import { MdEmail } from 'react-icons/md';

export default function SupportPage() {
  return (
    <div className="bg-gray-50  text-gray-800">
      {/* Hero Section */}
      <section className="py-4 bg-white text-center">
        <h1 className="text-4xl font-bold mb-2">Support & Contact</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Need help or have questions? We’re here for you 24/7.
        </p>
      </section>

      {/* Contact Options */}
      <section className="py-3 px-3">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Email */}
          <div className="flex items-center gap-4 bg-white p-3 rounded-xl shadow">
            {/* <MdEmail className="text-3xl text-blue-600" /> */}
            <div>
              <h3 className="text-lg font-semibold">Email Support</h3>
              <p className="text-gray-600">support@example.com</p>
            </div>
          </div>

          {/* Facebook */}
          <div className="flex items-center gap-4 bg-white p-3 rounded-xl shadow">
            {/* <FaFacebookF className="text-3xl text-blue-700" /> */}
            <div>
              <h3 className="text-lg font-semibold">Facebook</h3>
              <a
                href="https://facebook.com/yourpage"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                facebook.com/yourpage
              </a>
            </div>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-4 bg-white p-3 rounded-xl shadow">
            {/* <FaInstagram className="text-3xl text-pink-600" /> */}
            <div>
              <h3 className="text-lg font-semibold">Instagram</h3>
              <a
                href="https://instagram.com/yourprofile"
                className="text-pink-600 hover:underline"
                target="_blank"
              >
                instagram.com/yourprofile
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow">
            {/* <FaWhatsapp className="text-3xl text-green-500" /> */}
            <div>
              <h3 className="text-lg font-semibold">WhatsApp</h3>
              <a
                href="https://wa.me/+256787849632"
                className="text-green-600 hover:underline"
                target="_blank"
              >
                Chat with us on WhatsApp
              </a>
            </div>
          </div>

          {/* TikTok */}
          <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow">
            {/* <FaTiktok className="text-3xl text-black" /> */}
            <div>
              <h3 className="text-lg font-semibold">TikTok</h3>
              <a
                href="https://tiktok.com/@yourhandle"
                className="text-black hover:underline"
                target="_blank"
              >
                @yourhandle
              </a>
            </div>
          </div>

          {/* X (Twitter) */}
          <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow">
            {/* <FaTwitter className="text-3xl text-black" /> */}
            <div>
              <h3 className="text-lg font-semibold">X (Twitter)</h3>
              <a
                href="https://x.com/yourhandle"
                className="text-black hover:underline"
                target="_blank"
              >
                x.com/yourhandle
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className=" bg-blue-600 flex align-center justify-between p-3 text-white text-center">
        <h2 className="text-2xl font-bold mb-2">Still Need Help?</h2>
        <p className="mb-3">Reach out and our support team will respond shortly.</p>
        <a
          href="mailto:support@example.com"
          className="inline-block bg-white text-blue-600 font-semibold px-2 py-3 rounded-lg hover:bg-gray-100"
        >
          Email Us
        </a>
      </section>
    </div>
  );
}
