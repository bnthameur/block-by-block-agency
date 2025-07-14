# Block by Block Solutions - Blockchain Marketing Agency Website

## Overview

This is a modern, responsive website for Block by Block Solutions, a blockchain marketing agency specializing in crypto project marketing, exchange listings, and content marketing. The application is built with a full-stack TypeScript architecture using React frontend and Express.js backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Framework**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions and interactions
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure
- **Request Handling**: JSON and URL-encoded data support
- **Error Handling**: Centralized error middleware
- **Logging**: Custom request/response logging middleware

### Build System
- **Frontend**: Vite for fast development and optimized builds
- **Backend**: ESBuild for server bundling
- **Development**: Hot module replacement via Vite
- **TypeScript**: Strict mode with modern ES features

## Key Components

### Core Pages
- **Home**: Hero section with company overview, services preview, and client showcase
- **About**: Detailed company information and process explanation
- **Services**: Comprehensive service offerings with detailed descriptions
- **Contact**: Contact form with validation and submission handling

### UI Components
- Comprehensive design system with 30+ reusable components
- Dark theme optimized for blockchain/crypto aesthetic
- Responsive design with mobile-first approach
- Gradient-based brand identity (blue to cyan)

### Contact Management
- Contact form submission with validation
- Backend storage using in-memory data store (MemStorage)
- Admin endpoint for viewing submissions
- Form validation using Zod schemas

## Data Flow

### Contact Form Submission
1. User fills out contact form with validation
2. Form data validated using Zod schema
3. POST request to `/api/contact` endpoint
4. Data stored in memory-based storage system
5. Success/error response returned to frontend
6. Toast notification displayed to user

### Content Management
- Static content management through React components
- Image assets stored in `/attached_assets` directory
- Client logos and marketing materials integrated into components

## External Dependencies

### Frontend Libraries
- **UI Components**: Radix UI primitives for accessibility
- **Animations**: Framer Motion for smooth interactions
- **Styling**: Tailwind CSS with CSS variables for theming
- **Icons**: Lucide React icon library
- **Forms**: React Hook Form with Hookform resolvers
- **Validation**: Zod for schema validation
- **HTTP Client**: Native fetch with custom wrapper

### Backend Libraries
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Driver**: Neon Database serverless driver
- **Session Management**: Connect-pg-simple for PostgreSQL sessions
- **Validation**: Drizzle-zod integration for schema validation

### Development Tools
- **Replit Integration**: Custom Vite plugins for Replit environment
- **Error Overlay**: Runtime error modal for development
- **Code Mapping**: Cartographer plugin for better debugging

## Deployment Strategy

### Development Environment
- Vite development server with HMR
- Express server with middleware integration
- TypeScript compilation with incremental builds
- Auto-reload on file changes

### Production Build
1. Vite builds frontend to `dist/public`
2. ESBuild bundles backend to `dist/index.js`
3. Single deployment artifact with static file serving
4. Environment variable configuration for database

### Database Strategy
- Drizzle ORM with PostgreSQL dialect
- Environment-based database URL configuration
- Migration support through Drizzle Kit
- Current implementation uses in-memory storage for contact submissions
- Ready for PostgreSQL integration when database is provisioned

### Hosting Considerations
- Configured for Replit deployment
- Static assets served through Express
- Environment variable support for production settings
- Database connection ready for external PostgreSQL instance

## Key Architectural Decisions

### Database Strategy
- **Problem**: Need for data persistence and contact management
- **Solution**: Drizzle ORM with PostgreSQL setup and in-memory fallback
- **Rationale**: Provides type safety, easy migrations, and production scalability while allowing development without database setup

### UI Framework Choice
- **Problem**: Need for consistent, accessible, and customizable UI components
- **Solution**: Shadcn/ui with Radix UI primitives and Tailwind CSS
- **Rationale**: Provides copy-paste components with full customization, excellent accessibility, and modern styling approach

### State Management
- **Problem**: Server state synchronization and caching
- **Solution**: TanStack Query for server state, React hooks for local state
- **Rationale**: Eliminates boilerplate, provides caching, background updates, and excellent developer experience

### Routing Solution
- **Problem**: Client-side routing without full framework overhead
- **Solution**: Wouter for lightweight routing
- **Rationale**: Small bundle size, simple API, and sufficient for marketing website needs