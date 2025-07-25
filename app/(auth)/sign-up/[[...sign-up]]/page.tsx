import { SignUp, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import { 
  Loader2, 
  Rocket, 
  Shield, 
  BarChart3, 
  Target, 
  TrendingUp, 
  Zap 
} from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      
      {/* Left Side: Sign-Up Form */}
      <div className="h-full flex flex-col items-center justify-center px-4 py-12 lg:px-8 bg-white">
        {/* Welcome Text */}
        <div className="text-center space-y-4 max-w-md w-full">
          <div className="flex justify-center mb-2">
            {/* Logo Placeholder */}
            <div className="w-12 h-12 rounded-lg bg-[#10c484] flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">$</span>
            </div>
          </div>
          
          <h1 className="font-bold text-3xl text-gray-900 flex items-center justify-center gap-2">
            Create Your <span className="text-[#10c484]">FinTrack</span>
            <Target className="w-6 h-6 text-[#10c484]" />
          </h1>
          
          <p className="text-base text-gray-600 flex items-center justify-center gap-2">
            Join thousands of users managing their finances smarter. Sign up to get started.
          </p>
        </div>

        {/* Clerk Sign-Up Form */}
        <div className="flex items-center justify-center mt-8 w-full max-w-md">
          <ClerkLoaded>
            <SignUp
              path="/sign-up"
              routing="path"
              signInUrl="/sign-in"
              appearance={{
                variables: {
                  colorPrimary: '#10c484',
                  colorText: '#1a1a1a',
                  colorBackground: '#ffffff',
                  fontSize: '14px',
                  borderRadius: '8px',
                },
                elements: {
                  footerActionLink: 'text-[#10c484] hover:underline',
                },
              }}
            />
          </ClerkLoaded>

          {/* Loading Spinner */}
          <ClerkLoading>
            <Loader2 className="animate-spin w-6 h-6 mx-auto text-[#10c484]" />
          </ClerkLoading>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex items-center justify-center text-sm text-gray-500 gap-4 flex-wrap">
          <span className="flex items-center">
            <Shield className="w-4 h-4 mr-1 text-[#10c484]" />
            Bank-grade encryption
          </span>
          <span>•</span>
          <span>No credit card required</span>
          <span>•</span>
          <span>Free 14-day trial</span>
        </div>
      </div>

      {/* Right Side: Financial Branding Panel */}
      <div
        className="hidden lg:flex flex-col justify-center items-center p-12 text-white text-center space-y-8"
        style={{
          background: '#10c484',
        }}
      >
        <div className="max-w-lg space-y-6">
          <h2 className="font-bold text-4xl leading-tight flex items-center justify-center gap-2">
            <Zap className="w-8 h-8" />
            Start Building Wealth with Confidence
          </h2>
          
          <p className="text-xl opacity-95">
            Track spending <BarChart3 className="inline w-5 h-5 mx-1" />, 
            grow your investments <TrendingUp className="inline w-5 h-5 mx-1" />, 
            and reach your goals — all in one place <Zap className="inline w-5 h-5 mx-1" />.
          </p>
          
          <div className="grid grid-cols-3 gap-6 mt-8">
            {/* Free Trial */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold flex items-center justify-center">
                <Rocket className="w-6 h-6" />
              </div>
              <div className="text-sm opacity-90 mt-1">Free 14-Day Trial</div>
            </div>
            
            {/* Security */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <div className="text-sm opacity-90 mt-1">Secure & Encrypted</div>
            </div>
            
            {/* Real-Time Insights */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold flex items-center justify-center">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div className="text-sm opacity-90 mt-1">Real-Time Insights</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}