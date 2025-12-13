import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaFacebookF />, href: "#", platform: "Facebook" },
    { icon: <FaTwitter />, href: "#", platform: "Twitter" },
    { icon: <FaGoogle />, href: "#", platform: "Google" },
    { icon: <FaInstagram />, href: "#", platform: "Instagram" },
    { icon: <FaLinkedin />, href: "#", platform: "Linkedin" },
    { icon: <FaGithub />, href: "#", platform: "Github" },
  ];

  const pages = [
    { label: "Home", href: "/" },
    { label: "Categories", href: "/categories" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const useful = ["Your Account", "Our Team", "Testimonial", "Help"];

  return (
    <footer className="bg-[#2f1944]  text-white ">
      {/* Top Social Bar */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-4 purple-gradient">
        <p className="text-sm md:text-base">
          Get connected with us on social networks:
        </p>

        <div className="flex gap-4 text-xl">
          {socialLinks.map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="hover:text-white transition-colors"
              aria-label={`Visit our ${s.platform} page`}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </section>

      {/* Links Section */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand Section */}
          <div>
            <h6 className="uppercase font-bold text-lg mb-2">Junto</h6>
            <div className="w-16 h-[2px] bg-indigo-500 mb-4"></div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Join us in making a difference. Whether through donations,
              volunteering, or spreading awareness, your contribution can help
              transform lives and bring hope to those who need it most.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h6 className="uppercase font-bold text-lg mb-2">Pages</h6>
            <div className="w-16 h-[2px] bg-indigo-500 mb-4"></div>

            {pages.map((page, i) => (
              <p key={i} className="mb-2">
                <Link
                  to={page.href}
                  className="text-gray-300 hover:text-white transition"
                >
                  {page.label}
                </Link>
              </p>
            ))}
          </div>

          {/* Useful Links */}
          <div>
            <h6 className="uppercase font-bold text-lg mb-2">Useful Links</h6>
            <div className="w-16 h-[2px] bg-indigo-500 mb-4"></div>

            {useful.map((u, i) => (
              <p key={i} className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white transition" aria-label={u}>
                  {u}
                </a>
              </p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h6 className="uppercase font-bold text-lg mb-2">Contact</h6>
            <div className="w-16 h-[2px] bg-indigo-500 mb-4"></div>

            <p className="text-gray-300 mb-2">📍 Egypt, Menofia, US</p>
            <p className="text-gray-300 mb-2">📧 junto@example.com</p>
            <p className="text-gray-300 mb-2">📞 +01 234 567 88</p>
            <p className="text-gray-300">📠 +01 234 567 89</p>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center py-4 bg-black/20 text-sm">
        © 2025 Copyright:
        <a className="text-white ml-1 hover:underline" href="#" aria-label="Visit junto.com">
          junto.com
        </a>
      </div>
    </footer>
  );
}
