import { useState } from 'react';

const features = [
  {
    id: 'sales-billing',
    title: 'Sales & Billing',
    description: 'Streamline your checkout process with fast, reliable billing tools designed for high-traffic retail environments.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      { name: 'Fast POS Billing', desc: 'Lightning-fast point-of-sale billing that handles peak hour rush without slowdowns.' },
      { name: 'Thermal Printer Support', desc: 'Seamless integration with all major thermal printers for instant receipt generation.' },
      { name: 'Barcode Billing', desc: 'Scan and bill products instantly using barcode scanners to minimize manual entry errors.' },
      { name: 'Multiple Payment Modes', desc: 'Accept cash, UPI, cards, wallets, and split payments with automatic reconciliation.' },
    ],
  },
  {
    id: 'inventory',
    title: 'Inventory Management',
    description: 'Keep real-time control over your stock with intelligent tracking and automated alerts.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    items: [
      { name: 'Live Stock', desc: 'View real-time stock levels across all shops from a single screen.' },
      { name: 'Brand-wise Stock', desc: 'Organize and filter inventory by brand for quick lookups and reporting.' },
      { name: 'Low Stock Alerts', desc: 'Get automatic notifications before items run out to avoid lost sales.' },
    ],
  },
  {
    id: 'excise',
    title: 'Excise Management',
    description: 'Stay compliant with excise regulations using automated registers and daily reporting.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    items: [
      { name: 'Excise Stock Register', desc: 'Maintain a detailed excise-compliant stock register for audit readiness.' },
      { name: 'Transfer Register', desc: 'Track all inter-shop and warehouse transfers with full excise documentation.' },
      { name: 'Daily Stock Report', desc: 'Auto-generated daily stock reports that meet excise department requirements.' },
    ],
  },
  {
    id: 'financial',
    title: 'Financial Management',
    description: 'Gain complete visibility into your finances with automated bookkeeping and profit analysis.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [
      { name: 'Cash Book', desc: 'Track every cash transaction with automatic daily cash book generation.' },
      { name: 'Bank Book', desc: 'Reconcile bank transactions effortlessly with digital bank book management.' },
      { name: 'Daily Expenses', desc: 'Log and categorize daily operational expenses for accurate cost tracking.' },
      { name: 'Profit Analysis', desc: 'Get clear profit margins with product-wise, day-wise, and monthly analysis.' },
    ],
  },
  {
    id: 'hrms',
    title: 'HRMS',
    description: 'Manage your workforce efficiently with integrated attendance and payroll tools.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    items: [
      { name: 'Attendance', desc: 'Biometric and manual attendance tracking with shift management.' },
      { name: 'Salary', desc: 'Automated salary calculation with deductions, bonuses, and overtime.' },
      { name: 'Salary Slip', desc: 'Generate and distribute professional salary slips with one click.' },
    ],
  },
  {
    id: 'multi-shop',
    title: 'Multi-Shop Management',
    description: 'Manage all your outlets from one place with centralized control and shop-level insights.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    items: [
      { name: 'Centralized Dashboard', desc: 'Monitor all shops from a single dashboard with live sales and stock data.' },
      { name: 'Shop-wise Reports', desc: 'Generate individual and comparative reports for each shop location.' },
    ],
  },
];

