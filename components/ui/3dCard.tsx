import React from "react";

export const CardContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export const CardItem = ({
  children,
  className,
  as: Component = "div", // Default to 'div' but allows using other elements (e.g., 'p', 'a', etc.)
  translateZ,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  translateZ?: number;
  style?: React.CSSProperties;
}) => {
  return (
    <Component
      className={`relative ${className}`}
      style={{
        transform: translateZ ? `translateZ(${translateZ}px)` : undefined,
        ...style, // Allow additional styles to be passed
      }}
    >
      {children}
    </Component>
  );
};
