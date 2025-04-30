import React, { memo } from 'react';

const Logo = memo(() => {
  return (
    <svg
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      role="img"
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        className="fill-green-600 dark:fill-green-400"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M2 17L12 22L22 17"
        className="stroke-green-600 dark:stroke-green-400"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M2 12L12 17L22 12"
        className="stroke-green-600 dark:stroke-green-400"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
});

Logo.displayName = 'Logo';

export default Logo; 