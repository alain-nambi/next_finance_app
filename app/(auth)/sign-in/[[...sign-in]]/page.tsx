import { SignIn, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import { Loader2 } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      
      {/* Left Side: Sign-In Form */}
      <div className="h-full flex flex-col items-center justify-center px-4 py-12 lg:px-8 bg-white">
        {/* Welcome Text */}
        <div className="text-center space-y-4 max-w-md w-full">
          <div className="flex justify-center mb-2">
            {/* Optional: Add your logo here */}
            <div className="w-12 h-12 rounded-lg bg-[#10c484] flex items-center justify-center">
              <span className="text-white font-bold text-xl">$</span>
            </div>
          </div>
          
          <h1 className="font-bold text-3xl text-gray-900">
            Welcome to <span className="text-[#10c484]">FinTrack</span>
          </h1>
          
          <p className="text-base text-gray-600">
            Sign in to access your financial dashboard and manage your investments securely.
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
                  formButtonPrimary:
                    'bg-[#10c484] hover:bg-[#0eb078] active:bg-[#0da770] text-white font-medium shadow-md transition-all duration-200',
                  footerActionLink: 'text-[#10c484] hover:underline font-medium',
                  card: 'shadow-lg border border-gray-100 rounded-xl',
                  headerTitle: 'text-gray-900 font-semibold',
                  headerSubtitle: 'text-gray-600',
                  socialButtonsBlockButton:
                    'border border-gray-300 hover:bg-gray-50 transition-colors',
                },
              }}
            />
          </ClerkLoaded>

          {/* Loading Spinner */}
          <ClerkLoading>
            <Loader2 className="animate-spin w-6 h-6 mx-auto text-[#10c484]" />
          </ClerkLoading>
        </div>

        {/* Security Badge */}
        <div className="mt-8 flex items-center justify-center text-sm text-gray-500">
          <svg className="w-4 h-4 mr-2 text-[#10c484]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          Bank-level encryption • SOC 2 compliant
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
          <h2 className="font-bold text-4xl leading-tight">
            Take Control of Your Financial Future
          </h2>
          
          <p className="text-xl opacity-95">
            Track investments, monitor portfolios, and make informed decisions with real-time insights.
          </p>
          
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm opacity-90">Market Monitoring</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-sm opacity-90">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">SOC 2</div>
              <div className="text-sm opacity-90">Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}