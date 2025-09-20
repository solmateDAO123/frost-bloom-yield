import { Sprout, Lock } from "lucide-react";

const FarmingLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="relative">
        {/* Lock base */}
        <div className="relative">
          <Lock className="w-8 h-8 text-secondary cyber-glow" />
          {/* Circuit pattern overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="w-full h-full bg-gradient-secondary rounded opacity-20"></div>
          </div>
        </div>
        
        {/* Plant growing from lock */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Sprout className="w-6 h-6 text-primary neon-glow plant-grow" />
        </div>
      </div>
      
      {/* Brand text */}
      <div className="ml-3 font-mono">
        <span className="text-lg font-bold text-primary">FHE</span>
        <span className="text-lg font-bold text-secondary">Farm</span>
      </div>
    </div>
  );
};

export default FarmingLogo;