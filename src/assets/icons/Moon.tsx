import * as React from 'react';

export default function Moon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg id="MoonSVG" xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 104 104" {...props}>
      <defs>
        <style>{`
          #MoonSVG .st0 { fill: #bfc57e; }
        `}</style>
      </defs>
      <path
        className="st0"
        d="M32.1899 0C11.747 7.57616 0 27.2644 0 50.3426C0 79.9769 24.0231 104 53.6574 104C76.7356 104 96.4238 92.253 104 71.8102C97.8888 74.2675 91.2192 75.5238 84.229 75.5238C54.9398 75.5238 28.4762 49.0602 28.4762 19.771C28.4762 12.7808 29.7325 6.11124 32.1899 0Z"
      />
    </svg>
  );
}
