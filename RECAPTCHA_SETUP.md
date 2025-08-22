# Google reCAPTCHA Setup Instructions

## Overview

The careers page uses Google reCAPTCHA v2 to prevent spam submissions on both the Career Application Form and Contact Form.

## Setup Steps

### 1. Get reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click "Create" to add a new site
3. Fill in the form:
   - **Label**: Your site name (e.g., "SRS Careers")
   - **reCAPTCHA type**: Select "reCAPTCHA v2" → "I'm not a robot" Checkbox
   - **Domains**: Add your domain (e.g., `localhost` for development, `yourdomain.com` for production)
4. Accept the terms and click "Submit"
5. Copy the **Site Key** and **Secret Key**

### 2. Configure Environment Variables

1. Open `.env.local` in the project root
2. Replace the test key with your actual site key:
   ```
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_actual_site_key_here
   ```

### 3. Backend Verification (Important for Production)

The current implementation only validates on the frontend. For production, you should verify the reCAPTCHA response on your backend:

```javascript
// Example backend verification (Node.js/Express)
const verifyRecaptcha = async (recaptchaValue) => {
  const secretKey = "your_secret_key_here";
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${recaptchaValue}`,
    }
  );

  const data = await response.json();
  return data.success;
};
```

## Current Implementation Details

### Features

- ✅ reCAPTCHA v2 integration
- ✅ Form validation with reCAPTCHA requirement
- ✅ Error handling and user feedback
- ✅ Reset functionality
- ✅ Environment variable configuration
- ✅ Responsive design

### Components Updated

- `CareerForm.jsx` - Career application form with reCAPTCHA
- `ContactForm.jsx` - Contact form with reCAPTCHA

### Test Key (Development)

The current test key `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI` always passes verification and should only be used for development.

## Security Notes

- Never expose your **Secret Key** in frontend code
- Always verify reCAPTCHA responses on your backend
- Use HTTPS in production for security
- The Site Key can be public (it's meant to be visible in frontend code)

## Troubleshooting

- If reCAPTCHA doesn't load, check your domain configuration
- Ensure your site key is correct and matches your domain
- Check browser console for any JavaScript errors
- Verify network connectivity to Google's reCAPTCHA service
