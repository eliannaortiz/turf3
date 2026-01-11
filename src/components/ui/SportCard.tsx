import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SportCardProps {
  id: string;
  name: string;
  shortDesc: string;
  image: string;
  features: string[];
}

export default function SportCard({ id, name, shortDesc, image, features }: SportCardProps) {
  return (
    <Link
      to={`/sports/${id}`}
      className="group relative overflow-hidden rounded-2xl bg-dark-800 border border-white/10 hover:border-turf-500/50 transition-all duration-500"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-turf-400 transition-colors">
          {name}
        </h3>
        <p className="text-dark-300 text-sm mb-4">{shortDesc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 bg-white/10 rounded-full text-white/80"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-turf-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Learn More</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
