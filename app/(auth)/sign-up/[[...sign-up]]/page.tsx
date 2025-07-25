'use client';

import { SignUp, ClerkLoaded, ClerkLoading, useAuth } from '@clerk/nextjs';
import {
  Loader2,
  Rocket,
  Shield,
  BarChart3,
  Target,
  TrendingUp,
  Zap
} from 'lucide-react';

import { useEffect, useState } from 'react';

/**
 * Sign-Up Page Component
 * 
 * This is the main sign-up page for FinTrack, a finance management app.
 * It features a clean, professional UI with branded colors and Lucide icons
 * to enhance trust and engagement. The layout is split into two columns:
 * - Left: Sign-up form (mobile-first)
 * - Right: Value proposition panel (desktop only)
 */
export default function Page() {
  const { isLoaded } = useAuth();
  const [showLoader, setShowLoader] = useState(true);

  // Show initial loader for at least 250ms
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  return (
    // Main container: Full-height grid layout
    // - Single column on mobile
    // - Two equal columns on large screens (lg:)
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

      {/* 
        LEFT SIDE: SIGN-UP FORM 
        - Centered vertically and horizontally
        - White background for clean form presentation
        - Responsive padding (px-4 on mobile, px-8 on large screens)
      */}
      <div className="h-full flex flex-col items-center justify-center px-4 py-12 lg:px-8 bg-white">

        {/* 
          WELCOME TEXT SECTION 
          - Contains logo, title, and subtitle
          - Max-width constrained for readability on large screens
        */}
        <div className="text-center space-y-4 max-w-md w-full">

          {/* Logo Placeholder */}
          <div className="flex justify-center mb-2">
            {/* 
              Simple branded logo badge
              - 48x48px rounded square
              - Green background (#10c484) with white '$' symbol
              - Shadow adds depth
            */}
            <div className="w-12 h-12 rounded-lg bg-[#10c484] flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">$</span>
            </div>
          </div>

          {/* Page Title */}
          <h1 className="font-bold text-3xl text-gray-900 flex items-center justify-center gap-2">
            Create Your
            <span className="text-[#10c484]">FinTrack</span>
            {/* Icon: Target = goal-oriented financial planning */}
            <Target className="w-6 h-6 text-[#10c484]" />
          </h1>

          {/* Subtitle */}
          <p className="text-base text-gray-600 flex items-center justify-center gap-2">
            {/* Icon: TrendingUp = growth & finance */}
            <TrendingUp className="w-4 h-4 text-[#10c484]" />
            Join thousands of users managing their finances smarter. Sign up to get started.
          </p>
        </div>

        {/* 
          CLERK SIGN-UP FORM 
          - Centered with max width for readability
          - Uses Clerk's SignUp component with custom styling
        */}
        <div className="flex items-center justify-center mt-8 w-full max-w-md">

          {/* 
                      Show loader if:
                      - Clerk is not yet loaded (from useAuth)
                      - Or ClerkLoading is active
                    */}
          {(showLoader || !isLoaded) ? (
            <div className="flex flex-col items-center justify-center py-10 space-y-4">
              <Loader2 className="animate-spin w-6 h-6 text-[#10c484]" />
              <p className="text-sm text-gray-500">Loading secure session...</p>
            </div>
          ) : (
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
          )}
        </div>

        {/* 
          TRUST BADGES 
          - Reassures users about security and trial terms
          - Flex layout with icons and separators
        */}
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

      {/* 
        RIGHT SIDE: VALUE PROPOSITION PANEL (Desktop Only)
        - Hidden on mobile (lg:flex)
        - Branded green background (#10c484)
        - Displays key benefits and features
      */}
      <div
        className="hidden lg:flex flex-col justify-center items-center p-12 text-white text-center space-y-8"
        style={{
          background: '#10c484', // Brand green background
        }}
      >
        <div className="max-w-lg space-y-6">

          {/* Hero Headline */}
          <h2 className="font-bold text-4xl leading-tight flex items-center justify-center gap-2">
            <Zap className="w-8 h-8" />
            Start Building Wealth with Confidence
          </h2>

          {/* Feature Description */}
          <p className="text-xl opacity-95">
            Track spending <BarChart3 className="inline w-5 h-5 mx-1" />,
            grow your investments <TrendingUp className="inline w-5 h-5 mx-1" />,
            and reach your goals — all in one place <Zap className="inline w-5 h-5 mx-1" />.
          </p>

          {/* Feature Grid: 3 Key Benefits */}
          <div className="grid grid-cols-3 gap-6 mt-8">

            {/* Free Trial Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold flex items-center justify-center">
                <Rocket className="w-6 h-6" />
              </div>
              <div className="text-sm opacity-90 mt-1">Free 14-Day Trial</div>
            </div>

            {/* Security Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <div className="text-sm opacity-90 mt-1">Secure & Encrypted</div>
            </div>

            {/* Real-Time Insights Card */}
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