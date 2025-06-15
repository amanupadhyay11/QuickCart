'use client';

import { FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="p-8 max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-8 text-gray-600">
        Feel free to reach out through any of the platforms below.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center">

        <a
          href="https://www.linkedin.com/in/amanupadhyay09?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
        >
          <FaLinkedin size={28} />
          <span className="mt-2 text-sm">LinkedIn</span>
        </a>

        <a
          href="https://wa.me/+918795763790"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          <FaWhatsapp size={28} />
          <span className="mt-2 text-sm">WhatsApp</span>
        </a>

        <a
          href="https://www.instagram.com/upadhyay_aman._?igsh=OG1xeXZ2bmFhdXYz&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
        >
          <FaInstagram size={28} />
          <span className="mt-2 text-sm">Instagram</span>
        </a>

        <a
          href=" https://www.facebook.com/profile.php?id=100024205068761&mibextid=wwXIfr&mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <FaFacebook size={28} />
          <span className="mt-2 text-sm">Facebook</span>
        </a>

        <a
          href="tel:+918795763790"
          className="flex flex-col items-center justify-center p-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
        >
          <FaPhone size={28} />
          <span className="mt-2 text-sm">+91 8795763790</span>
        </a>

        <a
          href="mailto:upadhyayaman448@gmail.com"
          className="flex flex-col items-center justify-center p-4 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          <FaEnvelope size={28} />
          <span className="mt-2 text-sm">Email Us</span>
        </a>

      </div>
    </div>
  );
}
