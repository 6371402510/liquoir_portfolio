import { useState } from 'react';

const plans = [
  {
    id: 'desktop',
    name: 'Desktop Version',
    price: '₹9,999',
    period: '/First-time then AMC',
    description: 'Install locally on your computer. Best for single-shop setups with no internet dependency.',
    popular: false,
    features: [
      'Single shop usage',
      'Local database storage',
      'All core modules included',
      'Barcode & thermal printer support',
      'Excise reports built-in',
      'One year license',
    ],
  },
  {
    id: 'single-cloud',
    name: 'Single Shop Cloud',
    price: '₹14,999',
    period: '/ Year',
    description: 'Cloud-hosted solution for one location. Access from anywhere, anytime with automatic backups.',
    popular: true,
    features: [
      'Everything in Desktop, Version:',
      'Cloud access from anywhere',
      'Automatic daily backups',
      'Real-time live stock',
      'Multi-device login',
      'Free updates & support',
    ],
  },
  {
    id: 'multi-cloud',
    name: 'Multi-Shop Cloud',
    price: '₹29,999',
    period: '/ Year',
    description: 'Manage all your outlets from one centralized dashboard with unified reporting.',
    popular: false,
    badge: 'Best Value',
    features: [
      'Everything in Single Cloud, plus:',
      'Two shop locations',
      'Centralized dashboard',
      'Separate Dashboard avalaible for Owner, Shop Manager & Shop Counter',
      'Shop-wise & consolidated reports',
      
      'Priority support',
    ],
  },
];

const amc = {
  id: 'amc',
  name: 'AMC',
  price: '₹2,999',
  period: '/ Year',
  description: 'Annual Maintenance Contract for your Desktop Version — keep your software running smoothly year after year.',
  features: [
    'Software updates & patches',
    'Technical support (phone & remote)',
    'Bug fixes & troubleshooting',
    'Minor feature enhancements',
    'Database health check-ups',
  ],
};

const specialOffers = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    title: 'Free Installation',
    desc: 'Our team will set up the software on your systems at no extra cost.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Free Staff Training',
    desc: 'Hands-on training sessions for your staff until they are confident.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: 'Free Data Migration',
    desc: 'We migrate your existing data from any old software or Excel — zero hassle.',
  },
];

