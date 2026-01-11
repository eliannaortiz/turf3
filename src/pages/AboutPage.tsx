import { Link } from 'react-router-dom';
import { ArrowRight, Target, Heart, Users, Award, Shield, Smile } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import StatsCounter from '../components/ui/StatsCounter';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Wellness',
      description: 'Promoting physical and mental well-being through sports',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building connections and fostering social bonds',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Providing world-class facilities and service',
    },
    {
      icon: Shield,
      title: 'Safety',
      description: 'Ensuring a secure environment for all players',
    },
    {
      icon: Smile,
      title: 'Inclusivity',
      description: 'Welcoming players of all ages and skill levels',
    },
    {
      icon: Target,
      title: 'Growth',
      description: 'Supporting players in their sporting journey',
    },
  ];

  return (
    <>
      <PageHero
        title="About Turf 360"
        subtitle="A premier destination for sports enthusiasts, where passion meets excellence in a picturesque natural setting."
        backgroundImage="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding bg-dark-950">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-turf-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
                Our Vision
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
                Creating a Hub for Sports Excellence
              </h2>
              <p className="text-dark-300 text-lg leading-relaxed mb-6">
                Our vision is to be a leading destination for sports and a premier hub where
                players can connect and encourage each other to achieve mental and physical
                well-being while creating awareness in society about the importance of being
                fit and active.
              </p>
              <p className="text-dark-300 text-lg leading-relaxed">
                Today, sports are invariably important to promote physical and mental
                wellbeing, discipline, and foster a sense of community and social connection.
                At Turf 360, we bring this vision to life every day.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3621185/pexels-photo-3621185.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team celebration at Turf 360"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-turf-500/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-900">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
              Sports - Imperative to a Happy Life
            </h2>
            <p className="text-dark-300 text-lg leading-relaxed">
              Sport has the power to bring people together. It functions as a universal
              platform through which people of all different backgrounds can debate, grumble,
              celebrate, rejoice and most importantly unite. It is because of sport's truly
              remarkable way of uniting people that we created Turf 360.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-dark-800/50 border border-white/10 rounded-2xl">
              <h3 className="font-display font-semibold text-xl text-white mb-4">
                Physical Fitness
              </h3>
              <p className="text-dark-400 leading-relaxed">
                Sports is mandatory for physical fitness. A game in the natural surroundings
                we offer provides excellent exercise, improves cardiovascular health, and
                builds strength and endurance.
              </p>
            </div>

            <div className="p-8 bg-dark-800/50 border border-white/10 rounded-2xl">
              <h3 className="font-display font-semibold text-xl text-white mb-4">
                Mental Wellbeing
              </h3>
              <p className="text-dark-400 leading-relaxed">
                A healthy body houses a healthy mind. Playing sports releases endorphins,
                reduces stress, and elevates your mood. A relaxed mind contributes so much
                more to family, friends, and society.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-950">
        <div className="container-custom mx-auto">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide everything we do at Turf 360"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-dark-800/30 border border-white/5 rounded-xl text-center hover:border-turf-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-turf-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-turf-400" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-dark-500 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-900">
        <div className="container-custom mx-auto">
          <StatsCounter />
        </div>
      </section>

      <section className="section-padding bg-dark-950">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/8224729/pexels-photo-8224729.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Pickleball court"
                  className="rounded-2xl w-full h-40 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Cricket turf"
                  className="rounded-2xl w-full h-40 object-cover mt-8"
                />
                <img
                  src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Football turf"
                  className="rounded-2xl w-full h-40 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/4006292/pexels-photo-4006292.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Snooker"
                  className="rounded-2xl w-full h-40 object-cover mt-8"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-turf-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
                What Makes Us Unique
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
                The Turf 360 Experience
              </h2>
              <ul className="space-y-4">
                {[
                  'Safe environment for women',
                  'Flexible scheduling from 5 AM to 2 AM',
                  'Easy and quick bookings',
                  'Picturesque natural setting',
                  'Professional coaching available',
                  'Custom tournaments for groups',
                  'On-site cafe for refreshments',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-turf-400 rounded-full" />
                    <span className="text-dark-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link to="/facilities" className="btn-primary">
                  Explore Our Facilities
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-r from-turf-600 to-turf-500">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Thank You For Playing With Us
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join the Turf 360 community and be part of something special. Experience sports
            the way they were meant to be played.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-turf-600 font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 text-lg"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
