import { SignIn, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import { Loader2, Shield, Lock, Target, TrendingUp, BarChart3, Zap, Signal, CheckCircle, ShieldCheck } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      
      {/* Left Side: Sign-In Form */}
      <div className="h-full flex flex-col items-center justify-center px-4 py-12 lg:px-8 bg-white">
        {/* Welcome Text */}
        <div className="text-center space-y-4 max-w-md w-full">
          <div className="flex justify-center mb-2">
            {/* Logo Badge */}
            <div className="w-12 h-12 rounded-lg bg-[#10c484] flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">$</span>
            </div>
          </div>
          
          <h1 className="font-bold text-3xl text-gray-900 flex items-center justify-center gap-2">
            Welcome to <span className="text-[#10c484]">FinTrack</span>
            <Target className="w-6 h-6 text-[#10c484]" />
          </h1>
          
          <p className="text-base text-gray-600 flex items-center justify-center gap-2">
            Sign in securely to manage your investments and track financial goals.
          </p>
        </div>

        {/* Clerk Sign-In Form */}
        <div className="flex items-center justify-center mt-8 w-full max-w-md">
          <ClerkLoaded>
            <SignIn
              path="/sign-in"
              routing="path"
              signUpUrl="/sign-up"
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

        {/* Security Badge with Icons */}
        <div className="mt-8 flex items-center justify-center text-sm text-gray-500 gap-4 flex-wrap">
          <span className="flex items-center">
            <Shield className="w-4 h-4 mr-1 text-[#10c484]" />
            Bank-level encryption
          </span>
          <span>•</span>
          <span className="flex items-center">
            <ShieldCheck className="w-4 h-4 mr-1 text-[#10c484]" />
            SOC 2 compliant
          </span>
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
            <BarChart3 className="w-8 h-8" />
            Take Control of Your Financial Future
          </h2>
          
          <p className="text-xl opacity-95">
            Track investments <TrendingUp className="inline w-5 h-5" />, 
            monitor portfolios <BarChart3 className="inline w-5 h-5" />, 
            and make informed decisions with real-time insights <Zap className="inline w-5 h-5" />.
          </p>
          
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold flex items-center justify-center gap-1">
                <Signal className="w-5 h-5" /> 24/7
              </div>
              <div className="text-sm opacity-90">Monitoring</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold flex items-center justify-center gap-1">
                <CheckCircle className="w-5 h-5" /> 99.9%
              </div>
              <div className="text-sm opacity-90">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold flex items-center justify-center gap-1">
                <ShieldCheck className="w-5 h-5" /> SOC 2
              </div>
              <div className="text-sm opacity-90">Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}