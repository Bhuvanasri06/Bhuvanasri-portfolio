import React from 'react';

export const ChatNetworkIllustration: React.FC = () => (
  <div className="relative w-full h-44 bg-gradient-to-br from-[#121024] to-[#0c0c16] rounded-xl overflow-hidden p-4 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
    {/* Grid & Glow */}
    <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
    <div className="absolute w-28 h-28 bg-purple-600/25 rounded-full blur-2xl pointer-events-none" />

    {/* SVG Illustration */}
    <svg viewBox="0 0 320 160" className="w-full h-full relative z-10">
      <defs>
        <linearGradient id="purpleGradChat" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="blueGradChat" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      {/* Connection Waves */}
      <path
        d="M 50 80 Q 110 30, 160 80 T 270 80"
        fill="none"
        stroke="url(#purpleGradChat)"
        strokeWidth="2"
        strokeDasharray="4 4"
        className="animate-pulse"
      />
      <path
        d="M 50 80 Q 110 130, 160 80 T 270 80"
        fill="none"
        stroke="url(#blueGradChat)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        opacity="0.6"
      />

      {/* Left Node: Client */}
      <g transform="translate(45, 80)">
        <circle r="22" fill="#1e1b4b" stroke="#a855f7" strokeWidth="2" />
        <circle r="14" fill="#6d28d9" opacity="0.4" />
        <text textAnchor="middle" y="4" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="monospace">CLI</text>
      </g>

      {/* Center Node: NLP Filter & WebSocket Gateway */}
      <g transform="translate(160, 80)">
        <rect x="-38" y="-24" width="76" height="48" rx="10" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2" />
        <text textAnchor="middle" y="-6" fill="#c084fc" fontSize="9" fontWeight="bold">FASTAPI</text>
        <text textAnchor="middle" y="8" fill="#38bdf8" fontSize="8" fontFamily="monospace">NLP Filter</text>
        <circle cx="26" cy="-14" r="3" fill="#10b981" />
      </g>

      {/* Right Node: Vendor / DB */}
      <g transform="translate(270, 80)">
        <circle r="22" fill="#1e1b4b" stroke="#3b82f6" strokeWidth="2" />
        <circle r="14" fill="#2563eb" opacity="0.4" />
        <text textAnchor="middle" y="4" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="monospace">VEN</text>
      </g>

      {/* Floating Status Badges */}
      <g transform="translate(85, 38)">
        <rect x="0" y="0" width="54" height="18" rx="4" fill="#2e1065" stroke="#9333ea" strokeWidth="0.8" />
        <text x="27" y="12" textAnchor="middle" fill="#e9d5ff" fontSize="8" fontFamily="monospace">WSS Live</text>
      </g>
      <g transform="translate(182, 116)">
        <rect x="0" y="0" width="64" height="18" rx="4" fill="#042f2e" stroke="#10b981" strokeWidth="0.8" />
        <text x="32" y="12" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontFamily="monospace">PII Shielded</text>
      </g>
    </svg>
  </div>
);

