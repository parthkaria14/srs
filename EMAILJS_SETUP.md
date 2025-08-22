# EmailJS Setup Guide

This guide will help you set up EmailJS to handle email sending functionality for the careers page forms.

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Copy the **Service ID** - you'll need this

## 3. Create Email Templates

You need to create two templates - one for career applications and one for contact inquiries.

### Career Application Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set up the template with these variables:

```
Subject: New Career Application - {{full_name}}

Dear SRS Property Consultants Team,

You have received a new career application with the following details:

Name: {{full_name}}
Gender: {{gender}}
Email: {{email}}
Phone: {{phone}}
Mobile: {{mobile}}
Address: {{address}}

Comment/Cover Letter:
{{comment}}

Submission Details:
- Type: {{submission_type}}
- Submitted At: {{submitted_at}}
- From: {{from_email}}

Please review this application and respond accordingly.

Best regards,
SRS Website Contact System
```

4. Save the template and copy the **Template ID**

### Contact Form Template

1. Create another template for contact inquiries:

```
Subject: New Contact Inquiry - {{company_name}}

Dear SRS Property Consultants Team,

You have received a new contact inquiry with the following details:

Contact Person: {{contact_person_name}}
Company Name: {{company_name}}
Email: {{email}}
Phone: {{phone}}
Mobile: {{mobile}}
Address: {{address}}

Message:
{{comment}}

Submission Details:
- Type: {{submission_type}}
- Submitted At: {{submitted_at}}
- From: {{from_email}}

Please review this inquiry and respond accordingly.

Best regards,
SRS Website Contact System
```

2. Save this template and copy the **Template ID**

## 4. Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)
3. Copy this key

## 5. Set Up Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add the following variables with your actual values:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_CAREER_TEMPLATE_ID=your_career_template_id_here
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
```

## 6. Test the Forms

1. Start your development server: `npm run dev`
2. Navigate to the careers page: `http://localhost:3000/careers`
3. Fill out both forms and test the email sending functionality
4. Check your email inbox to confirm emails are being received

## 7. Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the same environment variables to your hosting platform
2. Update any domain restrictions in your EmailJS service settings
3. Test the forms in production to ensure everything works

## Troubleshooting

- **Emails not sending**: Check console for errors, verify environment variables
- **Template errors**: Ensure template variable names match exactly
- **Service errors**: Verify your email service is properly configured
- **CORS errors**: Check EmailJS service domain restrictions

## EmailJS Free Plan Limits

- 200 emails per month
- Rate limit: 1 email per 5 seconds
- For higher volumes, consider upgrading to a paid plan

## Security Notes

- Never expose your private key (if you have one)
- Public key is safe to use in client-side code
- Consider implementing server-side validation for production
- ReCAPTCHA helps prevent spam submissions
