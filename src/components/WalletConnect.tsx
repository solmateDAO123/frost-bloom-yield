import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from "@/components/ui/button";
import { Wallet, Shield, CheckCircle } from "lucide-react";

const WalletConnect = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button 
                    variant="neon" 
                    size="lg" 
                    onClick={openConnectModal}
                    className="font-mono"
                  >
                    <Wallet className="w-5 h-5 mr-2" />
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button 
                    variant="destructive" 
                    size="lg" 
                    onClick={openChainModal}
                    className="font-mono"
                  >
                    Wrong network
                  </Button>
                );
              }

              return (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="font-mono text-sm">
                      {account.displayName}
                    </span>
                    <Shield className="w-4 h-4 text-secondary" />
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={openAccountModal}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    Account
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default WalletConnect;