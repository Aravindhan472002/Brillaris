import React from "react";

interface LogoSVGProps {
  className?: string;
}

const LogoSVG: React.FC<LogoSVGProps> = ({ className }) => {
  // Colors from the provided logo
  const brandGreen = "#054A29"; // Dark green
  const brandGold = "#FFA500"; // Orange/gold
  const brandBlue = "#002060"; // Deep blue
  
  return (
    <svg
      className={className}
      width="240"
      height="60"
      viewBox="0 0 240 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* BRILLARIS Text */}
      <g>
        <path
          d="M90,20 L95,20 C100,20 105,25 105,30 C105,35 100,40 95,40 L90,40 L90,20 Z"
          fill={brandGreen}
        />
        <path
          d="M110,20 L120,20 L120,25 L115,25 L115,30 L120,30 L120,35 L115,35 L115,40 L120,40 L120,45 L110,45 L110,20 Z"
          fill={brandGreen}
        />
        <path
          d="M125,20 L130,20 L130,40 L125,40 L125,20 Z"
          fill={brandGreen}
        />
        <path
          d="M135,20 L140,20 L140,35 L145,35 L145,40 L135,40 L135,20 Z"
          fill={brandGreen}
        />
        <path
          d="M150,20 L155,20 L155,35 L160,35 L160,40 L150,40 L150,20 Z"
          fill={brandGreen}
        />
        <path
          d="M165,20 L178,20 L178,25 L170,25 L170,28 L178,28 L178,33 L170,33 L170,35 L178,35 L178,40 L165,40 L165,20 Z"
          fill={brandGreen}
        />
        <path
          d="M180,20 L185,20 L185,40 L180,40 L180,20 Z"
          fill={brandGreen}
        />
        <path
          d="M190,20 L195,20 C200,20 205,25 205,30 C205,35 200,40 195,40 L190,40 L190,20 Z"
          fill={brandGreen}
        />
      </g>
      
      {/* GLOBAL Text */}
      <g>
        <text
          x="120"
          y="50"
          fontSize="10"
          fontFamily="Arial"
          fontWeight="bold"
          fill={brandGreen}
          textAnchor="middle"
        >
          G L O B A L
        </text>
      </g>
      
      {/* Tagline */}
      <g>
        <text
          x="120"
          y="60"
          fontSize="8"
          fontFamily="Arial"
          fill={brandGreen}
          textAnchor="middle"
        >
          educate | innovate | elevate
        </text>
      </g>
      
      {/* Brand Mark - Stylized semicircle */}
      <path
        d="M60,15 C70,15 80,25 80,35 C80,45 70,55 60,55 L50,55 L50,15 L60,15 Z"
        fill={brandGold}
      />
      
      {/* Blue accent line */}
      <path
        d="M40,55 L220,55"
        stroke={brandBlue}
        strokeWidth="2"
        strokeOpacity="0.4"
      />
    </svg>
  );
};

export default LogoSVG;
