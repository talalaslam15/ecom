# Next.js Dashboard Template

A modern, feature-rich Next.js dashboard template built with TypeScript, Tailwind CSS v4, and shadcn/ui components. This template provides a solid foundation for building beautiful, accessible, and responsive dashboard applications with complete authentication and route protection.

## 🚀 Features

- **Next.js 15** with App Router and Turbopack for fast development
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS v4** with custom Amethyst Haze color scheme
- **shadcn/ui** - Beautiful, accessible, and customizable UI components
- **Complete Authentication System** with route protection and middleware
- **Dark/Light Mode** support with next-themes
- **Responsive Design** with mobile-first approach
- **Protected Routes** - Dashboard pages require authentication
- **Public Landing Pages** - Marketing pages accessible to all users
- **Route Guards** - Client and server-side protection
- **Form Handling** with React Hook Form and Zod validation
- **Charts & Visualizations** with Recharts
- **Icons** from Lucide React
- **ESLint** configuration for code quality

## 🎨 Design & Theme

This template features the beautiful **Amethyst Haze** color scheme from [tweakcn](https://tweakcn.com), providing a modern purple-themed aesthetic that works perfectly in both light and dark modes.

## 📦 Included Components

This template comes with a comprehensive set of pre-built components from shadcn/ui:

- **Layout**: Sidebar, Navigation Menu, Breadcrumb, Header, Footer
- **Forms**: Input, Textarea, Select, Checkbox, Radio Group, Switch
- **Data Display**: Table, Card, Badge, Avatar, Separator, Progress
- **Feedback**: Alert, Toast (Sonner), Skeleton
- **Overlays**: Dialog, Sheet, Popover, Hover Card, Tooltip
- **Navigation**: Tabs, Accordion, Command, Pagination
- **Interactive**: Button, Dropdown Menu, Context Menu, Carousel

## 🏗️ Application Structure

### Landing / Public Pages

- **Home** (`/`) - Hero section with features and call-to-action
- **About** (`/about`) - Company information and mission
- **Services** (`/services`) - Service offerings with detailed descriptions
- **Contact** (`/contact`) - Contact form and information

### Authentication Pages

- **Login** (`/auth/login`) - User login with email/password
- **Register** (`/auth/register`) - User registration form
- _Note: Auth pages redirect to dashboard if user is already logged in_

### Dashboard Pages (Protected)

- **Dashboard** (`/dashboard`) - Main dashboard with analytics overview
- **Analytics** (`/dashboard/analytics`) - Detailed analytics and metrics
- **Users** (`/dashboard/users`) - User management interface
- **Settings** (`/dashboard/settings`) - Application settings and preferences
- _Note: All dashboard pages require authentication_

## 🔐 Authentication System

### Features

- **Demo Authentication** - Any email/password combination works for testing
- **Route Protection** - Middleware prevents unauthorized access
- **Persistent Sessions** - User state maintained across browser sessions
- **Automatic Redirects** - Smart routing based on authentication status
- **Client & Server Guards** - Protection at both levels to prevent UI flashing

### How It Works

1. **Middleware** (`middleware.ts`) - Server-side route protection
2. **Auth Context** (`lib/auth.tsx`) - Client-side authentication state
3. **Route Guards** (`components/route-guard.tsx`) - Component-level protection
4. **Cookie Management** - Secure session handling

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd nextjs-dashboard-typescript-tailwind-shadcn-template
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧪 Testing the Application

### Demo Authentication

- Use any email and password to log in (e.g., `test@example.com` / `password123`)
- The system accepts any credentials for demonstration purposes
- Upon login, you'll be redirected to the dashboard

### Testing Routes

1. **Public Routes**: Navigate to `/`, `/about`, `/services`, `/contact` (accessible to all)
2. **Auth Routes**: Visit `/auth/login` or `/auth/register` (redirects to dashboard if logged in)
3. **Protected Routes**: Try accessing `/dashboard` (redirects to login if not authenticated)

## 🏗️ Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── (landing)/               # Public landing pages group
│   │   ├── layout.tsx           # Landing pages layout with header/footer
│   │   ├── page.tsx             # Home page
│   │   ├── about/page.tsx       # About page
│   │   ├── services/page.tsx    # Services page
│   │   └── contact/page.tsx     # Contact page
│   ├── auth/                    # Authentication pages
│   │   ├── layout.tsx           # Auth layout (centered forms)
│   │   ├── login/page.tsx       # Login page
│   │   └── register/page.tsx    # Register page
│   ├── dashboard/               # Protected dashboard pages
│   │   ├── layout.tsx           # Dashboard layout with sidebar
│   │   ├── page.tsx             # Main dashboard
│   │   ├── analytics/page.tsx   # Analytics page
│   │   ├── users/page.tsx       # Users management
│   │   └── settings/page.tsx    # Settings page
│   ├── globals.css              # Global styles with Amethyst Haze theme
│   ├── layout.tsx               # Root layout with providers
│   └── page.tsx                 # Root redirect to landing
├── components/                  # React components
│   ├── ui/                     # shadcn/ui components
│   ├── header.tsx              # Landing page header with navigation
│   ├── footer.tsx              # Landing page footer
│   ├── dashboard-sidebar.tsx   # Dashboard sidebar navigation
│   ├── route-guard.tsx         # Client-side route protection
│   ├── DarkModeToggle.tsx      # Dark mode toggle component
│   └── theme-provider.tsx      # Theme provider wrapper
├── lib/                        # Utility functions and configurations
│   ├── auth.tsx                # Authentication context and logic
│   └── utils.ts                # Utility functions (cn, etc.)
├── hooks/                      # Custom React hooks
├── public/                     # Static assets
├── middleware.ts               # Server-side route protection
└── components.json             # shadcn/ui configuration
```

## 🎨 Customization

### Theme Customization

The template uses the **Amethyst Haze** color scheme from [tweakcn](https://tweakcn.com). To customize:

1. **Colors**: Modify the CSS custom properties in `app/globals.css`
2. **Theme Switching**: The dark/light mode toggle automatically adapts the color scheme
3. **Component Styling**: Use Tailwind classes that reference the custom color variables

### Adding New Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add <component-name>
```

### Adding New Pages

#### Landing Pages (Public)

1. Create a new page in `app/(landing)/your-page/page.tsx`
2. Add navigation link in `components/header.tsx` and `components/footer.tsx`

#### Dashboard Pages (Protected)

1. Create a new page in `app/dashboard/your-page/page.tsx`
2. Add navigation link in `components/dashboard-sidebar.tsx`

### Authentication Integration

For production use, replace the demo authentication with a real backend:

1. Update `lib/auth.tsx` to call your authentication API
2. Modify `middleware.ts` to validate real JWT tokens
3. Implement proper session management with secure cookies

### Styling

- Modify `app/globals.css` for global styles and theme variables
- Use Tailwind CSS classes for component styling
- The Amethyst Haze theme provides semantic color names like `bg-background`, `text-foreground`

### Dark Mode

The template includes automatic dark mode support:

- Theme managed by `next-themes`
- Toggle component in header and dashboard sidebar
- Color scheme automatically adapts in both landing and dashboard layouts

## 📚 Built With

- [Next.js](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety and better DX
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful, accessible components
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible component primitives
- [next-themes](https://github.com/pacocoursey/next-themes) - Perfect dark mode support
- [React Hook Form](https://react-hook-form.com/) - Performant form handling
- [Zod](https://zod.dev/) - TypeScript-first schema validation
- [Lucide React](https://lucide.dev/) - Beautiful, customizable icons
- [Recharts](https://recharts.org/) - Composable charting library
- [tweakcn](https://tweakcn.com) - Amethyst Haze color scheme

## 🔧 Architecture Decisions

### Route Organization

- **Route Groups**: Used `(landing)` for public pages to separate layouts
- **Middleware Protection**: Server-side route protection for security
- **Client Guards**: Additional protection to prevent UI flashing
- **Nested Layouts**: Different layouts for landing vs dashboard

### Authentication Flow

- **Demo Mode**: Accepts any credentials for easy testing
- **Cookie-Based**: Uses secure cookies for session management
- **Context API**: React context for client-side state management
- **Automatic Redirects**: Smart routing based on authentication status

### Performance Optimizations

- **Next.js 15**: Latest version with performance improvements
- **Turbopack**: Fast bundler for development
- **Code Splitting**: Automatic code splitting by route
- **Tree Shaking**: Only imports what's needed

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Other Platforms

This template can be deployed to any platform that supports Node.js:

- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [Render](https://render.com/)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform/)

## 📖 Learn More

To learn more about the technologies used in this template:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Next.js App Router](https://nextjs.org/docs/app) - modern routing and layouts
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS
- [shadcn/ui Documentation](https://ui.shadcn.com/docs) - learn about shadcn/ui components
- [Radix UI Documentation](https://www.radix-ui.com/docs) - accessible component primitives
- [tweakcn](https://tweakcn.com) - beautiful themes for shadcn/ui

## 🚀 Production Deployment

### Environment Variables

For production deployment, you'll need to set up proper environment variables:

```bash
# .env.local
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://yourdomain.com
DATABASE_URL=your-database-connection-string
```

### Security Considerations

- Replace demo authentication with real authentication provider
- Use secure, HTTP-only cookies for session management
- Implement proper CSRF protection
- Add rate limiting for authentication endpoints
- Use environment variables for sensitive configuration

### Performance

- Enable image optimization for production
- Configure proper caching headers
- Set up CDN for static assets
- Monitor Core Web Vitals

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines

- Follow the existing code style and patterns
- Add TypeScript types for all new code
- Test both authentication flows (logged in/out)
- Ensure responsive design works on all screen sizes
- Maintain accessibility standards

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🏆 Features Showcase

This template demonstrates modern React and Next.js patterns:

- ✅ **Server Components** - Optimal performance with RSCs
- ✅ **Client Components** - Interactive UI where needed
- ✅ **Route Groups** - Clean organization with multiple layouts
- ✅ **Middleware** - Server-side authentication protection
- ✅ **TypeScript** - Full type safety throughout
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Accessibility** - WCAG compliant components
- ✅ **Dark Mode** - Seamless theme switching
- ✅ **Modern Styling** - Tailwind CSS with custom theme
- ✅ **Form Handling** - Robust form validation
- ✅ **Route Protection** - Multiple layers of security

Built with ❤️ using the latest best practices in React and Next.js development.
