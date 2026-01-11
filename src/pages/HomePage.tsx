import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Train } from 'lucide-react';
import { sports, features, testimonials, siteInfo } from '../data/siteData';
import SectionHeader from '../components/ui/SectionHeader';
import SportCard from '../components/ui/SportCard';
import FeatureCard from '../components/ui/FeatureCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import StatsCounter from '../components/ui/StatsCounter';

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/70 via-dark-950/60 to-dark-950" />

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-turf-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="container-custom mx-auto px-4 md:px-8 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-turf-400 rounded-full animate-pulse" />
              <span>Now Open in Noida Sector 150</span>
            </div>

            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 text-shadow-lg animate-slide-up">
              Where the Game{' '}
              <span className="gradient-text">Never Stops</span>
            </h1>

            <p className="text-xl md:text-2xl text-dark-200 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up">
              Premium sports venue featuring Cricket, Football, Pickleball & Snooker in a
              picturesque natural setting
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Book Your Slot
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/sports" className="btn-outline text-lg px-8 py-4">
                Explore Sports
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-dark-300 animate-fade-in">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-turf-400" />
                <span>Open 5 AM - 2 AM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-turf-400" />
                <span>Sector 150, Noida</span>
              </div>
              <div className="flex items-center gap-2">
                <Train size={16} className="text-turf-400" />
                <span>0.5 km from Metro</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-950">
        <div className="container-custom mx-auto">
          <SectionHeader
            title="Our Sports"
            subtitle="Experience world-class facilities for every sport. Whether you're a beginner or pro, we have the perfect court for you."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sports.map((sport) => (
              <SportCard key={sport.id} {...sport} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/sports" className="btn-secondary">
              View All Sports
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-turf-500/5 rounded-full blur-3xl" />

        <div className="container-custom mx-auto relative z-10">
          <SectionHeader
            title="Why Choose Turf 360"
            subtitle="We've designed every aspect of our venue to give you the best sporting experience"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-950">
        <div className="container-custom mx-auto">
          <StatsCounter />
        </div>
      </section>

      <section className="section-padding bg-dark-900">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-turf-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
                For Businesses
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                Corporate Events & Team Building
              </h2>
              <p className="text-dark-300 text-lg leading-relaxed mb-6">
                Energize your corporate culture with our dynamic sports events. Foster team
                unity through adrenaline-pumping tournaments and tailored challenges that go
                beyond the boardroom.
              </p>
              <ul className="space-y-3 mb-8">
                {['Custom tournaments', 'Team-building exercises', 'Catering available', 'Dedicated event managers'].map(
                  (item, index) => (
                    <li key={index} className="flex items-center gap-3 text-dark-300">
                      <div className="w-5 h-5 bg-turf-500/20 rounded flex items-center justify-center">
                        <div className="w-2 h-2 bg-turf-400 rounded-full" />
                      </div>
                      {item}
                    </li>
                  )
                )}
              </ul>
              <Link to="/corporate" className="btn-primary">
                Explore Corporate Packages
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Corporate team building event"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 bg-dark-800 border border-white/10 rounded-2xl">
                <div className="text-3xl font-display font-bold text-turf-400">100+</div>
                <div className="text-dark-400 text-sm">Corporate Events Hosted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-950">
        <div className="container-custom mx-auto">
          <SectionHeader
            title="What Players Say"
            subtitle="Join thousands of happy players who've experienced Turf 360"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-900">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
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

            <div className="order-1 lg:order-2">
              <span className="text-turf-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
                Visit Us
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
                Find Us in the Heart of Noida
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-turf-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-turf-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Address</h4>
                    <p className="text-dark-400">
                      {siteInfo.address.street}, {siteInfo.address.landmark},{' '}
                      {siteInfo.address.city}, {siteInfo.address.state}
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
                    <h4 className="text-white font-semibold mb-1">Opening Hours</h4>
                    <p className="text-dark-400">{siteInfo.hours} (Every Day)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  Get Directions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-r from-turf-600 to-turf-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />

        <div className="container-custom mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Ready to Play?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Book your slot now and experience the best sports venue in Noida. We're open from 5
            AM to 2 AM, every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-turf-600 font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 text-lg"
            >
              Book Your Slot
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href={`tel:${siteInfo.phones[0]}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-lg"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
