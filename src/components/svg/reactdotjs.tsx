import { forwardRef, type SVGAttributes } from 'react';

export const ReactJsLogo = forwardRef<
  SVGSVGElement,
  SVGAttributes<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      ref={ref}
      viewBox="-11.5 -10.232 23 20.463"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle fill="#61dafb" r={2.05} />
      <g fill="none" stroke="#61dafb">
        <ellipse rx={11} ry={4.2} />
        <ellipse rx={11} ry={4.2} transform="rotate(60)" />
        <ellipse rx={11} ry={4.2} transform="rotate(120)" />
      </g>
    </svg>
  );
});
ReactJsLogo.displayName = 'ReactJsLogo';
