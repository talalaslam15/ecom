# E-Commerce Platform

A modern, full-featured e-commerce platform built with Next.js 15, TypeScript, Tailwind CSS v4, and shadcn/ui components. This platform provides a complete online shopping experience with user authentication, product management, order processing, and an intuitive admin dashboard.

## 🚀 Features

- **Next.js 15** with App Router and Turbopack for fast development
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS v4** with custom Amethyst Haze color scheme
- **shadcn/ui** - Beautiful, accessible, and customizable UI components
- **Complete E-commerce System** with shopping cart, checkout, and order management
- **User Authentication** with registration, login, and profile management
- **Admin Dashboard** for managing products, categories, orders, and customers
- **Product Catalog** with categories, search, and filtering
- **Shopping Cart** with persistent state and checkout process
- **Order Management** with status tracking and order history
- **Dark/Light Mode** support with next-themes
- **Responsive Design** with mobile-first approach
- **Database Integration** with Prisma and PostgreSQL
- **Protected Routes** with middleware-based authentication
- **Role-based Access** for customer and admin areas

## 🛍️ E-commerce Features

### Customer Experience

- **Product Browsing** - View products by category with detailed information
- **Shopping Cart** - Add/remove items with quantity management
- **Secure Checkout** - Complete order process with customer information
- **Order Tracking** - View order history and status updates
- **User Account** - Registration, login, and profile management
- **Responsive Design** - Optimized for desktop, tablet, and mobile

### Admin Management

- **Product Management** - Add, edit, and delete products
- **Category Management** - Organize products into categories
- **Order Management** - View and update order status
- **Customer Management** - View customer information and orders
- **Analytics Dashboard** - Sales metrics and performance insights
- **User Management** - Admin user controls and permissions

## 🎨 Design & Theme