const faqs = [
  {
    q: 'Is there a free trial available?',
    a: 'Yes! We offer a 3-day free trial for all cloud plans.  You can explore all features before committing.',
  },
  {
    q: 'Can I upgrade from Desktop to Cloud later?',
    a: 'Absolutely. You can upgrade anytime and we will migrate your data to the cloud seamlessly. After pay singel shop cloud price.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept bank transfer (NEFT/RTGS), UPI, debit cards, and cheques. GST invoice is provided for all payments.',
  },
  {
    q: 'Is the AMC mandatory for Desktop Version?',
    a: 'AMC is mandatory . Without AMC  won\'t receive updates or technical support.',
  },
  {
    q: 'How many users can access the cloud version?',
    a: 'Single Shop Cloud supports up to 3 simultaneous logins. Multi-Shop Cloud has no limit on users across all your locations.',
  },
  {
    q: 'Do prices include GST?',
    a: 'No, the mentioned prices are exclusive of GST. 18% GST will be added to the final invoice as applicable.',
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('annual');

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#003257] min-h-[50vh] flex items-center pt-20">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/pricing-hero-blue/1920/1080.jpg"
            alt="Pricing"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003257] via-[#003257]/80 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 w-full text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#ec2224] mb-4">Pricing</p>
          <h1 className="text-5xl md:text-7xl font-medium text-white leading-[1.1] tracking-tight mb-6">
            Simple, Transparent <span className="text-[#ec2224]">Pricing</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            No hidden fees. No surprises. Choose the plan that fits your business and scale up anytime.
          </p>
        </div>
      </section>

      {/* Special Offer Banner */}
     

      {/* Pricing Cards */}
      <section id="plans" className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col border-2 p-10 transition-shadow duration-300 hover:shadow-xl ${
                  plan.popular
                    ? 'border-[#ec2224] shadow-lg'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#ec2224] text-white text-xs font-bold uppercase tracking-widest px-5 py-1.5">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Best Value Badge */}
                {plan.badge && (
                  <div className="absolute top-6 right-6">
                    <span className="bg-[#003257] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-8">
                  <h3 className="text-xl font-medium text-[#333333] mb-2">{plan.name}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-gray-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-light text-[#003257] tracking-tight">{plan.price}</span>
                    {plan.period !== 'One-time' && (
                      <span className="text-[#999999] text-sm font-medium">{plan.period}</span>
                    )}
                  </div>
                  {plan.period === 'One-time' && (
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#ec2224] mt-2 inline-block">
                      One-time Payment
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          feature.startsWith('Everything in')
                            ? 'text-[#999999]'
                            : 'text-[#ec2224]'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={`text-sm leading-relaxed ${
                          feature.startsWith('Everything in')
                            ? 'text-[#999999]'
                            : 'text-[#333333]'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#"
                  className={`block text-center py-3.5 font-medium transition-colors ${
                    plan.popular
                      ? 'bg-[#ec2224] text-white hover:bg-[#c9191b]'
                      : 'bg-[#003257] text-white hover:bg-[#002040]'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          {/* AMC Card - Full Width */}
          <div className="max-w-2xl mx-auto">
            <div className="border-2 border-gray-200 p-10 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-medium text-[#333333]">AMC</h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#003257] bg-[#f2f2f2] px-3 py-1">
                      For Desktop Users
                    </span>
                  </div>
                  <p className="text-sm text-[#666666] leading-relaxed mb-6">{amc.description}</p>
                  <ul className="space-y-3">
                    {amc.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-[#ec2224] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-[#333333]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-left md:text-right flex-shrink-0">
                  <div className="flex items-baseline gap-1 justify-start md:justify-end">
                    <span className="text-4xl font-light text-[#003257] tracking-tight">{amc.price}</span>
                    <span className="text-[#999999] text-sm font-medium">{amc.period}</span>
                  </div>
                  <a
                    href="#"
                    className="inline-block mt-4 bg-[#003257] text-white px-8 py-3 font-medium hover:bg-[#002040] transition-colors"
                  >
                    Add AMC
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="bg-[#f2f2f2] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#ec2224] mb-4">Special Offer</p>
            <h2 className="text-4xl md:text-5xl font-medium text-[#003257] leading-tight tracking-tight">
              Included Free With <span className="text-[#ec2224]">Every Plan</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {specialOffers.map((offer, index) => (
              <div
                key={index}
                className="bg-white p-10 text-center group hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="w-16 h-16 bg-[#ec2224]/10 group-hover:bg-[#ec2224] flex items-center justify-center mx-auto mb-6 transition-colors duration-300 text-[#ec2224] group-hover:text-white rounded-full">
                  {offer.icon}
                </div>
                <h3 className="text-xl font-medium text-[#333333] mb-3">{offer.title}</h3>
                <p className="text-[#666666] leading-relaxed text-sm">{offer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
    

      {/* FAQ Section */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#ec2224] mb-4">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-medium text-[#003257] leading-tight tracking-tight">
              Pricing Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <details key={index} className="group border border-gray-200">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-[#333333] font-medium list-none">
                  {item.q}
                  <span className="relative w-5 h-5 flex-shrink-0 ml-4">
                    <span className="absolute inset-0 w-5 h-5 bg-[#ec2224] rounded-sm opacity-100 group-open:opacity-0 transition-opacity"></span>
                    <span className="absolute inset-0 w-5 h-5 bg-[#003257] rounded-sm opacity-0 group-open:opacity-100 transition-opacity"></span>
                    <svg className="absolute inset-0 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-[#666666] leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0b1d2e] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight tracking-tight mb-6">
            Ready to <span className="text-[#ec2224]">Get Started?</span>
          </h2>
          <p className="text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Choose your plan and we'll get you set up within 24 hours. Still have questions? Talk to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-block bg-[#ec2224] text-white px-8 py-3.5 font-medium hover:bg-[#c9191b] transition-colors"
            >
              Start Free Trial
            </a>
            <a
              href="#"
              className="inline-block bg-transparent border border-white text-white px-8 py-3.5 font-medium hover:bg-white hover:text-[#003257] transition-all"
            >
              Talk to Sales
            </a>
          </div>
         
        </div>
      </section>
    </main>
  );
};

export default Pricing;