import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { siteInfo, navLinks, sports } from '../../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-white/10">
      <div className="container-custom mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-turf-500 to-turf-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-white font-display font-bold text-xl">
                Turf <span className="text-turf-400">360</span>
              </span>
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed mb-6">
              {siteInfo.description}. Experience sports in a picturesque setting with
              professional facilities.
            </p>
            <a
              href={siteInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-dark-400 hover:text-turf-400 transition-colors"
            >
              <Instagram size={20} />
              <span>@turf_360</span>
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-dark-400 hover:text-turf-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Our Sports</h4>
            <ul className="space-y-3">
              {sports.map((sport) => (
                <li key={sport.id}>
                  <Link
                    to={`/sports/${sport.id}`}
                    className="text-dark-400 hover:text-turf-400 transition-colors text-sm"
                  >
                    {sport.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-turf-400 flex-shrink-0 mt-1" />
                <span className="text-dark-400 text-sm">
                  {siteInfo.address.street}, {siteInfo.address.landmark},{' '}
                  {siteInfo.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-turf-400 flex-shrink-0" />
                <div className="text-dark-400 text-sm">
                  <a href={`tel:${siteInfo.phones[0]}`} className="hover:text-turf-400 block">
                    {siteInfo.phones[0]}
                  </a>
                  <a href={`tel:${siteInfo.phones[1]}`} className="hover:text-turf-400 block">
                    {siteInfo.phones[1]}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-turf-400 flex-shrink-0" />
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="text-dark-400 text-sm hover:text-turf-400"
                >
                  {siteInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-turf-400 flex-shrink-0" />
                <span className="text-dark-400 text-sm">{siteInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-500 text-sm">
            &copy; {new Date().getFullYear()} Turf 360. All rights reserved.
          </p>
          <p className="text-dark-500 text-sm">
            Premium Sports Venue in Noida Sector 150
          </p>
        </div>
      </div>
    </footer>
  );
}
