import React from "react";

interface containerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: containerProps) {
  return <div className={`mx-auto max-w-4xl  ${className}`}>{children}</div>;
}

export default Container;
