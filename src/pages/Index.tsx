import ContractInteraction from "@/components/ContractInteraction";
import FarmingLogo from "@/components/FarmingLogo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Sprout, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <FarmingLogo />
            <div className="text-right">
              <h1 className="text-2xl font-bold text-primary">Frost Bloom Yield</h1>
              <p className="text-sm text-muted-foreground">Privacy-First DeFi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Next-Generation Privacy Farming
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of decentralized finance with Fully Homomorphic Encryption. 
            Your data stays private while you earn rewards.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <Shield className="w-8 h-8 mx-auto text-primary mb-2" />
              <CardTitle className="text-lg">FHE Encryption</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                All computations happen on encrypted data using Fully Homomorphic Encryption
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Lock className="w-8 h-8 mx-auto text-primary mb-2" />
              <CardTitle className="text-lg">Private Staking</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Stake your tokens with complete privacy - no one can see your amounts
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Sprout className="w-8 h-8 mx-auto text-primary mb-2" />
              <CardTitle className="text-lg">Smart Yields</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Advanced yield optimization algorithms work on encrypted data
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Zap className="w-8 h-8 mx-auto text-primary mb-2" />
              <CardTitle className="text-lg">Instant Rewards</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Real-time reward calculations with privacy-preserving analytics
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Contract Interaction */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Interact with Encrypted Contracts</h3>
            <p className="text-muted-foreground">
              Experience the power of FHE-encrypted smart contract interactions
            </p>
          </div>
          <ContractInteraction />
        </div>
      </div>
    </div>
  );
};

export default Index;
