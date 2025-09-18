import { IconProps } from './types';

export default function Close({ className, size = 24, color = '#6D6D6D' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.66666 25.3333L16 16M16 16L25.3333 6.66666M16 16L6.66666 6.66666M16 16L25.3333 25.3333"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
