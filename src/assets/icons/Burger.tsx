import * as React from 'react';

export default function Burger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="BurgerSVG"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="11"
      viewBox="0 0 22 11"
      fill="none"
      {...props}
    >
      <defs>
        <style>{`
          #BurgerSVG .st0 {
            stroke: #BFC57E;
            stroke-linecap: round;
            stroke-linejoin: round;
          }
        `}</style>
      </defs>
      <path className="st0" d="M1.34448 0.503906H21.3445" />
      <path className="st0" d="M1.34448 5.50391H21.3445" />
      <path className="st0" d="M1.34448 10.5039H21.3445" />
    </svg>
  );
}
