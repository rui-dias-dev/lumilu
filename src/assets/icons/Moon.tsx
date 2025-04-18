import * as React from 'react';

export default function Moon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="MoonSVG"
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      height="500"
      version="1.1"
      viewBox="0 0 500 500"
      {...props}
    >
      <defs>
        <style>{`
          #MoonSVG .st0 { fill: #bfc57e; }
        `}</style>
      </defs>
      <path
        className="st0"
        d="M188.48,80.71c-67.15,24.88-105.73,89.55-105.73,165.36,0,97.34,78.91,176.25,176.25,176.25,75.8,0,140.47-38.59,165.36-105.73-20.07,8.07-41.98,12.2-64.94,12.2-96.21,0-183.13-86.92-183.13-183.13,0-22.96,4.13-44.87,12.2-64.94Z"
      />
    </svg>
  );
}