export const SecurityShieldIllustration: React.FC = () => (
  <div className="relative w-full h-44 bg-gradient-to-br from-[#121024] to-[#0c0c16] rounded-xl overflow-hidden p-4 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
    <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
    <div className="absolute w-28 h-28 bg-violet-600/25 rounded-full blur-2xl pointer-events-none" />

    <svg viewBox="0 0 320 160" className="w-full h-full relative z-10">
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>

      {/* Radar Circles */}
      <circle cx="160" cy="80" r="55" fill="none" stroke="#7c3aed" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="160" cy="80" r="40" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.4" />
      <circle cx="160" cy="80" r="25" fill="none" stroke="#60a5fa" strokeWidth="1" opacity="0.5" />

      {/* Central Shield */}
      <g transform="translate(160, 80)">
        <path d="M 0 -28 L 22 -15 L 22 10 Q 22 28, 0 34 Q -22 28, -22 10 L -22 -15 Z" fill="#1e1035" stroke="url(#shieldGrad)" strokeWidth="2.5" />
        <path d="M -7 4 L -2 9 L 8 -2" fill="none" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Anomaly Points / Scan nodes */}
      <circle cx="85" cy="55" r="4" fill="#ef4444" className="animate-ping" style={{ transformOrigin: '85px 55px' }} />
      <circle cx="85" cy="55" r="4" fill="#ef4444" />
      <line x1="85" y1="55" x2="140" y2="70" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />

      <circle cx="235" cy="65" r="4" fill="#10b981" />
      <line x1="235" y1="65" x2="180" y2="75" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />

      <circle cx="225" cy="115" r="4" fill="#a855f7" />
      <line x1="225" y1="115" x2="175" y2="90" stroke="#a855f7" strokeWidth="1" strokeDasharray="2 2" />

      {/* Status Tags */}
      <g transform="translate(40, 115)">
        <rect x="0" y="0" width="76" height="18" rx="4" fill="#1f132b" stroke="#a855f7" strokeWidth="0.8" />
        <text x="38" y="12" textAnchor="middle" fill="#e9d5ff" fontSize="8" fontFamily="monospace">Anomaly ML</text>
      </g>
      <g transform="translate(205, 25)">
        <rect x="0" y="0" width="76" height="18" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="0.8" />
        <text x="38" y="12" textAnchor="middle" fill="#93c5fd" fontSize="8" fontFamily="monospace">UBA Heuristics</text>
      </g>
    </svg>
  </div>
);

export const MoleculeIllustration: React.FC = () => (
  <div className="relative w-full h-44 bg-gradient-to-br from-[#121024] to-[#0c0c16] rounded-xl overflow-hidden p-4 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
    <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
    <div className="absolute w-28 h-28 bg-blue-600/20 rounded-full blur-2xl pointer-events-none" />

    <svg viewBox="0 0 320 160" className="w-full h-full relative z-10">
      {/* Chemical Molecular Graph */}
      <g stroke="#8b5cf6" strokeWidth="2" opacity="0.7">
        <line x1="100" y1="80" x2="130" y2="45" />
        <line x1="130" y1="45" x2="170" y2="45" />
        <line x1="170" y1="45" x2="200" y2="80" />
        <line x1="200" y1="80" x2="170" y2="115" />
        <line x1="170" y1="115" x2="130" y2="115" />
        <line x1="130" y1="115" x2="100" y2="80" />

        {/* Outer branches */}
        <line x1="100" y1="80" x2="65" y2="80" stroke="#38bdf8" />
        <line x1="200" y1="80" x2="235" y2="80" stroke="#c084fc" />
        <line x1="170" y1="45" x2="185" y2="20" stroke="#38bdf8" />
        <line x1="130" y1="115" x2="115" y2="140" stroke="#c084fc" />
      </g>

      {/* Molecular Atoms / Nodes */}
      <circle cx="100" cy="80" r="7" fill="#1e1b4b" stroke="#a855f7" strokeWidth="2" />
      <circle cx="130" cy="45" r="7" fill="#1e1b4b" stroke="#38bdf8" strokeWidth="2" />
      <circle cx="170" cy="45" r="7" fill="#1e1b4b" stroke="#a855f7" strokeWidth="2" />
      <circle cx="200" cy="80" r="7" fill="#1e1b4b" stroke="#38bdf8" strokeWidth="2" />
      <circle cx="170" cy="115" r="7" fill="#1e1b4b" stroke="#a855f7" strokeWidth="2" />
      <circle cx="130" cy="115" r="7" fill="#1e1b4b" stroke="#38bdf8" strokeWidth="2" />

      {/* Terminal Functional Groups */}
      <g transform="translate(48, 80)">
        <circle r="12" fill="#042f2e" stroke="#10b981" strokeWidth="1.5" />
        <text textAnchor="middle" y="3" fill="#6ee7b7" fontSize="8" fontWeight="bold">OH</text>
      </g>
      <g transform="translate(252, 80)">
        <circle r="12" fill="#311042" stroke="#d946ef" strokeWidth="1.5" />
        <text textAnchor="middle" y="3" fill="#f5d0fe" fontSize="8" fontWeight="bold">NH₂</text>
      </g>

      {/* Tag */}
      <g transform="translate(122, 72)">
        <rect x="0" y="0" width="56" height="16" rx="3" fill="#0f172a" stroke="#8b5cf6" strokeWidth="0.8" />
        <text x="28" y="11" textAnchor="middle" fill="#c084fc" fontSize="7.5" fontFamily="monospace">QSAR Fit</text>
      </g>
    </svg>
  </div>
);

