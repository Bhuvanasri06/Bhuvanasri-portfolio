import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const GithubIcon: React.FC<IconProps> = ({ className = "w-5 h-5", ...props }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    aria-hidden="true" 
    {...props}
  >
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" 
    />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className = "w-5 h-5", ...props }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    aria-hidden="true" 
    {...props}
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.61 1.61 0 1 0-.01-3.22 1.61 1.61 0 0 0 .01 3.22M7.86 18.5V10.13H5.07V18.5h2.79Z" />
  </svg>
);

export const PythonIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.75h5.81v.825H3.92S0 5.766 0 11.905c0 6.14 3.42 5.927 3.42 5.927h2.04v-2.868s-.11-3.421 3.364-3.421h5.755v-.844H8.77s-3.32-.054-3.32-3.308c0-3.255 2.87-3.149 2.87-3.149h8.847s3.148.05 3.148 3.149v2.247h-1.637V8.188c0-.783-.67-1.417-1.453-1.417h-4.32a1.45 1.45 0 0 1-1.453-1.454V1.453A1.45 1.45 0 0 1 14.887 0h-2.973zM9.01 1.834a.896.896 0 1 1 0 1.792.896.896 0 0 1 0-1.792zm2.986 22.166c6.095 0 5.714-2.656 5.714-2.656l-.005-2.75h-5.81v-.825h8.096s3.92.465 3.92-5.674c0-6.14-3.42-5.928-3.42-5.928h-2.04v2.869s.11 3.421-3.364 3.421H8.732v.844h5.808s3.32.054 3.32 3.308c0 3.255-2.87 3.15-2.87 3.15H6.144s-3.149-.05-3.149-3.15v-2.246h1.637v2.155c0 .783.67 1.418 1.453 1.418h4.32a1.45 1.45 0 0 0 1.454 1.453v3.869a1.45 1.45 0 0 0 1.453 1.453h2.973zm2.904-1.834a.896.896 0 1 1 0-1.792.896.896 0 0 1 0 1.792z"/>
  </svg>
);

export const ReactIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <ellipse cx="12" cy="12" rx="4" ry="11" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="4" ry="11" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="4" ry="11" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);
