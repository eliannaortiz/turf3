import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { sports } from '../data/siteData';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';

export default function SportsPage() {
  return (
    <>
      <PageHero
        title="Our Sports"
        subtitle="World-class facilities for every sport. Choose your game and experience the Turf 360 difference."
        backgroundImage="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding bg-dark-950">
        <div className="container-custom mx-auto">
          <div className="space-y-24">
            {sports.map((sport, index) => (
              <div
                key={sport.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img
                        src={sport.image}
                        alt={sport.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-turf-500/20 rounded-2xl blur-2xl" />
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="text-turf-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
                    {sport.id === 'pickleball' && '2 Courts Available'}
                    {sport.id === 'cricket' && '8v8 Format'}
                    {sport.id === 'football' && 'FIFA Standard Turf'}
                    {sport.id === 'snooker' && 'Premium Experience'}
                  </span>

                  <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                    {sport.name}
                  </h2>

                  <p className="text-dark-300 text-lg leading-relaxed mb-6">
                    {sport.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {sport.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-dark-300">
                        <CheckCircle size={18} className="text-turf-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={`/sports/${sport.id}`} className="btn-primary">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-900">
        <div className="container-custom mx-auto">
          <SectionHeader
            title="Not Sure Which Sport to Try?"
            subtitle="Our friendly staff can help you find the perfect activity based on your fitness level and interests"
          />

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-dark-800/50 border border-white/10 rounded-2xl text-center">
              <div className="w-16 h-16 bg-turf-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">1</span>
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-2">Visit Us</h3>
              <p className="text-dark-400">
                Come by our venue and take a tour of all our facilities
              </p>
            </div>

            <div className="p-6 bg-dark-800/50 border border-white/10 rounded-2xl text-center">
              <div className="w-16 h-16 bg-turf-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">2</span>
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-2">Get Advice</h3>
              <p className="text-dark-400">
                Our coaches will recommend the best sport for your goals
              </p>
            </div>

            <div className="p-6 bg-dark-800/50 border border-white/10 rounded-2xl text-center">
              <div className="w-16 h-16 bg-turf-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">3</span>
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-2">Start Playing</h3>
              <p className="text-dark-400">
                Book your first session and begin your sports journey
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn-primary">
              Contact Us for Guidance
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
