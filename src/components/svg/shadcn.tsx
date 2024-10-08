import { forwardRef, type SVGAttributes } from 'react';

export const ShadCnLogo = forwardRef<
  SVGSVGElement,
  SVGAttributes<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      className="h-6 w-6"
      ref={ref}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0h256v256H0z" fill="none" />
      <path
        d="m208 128-80 80M192 40 40 192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </svg>
  );
});
ShadCnLogo.displayName = 'ShadCnLogo';
