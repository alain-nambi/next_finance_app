'use client';

import { SignIn, ClerkLoaded, ClerkLoading, useAuth } from '@clerk/nextjs';
import {
  Loader2,
  Shield,
  Lock,
  Target,
  TrendingUp,
  BarChart3,
  Zap,
  Signal,
  CheckCircle,
  ShieldCheck
} from 'lucide-react';

import { useEffect, useState } from 'react';

/**
 * Sign-In Page Component
 * 
 * This is the main authentication sign-in page for FinTrack, a financial dashboard app.
 * It features:
 * - A clean, secure, and user-friendly interface
 * - Branded green color (#10c484) for consistency
 * - Lucide icons to enhance trust and visual clarity
 * - Responsive layout (single column on mobile, split on desktop)
 * 
 * The right panel highlights key product benefits to engage returning users.
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
    // Main container: Full-height responsive grid
    // - 1 column on mobile (stacked)
    // - 2 equal columns on large screens (side-by-side)
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

      {/* 
        LEFT SIDE: SIGN-IN FORM (Public Area)
        - Centered content with vertical padding
        - White background for form clarity
        - Responsive max-width to prevent stretching on wide screens
      */}
      <div className="h-full flex flex-col items-center justify-center px-4 py-12 lg:px-8 bg-white">

        {/* 
          BRAND IDENTITY SECTION 
          - Logo and welcome message
          - Max-width constrained for readability
        */}
        <div className="text-center space-y-4 max-w-md w-full">

          {/* Logo Badge */}
          <div className="flex justify-center mb-2">
            {/* 
              Simple circular/square logo placeholder
              - Green background (#10c484) for brand consistency
              - White '$' symbol representing finance
              - Shadow adds depth and modern feel
            */}
            <div className="w-12 h-12 rounded-lg bg-[#10c484] flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">$</span>
            </div>
          </div>

          {/* Page Title */}
          <h1 className="font-bold text-3xl text-gray-900 flex items-center justify-center gap-2">
            Welcome to
            <span className="text-[#10c484]">FinTrack</span>
            {/* Icon: Target = goal-focused financial planning */}
            <Target className="w-6 h-6 text-[#10c484]" />
          </h1>

          {/* Subtitle */}
          <p className="text-base text-gray-600 flex items-center justify-center gap-2">
            {/* Icon: Lock = security and privacy */}
            <Lock className="w-4 h-4 text-[#10c484]" />
            Sign in securely to manage your investments and track financial goals.
          </p>
        </div>

        {/* 
          CLERK SIGN-IN FORM 
          - Conditionally rendered when Clerk is loaded
          - Centered with max width for optimal UX
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
          )}
        </div>

        {/* 
          TRUST INDICATORS 
          - Reinforces security and compliance
          - Uses icons and concise text
          - Responsive layout with flex-wrap
        */}
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

      {/* 
        RIGHT SIDE: VALUE PROPOSITION PANEL (Desktop Only)
        - Hidden on mobile (lg:flex only)
        - Branded green background (#10c484)
        - Highlights core benefits of using FinTrack
      */}
      <div
        className="hidden lg:flex flex-col justify-center items-center p-12 text-white text-center space-y-8"
        style={{
          background: '#10c484', // Matches brand color for visual continuity
        }}
      >
        <div className="max-w-lg space-y-6">

          {/* Hero Headline */}
          <h2 className="font-bold text-4xl leading-tight flex items-center justify-center gap-2">
            <BarChart3 className="w-8 h-8" />
            Take Control of Your Financial Future
          </h2>

          {/* Feature Highlights */}
          <p className="text-xl opacity-95">
            Track investments <TrendingUp className="inline w-5 h-5" />,
            monitor portfolios <BarChart3 className="inline w-5 h-5" />,
            and make informed decisions with real-time insights <Zap className="inline w-5 h-5" />.
          </p>

          {/* Key Features Grid */}
          <div className="grid grid-cols-3 gap-6 mt-8">

            {/* 24/7 Monitoring */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold flex items-center justify-center gap-1">
                <Signal className="w-5 h-5" /> 24/7
              </div>
              <div className="text-sm opacity-90">Monitoring</div>
            </div>

            {/* System Uptime */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold flex items-center justify-center gap-1">
                <CheckCircle className="w-5 h-5" /> 99.9%
              </div>
              <div className="text-sm opacity-90">Uptime</div>
            </div>

            {/* Compliance */}
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