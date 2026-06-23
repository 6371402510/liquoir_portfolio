import {
  Receipt,
  Package,
  BarChart3,
  Warehouse,
  FileText,
  Users,
  ShieldCheck,
  Plus,
  Zap,
  TrendingUp,
  FileBarChart,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import bevtrac from "../assets/bevtrac.jpeg";
import { Link } from "react-router-dom";

const AboutSection = ({ isPreview = false }) => {
  const features = [
    {
      icon: Receipt,
      title: 'Fast & Easy Billing System',
      desc: 'Generate bills in seconds with barcode scanning, thermal printer support, and multiple payment modes.',
    },
    {
      icon: Package,
      title: 'Real-Time Stock Management',
      desc: 'Track live stock levels across all locations with brand-wise filtering and low stock alerts.',
    },
    {
      icon: BarChart3,
      title: 'Sales & Profit Analytics Dashboard',
      desc: 'Visual dashboards showing daily, weekly, and monthly sales trends with profit breakdowns.',
    },
    {
      icon: Warehouse,
      title: 'Multiple Godown/Store Support',
      desc: 'Manage stock across multiple godowns and retail stores from a single centralized system.',
    },
    {
      icon: FileText,
      title: 'Excise & Compliance Reports',
      desc: 'Auto-generated excise stock registers, transfer registers, and daily stock reports for hassle-free compliance.',
    },
    {
      icon: Users,
      title: 'Customer & Supplier Management',
      desc: 'Maintain detailed customer and supplier databases with transaction history and credit tracking.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Login & Role-Based Access',
      desc: 'Protect your data with secure authentication and control who can access what with role-based permissions.',
    },
  ];

  const benefits = [
    'Cloud-Based Access Anywhere, Anytime',
    'Single Store & Multi-Store Management',
    ' Real-Time Inventory Tracking',
    'Purchase Management from OSBCL',
    'Barcode-Based Billing',
    'Accounting & Expense Management',
    'Employee Attendance & Salary Management',
    'Daily Excise Stock Reports',
    'Sales Analytics & Business Insights',
    'Secure Data Backup & Role-Based Access',
  ];

  const steps = [
    {
      icon: Plus,
      title: 'Add Products & Stock',
      desc: 'Quickly add your product catalog and stock quantities with barcode scanning.',
    },
    {
      icon: Zap,
      title: 'Generate Bills in Seconds',
      desc: 'Scan, bill, and print receipts instantly at the counter — even during peak hours.',
    },
    {
      icon: TrendingUp,
      title: 'Track Daily Sales Automatically',
      desc: 'Every sale updates your stock, cash book, and analytics in real-time.',
    },
    {
      icon: FileBarChart,
      title: 'Get Reports Instantly',
      desc: 'Access profit reports, excise registers, and stock summaries with one click.',
    },
  ];

  return (
    <section id="about" className="relative">
      {/* ──────────── About / Intro ──────────── */}
      <section className="bg-[#f2f2f2] py-12 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-1 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#ec2224] mb-4">
              About Us
            </p>
   <h2 className="text-4xl md:text-5xl font-medium text-green-600 leading-tight tracking-tight mb-6">
              
             Vichaar BevTrac

            </h2> 
            
              <h2 className="text-4xl md:text-5xl font-medium text-[#003257] leading-tight tracking-tight mb-6">
              Smart Inventory & Accounting for   Odisha IMFL Off Shops
            
            </h2>

            <p className="text-blue-700 leading-relaxed text-[20px] mb-8">
             <b> One Platform. Multiple Stores. Total Control.</b>
            </p>
         
            <p className="text-[#555555] leading-relaxed text-lg mb-8">
             Vichaar BevTrac is a cloud-based inventory, billing, accounting, and store management solution specially designed for IMFL Off Shops in Odisha. Whether you operate a single retail outlet or multiple licensed stores, BevTrac helps you manage your entire business from one dashboard.

            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Built specifically for retail liquor shops',
               
                'Cloud & desktop options available',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#ec2224] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-[#333333]">{item}</span>
                </li>
              ))}
            </ul>

 <Link
  to="/contact"
  className="
    bg-[#ec2224]
    text-white
    px-8
    py-3
    w-[210px]
    flex
    items-center
    gap-2
    hover:bg-[#c9191b]
    transition
  "
>
   Book Free Demo
  <ArrowRight size={18} />
</Link>
 

           
          </div>
          
        </div>
      </section>
      <section className="bg-blue-100 py-10 ">
        <div className="max-w-4xl h-[30px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1   className="text-black text-lg"><b>MISSION:</b></h1>
            <p className="text-black">To Digitize Odisha's Liquor Retail Industry.</p>
        </div>

         <div>
            <h1   className="text-black text-lg"><b>VISION:</b></h1>
            <p className="text-black">Become the Most Trusted IMFL Retail Software in Odisha</p>
        </div>
          
          
        </div>
      </section>


      {/* ──────────── Features ──────────── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            
            <h2 className="text-4xl md:text-5xl font-medium text-[#003257] leading-tight tracking-tight">
              Everything You Need to Run Your{' '}
              <span className="text-[#ec2224]">Shop Smoothly</span>
            </h2>
          </div>

          {/* Top Row — 4 cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {features.slice(0, 4).map((feature, index) => (
              <div
                key={index}
                className="group border border-gray-200 hover:border-[#ec2224] transition-colors duration-300 p-8"
              >
                <div className="w-14 h-14 bg-[#f2f2f2] group-hover:bg-[#ec2224] flex items-center justify-center mb-6 transition-colors duration-300">
                  <feature.icon
                    className="w-7 h-7 text-[#003257] group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-medium text-[#333333] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#666666] leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row — 3 cards centered */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.slice(4).map((feature, index) => (
              <div
                key={index}
                className="group border border-gray-200 hover:border-[#ec2224] transition-colors duration-300 p-8"
              >
                <div className="w-14 h-14 bg-[#f2f2f2] group-hover:bg-[#ec2224] flex items-center justify-center mb-6 transition-colors duration-300">
                  <feature.icon
                    className="w-7 h-7 text-[#003257] group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-medium text-[#333333] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#666666] leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── Benefits ──────────── */}
      <section className="bg-[#003257] py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            
            <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight tracking-tight mb-6">
              Why Choose{' '}
              <span className="text-green-600">Vichaar BevTrac</span>
            </h2>
            <p className="text-white/70 leading-relaxed text-lg mb-10">
              Save time, reduce manual errors, and improve business efficiency with
              automated reporting and smart inventory control designed specifically for
              retail liquor shops.
            </p>
            <ul className="space-y-5">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-[#ec2224] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-white text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative hidden lg:block">
            <img
              src={bevtrac}
              alt="Benefits"
              className="w-full shadow-2xl"
            />
            {/* Decorative corners */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#ec2224]"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#ec2224]"></div>
          </div>
        </div>
      </section>

      {/* ──────────── How It Works ──────────── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            
            <h2 className="text-4xl md:text-5xl font-medium text-[#003257] leading-tight tracking-tight">
              Get Started in <span className="text-[#ec2224]">4 Simple Steps</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 z-0"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative z-10 text-center group">
                {/* Step Number */}
                <div className="relative inline-flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-[#f2f2f2] group-hover:bg-[#ec2224] rounded-full flex items-center justify-center transition-colors duration-300">
                    <step.icon
                      className="w-7 h-7 text-[#003257] group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-[#ec2224] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-[#333333] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#666666] leading-relaxed text-sm max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── CTA ──────────── */}
      <section className="bg-[#0b1d2e] py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight tracking-tight mb-6">
            Ready to upgrade your {' '}
            <span className="text-[#ec2224]">liquor shop management?</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-white text-white px-8 py-3.5 font-medium hover:bg-white hover:text-[#003257] transition-all"
            >
              Contact Us
            </a>
          </div>
          
        </div>
      </section>
    </section>
  );
};

export default AboutSection;