// Icon.tsx
import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
}

export const Icon = ({
  name,
  width = 24,
  height = 24,
  className = "",
  ...props
}: IconProps) => (
  <svg
    style={{ width: `${width}px`, height: `${height}px` }}
    className={`icon ${className}`}
    {...props}
  >
    <use xlinkHref={`/sprite.svg#${name}`} />
  </svg>
);
