import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FarmingLogo from "@/components/FarmingLogo";
import WalletConnect from "@/components/WalletConnect";
import PoolCard from "@/components/PoolCard";
import { ArrowLeft, Sparkles } from "lucide-react";

const JoinHunt = () => {
  const featuredPools = [
    { poolName: "Ethereum Genesis", token: "ETH", isStaked: false },
    { poolName: "Polygon Nexus", token: "MATIC", isStaked: false },
    { poolName: "Solana Prime", token: "SOL", isStaked: false },
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
          <Link to="/how-it-works" className="text-foreground/80 hover:text-primary transition-colors">How It Works</Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-16 h-16 text-primary animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Join the Hunt
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Connect your wallet and start earning private yields in encrypted farming pools
          </p>
        </div>

        {/* Wallet Connection */}
        <div className="max-w-md mx-auto mb-12">
          <WalletConnect />
        </div>

        {/* Getting Started Steps */}
        <div className="glass-card p-8 rounded-xl border-card-border mb-12">
          <h2 className="text-2xl font-mono font-bold text-center mb-6">Getting Started</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-mono font-bold text-primary">1</span>
              </div>
              <h3 className="font-mono font-bold mb-2">Connect Wallet</h3>
              <p className="text-sm text-muted-foreground">Link your wallet to access encrypted farming pools</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-mono font-bold text-secondary">2</span>
              </div>
              <h3 className="font-mono font-bold mb-2">Choose Pool</h3>
              <p className="text-sm text-muted-foreground">Select from available farming pools below</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-mono font-bold text-accent">3</span>
              </div>
              <h3 className="font-mono font-bold mb-2">Start Farming</h3>
              <p className="text-sm text-muted-foreground">Plant your tokens and earn private yields</p>
            </div>
          </div>
        </div>

        {/* Featured Pools */}
        <div className="mb-8">
          <h2 className="text-2xl font-mono font-bold text-center mb-8">Featured Pools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPools.map((pool, index) => (
              <PoolCard
                key={index}
                poolName={pool.poolName}
                token={pool.token}
                isStaked={pool.isStaked}
              />
            ))}
          </div>
        </div>

        {/* View All Pools CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/hunts">
              View All Pools
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default JoinHunt;