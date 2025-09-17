export interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

export interface NotificationIconProps extends IconProps {
  hasNotification?: boolean;
  circleColor?: string;
}

export interface ChevronIconProps extends IconProps {
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const HamburgerMenu = ({ className, size = 44, color = '#6D6D6D' }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      className={className}
    >
      <path
        d="M5.5 11H38.5V14.6667H5.5V11ZM5.5 20.1667H38.5V23.8333H5.5V20.1667ZM5.5 29.3333H38.5V33H5.5V29.3333Z"
        fill={color}
      />
    </svg>
  );
};

export const Alert = ({
  className,
  size = 24,
  color = '#6D6D6D',
  circleColor = '#911A00',
  hasNotification = false,
}: NotificationIconProps) => {
  const scaleFactor = size / 24;
  const circleRadius = Math.max(3, 3 * scaleFactor);

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
        d="M12 3.83133C10.2098 3.83133 8.4929 4.54248 7.22703 5.80835C5.96116 7.07423 5.25 8.79111 5.25 10.5813V14.1836L3.80325 17.8031C3.75778 17.9169 3.7409 18.0401 3.75407 18.162C3.76725 18.2838 3.81009 18.4006 3.87884 18.502C3.94759 18.6035 4.04016 18.6866 4.14845 18.744C4.25673 18.8014 4.37744 18.8314 4.5 18.8313H9C9 20.4941 10.3373 21.8313 12 21.8313C13.6628 21.8313 15 20.4941 15 18.8313H19.5C19.6226 18.8314 19.7433 18.8014 19.8516 18.744C19.9598 18.6866 20.0524 18.6035 20.1212 18.502C20.1899 18.4006 20.2328 18.2838 20.2459 18.162C20.2591 18.0401 20.2422 17.9169 20.1968 17.8031L18.75 14.1836V10.5813C18.75 8.79111 18.0388 7.07423 16.773 5.80835C15.5071 4.54248 13.7902 3.83133 12 3.83133ZM13.5 18.8313C13.5 19.6653 12.834 20.3313 12 20.3313C11.166 20.3313 10.5 19.6653 10.5 18.8313H13.5ZM6.75 10.5813C6.75 9.18894 7.30312 7.85358 8.28769 6.86902C9.27226 5.88445 10.6076 5.33133 12 5.33133C13.3924 5.33133 14.7277 5.88445 15.7123 6.86902C16.6969 7.85358 17.25 9.18894 17.25 10.5813V14.3276C17.2499 14.4229 17.268 14.5173 17.3033 14.6058L18.3923 17.3313H5.60775L6.69675 14.6058C6.73192 14.5175 6.74999 14.4234 6.75 14.3283V10.5813Z"
        fill={color}
      />
      {hasNotification && <circle cx="17.2503" cy="6.58635" r={circleRadius} fill={circleColor} />}
    </svg>
  );
};

export const Mail = ({
  className,
  size = 24,
  color = '#6D6D6D',
  circleColor = '#911A00',
  hasNotification = false,
}: NotificationIconProps) => {
  const scaleFactor = size / 24;
  const circleRadius = Math.max(3, 3 * scaleFactor);

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
        d="M2.85596 19.5H20.856V6H2.85596V19.5Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M2.85596 6L11.856 12.75L20.856 6"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.85596 12.75V6H11.856H20.856V12.75"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {hasNotification && <circle cx="20.856" cy="5.60952" r={circleRadius} fill={circleColor} />}
    </svg>
  );
};

export const Profile = ({ className, size = 24, color = '#6D6D6D' }: IconProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.856 5.8C10.5966 5.79977 9.35929 6.12984 8.26741 6.75726C7.17552 7.38469 6.26729 8.28753 5.63338 9.37566C4.99946 10.4638 4.66203 11.6992 4.65476 12.9584C4.6475 14.2177 4.97065 15.4569 5.59196 16.5523C6.01191 16.0065 6.55175 15.5646 7.16974 15.2608C7.78773 14.9569 8.46732 14.7993 9.15596 14.8H14.556C15.2446 14.7993 15.9242 14.9569 16.5422 15.2608C17.1602 15.5646 17.7 16.0065 18.12 16.5523C18.7413 15.4569 19.0644 14.2177 19.0571 12.9584C19.0499 11.6992 18.7125 10.4638 18.0785 9.37566C17.4446 8.28753 16.5364 7.38469 15.4445 6.75726C14.3526 6.12984 13.1153 5.79977 11.856 5.8ZM19.0047 18.4684C19.1175 18.3214 19.2254 18.1708 19.3286 18.0166C20.3264 16.534 20.8583 14.7871 20.8559 13C20.8559 8.0293 16.8267 4 11.856 4C6.88526 4 2.85597 8.0293 2.85597 13C2.85313 14.9771 3.504 16.8996 4.70726 18.4684L4.70276 18.4846L5.02226 18.8563C5.86636 19.8432 6.91441 20.6352 8.09417 21.178C9.27393 21.7207 10.5573 22.0011 11.856 22C12.0504 22 12.2436 21.994 12.4356 21.982C14.0595 21.8796 15.6249 21.3366 16.9635 20.4115C17.6036 19.9699 18.1839 19.4471 18.6897 18.8563L19.0091 18.4846L19.0047 18.4684ZM11.856 7.6C11.1399 7.6 10.4531 7.88446 9.94677 8.39081C9.44042 8.89716 9.15596 9.58391 9.15596 10.3C9.15596 11.0161 9.44042 11.7028 9.94677 12.2092C10.4531 12.7155 11.1399 13 11.856 13C12.572 13 13.2588 12.7155 13.7651 12.2092C14.2715 11.7028 14.556 11.0161 14.556 10.3C14.556 9.58391 14.2715 8.89716 13.7651 8.39081C13.2588 7.88446 12.572 7.6 11.856 7.6Z"
        fill={color}
      />
    </svg>
  );
};

export const Close = ({ className, size = 24, color = '#6D6D6D' }: IconProps) => {
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
};

export const ChevronDown = ({ className, size = 24, color = '#6D6D6D' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M17.5 15.1382L11.5 9.13818L5.5 15.1382" stroke={color} strokeWidth="1.6" />
    </svg>
  );
};
