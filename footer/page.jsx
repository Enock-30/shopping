// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaWhatsapp,
// } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300 py-2 px-2 ">
      <div className="  flex   ">
        {/* Contact Info */}
        <div className="flex align-center justify-between flex-1 ">
        <div >
          <h3 className="text-lg font-semibold mb-2 text-white">Contact</h3>
          <p>Email<a href="mailto:support@example.com" className="hover:underline">support@example.com</a></p>
          <p>Phone<a href="tel:+256787849632" className="hover:underline">+256787849632</a></p>
        </div>

        {/* Social Media */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://facebook.com" target="_blank" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://wa.me/1234567890" target="_blank" className="hover:text-green-400"><FaWhatsapp /></a>
            <a href="https://x.com" target="_blank" className="hover:text-gray-400"><FaTwitter /></a>
          </div>
        </div> */}

        {/* Legal Info */}
        
      <div className="text-center text-sm text-gray-500 mt-10">
        Built with 💻 by Enock Dev
      </div>
        <div  className="">
          <h3 className="text-lg font-semibold mb-2 text-white">Info</h3>
          <p>© {currentYear} Eagle1 developers. All rights reserved.</p>
          <p>Last Updated {currentYear}</p>
        </div>
      </div>
  </div>
      
    </footer>
  );
}
