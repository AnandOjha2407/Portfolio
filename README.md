# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Optimized for deployment on Vercel and designed to meet international standards, with special consideration for Japanese company preferences.

## Features

- 🚀 **Modern Stack**: Built with Next.js 14, React 18, and TypeScript
- 📱 **Fully Responsive**: Works seamlessly on all devices
- 🎨 **Beautiful UI**: Clean, professional design with smooth animations
- 🌙 **Dark Mode**: Automatic dark mode support
- ⚡ **Performance**: Optimized for speed and SEO
- 🌍 **International Ready**: Structured for global and Japanese markets
- 🎯 **Vercel Optimized**: Ready for one-click deployment

## Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal background and key highlights
- **Skills**: Technical skills organized by category
- **Experience**: Professional work history
- **Projects**: Featured projects with links to code and demos
- **Contact**: Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd PORTFOLIO
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment on Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository or upload the project folder
4. Vercel will automatically configure and deploy

## Email Configuration

The contact form uses EmailJS to send emails. To set it up:

1. **Sign up for EmailJS** (free tier available):
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Create an account

2. **Create an Email Service**:
   - Go to Email Services
   - Add a new service (Gmail, Outlook, etc.)
   - Connect your email account
   - Note your Service ID

3. **Create an Email Template**:
   - Go to Email Templates
   - Create a new template
   - Use these variables in your template:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
   - Note your Template ID

4. **Get your Public Key**:
   - Go to Account > API Keys
   - Copy your Public Key

5. **Configure Environment Variables**:
   - Copy `.env.local.example` to `.env.local`
   - Fill in your EmailJS credentials:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

6. **Restart your dev server** after adding environment variables

**Alternative**: You can also hardcode the values directly in `components/sections/Contact.tsx` if you prefer (not recommended for production).

## Customization

### Update Personal Information

1. **Hero Section**: Edit `components/sections/Hero.tsx`
   - Change name, title, and description

2. **About Section**: Edit `components/sections/About.tsx`
   - Update your bio and highlights

3. **Skills**: Edit `components/sections/Skills.tsx`
   - Modify skill categories and technologies

4. **Experience**: Edit `components/sections/Experience.tsx`
   - Update work history

5. **Projects**: Edit `components/sections/Projects.tsx`
   - Add your projects with links

6. **Contact**: Edit `components/sections/Contact.tsx`
   - Update contact information and form handling

7. **Footer**: Edit `components/Footer.tsx`
   - Update social media links

8. **Metadata**: Edit `app/layout.tsx`
   - Update SEO metadata

## Project Structure

```
PORTFOLIO/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Footer.tsx          # Footer component
│   └── sections/
│       ├── Hero.tsx        # Hero section
│       ├── About.tsx       # About section
│       ├── Skills.tsx      # Skills section
│       ├── Experience.tsx  # Experience section
│       ├── Projects.tsx    # Projects section
│       └── Contact.tsx     # Contact section
├── public/                 # Static assets
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # Tailwind CSS config
├── next.config.js         # Next.js config
└── vercel.json            # Vercel deployment config
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations
- **Lucide React**: Modern icon library

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please open an issue on the repository.

