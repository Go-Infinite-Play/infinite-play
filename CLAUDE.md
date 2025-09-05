# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

This is a Next.js 15 marketing website for Infinite Play, an AI transformation consulting company. The project uses:

- **Framework**: Next.js 15 with App Router
- **Build Tool**: Turbopack (enabled for both dev and build)
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Animations**: Framer Motion
- **Fonts**: Inter and Plus Jakarta Sans (Google Fonts)
- **Icons**: Lucide React

### Project Structure

- `app/` - Next.js App Router with layout.tsx and page.tsx
- `components/` - Reusable React components for each section (Hero, Navigation, Process, Services, etc.)
- `lib/` - Utility functions including animations, constants, and utils

### Key Components

The main page (`app/page.tsx`) is structured as a single-page application with these sections:
- Navigation
- Hero
- Introduction  
- Process
- Services
- About
- CTA (Call to Action)
- Footer

### Configuration Notes

- **TypeScript**: Strict mode enabled with `@/*` path alias
- **shadcn/ui**: Configured with New York style, RSC enabled, neutral base color
- **ESLint**: Uses Next.js core-web-vitals and TypeScript rules
- **Metadata**: SEO-optimized with Open Graph and Twitter card support for infiniteplay.ai domain

### Component Aliases

As defined in `components.json`:
- `@/components` - Main components directory
- `@/lib/utils` - Utility functions  
- `@/components/ui` - shadcn/ui components
- `@/lib` - Library functions
- `@/hooks` - Custom React hooks