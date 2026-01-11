import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Building2, Handshake, Zap, Users, Calendar, Trophy, UtensilsCrossed, Camera } from 'lucide-react';
import { corporatePackages, corporateBenefits, siteInfo } from '../data/siteData';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';

const benefitIcons = {
  building: Building2,
  handshake: Handshake,
  zap: Zap,
};

export default function CorporatePage() {
  return (
    <>
      <PageHero
        title="Corporate Events"
        subtitle="Transform your team building with sports. Create unforgettable experiences that boost morale and productivity."
        backgroundImage="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding bg-dark-950">
        <div className="container-custom mx-auto">
          <SectionHeader
            title="Why Sports for Team Building?"
            subtitle="Sports positively impact corporate teams by improving communication, cohesion, and breaking down hierarchical barriers"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {corporateBenefits.map((benefit, index) => {
              const Icon = benefitIcons[benefit.icon as keyof typeof benefitIcons];
              return (
                <div
                  key={index}
                  className="p-8 bg-dark-800/50 border border-white/10 rounded-2xl hover:border-turf-500/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-gold-400" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-dark-400 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-900">
        <div className="container-custom mx-auto">
          <SectionHeader
            title="Corporate Packages"
            subtitle="Choose the perfect package for your team size and requirements"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {corporatePackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl ${
                  pkg.highlight
                    ? 'bg-gradient-to-b from-turf-600/20 to-dark-800 border-2 border-turf-500'
                    : 'bg-dark-800/50 border border-white/10'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-turf-500 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className="font-display font-bold text-2xl text-white mb-2">{pkg.name}</h3>
                <p className="text-dark-400 mb-6">{pkg.description}</p>

                <div className="mb-8">
                  <span className="text-3xl font-bold text-white">Contact for Pricing</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          pkg.highlight ? 'text-turf-400' : 'text-dark-500'
                        }`}
                      />
                      <span className="text-dark-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full text-center ${pkg.highlight ? 'btn-primary' : 'btn-outline'}`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-950">
        <div className="container-custom mx-auto">
          <SectionHeader
            title="What We Offer"
            subtitle="Everything you need for a successful corporate sports event"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Trophy, title: 'Custom Tournaments', desc: 'Branded events for your company' },
              { icon: UtensilsCrossed, title: 'Catering', desc: 'On-site cafe and catering options' },
              { icon: Calendar, title: 'Flexible Scheduling', desc: 'Book any time, any day' },
              { icon: Users, title: 'Event Management', desc: 'Dedicated coordinators' },
              { icon: Camera, title: 'Photography', desc: 'Capture the memories' },
              { icon: Building2, title: 'All Facilities', desc: 'Access to all sports' },
              { icon: Handshake, title: 'Team Building', desc: 'Structured activities' },
              { icon: Zap, title: 'Leadership Games', desc: 'Challenge your executives' },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-dark-800/30 border border-white/5 rounded-xl text-center hover:border-turf-500/30 transition-all duration-300"
              >
                <item.icon className="w-10 h-10 text-turf-400 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-dark-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-900">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
                The Turf 360 Difference
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
                More Than Just a Venue
              </h2>
              <p className="text-dark-300 text-lg leading-relaxed mb-6">
                We've designed and delivered a series of sporting challenges, group initiatives,
                and leadership exercises that are designed to challenge and stimulate both the
                mind and the body.
              </p>
              <p className="text-dark-300 text-lg leading-relaxed mb-8">
                High participation and high engagement ignites more productivity and efficient
                teams working cohesively. We aim to break silos and build teams.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-dark-800/50 rounded-xl border border-white/5">
                  <div className="text-3xl font-display font-bold text-turf-400 mb-1">100+</div>
                  <div className="text-dark-400 text-sm">Events Hosted</div>
                </div>
                <div className="p-4 bg-dark-800/50 rounded-xl border border-white/5">
                  <div className="text-3xl font-display font-bold text-turf-400 mb-1">50+</div>
                  <div className="text-dark-400 text-sm">Corporate Clients</div>
                </div>
              </div>

              <Link to="/contact" className="btn-primary">
                Plan Your Event
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team celebration"
                className="rounded-2xl w-full h-48 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team discussion"
                className="rounded-2xl w-full h-48 object-cover mt-8"
              />
              <img
                src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team activity"
                className="rounded-2xl w-full h-48 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team meeting"
                className="rounded-2xl w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-r from-gold-600 to-gold-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />

        <div className="container-custom mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-dark-900 mb-6">
            Ready to Energize Your Team?
          </h2>
          <p className="text-xl text-dark-800 mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your corporate event requirements. Our team will create
            a custom package tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-dark-900 text-white font-semibold rounded-lg hover:bg-dark-800 transition-all duration-300 text-lg"
            >
              Request a Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href={`tel:${siteInfo.phones[0]}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-dark-900 text-dark-900 font-semibold rounded-lg hover:bg-dark-900/10 transition-all duration-300 text-lg"
            >
              Call Us: {siteInfo.phones[0]}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
