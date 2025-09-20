import { useState } from "react";
import FarmingLogo from "@/components/FarmingLogo";
import WalletConnect from "@/components/WalletConnect";
import PoolCard from "@/components/PoolCard";
import AnimatedFooter from "@/components/AnimatedFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Shield, 
  Zap, 
  Database,
  Eye,
  EyeOff
} from "lucide-react";

const Farming = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showEncrypted, setShowEncrypted] = useState(true);

  const pools = [
    {
      poolName: "Alpha Genesis",
      token: "ETH",
      isStaked: true,
      stakedAmount: "2.47"
    },
    {
      poolName: "Beta Sprout",
      token: "USDC",
      isStaked: false,
      stakedAmount: "0"
    },
    {
      poolName: "Gamma Bloom",
      token: "DAI",
      isStaked: true,
      stakedAmount: "1,250"
    },
    {
      poolName: "Delta Growth",
      token: "WBTC",
      isStaked: false,
      stakedAmount: "0"
    }
  ];

  const filteredPools = pools.filter(pool => 
    pool.poolName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pool.token.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/30 bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <FarmingLogo className="float" />
            
            <nav className="hidden md:flex items-center gap-6 font-mono">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Pools</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Stake</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Analytics</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Docs</a>
            </nav>
            
            <WalletConnect />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-lg mb-4 float">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="font-mono text-sm">Powered by FHE Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-mono mb-6">
              <span className="text-primary">Farm Privately</span><br />
              <span className="text-secondary">with</span>{" "}
              <span className="text-accent">FHE</span>
            </h1>
            
            <p className="text-xl text-muted-foreground font-mono max-w-2xl mx-auto mb-8">
              Plant your assets in encrypted pools. Watch them grow in darkness. 
              Harvest rewards that only you can see.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="neon" size="xl">
                <Zap className="w-5 h-5" />
                Start Farming
              </Button>
              <Button variant="glass" size="xl">
                <Database className="w-5 h-5" />
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="glass-card p-6 rounded-xl">
              <div className="text-3xl font-bold font-mono text-primary mb-2">
                {showEncrypted ? "$2.4M" : "$█.█M"}
              </div>
              <div className="text-sm text-muted-foreground font-mono">Total Value Locked</div>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="text-3xl font-bold font-mono text-secondary mb-2">
                {showEncrypted ? "143%" : "█████"}
              </div>
              <div className="text-sm text-muted-foreground font-mono">Average APR</div>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="text-3xl font-bold font-mono text-accent mb-2">
                {showEncrypted ? "1,247" : "█,███"}
              </div>
              <div className="text-sm text-muted-foreground font-mono">Active Farmers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pools Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold font-mono mb-2">
                <span className="text-primary">Private</span>{" "}
                <span className="text-secondary">Pools</span>
              </h2>
              <p className="text-muted-foreground font-mono">
                Your farming activity remains completely private
              </p>
            </div>
            
            <Button 
              variant="ghost" 
              onClick={() => setShowEncrypted(!showEncrypted)}
              className="flex items-center gap-2 font-mono mt-4 md:mt-0"
            >
              {showEncrypted ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              {showEncrypted ? "Hide Data" : "Show Data"}
            </Button>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search pools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 font-mono bg-input/50"
              />
            </div>
            <Button variant="glass" className="font-mono">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <Button variant="glass" className="font-mono">
              <TrendingUp className="w-4 h-4" />
              Sort by APR
            </Button>
          </div>

          {/* Pool Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPools.map((pool, index) => (
              <PoolCard
                key={index}
                poolName={pool.poolName}
                token={pool.token}
                isStaked={pool.isStaked}
                stakedAmount={pool.stakedAmount}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatedFooter />
    </div>
  );
};

export default Farming;