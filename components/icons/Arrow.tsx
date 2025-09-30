import { IconProps } from './types';

interface ArrowProps extends IconProps {
  direction?: 'left' | 'right';
}

export default function Arrow({ className, size = 24, color, direction = 'right' }: ArrowProps) {
  const pathData = direction === 'left' 
    ? "M14.8252 17.9999L9.17487 11.9903L14.8252 6"
    : "M9.1748 17.9999L14.8251 11.9903L9.1748 6";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d={pathData}
        stroke={color || 'currentColor'}
        strokeWidth="1.2"
      />
    </svg>
  );
}
