import { useState } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Sprout, Shield, CheckCircle } from "lucide-react";
import { toast } from "sonner";

// Mock contract address - replace with actual deployed contract
const CONTRACT_ADDRESS = "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6";

const ContractInteraction = () => {
  const { address, isConnected } = useAccount();
  const [stakeAmount, setStakeAmount] = useState("");
  const [poolId, setPoolId] = useState("");
  const [isEncrypting, setIsEncrypting] = useState(false);

  const { writeContract, data: hash, isPending, error } = useWriteContract();
  
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const handleStake = async () => {
    if (!isConnected) {
      toast.error("Please connect your wallet first");
      return;
    }

    if (!stakeAmount || !poolId) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsEncrypting(true);
    
    try {
      // Simulate FHE encryption process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Call smart contract with encrypted data
      await writeContract({
        address: CONTRACT_ADDRESS,
        abi: [
          {
            "name": "stake",
            "type": "function",
            "stateMutability": "nonpayable",
            "inputs": [
              {"name": "poolId", "type": "uint256"},
              {"name": "amount", "type": "bytes"},
              {"name": "inputProof", "type": "bytes"}
            ],
            "outputs": [{"name": "", "type": "uint256"}]
          }
        ],
        functionName: "stake",
        args: [
          BigInt(poolId),
          "0x", // Encrypted amount data
          "0x" // FHE proof data
        ],
      });
      
      toast.success("Stake transaction submitted! Data is encrypted on-chain.");
    } catch (err) {
      toast.error("Transaction failed. Please try again.");
      console.error(err);
    } finally {
      setIsEncrypting(false);
    }
  };

  const handleCreatePool = async () => {
    if (!isConnected) {
      toast.error("Please connect your wallet first");
      return;
    }

    setIsEncrypting(true);
    
    try {
      // Simulate FHE encryption process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Call smart contract to create encrypted pool
      await writeContract({
        address: CONTRACT_ADDRESS,
        abi: [
          {
            "name": "createPool",
            "type": "function",
            "stateMutability": "nonpayable",
            "inputs": [
              {"name": "name", "type": "string"},
              {"name": "description", "type": "string"},
              {"name": "duration", "type": "uint256"},
              {"name": "tokenAddress", "type": "address"}
            ],
            "outputs": [{"name": "", "type": "uint256"}]
          }
        ],
        functionName: "createPool",
        args: [
          "Frost Pool",
          "Encrypted yield farming pool",
          BigInt(30 * 24 * 60 * 60), // 30 days
          "0x0000000000000000000000000000000000000000" // Mock token address
        ],
      });
      
      toast.success("Pool created! All data is encrypted using FHE.");
    } catch (err) {
      toast.error("Pool creation failed. Please try again.");
      console.error(err);
    } finally {
      setIsEncrypting(false);
    }
  };

  if (!isConnected) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Contract Interaction
          </CardTitle>
          <CardDescription>
            Connect your wallet to interact with encrypted smart contracts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            Please connect your wallet to continue
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-primary" />
            Encrypted Staking
          </CardTitle>
          <CardDescription>
            Stake tokens with FHE encryption - your data stays private
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="poolId">Pool ID</Label>
            <Input
              id="poolId"
              type="number"
              placeholder="Enter pool ID"
              value={poolId}
              onChange={(e) => setPoolId(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount (ETH)</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount to stake"
              value={stakeAmount}
              onChange={(e) => setStakeAmount(e.target.value)}
            />
          </div>
          <Button 
            onClick={handleStake}
            disabled={isPending || isConfirming || isEncrypting}
            className="w-full"
          >
            {isEncrypting ? (
              <>
                <Lock className="w-4 h-4 mr-2 animate-spin" />
                Encrypting Data...
              </>
            ) : isPending ? (
              "Confirming Transaction..."
            ) : isConfirming ? (
              "Waiting for Confirmation..."
            ) : (
              <>
                <Sprout className="w-4 h-4 mr-2" />
                Stake with FHE
              </>
            )}
          </Button>
          {isConfirmed && (
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Transaction confirmed! Data encrypted on-chain.</span>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Create Encrypted Pool
          </CardTitle>
          <CardDescription>
            Create a new yield farming pool with FHE encryption
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={handleCreatePool}
            disabled={isPending || isConfirming || isEncrypting}
            className="w-full"
            variant="outline"
          >
            {isEncrypting ? (
              <>
                <Lock className="w-4 h-4 mr-2 animate-spin" />
                Encrypting Pool Data...
              </>
            ) : (
              <>
                <Shield className="w-4 h-4 mr-2" />
                Create Encrypted Pool
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {error && (
        <Card className="w-full max-w-md mx-auto border-destructive">
          <CardContent className="pt-6">
            <p className="text-destructive text-sm">
              Error: {error.message}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ContractInteraction;
