import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Train, Send, Instagram } from 'lucide-react';
import { siteInfo, sports } from '../data/siteData';
import PageHero from '../components/ui/PageHero';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sport: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', sport: '', message: '' });
    }, 1500);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Ready to play? Get in touch with us to book your slot or learn more about our facilities."
        backgroundImage="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding bg-dark-950">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-turf-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-turf-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <a
                      href={`tel:${siteInfo.phones[0]}`}
                      className="text-dark-400 hover:text-turf-400 block"
                    >
                      {siteInfo.phones[0]}
                    </a>
                    <a
                      href={`tel:${siteInfo.phones[1]}`}
                      className="text-dark-400 hover:text-turf-400 block"
                    >
                      {siteInfo.phones[1]}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-turf-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-turf-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a
                      href={`mailto:${siteInfo.email}`}
                      className="text-dark-400 hover:text-turf-400"
                    >
                      {siteInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-turf-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-turf-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Address</h4>
                    <p className="text-dark-400">
                      {siteInfo.address.street}
                      <br />
                      {siteInfo.address.landmark}
                      <br />
                      {siteInfo.address.city}, {siteInfo.address.state} {siteInfo.address.pincode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-turf-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Train className="w-6 h-6 text-turf-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Nearest Metro</h4>
                    <p className="text-dark-400">{siteInfo.nearestMetro}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-turf-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-turf-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Operating Hours</h4>
                    <p className="text-dark-400">{siteInfo.hours}</p>
                    <p className="text-dark-500 text-sm">Open every day</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-turf-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-turf-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Follow Us</h4>
                    <a
                      href={siteInfo.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-400 hover:text-turf-400"
                    >
                      @turf_360
                    </a>
                  </div>
                </div>
              </div>

              <div className="aspect-video rounded-2xl overflow-hidden bg-dark-800 border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2!2d77.4!3d28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzAwLjAiTiA3N8KwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Turf 360 Location"
                  className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>

            <div>
              <div className="p-8 bg-dark-800 border border-white/10 rounded-2xl">
                <h2 className="font-display font-bold text-2xl text-white mb-2">
                  Book Your Slot
                </h2>
                <p className="text-dark-400 mb-8">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-turf-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-turf-400" />
                    </div>
                    <h3 className="font-display font-semibold text-xl text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-dark-400 mb-6">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-outline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-turf-500 transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-turf-500 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-dark-300 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-turf-500 transition-colors"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="sport" className="block text-sm font-medium text-dark-300 mb-2">
                        Interested In
                      </label>
                      <select
                        id="sport"
                        name="sport"
                        value={formData.sport}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-turf-500 transition-colors"
                      >
                        <option value="">Select a sport</option>
                        {sports.map((sport) => (
                          <option key={sport.id} value={sport.id}>
                            {sport.name}
                          </option>
                        ))}
                        <option value="corporate">Corporate Event</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-turf-500 transition-colors resize-none"
                        placeholder="Tell us about your requirements, preferred date/time, etc."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>

              <div className="mt-6 p-6 bg-gradient-to-br from-turf-600/20 to-turf-500/10 border border-turf-500/20 rounded-2xl">
                <h4 className="font-semibold text-white mb-2">Quick Booking?</h4>
                <p className="text-dark-300 text-sm mb-4">
                  For immediate bookings, call us directly or send us a WhatsApp message.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${siteInfo.phones[0]}`}
                    className="btn-primary text-sm flex-1 text-center"
                  >
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/${siteInfo.phones[0].replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi! I would like to book a slot at Turf 360.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm flex-1 text-center"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
