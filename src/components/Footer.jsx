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

            <p className="text-gray-400 text-[20px] max-w-md space-y-8  mb-6">
            Vichaar BevTrac helps businesses grow through smart retail solutions.
Join our Partner Program and earn by connecting retailers with reliable billing, inventory, and management software designed for modern liquor shops.
Empower your network with digital transformation and unlock consistent recurring income opportunities.
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
          {/* Contact Info (FIXED + MAP) */}
<div>
  <h3 className="text-white font-semibold mb-4">Contact</h3>

  <ul className="space-y-3 text-gray-400">
    <li>
      <p className="text-sm">Phone: 9090976411 , 9090972227</p>
    </li>
    <li>
      <p className="text-sm">Email: vichaarlab@gmail.com</p>
    </li>
    <li>
      <p className="text-sm">
        Address: Nandan Vihar, Patia, Bhubaneswar – 751024
      </p>
    </li>
  </ul>

  {/* MAP */}
  <div className="mt-4 rounded-lg overflow-hidden border border-white/10 shadow-lg">
    <iframe
      title="Vichaar BevTrac Location"
     src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3740.5225068549953!2d85.82870427523855!3d20.361335381126153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1782212414102!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
      width="100%"
      height="180"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    
  </div>
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