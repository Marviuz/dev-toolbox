import { forwardRef, type SVGAttributes } from 'react';

export const ContentlayerLogo = forwardRef<
  SVGSVGElement,
  SVGAttributes<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      fill="none"
      height={24}
      ref={ref}
      viewBox="0 0 22 24"
      width={22}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M10.43.923a1.991 1.991 0 0 1 2.39.023l7.173 5.496a1.975 1.975 0 0 1 0 3.138l-2.736 2.096 2.78 2.228a1.975 1.975 0 0 1-.054 3.128l-7.363 5.483a1.99 1.99 0 0 1-2.511-.109L4.348 17.28l-.806-.69C-.053 13.511.39 7.84 4.412 5.352L10.43.922Zm5.765 9.902-3.344-2.678a1.99 1.99 0 0 0-2.454-.027l-2.474 1.896a1.975 1.975 0 0 0 0 3.138l2.492 1.91a1.991 1.991 0 0 0 2.421 0l3.341-2.56 3.032 2.428a.658.658 0 0 1-.019 1.043l-7.363 5.484a.664.664 0 0 1-.836-.037l-5.766-5.13-.82-.703c-2.922-2.502-2.556-7.116.726-9.128l.024-.015 6.061-4.462a.664.664 0 0 1 .797.008l7.173 5.496a.658.658 0 0 1 0 1.046l-2.99 2.291Zm-1.08.828-3.086 2.365a.663.663 0 0 1-.807 0l-2.492-1.91a.658.658 0 0 1 0-1.046l2.474-1.896a.664.664 0 0 1 .818.009l3.094 2.478Z"
        fill="#7C3AED"
        fillRule="evenodd"
        stroke="#7C3AED"
        strokeWidth={0.5}
      />
    </svg>
  );
});
ContentlayerLogo.displayName = 'ContentlayerLogo';
