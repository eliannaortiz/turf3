import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export default function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
  return (
    <div className="p-6 md:p-8 bg-dark-800/50 border border-white/10 rounded-2xl relative">
      <Quote className="absolute top-6 right-6 w-10 h-10 text-turf-500/20" />

      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? 'fill-gold-400 text-gold-400' : 'text-dark-600'}
          />
        ))}
      </div>

      <p className="text-dark-300 leading-relaxed mb-6">{content}</p>

      <div>
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-dark-500">{role}</p>
      </div>
    </div>
  );
}
