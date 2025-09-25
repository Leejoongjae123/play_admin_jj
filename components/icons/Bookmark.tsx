import { IconProps } from './types';

export default function Bookmark({ className, size = 20 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M5.40625 14.8384V4.86739C5.40625 4.58962 5.63267 4.36509 5.91044 4.36741L14.0975 4.43596C14.372 4.43826 14.5933 4.66144 14.5933 4.93595V14.9039C14.5933 15.2561 14.2388 15.498 13.9109 15.3695L10.3567 13.9771C10.1269 13.8871 9.87192 13.8853 9.64082 13.9719L6.08181 15.3065C5.75494 15.4291 5.40625 15.1875 5.40625 14.8384Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
