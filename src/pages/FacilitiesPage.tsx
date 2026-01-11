import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, Car, DoorOpen, Box, Lamp, HeartPulse, MapPin, Clock, Train } from 'lucide-react';
import { facilities, siteInfo } from '../data/siteData';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';

const amenityIcons = {
  coffee: Coffee,
  car: Car,
  door: DoorOpen,
  box: Box,
  lamp: Lamp,
  heart: HeartPulse,
};

export default function FacilitiesPage() {
  const amenities = [
    { name: 'On-Site Cafe', icon: 'coffee', description: 'Refreshments, snacks & beverages' },
    { name: 'Ample Parking', icon: 'car', description: 'Free parking for all visitors' },
    { name: 'Changing Rooms', icon: 'door', description: 'Clean and well-maintained' },
    { name: 'Equipment Rental', icon: 'box', description: 'All gear available on-site' },
    { name: 'Night Lighting', icon: 'lamp', description: 'Play till 2 AM under lights' },
    { name: 'First Aid', icon: 'heart', description: 'Safety equipment available' },
  ];

  return (
    <>
      <PageHero
        title="Our Facilities"
        subtitle="World-class sports infrastructure in a picturesque natural setting. Everything you need for the perfect game."
        backgroundImage="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding bg-dark-950">
        <div className="container-custom mx-auto">
          <SectionHeader
            title="Sports Facilities"
            subtitle="Premium courts and turfs designed for the best playing experience"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="group bg-dark-800/50 border border-white/10 rounded-2xl overflow-hidden hover:border-turf-500/30 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-semibold text-xl text-white">
                      {facility.name}
                    </h3>
                    <span className="px-3 py-1 bg-turf-500/20 text-turf-400 text-sm rounded-full">
                      {facility.count} Available
                    </span>
                  </div>
                  <p className="text-dark-400">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-900">
        <div className="container-custom mx-auto">
          <SectionHeader
            title="Amenities"
            subtitle="Everything you need for a comfortable and enjoyable experience"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {amenities.map((amenity, index) => {
              const Icon = amenityIcons[amenity.icon as keyof typeof amenityIcons];
              return (
                <div
                  key={index}
                  className="p-6 bg-dark-800/30 border border-white/5 rounded-xl text-center hover:border-turf-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-turf-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-turf-400" />
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">{amenity.name}</h4>
                  <p className="text-dark-500 text-xs">{amenity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-950">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-turf-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
                Visit Us
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
                Location & Hours
              </h2>

              <div className="space-y-6 mb-8">
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
                    <p className="text-dark-500 text-sm">Open every day of the week</p>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="btn-primary">
                Get Directions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
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
        </div>
      </section>

      <section className="section-padding bg-dark-900">
        <div className="container-custom mx-auto">
          <SectionHeader
            title="Virtual Tour"
            subtitle="Take a peek at our world-class facilities"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/8224729/pexels-photo-8224729.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/4006292/pexels-photo-4006292.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/3621185/pexels-photo-3621185.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/3452139/pexels-photo-3452139.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&w=600',
            ].map((src, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer group"
              >
                <img
                  src={src}
                  alt={`Facility ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery" className="btn-secondary">
              View Full Gallery
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-r from-turf-600 to-turf-500">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Ready to Experience Turf 360?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Book your slot now and play on the best sports facilities in Noida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-turf-600 font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 text-lg"
            >
              Book Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href={`tel:${siteInfo.phones[0]}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-lg"
            >
              Call: {siteInfo.phones[0]}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
