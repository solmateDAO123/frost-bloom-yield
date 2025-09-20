import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FarmingLogo from "@/components/FarmingLogo";
import PoolCard from "@/components/PoolCard";
import { Search, Filter, ArrowLeft } from "lucide-react";

const Hunts = () => {
  const pools = [
    { poolName: "Ethereum Genesis", token: "ETH", isStaked: false },
    { poolName: "Bitcoin Vault", token: "BTC", isStaked: true, stakedAmount: "0.5" },
    { poolName: "Polygon Nexus", token: "MATIC", isStaked: false },
    { poolName: "Solana Prime", token: "SOL", isStaked: true, stakedAmount: "12.3" },
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
          <Link to="/leaderboard" className="text-foreground/80 hover:text-primary transition-colors">Leaderboard</Link>
          <Link to="/how-it-works" className="text-foreground/80 hover:text-primary transition-colors">How It Works</Link>
          <Button variant="neon" asChild>
            <Link to="/join-hunt">Join Hunt</Link>
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Active Hunts
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover and participate in encrypted farming pools. Rewards and APR remain hidden until harvest.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Search pools by token or name..."
              className="pl-10 bg-input/50 border-border/50"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>

        {/* Pool Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {pools.map((pool, index) => (
            <PoolCard
              key={index}
              poolName={pool.poolName}
              token={pool.token}
              isStaked={pool.isStaked}
              stakedAmount={pool.stakedAmount}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Hunts;