const Features = () => {
  const [activeTab, setActiveTab] = useState('sales-billing');
  const activeFeature = features.find((f) => f.id === activeTab);

  const downloadBrochures = () => {
  const files = [
    "/brochure1.pdf",
    "/brochure2.pdf",
    "/brochure3.pdf",
    
  ];

  files.forEach((file) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
};

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#003257] min-h-[60vh] flex items-center pt-20">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/features-hero-pos/1920/1080.jpg"
            alt="Features"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003257] via-[#003257]/80 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 w-full">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#ec2224] mb-4">Features</p>
            <h1 className="text-5xl md:text-7xl font-medium text-white leading-[1.1] tracking-tight mb-6">
              Everything You Need to <span className="text-[#ec2224]">Run</span> Your Business
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              A complete suite of tools designed for retail shops — from fast billing and inventory tracking to excise compliance and multi-shop management.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-[#ec2224] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { num: '6', label: 'Core Modules' },
            { num: '20+', label: 'Features' },
            { num: '100%', label: 'Compliant' },
            { num: '24/7', label: 'Support' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-medium text-white">{stat.num}</p>
              <p className="text-xs uppercase tracking-widest text-white/80 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tabbed Feature Section */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-16 border-b border-gray-200 pb-px">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === feature.id
                    ? 'border-[#ec2224] text-[#ec2224]'
                    : 'border-transparent text-[#666666] hover:text-[#003257]'
                }`}
              >
                <span className={`transition-colors ${activeTab === feature.id ? 'text-[#ec2224]' : 'text-[#999999]'}`}>
                  {feature.icon}
                </span>
                {feature.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Info */}
            <div>
              <div className="w-16 h-16 bg-[#f2f2f2] flex items-center justify-center text-[#003257] mb-8">
                {activeFeature.icon}
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-[#003257] leading-tight tracking-tight mb-6">
                {activeFeature.title}
              </h2>
              <p className="text-[#555555] leading-relaxed text-lg mb-10">
                {activeFeature.description}
              </p>

              <div className="space-y-6">
                {activeFeature.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#ec2224] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="text-lg font-medium text-[#333333] mb-1">{item.name}</h4>
                      <p className="text-[#666666] leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual Card */}
            <div className="sticky top-32">
              <div className="bg-[#003257] rounded-sm p-10 relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#ec2224]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#ec2224] mb-6">{activeFeature.title}</p>
                  <div className="space-y-4">
                    {activeFeature.items.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white/5 border border-white/10 p-5 flex items-center gap-4"
                      >
                        <span className="text-[#ec2224] font-light text-xl w-8">0{index + 1}</span>
                        <div>
                          <p className="text-white font-medium">{item.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10 pt-8 border-t border-white/10">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 bg-[#ec2224] text-white px-6 py-3 font-medium hover:bg-[#c9191b] transition-colors"
                    >
                      Explore {activeFeature.title}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Features Grid Overview */}
      <section className="bg-[#f2f2f2] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#ec2224] mb-4">All Features</p>
            <h2 className="text-4xl md:text-5xl font-medium text-[#003257] leading-tight tracking-tight">
              At a Glance
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="group bg-white p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-transparent hover:border-gray-100"
                onClick={() => {
                  setActiveTab(feature.id);
                  document.getElementById('features-tabs')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="w-14 h-14 bg-[#f2f2f2] group-hover:bg-[#ec2224] flex items-center justify-center mb-6 transition-colors duration-300 text-[#003257] group-hover:text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-[#333333] mb-3">{feature.title}</h3>
                <p className="text-[#666666] leading-relaxed text-sm mb-5">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.items.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#f2f2f2] text-[#555555] px-3 py-1.5 font-medium"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison / Why Section */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#ec2224] mb-4">Why Switch</p>
              <h2 className="text-4xl md:text-5xl font-medium text-[#003257] leading-tight tracking-tight mb-6">
                Replace Multiple Tools With <span className="text-[#ec2224]">One</span>
              </h2>
              <p className="text-[#555555] leading-relaxed mb-8">
                Stop juggling between different software for billing, inventory, excise, and HR. Get everything unified in a single platform built specifically for your industry.
              </p>
              <div className="space-y-5">
                {[
                  { label: 'Separate Billing Software', has: false },
                  { label: 'Manual Excel Inventory', has: false },
                  { label: 'Excise Register Books', has: false },
                  { label: 'Accounting Software', has: false },
                  { label: 'HR & Payroll Tool', has: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-[#333333]">{item.label}</span>
                    <span className="text-[#ec2224] text-sm font-medium">→ Included</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/replace-tools-dash/700/500.jpg"
                alt="Dashboard preview"
                className="w-full shadow-2xl grayscale-[10%]"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#ec2224] text-white p-6 hidden md:block">
                <p className="text-3xl font-light">1</p>
                <p className="text-sm text-white/80">Platform for All</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0b1d2e] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight tracking-tight mb-6">
            See It in <span className="text-[#ec2224]">Action</span>
          </h2>
          <p className="text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free demo and see how all these features work together to simplify your daily operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-[#ec2224] text-white px-8 py-3.5 font-medium hover:bg-[#c9191b] transition-colors"
            >
              Book Free Demo
            </a>
          <button
  onClick={downloadBrochures}
  className="
    inline-block 
    bg-transparent 
    border 
    border-white 
    text-white 
    px-8 
    py-3.5 
    font-medium 
    hover:bg-white 
    hover:text-[#003257] 
    transition-all
  "
>
  Download Brochures
</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Features;