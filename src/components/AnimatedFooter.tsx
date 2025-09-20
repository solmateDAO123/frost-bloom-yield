import { Sprout, Zap, Shield, Database } from "lucide-react";
import encryptedSeedlings from "@/assets/encrypted-seedlings.png";

const AnimatedFooter = () => {
  return (
    <footer className="relative mt-16 pt-16 pb-8 bg-gradient-cyber overflow-hidden">
      {/* Background seedlings */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={encryptedSeedlings} 
          alt="Encrypted seedlings background" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Animated seedlings overlay */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex gap-8 opacity-60">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="plant-grow" 
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <Sprout className="w-12 h-12 text-primary neon-glow" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Top section with animated elements */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg float">
              <Database className="w-5 h-5 text-secondary" />
              <span className="font-mono text-sm">Encrypted Data</span>
            </div>
            <Zap className="w-6 h-6 text-accent animate-pulse" />
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg float" style={{animationDelay: '2s'}}>
              <Sprout className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm">Growing Rewards</span>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold font-mono mb-2">
            <span className="text-primary">Private</span>{" "}
            <span className="text-secondary">Yield</span>{" "}
            <span className="text-accent">Farming</span>
          </h3>
          <p className="text-muted-foreground font-mono">
            Your rewards grow in the dark, revealed only at harvest
          </p>
        </div>

        {/* Links grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-mono font-bold text-primary mb-3">Protocol</h4>
            <ul className="space-y-2 font-mono text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Whitepaper</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Security</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono font-bold text-secondary mb-3">Features</h4>
            <ul className="space-y-2 font-mono text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-smooth">Private Pools</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-smooth">FHE Technology</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-smooth">Yield Farming</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono font-bold text-accent mb-3">Community</h4>
            <ul className="space-y-2 font-mono text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-smooth">Discord</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-smooth">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-smooth">GitHub</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono font-bold text-encrypted mb-3">Privacy</h4>
            <ul className="space-y-2 font-mono text-sm">
              <li className="flex items-center gap-2">
                <Shield className="w-3 h-3 text-encrypted" />
                <span className="text-muted-foreground">End-to-End Encrypted</span>
              </li>
              <li className="flex items-center gap-2">
                <Database className="w-3 h-3 text-encrypted" />
                <span className="text-muted-foreground">Zero Knowledge</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/30 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="font-mono text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 FHEFarm. Private by design.
          </div>
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="font-mono text-xs text-muted-foreground">Network Status: Active</span>
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AnimatedFooter;