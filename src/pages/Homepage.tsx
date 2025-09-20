import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FarmingLogo from "@/components/FarmingLogo";
import AnimatedFooter from "@/components/AnimatedFooter";
import { Sprout, Trophy, BookOpen, Users } from "lucide-react";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <FarmingLogo />
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/hunts" className="text-foreground/80 hover:text-primary transition-colors">Hunts</Link>
          <Link to="/leaderboard" className="text-foreground/80 hover:text-primary transition-colors">Leaderboard</Link>
          <Link to="/how-it-works" className="text-foreground/80 hover:text-primary transition-colors">How It Works</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Farm Privately with FHE
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Experience encrypted yield farming where APR and rewards remain private until harvest
        </p>
        
        {/* Action Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          <Link to="/hunts" className="group">
            <div className="glass-card p-6 rounded-xl border-card-border hover:border-primary/30 transition-smooth text-center">
              <Sprout className="w-12 h-12 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-mono font-bold text-lg mb-2">Hunts</h3>
              <p className="text-sm text-muted-foreground">Discover farming opportunities</p>
            </div>
          </Link>

          <Link to="/leaderboard" className="group">
            <div className="glass-card p-6 rounded-xl border-card-border hover:border-secondary/30 transition-smooth text-center">
              <Trophy className="w-12 h-12 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-mono font-bold text-lg mb-2">Leaderboard</h3>
              <p className="text-sm text-muted-foreground">Top farmers rankings</p>
            </div>
          </Link>

          <Link to="/how-it-works" className="group">
            <div className="glass-card p-6 rounded-xl border-card-border hover:border-accent/30 transition-smooth text-center">
              <BookOpen className="w-12 h-12 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-mono font-bold text-lg mb-2">How It Works</h3>
              <p className="text-sm text-muted-foreground">Learn the process</p>
            </div>
          </Link>

          <Link to="/join-hunt" className="group">
            <div className="glass-card p-6 rounded-xl border-card-border hover:border-primary/30 transition-smooth text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-mono font-bold text-lg mb-2">Join Hunt</h3>
              <p className="text-sm text-muted-foreground">Start farming now</p>
            </div>
          </Link>
        </div>

        <Button variant="neon" size="lg" asChild>
          <Link to="/join-hunt">
            Start Farming
          </Link>
        </Button>
      </main>

      <AnimatedFooter />
    </div>
  );
};

export default Homepage;