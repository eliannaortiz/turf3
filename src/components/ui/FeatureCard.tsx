import { Shield, Clock, Calendar, Trees, Users, Coffee, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  clock: Clock,
  calendar: Calendar,
  trees: Trees,
  users: Users,
  coffee: Coffee,
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const Icon = iconMap[icon] || Shield;

  return (
    <div className="group p-6 md:p-8 bg-dark-800/50 border border-white/10 rounded-2xl hover:border-turf-500/30 hover:bg-dark-800 transition-all duration-300">
      <div className="w-14 h-14 bg-gradient-to-br from-turf-500/20 to-turf-600/20 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-turf-400" />
      </div>
      <h3 className="font-display font-semibold text-xl text-white mb-3">{title}</h3>
      <p className="text-dark-400 leading-relaxed">{description}</p>
    </div>
  );
}
