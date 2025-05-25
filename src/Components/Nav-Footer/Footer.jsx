import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const socialIcons = [
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaLinkedinIn,
    FaInstagram,
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0a] to-black">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute top-6 right-6 z-50 flex flex-col items-center text-xs text-white/80 hover:text-white transition-colors"
      >
        <FaArrowUp className="text-xl mb-1" />
        <span>Back to Top</span>
      </button>

      <div className="max-w-7xl mx-auto px-4 py-16 text-white text-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          <div>
            <h3 className="font-bold mb-4 uppercase">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-3">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase">Popular Games</h3>
            <ul className="space-y-1 text-gray-300">
              <li>
                <a
                  href="https://www.callofduty.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Call of Duty
                </a>
              </li>
              <li>
                <a
                  href="https://www.tonyhawkthegame.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Tony Hawk Pro Skater
                </a>
              </li>
              <li>
                <a
                  href="https://www.crashbandicoot.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Crash Bandicoot
                </a>
              </li>
              <li>
                <a
                  href="https://www.spyrothedragon.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Spyro
                </a>
              </li>
              <li>
                <a
                  href="https://www.sekirothegame.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Sekiro
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase">Company</h3>
            <ul className="space-y-1 text-gray-300">
              <li>
                <a
                  href="https://press.activision.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="https://research.activision.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="https://www.activisionblizzard.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Activision Blizzard
                </a>
              </li>
              <li>
                <a
                  href="https://support.activision.com/contact_us"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase">Legal</h3>
            <ul className="space-y-1 text-gray-300">
              <li>
                <a
                  href="https://www.activision.com/legal/terms-of-use"
                  className="hover:text-white transition-colors"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="https://www.activision.com/legal/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.activision.com/legal/cookie-policy"
                  className="hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <button className="hover:text-white transition-colors underline">
                  Cookie Settings
                </button>
              </li>
              <li>
                <a
                  href="https://www.activision.com/legal/online-safety-guide"
                  className="hover:text-white transition-colors"
                >
                  Online Safety
                </a>
              </li>
              <li>
                <a
                  href="https://www.activision.com/legal/applicant-privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Applicant Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://support.activision.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Your Privacy Choices
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <img src="esrb-e-m.jpg" alt="ESRB Rating" className="w-20 h-auto" />
          <img src="ESRB_updated.jpg" alt="ESRB Cert" className="w-10 h-auto" />
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <img src="activision.png" alt="Activision" className="w-48 h-auto" />
          <p className="text-gray-400 text-xs text-center">
            Copyright 2025 Activision Publishing, Inc.
          </p>
        </div>
      </div>

      <div className="mt-3">
        <img
          src="rainbow-lines.svg"
          className="w-full h-auto object-cover"
        />
      </div>
    </footer>
  );
}
