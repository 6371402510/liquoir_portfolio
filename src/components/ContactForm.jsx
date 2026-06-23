import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  // Updated formData state to match the requested fields
  const [formData, setFormData] = useState({
    name: '',
  mobile: '',
  shopName: '',
  email: '',
  district: '',
  message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const templateParams = {
  name: formData.name,
  mobile: formData.mobile,
  shopName: formData.shopName,
  email: formData.email,
  district: formData.district,
  message: formData.message,
};

  try {
    await emailjs.send(
      "service_md0mbpp",
      "template_me28608",
      templateParams,
      "pM02E_wA7fj7NhmGz"
    );

    setSubmitted(true);
    setFormData({
      name: '',
      mobile: '',
      shopName: '',
      district: '',
      message: ''
    });

  } catch (error) {
    console.error("Email error:", error);
    alert("Failed to send message");
  }

  setIsSubmitting(false);
};

  return (
    <section className="py-20 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4">
            Contact Us
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Let's work{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              together
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* FORM */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">

              {submitted ? (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-semibold text-white">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 mt-2">We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name */}
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">
                      Name
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  {/* Mobile & Shop Name (Grid for better layout) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    <div>
                      <label className="block text-gray-300 text-sm mb-2">
                        Bussiness Name
                      </label>
                      <input
                        name="shopName"
                        value={formData.shopName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="Enter shop name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">
                        Mobile
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="Enter mobile number"
                        required
                      />
                    </div>

                    
                  </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                   <div>
  <label className="block text-gray-300 text-sm mb-2">
    Email
  </label>
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white"
    placeholder="Enter email"
    required
  />
</div>
                     <div>
                    <label className="block text-gray-300 text-sm mb-2">
                      District
                    </label>
                    <input
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Enter your district"
                      required
                    />
                  </div>

                    
                  </div>
                  {/* District */}
                 

                  {/* Message */}
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white resize-none focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Tell us what you need..."
                      required
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                </form>
              )}

            </div>
          </div>

          {/* SIDE INFO - VichaarLab Details */}
          <div className="lg:col-span-2 space-y-6">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
              <h3 className="text-2xl font-bold text-white mb-1">
                VichaarLab
              </h3>
              <p className="text-gray-400 text-sm mb-6">Get in touch with us</p>

              <div className="space-y-5">
                {/* Contact Person */}
                

                {/* Phone Numbers */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 text-xl">📞</span>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">Phone</p>
                    <a href="tel:9090976411" className="text-white font-medium block hover:text-cyan-400 transition-colors">9090976411</a>
                    <a href="tel:9090972227" className="text-white font-medium block hover:text-cyan-400 transition-colors">9090972227</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 text-xl">📧</span>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-gray-500 text-xs uppercase tracking-wider">Email</p>
                    <a href="mailto:vichaarlab@gmail.com" className="text-white font-medium hover:text-cyan-400 transition-colors break-all">
                      vichaarlab@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">Address</p>
                    <p className="text-white font-medium">
                      Nandan Vihar, Patia, <br />
                      Bhubaneswar – 751024
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;