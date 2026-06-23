import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import {
  Heart,
  Code2,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
     
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
   
    { name: 'Contact', path: '/contact' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Video', path: '/video' },
    { name: 'PartnerProgram', path: '/partnerProgram' },
  ];

  const socialLinks = [];

  return (
    <footer className="relative border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-3 text-white font-bold text-xl group"
            >
              <div className="flex items-center">
              <img
                src={logo}
                alt="Vichaar BevTrac"
                className="h-20 w-20 pt-[8px] object-contain"
              />
            </div>
            
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Vichaar BevTrac
              </span>
            </Link>

            <p className="text-gray-400 max-w-md mb-6">
             Vichaar BevTrac helps businesses grow through smart retail solutions. 
             Join our Partner Program and earn by connecting retailers with 
             reliable billing, inventory, and management software designed for modern liquor shops.
            </p>

            {/* Social Links (empty for now) */}
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="p-2 bg-white/5 border border-white/10 rounded-lg"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (FIXED) */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">

              <li>
                <p className="text-sm"> Phone: 9090976411 , 9090972227</p>
              </li>
              <li>
                <p className="text-sm">Email: vichaarlab@gmail.com</p>
              </li>

              <li>
                <p className="text-sm">Adress: Nandan Vihar, Patia,
Bhubaneswar – 751024</p>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Vichaar lab
          </p>

          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Vichaarlab. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;