This e-commerce platform features the beautiful **Amethyst Haze** color scheme from [tweakcn](https://tweakcn.com), providing a modern purple-themed aesthetic that works perfectly for online retail. The design is optimized for both light and dark modes to enhance the shopping experience.

## 📦 Database Schema

This platform uses Prisma with PostgreSQL and includes the following main entities:

- **Users** - Customer accounts with authentication and profile information
- **Categories** - Product categorization with descriptions and images
- **Products** - Product catalog with pricing, inventory, and category relationships
- **Orders** - Order management with status tracking and customer information
- **OrderItems** - Individual items within orders with quantity and pricing

## 🏗️ Application Structure

### Landing / Public Pages

- **Home** (`/`) - Hero section, featured products, and category highlights
- **Products** (`/products`) - Complete product catalog with search and filters
- **Categories** (`/categories`) - Browse products by category
- **Category Pages** (`/categories/[category]`) - Individual category product listings
- **About** (`/about`) - Company information and why shop with us
- **Services** (`/services`) - Customer service information
- **Contact** (`/contact`) - Contact form and support information
- **Checkout** (`/checkout`) - Secure checkout process
- **Order Success** (`/order-success`) - Order confirmation page

### Authentication Pages

- **Login** (`/auth/login`) - Customer login with email/password
- **Register** (`/auth/register`) - Customer registration form
- _Note: Auth pages redirect based on user role (customer/admin)_

### Customer Dashboard (Protected)

- **My Account** (`/user-dashboard`) - Customer account overview
- **Order History** - View past orders and tracking information
- **Profile Settings** - Update personal information and preferences

### Admin Dashboard (Protected)

- **Dashboard** (`/dashboard`) - Admin overview with sales analytics
- **Products** (`/dashboard/products`) - Product management interface
- **Orders** (`/dashboard/orders`) - Order management and fulfillment
- **Customers** (`/dashboard/customers`) - Customer information and management
- **Analytics** (`/dashboard/analytics`) - Detailed sales and performance metrics
- **Users** (`/dashboard/users`) - User management for admin accounts
- **Settings** (`/dashboard/settings`) - Platform settings and configuration

## 🔐 Authentication & Authorization

### Features

- **Customer Authentication** - Registration and login for shoppers
- **Admin Authentication** - Separate admin login with elevated permissions
- **Role-based Access** - Different interfaces for customers vs. administrators
- **Secure Sessions** - Persistent authentication across browser sessions
- **Protected Routes** - Middleware prevents unauthorized access to admin areas
- **Automatic Redirects** - Smart routing based on authentication status and user role

### User Roles

1. **Customer** - Can browse products, manage cart, place orders, view order history
2. **Admin** - Full access to dashboard, product management, order fulfillment, analytics

### How It Works

1. **Middleware** (`middleware.ts`) - Server-side route protection
2. **Auth Context** (`lib/auth.tsx`) - Client-side authentication state
3. **Route Guards** (`components/route-guard.tsx`) - Component-level protection
4. **Database Integration** - User data stored securely with Prisma
5. **Password Security** - Bcrypt hashing for secure password storage

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ecom
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

3. Set up environment variables:

```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local with your database and authentication settings
DATABASE_URL="postgresql://username:password@localhost:5432/ecom_db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

4. Set up the database:

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate deploy

# Seed the database with sample data
npm run db:seed
```

5. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧪 Testing the Application

### Sample Data

After seeding the database, you'll have:

- Sample product categories (Electronics, Clothing, Books, etc.)
- Featured products with images and descriptions
- Admin user account for testing dashboard features
- Customer accounts for testing shopping experience

### Testing Different User Roles

1. **Customer Experience**:

   - Register a new account or use seeded customer credentials
   - Browse products, add items to cart, complete checkout process
   - View order history in customer dashboard

2. **Admin Experience**:
   - Login with admin credentials (check seed.ts for details)
   - Access admin dashboard for product/order management
   - Test analytics, customer management, and settings features

### Testing E-commerce Flow

1. **Shopping**: Browse products → Add to cart → Checkout → Order confirmation
2. **Order Management**: Admin dashboard → Orders → Update order status
3. **Product Management**: Admin dashboard → Products → Add/edit products

## 🏗️ Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── (landing)/               # Public e-commerce pages group
│   │   ├── layout.tsx           # Landing pages layout with header/footer
│   │   ├── page.tsx             # Home page with featured products
│   │   ├── about/page.tsx       # About the store
│   │   ├── products/page.tsx    # Product catalog
│   │   ├── categories/          # Category browsing
│   │   │   ├── page.tsx         # All categories
│   │   │   └── [category]/page.tsx # Individual category
│   │   ├── checkout/page.tsx    # Checkout process
│   │   ├── order-success/page.tsx # Order confirmation
│   │   ├── services/page.tsx    # Customer services
│   │   └── contact/page.tsx     # Contact information
│   ├── auth/                    # Authentication pages
│   │   ├── layout.tsx           # Auth layout (centered forms)
│   │   ├── login/page.tsx       # Login page
│   │   └── register/page.tsx    # Registration page
│   ├── dashboard/               # Admin dashboard (protected)
│   │   ├── layout.tsx           # Dashboard layout with sidebar
│   │   ├── page.tsx             # Admin overview
│   │   ├── analytics/page.tsx   # Sales analytics
│   │   ├── products/page.tsx    # Product management
│   │   ├── orders/page.tsx      # Order management
│   │   ├── customers/page.tsx   # Customer management
│   │   ├── users/page.tsx       # User administration
│   │   └── settings/page.tsx    # Platform settings
│   ├── user-dashboard/          # Customer dashboard (protected)
│   │   ├── layout.tsx           # Customer layout
│   │   └── page.tsx             # Customer account overview
│   ├── globals.css              # Global styles with Amethyst Haze theme
│   ├── layout.tsx               # Root layout with providers
│   └── page.tsx                 # Root redirect to landing
├── components/                  # React components
│   ├── ui/                     # shadcn/ui components
│   ├── header.tsx              # E-commerce header with cart
│   ├── footer.tsx              # Store footer
│   ├── product-card.tsx        # Product display component
│   ├── cart-sheet.tsx          # Shopping cart sidebar
│   ├── dashboard-sidebar.tsx   # Admin navigation
│   ├── user-sidebar.tsx        # Customer navigation
│   ├── route-guard.tsx         # Route protection
│   └── theme-provider.tsx      # Theme management
├── lib/                        # Utility functions and configurations
│   ├── auth.tsx                # Authentication logic
│   ├── cart.tsx                # Shopping cart state management
│   ├── prisma.ts               # Database client
│   ├── analytics.ts            # Analytics utilities
│   ├── utils.ts                # General utilities
│   └── actions/                # Server actions
│       ├── auth.ts             # Authentication actions
│       ├── products.ts         # Product management actions
│       ├── orders.ts           # Order management actions
│       ├── customers.ts        # Customer management actions
│       └── analytics.ts        # Analytics actions
├── prisma/                     # Database schema and migrations
│   ├── schema.prisma           # Database schema definition
│   ├── seed.ts                 # Database seeding script
│   └── migrations/             # Database migration files
├── hooks/                      # Custom React hooks
├── types/                      # TypeScript type definitions
├── public/                     # Static assets (product images, etc.)
├── middleware.ts               # Server-side route protection
└── components.json             # shadcn/ui configuration
```

## 🎨 Customization

### Theme Customization

The platform uses the **Amethyst Haze** color scheme from [tweakcn](https://tweakcn.com). To customize:

1. **Colors**: Modify the CSS custom properties in `app/globals.css`
2. **Theme Switching**: The dark/light mode toggle automatically adapts the color scheme
3. **Component Styling**: Use Tailwind classes that reference the custom color variables

### Adding New Products

1. **Via Admin Dashboard**: Login as admin → Products → Add New Product
2. **Via Database Seeding**: Update `prisma/seed.ts` with new product data
3. **Via API**: Use the product management actions in `lib/actions/products.ts`

### Adding New Pages

#### Landing Pages (Public)

1. Create a new page in `app/(landing)/your-page/page.tsx`
2. Add navigation link in `components/header.tsx` and `components/footer.tsx`

#### Dashboard Pages (Admin)

1. Create a new page in `app/dashboard/your-page/page.tsx`
2. Add navigation link in `components/dashboard-sidebar.tsx`

#### Customer Pages

1. Create a new page in `app/user-dashboard/your-page/page.tsx`
2. Add navigation link in `components/user-sidebar.tsx`

### E-commerce Customization

#### Payment Integration

To add real payment processing (Stripe, PayPal, etc.):

1. Install payment provider SDK
2. Update checkout process in `app/(landing)/checkout/page.tsx`
3. Add payment webhooks for order confirmation
4. Update order status management in admin dashboard

#### Shipping Integration

1. Add shipping calculator to checkout process
2. Integrate with shipping providers (UPS, FedEx, etc.)
3. Add tracking number fields to order model
4. Update order status with shipping information

#### Inventory Management

1. Update stock levels when orders are placed
2. Add low stock alerts in admin dashboard
3. Implement automatic reorder points
4. Add inventory reporting in analytics

### Authentication Integration

For production use with real authentication:

1. Replace demo auth with NextAuth.js or Auth0
2. Update `lib/auth.tsx` with real authentication provider
3. Modify `middleware.ts` to validate real JWT tokens
4. Implement proper session management with secure cookies

## 📚 Built With

- [Next.js](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety and better DX
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful, accessible components
- [Prisma](https://www.prisma.io/) - Type-safe database ORM
- [PostgreSQL](https://www.postgresql.org/) - Robust relational database
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible component primitives
- [next-themes](https://github.com/pacocoursey/next-themes) - Perfect dark mode support
- [React Hook Form](https://react-hook-form.com/) - Performant form handling
- [Zod](https://zod.dev/) - TypeScript-first schema validation
- [Lucide React](https://lucide.dev/) - Beautiful, customizable icons
- [Recharts](https://recharts.org/) - Composable charting library for analytics
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js) - Password hashing
- [tweakcn](https://tweakcn.com) - Amethyst Haze color scheme

## 🔧 Architecture Decisions

### E-commerce Architecture

- **Product Catalog**: Organized by categories with full product information
- **Shopping Cart**: Client-side state management with persistent storage
- **Order Processing**: Secure checkout flow with order confirmation
- **User Management**: Role-based access for customers and administrators
- **Inventory Tracking**: Real-time stock management with low stock alerts

### Database Design

- **Normalized Schema**: Proper relationships between users, products, orders
- **Order History**: Complete order tracking with item details and pricing
- **Category System**: Hierarchical product categorization
- **User Roles**: Separate customer and admin functionality
- **Audit Trail**: Created/updated timestamps for all entities

### Performance Optimizations

- **Next.js 15**: Latest version with performance improvements
- **Turbopack**: Fast bundler for development
- **Code Splitting**: Automatic code splitting by route
- **Image Optimization**: Next.js image optimization for product photos
- **Database Indexing**: Optimized queries for product search and filtering

### Security Features

- **Authentication**: Secure user registration and login
- **Authorization**: Role-based access control
- **Data Validation**: Zod schemas for all form inputs
- **SQL Injection Protection**: Prisma ORM prevents SQL injection
- **Password Security**: Bcrypt hashing for stored passwords

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

For production deployment, set up these environment variables:

```bash
# .env.production
DATABASE_URL="postgresql://username:password@host:5432/ecom_production"
NEXTAUTH_SECRET="your-production-secret-key"
NEXTAUTH_URL="https://yourdomain.com"

# Optional: Payment Provider Keys
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_PUBLISHABLE_KEY="pk_live_..."

# Optional: Email Service
SENDGRID_API_KEY="SG...."
EMAIL_FROM="noreply@yourdomain.com"

# Optional: File Upload
CLOUDINARY_URL="cloudinary://..."
AWS_S3_BUCKET="your-bucket-name"
```

### Security Considerations

- **Database Security**: Use connection pooling and SSL certificates
- **Authentication**: Implement secure session management
- **Payment Security**: Use PCI-compliant payment processors
- **Data Validation**: Validate all input on server side
- **Rate Limiting**: Implement rate limiting for API endpoints
- **HTTPS**: Use SSL certificates for all traffic
- **Environment Variables**: Keep sensitive data in environment variables

### Performance

- **Database Optimization**: Add proper indexes for product search
- **Image Optimization**: Use CDN for product images
- **Caching**: Implement Redis for session and product data caching
- **Core Web Vitals**: Monitor loading performance
- **Code Splitting**: Optimize bundle sizes for faster loading

### E-commerce Specific

- **Payment Processing**: Integrate real payment gateways
- **Order Fulfillment**: Connect with shipping providers
- **Inventory Management**: Implement real-time stock tracking
- **Email Notifications**: Set up order confirmation emails
- **Analytics**: Add Google Analytics or custom analytics
- **SEO**: Optimize product pages for search engines

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines

- Follow the existing code style and patterns
- Add TypeScript types for all new code
- Test both customer and admin workflows
- Ensure responsive design works on all screen sizes
- Maintain accessibility standards
- Update database schema documentation when making changes

### Feature Requests

Popular feature requests for future development:

- **Wishlist/Favorites**: Allow customers to save products
- **Product Reviews**: Customer review and rating system
- **Coupon System**: Discount codes and promotional pricing
- **Multi-vendor**: Support for multiple sellers
- **Advanced Search**: Filters by price, brand, ratings, etc.
- **Mobile App**: React Native companion app
- **Internationalization**: Multi-language and currency support

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🏆 Features Showcase

This e-commerce platform demonstrates modern React and Next.js patterns:

- ✅ **Server Components** - Optimal performance with RSCs
- ✅ **Client Components** - Interactive shopping cart and checkout
- ✅ **Route Groups** - Clean organization with multiple layouts
- ✅ **Middleware** - Server-side authentication and role protection
- ✅ **TypeScript** - Full type safety throughout
- ✅ **Database Integration** - Prisma ORM with PostgreSQL
- ✅ **Role-based Access** - Customer and admin user types
- ✅ **Shopping Cart** - Persistent cart state management
- ✅ **Order Management** - Complete order lifecycle
- ✅ **Product Catalog** - Searchable and filterable products
- ✅ **Responsive Design** - Mobile-first e-commerce experience
- ✅ **Accessibility** - WCAG compliant components
- ✅ **Dark Mode** - Seamless theme switching
- ✅ **Modern Styling** - Tailwind CSS with custom theme
- ✅ **Form Handling** - Robust form validation for checkout
- ✅ **Analytics** - Sales and customer insights
- ✅ **Admin Dashboard** - Complete store management interface

Built with ❤️ for modern e-commerce using the latest best practices in React and Next.js development.
