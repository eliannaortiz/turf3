import { stats } from '../../data/siteData';

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center p-6 bg-dark-800/30 rounded-2xl border border-white/5"
        >
          <div className="font-display font-bold text-4xl md:text-5xl text-turf-400 mb-2">
            {stat.value}
          </div>
          <div className="text-dark-400 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
