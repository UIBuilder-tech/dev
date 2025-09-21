import React from 'react';

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  duration?: string;
  [key: string]: unknown;
}

function Marquee({
  className,
  duration = "[--duration:90s]",
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const baseWrapperClasses = [
    "group",
    "flex",
    "overflow-hidden",
    "p-2",
    "[--gap:1rem]",
    "gap-[var(--gap)]",
    vertical ? "flex-col" : "flex-row",
    duration,
    className
  ].filter(Boolean).join(" ");

  const getMarqueeItemClasses = () => {
    return [
      "flex",
      "shrink-0",
      "justify-around",
      "gap-[var(--gap)]",
      vertical ? (reverse ? "animate-marquee-down flex-col" : "animate-marquee-up flex-col") : (reverse ? "animate-marquee-right flex-row" : "animate-marquee-left flex-row"),
      pauseOnHover ? "group-hover:[animation-play-state:paused]" : "",
    ].filter(Boolean).join(" ");
  };

  return (
    <div {...props} className={baseWrapperClasses}>
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div key={i} className={getMarqueeItemClasses()}>
            {children}
          </div>
        ))}
    </div>
  );
}

export default Marquee;