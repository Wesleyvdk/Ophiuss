# Ophiussa Esports Website

A modern, professional marketing website for Ophiussa Esports built with Next.js 15, React 19, and Neon PostgreSQL. Features a complete team management system, achievements showcase, news updates, and contact information.

## ✨ Features

### 🏠 Landing Page
- **Hero Section**: Eye-catching introduction with call-to-action
- **About Section**: Organization mission and values
- **Featured Content**: Highlights of recent achievements and news
- **Team Showcase**: Quick overview of key team members

### 👥 Team Roster
- **Dynamic Team Management**: Database-driven team member profiles
- **Category Organization**: Management, Players, Content Creators
- **Detailed Profiles**: Photos, roles, bios, and Discord information
- **Admin Interface**: Easy team member management through API

### 🏆 Achievements
- **RSC Participation**: Tournament involvement and competitive history
- **Team Milestones**: Organizational growth and key accomplishments  
- **Community Growth**: Discord server metrics and engagement stats
- **Trophy Display**: Visual achievement showcase with descriptions

### 📰 News & Updates
- **Team News**: Latest announcements and updates
- **Roster Changes**: Player additions, departures, and role updates
- **Community Milestones**: Server growth and community achievements
- **Newsletter Signup**: Email subscription for regular updates

### 📞 Contact & Applications
- **Multiple Contact Methods**: Discord, email, and social media
- **Application Forms**: Player and staff recruitment processes
- **FAQ Section**: Common questions and detailed answers
- **Community Guidelines**: Discord server rules and expectations

## 🚀 Technology Stack

- **Next.js 15.3.0** - Latest React framework with App Router
- **React 19** - Cutting-edge React with concurrent features
- **TypeScript** - Full type safety and enhanced developer experience
- **Neon PostgreSQL** - Serverless PostgreSQL database
- **Tailwind CSS** - Modern utility-first CSS framework
- **Shadcn/ui** - Beautiful, accessible component library (50+ components)
- **Lucide React** - Consistent icon system
- **Vercel Analytics** - Performance monitoring and insights

## 🏗️ Architecture

### Database Layer
- **Native SQL Queries**: Direct PostgreSQL queries with `@neondatabase/serverless`
- **Type-Safe Operations**: Custom TypeScript interfaces and query helpers
- **Serverless Optimized**: Efficient connection pooling and query performance
- **Migration Ready**: Easy schema updates and data management

### Component Structure
```
/app
├── (marketing)/         # Marketing pages group
│   ├── achievements/    # Achievements showcase
│   ├── news/           # News and updates
│   ├── contact/        # Contact and applications
│   └── team-roster/    # Team management
├── api/
│   ├── seed/           # Database seeding endpoint
│   └── team/           # Team CRUD operations
├── globals.css         # Global styles and Tailwind
└── layout.tsx          # Root layout with metadata

/components/ui/         # Shadcn/ui component library
/lib/
├── database.ts         # Database connection and helpers
├── actions.ts          # Server actions for team management
└── utils.ts            # Utility functions
```

## 🔧 Environment Setup

Create a `.env.local` file with the following variables:

```env
# Database Configuration
DATABASE_URL=your-neon-postgresql-url

# Optional: Analytics and monitoring
VERCEL_ANALYTICS_ID=your-vercel-analytics-id
```

## 🚀 Getting Started

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up environment variables** (see above)
4. **Set up the database**:
   ```bash
   # The database will be created automatically on first run
   # Seed with sample data
   curl http://localhost:3000/api/seed
   ```
5. **Run the development server**:
   ```bash
   npm run dev
   ```
6. **Open [http://localhost:3000](http://localhost:3000)**

## 🗃️ Database Schema

### Team Members Table
```sql
CREATE TABLE team_members (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  category VARCHAR(50) NOT NULL CHECK (category IN ('Management', 'Players', 'Content Creators')),
  image_url TEXT,
  bio TEXT,
  discord_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 📱 Responsive Design

- **Mobile-First**: Optimized for mobile devices with progressive enhancement
- **Tablet Support**: Perfect layout adaptation for tablet viewing
- **Desktop Experience**: Full-featured desktop interface
- **Accessibility**: WCAG compliant with proper semantic HTML

## 🎨 Design System

### Color Scheme
- **Primary**: Professional blue tones for branding
- **Secondary**: Complementary accent colors
- **Neutral**: Carefully selected grays for text and backgrounds
- **Success/Warning/Error**: Semantic colors for user feedback

### Typography
- **Headings**: Clear hierarchy with proper font weights
- **Body Text**: Readable font sizes and line heights
- **Code**: Monospace fonts for technical content

### Components
- **Cards**: Consistent card-based layouts
- **Buttons**: Multiple variants and states
- **Forms**: Accessible form controls with validation
- **Navigation**: Responsive navigation with mobile menu

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect repository** to Vercel
2. **Set environment variables** in dashboard
3. **Deploy** - automatic builds on push
4. **Custom domain** setup (optional)

### Other Platforms
1. **Build the application**:
   ```bash
   npm run build
   ```
2. **Set environment variables** on your platform
3. **Deploy the `.next` folder** and `package.json`

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for Google's performance standards
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Caching**: Efficient caching strategies for static and dynamic content

## 🔒 Security

- **SQL Injection Protection**: Parameterized queries and input validation
- **XSS Prevention**: Proper input sanitization and output encoding
- **CSRF Protection**: Built-in Next.js CSRF protection
- **Environment Variables**: Secure handling of sensitive configuration

## 📋 Version History

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history and breaking changes.

## 🔗 Related Projects

- **Discord Bot**: `../ophiussa-esports-bot` - Main bot with shared database
- **Leaderboards**: `../ophiussaWeb` - Player statistics and rankings

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Test all pages and functionality**
5. **Check responsive design on multiple devices**
6. **Submit a pull request**

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain component consistency with Shadcn/ui
- Test database operations thoroughly
- Ensure mobile responsiveness

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For questions or issues:
- **Discord**: Join our server for community support
- **Issues**: Create a GitHub issue for bugs or feature requests
- **Email**: Contact the development team directly

---

**Built with ❤️ for the Ophiussa Esports community** 