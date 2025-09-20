import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FarmingLogo from "@/components/FarmingLogo";
import { ArrowLeft, Trophy, Medal, Award } from "lucide-react";

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, address: "0x1234...5678", totalHarvested: "2,847.5", pools: 8, badge: "Gold Farmer" },
    { rank: 2, address: "0x9abc...def0", totalHarvested: "2,156.8", pools: 6, badge: "Silver Farmer" },
    { rank: 3, address: "0x2468...ace1", totalHarvested: "1,923.2", pools: 7, badge: "Bronze Farmer" },
    { rank: 4, address: "0x3691...258b", totalHarvested: "1,654.7", pools: 5, badge: "Active Farmer" },
    { rank: 5, address: "0x4815...162c", totalHarvested: "1,432.1", pools: 4, badge: "Active Farmer" },
    { rank: 6, address: "0x5927...384d", totalHarvested: "1,298.6", pools: 6, badge: "Rising Farmer" },
    { rank: 7, address: "0x6048...495e", totalHarvested: "1,156.3", pools: 3, badge: "Rising Farmer" },
    { rank: 8, address: "0x7159...607f", totalHarvested: "987.4", pools: 4, badge: "New Farmer" },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Award className="w-6 h-6 text-amber-600" />;
      default: return <span className="w-6 h-6 flex items-center justify-center text-sm font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Gold Farmer": return "default";
      case "Silver Farmer": return "secondary";
      case "Bronze Farmer": return "outline";
      default: return "outline";
    }
  };

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
          <Link to="/how-it-works" className="text-foreground/80 hover:text-primary transition-colors">How It Works</Link>
          <Button variant="neon" asChild>
            <Link to="/join-hunt">Join Hunt</Link>
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Leaderboard
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Top farmers ranked by total harvested rewards across all pools
          </p>
        </div>

        {/* Leaderboard Table */}
        <div className="glass-card rounded-xl border-card-border overflow-hidden">
          <div className="p-6 border-b border-border/20">
            <h2 className="text-xl font-mono font-bold">Top Farmers</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border/20">
                <tr className="text-left">
                  <th className="px-6 py-4 font-mono text-sm font-bold text-muted-foreground">Rank</th>
                  <th className="px-6 py-4 font-mono text-sm font-bold text-muted-foreground">Farmer</th>
                  <th className="px-6 py-4 font-mono text-sm font-bold text-muted-foreground">Total Harvested</th>
                  <th className="px-6 py-4 font-mono text-sm font-bold text-muted-foreground">Active Pools</th>
                  <th className="px-6 py-4 font-mono text-sm font-bold text-muted-foreground">Badge</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((farmer) => (
                  <tr key={farmer.rank} className="border-b border-border/10 hover:bg-muted/20 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {getRankIcon(farmer.rank)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-mono text-sm">{farmer.address}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-mono font-bold text-primary">{farmer.totalHarvested} FHE</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-mono">{farmer.pools}</span>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={getBadgeVariant(farmer.badge)} className="font-mono text-xs">
                        {farmer.badge}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="glass-card p-6 rounded-xl border-card-border text-center">
            <div className="text-3xl font-mono font-bold text-primary mb-2">156</div>
            <div className="text-sm text-muted-foreground">Total Farmers</div>
          </div>
          <div className="glass-card p-6 rounded-xl border-card-border text-center">
            <div className="text-3xl font-mono font-bold text-secondary mb-2">24,891</div>
            <div className="text-sm text-muted-foreground">Total Harvested FHE</div>
          </div>
          <div className="glass-card p-6 rounded-xl border-card-border text-center">
            <div className="text-3xl font-mono font-bold text-accent mb-2">8</div>
            <div className="text-sm text-muted-foreground">Active Pools</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Leaderboard;