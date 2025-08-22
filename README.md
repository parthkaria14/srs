# SRS Property Consultants - Real Estate Website

A modern, responsive real estate website built with Next.js for SRS Property Consultants, showcasing premium properties in Mumbai with advanced features like PDF brochure generation, financial calculators, and email integration.

## 🏢 About SRS Property Consultants

SRS Property Consultants is a trusted name in Mumbai's real estate industry with over 25 years of experience. We specialize in residential properties, offering transparent, timely, and quality-focused development services.

## 🚀 Features

### 🏠 **Project Showcase**

- Interactive project galleries with high-quality images
- Detailed project information with amenities and features
- Professional PDF brochure generation with company branding
- Floor plan viewers with multiple layout options
- Video demonstrations and virtual walkthroughs

### 💰 **Financial Tools**

- **Home Loan Calculator**: EMI calculations with detailed breakdowns
- **Stamp Duty Calculator**: Mumbai-specific stamp duty calculations
- Interactive charts and detailed financial summaries
- Print-friendly calculation reports

### 📞 **Contact & Careers**

- Career application form with EmailJS integration
- Business contact forms for inquiries
- ReCAPTCHA integration for spam protection
- Real-time email notifications

### 🎨 **User Experience**

- Fully responsive design for all devices
- Mobile-first approach with touch-friendly interfaces
- Professional animations and transitions
- Accessibility-focused design

### 🔧 **Technical Features**

- Server-side rendering (SSR) with Next.js
- Optimized images with Next.js Image component
- SEO-friendly structure and meta tags
- Professional PDF generation with HTML templates

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS 4
- **UI Components**: Custom components with shadcn/ui
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **PDF Generation**: html2pdf.js
- **Forms**: React Hook Form with validation
- **Security**: Google ReCAPTCHA
- **Deployment**: Vercel-ready

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/parthgala1/SRS-Real-Ventures.git
   cd SRS-Real-Ventures/client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in your environment variables:

   ```env
   # EmailJS Configuration
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_CAREER_TEMPLATE_ID=your_career_template_id
   NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

   # ReCAPTCHA Configuration
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up email service (Gmail, Outlook, etc.)
3. Create email templates for career and contact forms
4. Get your service ID, template IDs, and public key
5. Add them to your `.env.local` file

Detailed setup instructions: [EMAILJS_SETUP.md](EMAILJS_SETUP.md)

### ReCAPTCHA Setup

1. Go to [Google ReCAPTCHA](https://www.google.com/recaptcha/)
2. Register your site for reCAPTCHA v2
3. Add your site key to `.env.local`

## 📱 Pages & Features

### **Homepage** (`/`)

- Hero section with company branding
- Interactive project carousel
- Company legacy and group information
- Responsive design with mobile optimization

### **About** (`/about`)

- Company history and philosophy
- Team information and values
- Professional presentation

### **Projects** (`/projects`)

- Complete project listings
- Filter and search functionality
- Project cards with status indicators

### **Project Details** (`/projects/[id]`)

- Comprehensive project information
- PDF brochure generation
- Floor plan viewers
- Amenities and features showcase
- Interactive location maps

### **Resources** (`/resources`)

- Home Loan Calculator
- Stamp Duty Calculator
- Expert guides and FAQs
- Print-friendly layouts

### **Careers** (`/careers`)

- Job application forms
- Contact forms for business inquiries
- Email integration with notifications

## 🎨 Design System

### **Colors**

- Primary: `#134B70` (Deep Blue)
- Secondary: `#D4AF37` (Gold)
- Accent: `#92C3DD` (Light Blue)
- Background: White/Gray variations

### **Typography**

- Modern, professional font stack
- Responsive text sizing
- Accessibility-compliant contrast ratios

### **Components**

- Reusable UI components
- Consistent spacing and styling
- Mobile-first responsive design

## 📊 Project Structure

```
client/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── careers/           # Careers page
│   ├── projects/          # Projects listing and details
│   └── resources/         # Financial calculators
├── components/            # Reusable React components
│   ├── ui/               # Base UI components
│   ├── careers/          # Career-specific components
│   └── resources/        # Calculator components
├── data/                 # Project data and content
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🔍 Key Components

### **PDF Brochure Generation**

- Professional HTML templates
- Company branding integration
- Multiple image inclusion
- Print optimization

### **Financial Calculators**

- Real-time calculations
- Interactive charts
- Detailed breakdowns
- Print functionality

### **Form Management**

- Validation and error handling
- EmailJS integration
- ReCAPTCHA protection
- Loading states and feedback

## 🚀 Deployment

### **Vercel (Recommended)**

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy with automatic CI/CD

### **Manual Deployment**

1. Build the project: `npm run build`
2. Start production server: `npm start`
3. Configure your hosting environment

## 🧪 Development

### **Available Scripts**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### **Code Standards**

- ESLint configuration for code quality
- Tailwind CSS for consistent styling
- Component-based architecture
- Mobile-first responsive design

## 📄 Documentation

- [EmailJS Setup Guide](EMAILJS_SETUP.md)
- [ReCAPTCHA Setup Guide](RECAPTCHA_SETUP.md)
- API documentation in component files
- Inline code comments for complex logic

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and inquiries:

- **Email**: Contact through the website forms
- **GitHub Issues**: For technical problems
- **Documentation**: Check the setup guides

## 📄 License

This project is proprietary software developed for SRS Property Consultants.

## 🏆 Acknowledgments

- Built with Next.js and React
- UI components inspired by modern design principles
- Icons by Lucide React
- Email service by EmailJS
- Hosted on Vercel

---

**SRS Property Consultants** - Building Trust, Creating Homes