export const VisionScanIllustration: React.FC = () => (
  <div className="relative w-full h-44 bg-gradient-to-br from-[#121024] to-[#0c0c16] rounded-xl overflow-hidden p-4 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
    <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
    <div className="absolute w-28 h-28 bg-purple-600/25 rounded-full blur-2xl pointer-events-none" />

    <svg viewBox="0 0 320 160" className="w-full h-full relative z-10">
      {/* Video Frame Border */}
      <rect x="60" y="20" width="200" height="120" rx="10" fill="#0a0a14" stroke="#7c3aed" strokeWidth="1.5" opacity="0.8" />

      {/* Face ROI Scanning Box */}
      <g transform="translate(120, 35)">
        <rect x="0" y="0" width="80" height="90" rx="8" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="6 3" />
        
        {/* Corner Reticles */}
        <path d="M 0 15 L 0 0 L 15 0" fill="none" stroke="#c084fc" strokeWidth="2.5" />
        <path d="M 65 0 L 80 0 L 80 15" fill="none" stroke="#c084fc" strokeWidth="2.5" />
        <path d="M 0 75 L 0 90 L 15 90" fill="none" stroke="#c084fc" strokeWidth="2.5" />
        <path d="M 65 90 L 80 90 L 80 75" fill="none" stroke="#c084fc" strokeWidth="2.5" />

        {/* Abstract Face Nodes */}
        <circle cx="28" cy="35" r="4" fill="#38bdf8" />
        <circle cx="52" cy="35" r="4" fill="#38bdf8" />
        <line x1="28" y1="35" x2="52" y2="35" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M 32 65 Q 40 70, 48 65" fill="none" stroke="#38bdf8" strokeWidth="2" />

        {/* Scan Bar moving effect */}
        <line x1="5" y1="45" x2="75" y2="45" stroke="#ec4899" strokeWidth="1.5" opacity="0.8" />
      </g>

      {/* ResNet Layers visualization */}
      <g transform="translate(208, 45)">
        <rect x="0" y="0" width="42" height="14" rx="3" fill="#1e1035" stroke="#9333ea" strokeWidth="0.8" />
        <text x="21" y="10" textAnchor="middle" fill="#e9d5ff" fontSize="7" fontFamily="monospace">ResNet50</text>
      </g>
      <g transform="translate(208, 65)">
        <rect x="0" y="0" width="42" height="14" rx="3" fill="#042f2e" stroke="#10b981" strokeWidth="0.8" />
        <text x="21" y="10" textAnchor="middle" fill="#6ee7b7" fontSize="7" fontFamily="monospace">Real 97%</text>
      </g>
      <g transform="translate(208, 85)">
        <rect x="0" y="0" width="42" height="14" rx="3" fill="#172554" stroke="#3b82f6" strokeWidth="0.8" />
        <text x="21" y="10" textAnchor="middle" fill="#93c5fd" fontSize="7" fontFamily="monospace">OpenCV</text>
      </g>
    </svg>
  </div>
);

export const ProjectIllustration: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'chat-network':
      return <ChatNetworkIllustration />;
    case 'security-shield':
      return <SecurityShieldIllustration />;
    case 'molecule-dna':
      return <MoleculeIllustration />;
    case 'vision-scan':
      return <VisionScanIllustration />;
    default:
      return <ChatNetworkIllustration />;
  }
};
