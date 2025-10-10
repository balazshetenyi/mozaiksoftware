# Mozaik Software Solutions

A modern, responsive portfolio website for Mozaik Software Solutions - showcasing our expertise in building scalable software, websites, and mobile applications.

## 🚀 Features

- **Responsive Design** - Fully responsive across all devices
- **Dark Mode** - Seamless dark/light theme switching
- **Smooth Animations** - Powered by Framer Motion
- **Contact Form** - EmailJS integration for contact submissions
- **Modern UI** - Clean, professional design with gradient accents
- **SEO Optimized** - Built with Next.js for optimal performance

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Email Service:** EmailJS
- **Deployment:** Vercel

## 📋 Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

## 🔧 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/mozaiksoftware.git
cd mozaiksoftware
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 EmailJS Setup

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Copy your Service ID, Template ID, and Public Key to `.env.local`

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── About.tsx       # About section
│   │   ├── Contact.tsx     # Contact form with EmailJS
│   │   ├── Footer.tsx      # Footer component
│   │   ├── Hero.tsx        # Hero/landing section
│   │   ├── Navbar.tsx      # Navigation bar
│   │   ├── Services.tsx    # Services showcase
│   │   └── ThemeProvider.tsx # Theme context provider
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main page
└── public/
    └── mozaiksoftwarelogo.png # Company logo
```

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/mozaiksoftware)

## 📝 License

© 2025 Mozaik Software Solutions. All rights reserved.

## 📞 Contact

**Address:**
Suite RA01
195-197 Wood Street
London
E17 3NU

**Email:** info@mozaiksoftwaresolutions.com

**Website:** [mozaiksoftwaresolutions.com](https://mozaiksoftwaresolutions.com)

---

Built with ❤️ by Mozaik Software Solutions
