import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Sprout, 
  Lock, 
  Unlock, 
  Eye, 
  EyeOff, 
  Coins, 
  TrendingUp,
  Timer,
  Zap
} from "lucide-react";

interface PoolCardProps {
  poolName: string;
  token: string;
  isStaked?: boolean;
  stakedAmount?: string;
}

const PoolCard = ({ poolName, token, isStaked = false, stakedAmount = "0" }: PoolCardProps) => {
  const [stakeAmount, setStakeAmount] = useState("");
  const [showRewards, setShowRewards] = useState(false);
  const [isHarvesting, setIsHarvesting] = useState(false);

  const handleStake = () => {
    // Simulate staking
    console.log(`Staking ${stakeAmount} ${token}`);
  };

  const handleHarvest = async () => {
    setIsHarvesting(true);
    // Simulate harvest revealing rewards
    setTimeout(() => {
      setShowRewards(true);
      setIsHarvesting(false);
    }, 2000);
  };

  return (
    <div className="glass-card p-6 rounded-xl border-card-border hover:border-primary/30 transition-smooth">
      {/* Pool Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Sprout className="w-8 h-8 text-primary plant-grow" />
            {isStaked && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            )}
          </div>
          <div>
            <h3 className="font-mono font-bold text-lg">{poolName}</h3>
            <p className="text-sm text-muted-foreground">{token} Pool</p>
          </div>
        </div>
        <div className="text-right">
          {isStaked ? (
            <Lock className="w-5 h-5 text-secondary" />
          ) : (
            <Unlock className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
      </div>

      {/* Encrypted Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="glass-card p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono text-muted-foreground">APR</span>
          </div>
          <div className="encrypted-text text-lg font-mono font-bold">
            {isStaked && showRewards ? "127.5%" : "████%"}
          </div>
        </div>
        
        <div className="glass-card p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <Coins className="w-4 h-4 text-accent" />
            <span className="text-xs font-mono text-muted-foreground">Rewards</span>
          </div>
          <div className="encrypted-text text-lg font-mono font-bold">
            {isStaked && showRewards ? "24.7 FHE" : "██.█ FHE"}
          </div>
        </div>
      </div>

      {/* Staked Amount Display */}
      {isStaked && (
        <div className="glass-card p-3 rounded-lg mb-4 border-primary/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono">Staked</span>
            </div>
            <span className="font-mono font-bold text-primary">{stakedAmount} {token}</span>
          </div>
        </div>
      )}

      {/* Action Section */}
      <div className="space-y-3">
        {!isStaked ? (
          <>
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder={`Amount of ${token}`}
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                className="font-mono bg-input/50 border-border/50"
              />
              <Button variant="neon" onClick={handleStake} disabled={!stakeAmount}>
                <Sprout className="w-4 h-4" />
                Plant
              </Button>
            </div>
          </>
        ) : (
          <div className="flex gap-2">
            <Button 
              variant="harvest" 
              onClick={handleHarvest}
              disabled={isHarvesting}
              className="flex-1"
            >
              {isHarvesting ? (
                <>
                  <Zap className="w-4 h-4 animate-spin" />
                  Harvesting...
                </>
              ) : (
                <>
                  <Unlock className="w-4 h-4" />
                  Harvest & Reveal
                </>
              )}
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setShowRewards(!showRewards)}
              className="text-muted-foreground hover:text-foreground"
            >
              {showRewards ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
          </div>
        )}
      </div>

      {/* Growing Animation Indicator */}
      {isStaked && (
        <div className="mt-4 flex justify-center">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary/70 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PoolCard;