import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FarmingLogo from "@/components/FarmingLogo";
import { ArrowLeft, Shield, Eye, Coins, Lock, Unlock, Sprout } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Connect Wallet",
      description: "Connect your wallet to access encrypted farming pools with full privacy protection."
    },
    {
      icon: <Sprout className="w-8 h-8 text-secondary" />,
      title: "Choose Pool & Plant",
      description: "Select a farming pool and stake your tokens. APR and rewards remain encrypted until harvest."
    },
    {
      icon: <Lock className="w-8 h-8 text-accent" />,
      title: "Private Growth",
      description: "Your staked assets grow privately. No one can see your exact rewards or APR during farming."
    },
    {
      icon: <Unlock className="w-8 h-8 text-primary" />,
      title: "Harvest & Reveal",
      description: "When you harvest, the encryption is broken and your actual rewards are revealed and distributed."
    }
  ];

  const features = [
    {
      icon: <Eye className="w-6 h-6 text-primary" />,
      title: "Privacy First",
      description: "All farming metrics remain encrypted until you choose to reveal them"
    },
    {
      icon: <Coins className="w-6 h-6 text-secondary" />,
      title: "Competitive Yields",
      description: "Earn competitive APR while maintaining complete privacy of your positions"
    },
    {
      icon: <Shield className="w-6 h-6 text-accent" />,
      title: "FHE Technology",
      description: "Powered by Fully Homomorphic Encryption for maximum security"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between border-b border-border/20">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
          <FarmingLogo />
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/hunts" className="text-foreground/80 hover:text-primary transition-colors">Hunts</Link>
          <Link to="/leaderboard" className="text-foreground/80 hover:text-primary transition-colors">Leaderboard</Link>
          <Button variant="neon" asChild>
            <Link to="/join-hunt">Join Hunt</Link>
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            How It Works
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn how encrypted yield farming protects your privacy while maximizing returns
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="glass-card p-6 rounded-xl border-card-border text-center">
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="font-mono font-bold text-lg mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
              
              {/* Step connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-mono font-bold text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-6 rounded-xl border-card-border">
                <div className="flex items-center gap-3 mb-3">
                  {feature.icon}
                  <h3 className="font-mono font-bold text-lg">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="glass-card p-8 rounded-xl border-card-border">
          <h2 className="text-2xl font-mono font-bold mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-mono font-bold text-lg mb-2 text-primary">What is FHE?</h3>
              <p className="text-muted-foreground">
                Fully Homomorphic Encryption (FHE) allows computations to be performed on encrypted data without decrypting it, ensuring complete privacy throughout the farming process.
              </p>
            </div>
            
            <div>
              <h3 className="font-mono font-bold text-lg mb-2 text-secondary">When are rewards revealed?</h3>
              <p className="text-muted-foreground">
                Rewards and APR are only revealed when you actively choose to harvest your position. Until then, all metrics remain encrypted and private.
              </p>
            </div>
            
            <div>
              <h3 className="font-mono font-bold text-lg mb-2 text-accent">Is my data really private?</h3>
              <p className="text-muted-foreground">
                Yes, all farming positions, rewards, and APR calculations are performed using FHE, ensuring that no one - including us - can see your private farming data until you choose to reveal it.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="neon" size="lg" asChild>
            <Link to="/join-hunt">
              Start Private Farming
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default HowItWorks;