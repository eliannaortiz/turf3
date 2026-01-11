import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Users, Award, Phone } from 'lucide-react';
import { sports, siteInfo } from '../data/siteData';

export default function SportDetailPage() {
  const { sportId } = useParams();
  const sport = sports.find((s) => s.id === sportId);

  if (!sport) {
    return <Navigate to="/sports" replace />;
  }

  const sportDetails = {
    pickleball: {
      tagline: 'The Fastest Growing Sport in the World',
      benefits: [
        'Easy to learn, suitable for all ages',
        'Great cardiovascular workout',
        'Improves hand-eye coordination',
        'Social sport - great for making friends',
        'Low impact on joints',
        'Strategic gameplay keeps you engaged',
      ],
      courtInfo: '2 professional-grade courts with proper markings',
      duration: '1 hour sessions',
      players: '2-4 players per court',
      equipment: 'Paddles and balls provided',
    },
    cricket: {
      tagline: 'Experience the Thrill of Box Cricket',
      benefits: [
        'Fast-paced, action-packed matches',
        'Perfect for limited space',
        'Soft balls for safer play',
        'Great for corporate tournaments',
        'Ideal for casual players',
        'Night lighting for evening games',
      ],
      courtInfo: 'Premium enclosed turf with professional netting',
      duration: '1-2 hour bookings',
      players: '6-8 players per team',
      equipment: 'Bats and balls available',
    },
    football: {
      tagline: 'The Beautiful Game on Premium Turf',
      benefits: [
        'FIFA standard artificial turf',
        'Professional coaching available',
        'Career guidance for aspiring players',
        'Night lighting for evening matches',
        'Perfect for 8v8 format',
        'Regular tournaments and leagues',
      ],
      courtInfo: '8v8 FIFA standard artificial turf',
      duration: '1 hour sessions',
      players: 'Up to 16 players',
      equipment: 'Footballs provided',
    },
    snooker: {
      tagline: 'Classic Cue Sport in a Scenic Setting',
      benefits: [
        'Premium snooker table',
        'Unique outdoor/scenic setting',
        'Improves focus and concentration',
        'Strategic thinking development',
        'Relaxing atmosphere',
        'Expert guidance available',
      ],
      courtInfo: 'Premium snooker table in picturesque setting',
      duration: 'Flexible timing',
      players: '2-4 players',
      equipment: 'All equipment provided',
    },
  };

  const details = sportDetails[sportId as keyof typeof sportDetails];

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sport.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/70 to-dark-950" />

        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <Link
              to="/sports"
              className="inline-flex items-center gap-2 text-turf-400 hover:text-turf-300 mb-6 transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to All Sports
            </Link>

            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              {sport.name}
            </h1>
            <p className="text-2xl text-gold-400 font-display mb-6">{details.tagline}</p>
            <p className="text-xl text-dark-300 leading-relaxed">{sport.description}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-950">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-8">
                Why Play {sport.name} at Turf 360?
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {details.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-dark-800/50 rounded-xl border border-white/5"
                  >
                    <CheckCircle className="w-5 h-5 text-turf-400 flex-shrink-0 mt-0.5" />
                    <span className="text-dark-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-display font-semibold text-xl text-white mb-6">
                Our Facilities
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="p-4 bg-dark-800/50 rounded-xl border border-white/10 text-center">
                  <Award className="w-8 h-8 text-turf-400 mx-auto mb-2" />
                  <p className="text-sm text-dark-300">{details.courtInfo}</p>
                </div>
                <div className="p-4 bg-dark-800/50 rounded-xl border border-white/10 text-center">
                  <Clock className="w-8 h-8 text-turf-400 mx-auto mb-2" />
                  <p className="text-sm text-dark-300">{details.duration}</p>
                </div>
                <div className="p-4 bg-dark-800/50 rounded-xl border border-white/10 text-center">
                  <Users className="w-8 h-8 text-turf-400 mx-auto mb-2" />
                  <p className="text-sm text-dark-300">{details.players}</p>
                </div>
                <div className="p-4 bg-dark-800/50 rounded-xl border border-white/10 text-center">
                  <CheckCircle className="w-8 h-8 text-turf-400 mx-auto mb-2" />
                  <p className="text-sm text-dark-300">{details.equipment}</p>
                </div>
              </div>

              <div className="aspect-video rounded-2xl overflow-hidden">
                <img
                  src={sport.image}
                  alt={`${sport.name} at Turf 360`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="p-8 bg-dark-800 border border-white/10 rounded-2xl">
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    Book {sport.name}
                  </h3>
                  <p className="text-dark-400 text-sm mb-6">
                    Contact us for pricing and availability
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="p-4 bg-dark-900 rounded-xl">
                      <p className="text-xs text-dark-500 uppercase tracking-wider mb-1">
                        Operating Hours
                      </p>
                      <p className="text-white font-medium">{siteInfo.hours}</p>
                    </div>

                    <div className="p-4 bg-dark-900 rounded-xl">
                      <p className="text-xs text-dark-500 uppercase tracking-wider mb-1">
                        Location
                      </p>
                      <p className="text-white font-medium">Sector 150, Noida</p>
                      <p className="text-dark-400 text-sm">{siteInfo.nearestMetro}</p>
                    </div>
                  </div>

                  <Link to="/contact" className="btn-primary w-full mb-4">
                    Book Now
                  </Link>

                  <a
                    href={`tel:${siteInfo.phones[0]}`}
                    className="btn-outline w-full flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call to Book
                  </a>
                </div>

                <div className="mt-6 p-6 bg-gradient-to-br from-turf-600/20 to-turf-500/10 border border-turf-500/20 rounded-2xl">
                  <h4 className="font-semibold text-white mb-2">Need Coaching?</h4>
                  <p className="text-dark-300 text-sm mb-4">
                    Our professional coaches can help you improve your game at any skill level.
                  </p>
                  <Link to="/contact" className="text-turf-400 text-sm font-medium hover:text-turf-300">
                    Inquire about coaching &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-900">
        <div className="container-custom mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-8 text-center">
            Explore Other Sports
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {sports
              .filter((s) => s.id !== sportId)
              .map((otherSport) => (
                <Link
                  key={otherSport.id}
                  to={`/sports/${otherSport.id}`}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <div className="aspect-video">
                    <img
                      src={otherSport.image}
                      alt={otherSport.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-display font-semibold text-xl text-white group-hover:text-turf-400 transition-colors">
                      {otherSport.name}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
