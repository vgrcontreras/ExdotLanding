import React from 'react';

interface GlassBadgeProps {
  text: string;
  icons?: string[];
  className?: string;
}

export const GlassBadge: React.FC<GlassBadgeProps> = ({
  text,
  icons,
  className = ""
}) => {
  return (
    <div className={`inline-flex items-center gap-2 px-6 py-3 bg-primary/10 backdrop-blur-md border border-primary/30 rounded-full text-sm ${className}`}>
      {icons && icons.length > 0 && (
        <div className="flex gap-1">
          {icons.map((icon, index) => (
            <span key={index} className="text-primary">
              {icon}
            </span>
          ))}
        </div>
      )}
      <span className="text-foreground/90 font-medium">{text}</span>
    </div>
  );
};
