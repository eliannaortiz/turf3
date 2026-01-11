interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      <h2
        className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4 ${
          light ? 'text-dark-900' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-dark-600' : 'text-dark-400'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
