# Vercel Deployment Guide for Frost Bloom Yield

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com) if you don't have one
2. **GitHub Repository**: Ensure your code is pushed to GitHub
3. **Environment Variables**: Prepare your environment variables

## Step-by-Step Deployment Process

### Step 1: Access Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In"
3. Choose "Continue with GitHub" to connect your GitHub account

### Step 2: Import Project

1. Click "New Project" on your Vercel dashboard
2. Select "Import Git Repository"
3. Find and select `solmateDAO123/frost-bloom-yield`
4. Click "Import"

### Step 3: Configure Project Settings

#### Build Settings
- **Framework Preset**: Vite
- **Root Directory**: `./` (default)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

#### Environment Variables
Add the following environment variables in the Vercel dashboard:

```
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475
NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
```

**How to add environment variables:**
1. In your project settings, go to "Environment Variables"
2. Click "Add New"
3. Add each variable with its value
4. Make sure to select "Production", "Preview", and "Development" for each variable

### Step 4: Deploy

1. Click "Deploy" button
2. Wait for the build process to complete (usually 2-3 minutes)
3. Your app will be available at the provided Vercel URL

### Step 5: Custom Domain (Optional)

1. Go to your project dashboard
2. Click "Domains" tab
3. Add your custom domain
4. Follow the DNS configuration instructions

## Important Configuration Notes

### Build Configuration
The project uses Vite as the build tool. Vercel will automatically detect this and configure the build settings correctly.

### Environment Variables
Make sure all environment variables are properly set:
- `NEXT_PUBLIC_CHAIN_ID`: Ethereum Sepolia testnet
- `NEXT_PUBLIC_RPC_URL`: Infura RPC endpoint
- `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID`: WalletConnect project ID
- `NEXT_PUBLIC_INFURA_API_KEY`: Infura API key

### Dependencies
The project includes:
- React 18 with TypeScript
- Vite for building
- RainbowKit for wallet connection
- Wagmi for Ethereum interactions
- Tailwind CSS for styling

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check that all environment variables are set
   - Ensure all dependencies are in package.json
   - Check the build logs for specific errors

2. **Wallet Connection Issues**
   - Verify WalletConnect project ID is correct
   - Check that RPC URLs are accessible
   - Ensure chain ID matches your configuration

3. **Styling Issues**
   - Make sure Tailwind CSS is properly configured
   - Check that all UI components are imported correctly

### Build Logs
If deployment fails, check the build logs in Vercel dashboard:
1. Go to your project
2. Click on the failed deployment
3. Check the "Build Logs" tab for error details

## Post-Deployment

### Testing
1. Visit your deployed URL
2. Test wallet connection
3. Verify all features work correctly
4. Check that the app loads without errors

### Monitoring
- Use Vercel Analytics to monitor performance
- Check deployment logs for any runtime errors
- Monitor wallet connection success rates

## Security Considerations

1. **Environment Variables**: Never commit sensitive keys to your repository
2. **API Keys**: Use environment variables for all API keys
3. **Wallet Security**: Ensure proper wallet integration security
4. **HTTPS**: Vercel automatically provides HTTPS

## Performance Optimization

1. **Build Optimization**: Vite automatically optimizes the build
2. **CDN**: Vercel provides global CDN for fast loading
3. **Caching**: Configure proper caching headers if needed

## Support

If you encounter issues:
1. Check Vercel documentation
2. Review build logs
3. Verify environment variables
4. Test locally first with `npm run build`

## Deployment URL

Once deployed, your app will be available at:
`https://frost-bloom-yield.vercel.app` (or your custom domain)

## Next Steps

After successful deployment:
1. Test all functionality
2. Set up monitoring
3. Configure custom domain if needed
4. Set up automatic deployments from main branch
