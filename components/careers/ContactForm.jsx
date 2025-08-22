"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    contactPersonName: "",
    companyName: "",
    address: "",
    phone: "",
    mobile: "",
    email: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef(null);
  const formRef = useRef(null);

  // Get the site key from environment variables
  const RECAPTCHA_SITE_KEY =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
    "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  // EmailJS configuration - Replace with your actual values
  const EMAIL_SERVICE_ID =
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
  const EMAIL_TEMPLATE_ID =
    process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID ||
    "YOUR_CONTACT_TEMPLATE_ID";
  const EMAIL_PUBLIC_KEY =
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.contactPersonName.trim()) {
      newErrors.contactPersonName = "Contact Person Name is required";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company Name is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.comment.trim()) {
      newErrors.comment = "Comment is required";
    }

    if (!recaptchaValue) {
      newErrors.recaptcha = "Please complete the reCAPTCHA verification";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS (you only need to do this once in your app)
      emailjs.init(EMAIL_PUBLIC_KEY);

      // Prepare template parameters
      const templateParams = {
        from_name: formData.contactPersonName,
        from_email: formData.email,
        to_name: "SRS Property Consultants",
        contact_person_name: formData.contactPersonName,
        company_name: formData.companyName,
        address: formData.address,
        phone: formData.phone,
        mobile: formData.mobile,
        email: formData.email,
        comment: formData.comment,
        submission_type: "Contact Inquiry",
        submitted_at: new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        templateParams
      );

      if (result.status === 200) {
        alert("Message sent successfully! We'll get back to you soon.");
        handleReset();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(
        "Sorry, there was an error sending your message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      contactPersonName: "",
      companyName: "",
      address: "",
      phone: "",
      mobile: "",
      email: "",
      comment: "",
    });
    setErrors({});
    setRecaptchaValue(null);
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    if (errors.recaptcha) {
      setErrors((prev) => ({
        ...prev,
        recaptcha: "",
      }));
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg border-2 border-[#134B70]">
      <CardHeader className="bg-gray-50 border-b border-gray-200">
        <CardTitle className="text-3xl font-bold text-gray-600 text-center">
          CONTACT
        </CardTitle>
        <p className="text-center text-gray-700 mt-2">
          Note: The fields marked with asterisk * are mandatory.
        </p>
      </CardHeader>
      <CardContent className="p-8">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Person Name*
                </label>
                <input
                  type="text"
                  name="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#134B70] focus:border-transparent text-gray-900 bg-white ${
                    errors.contactPersonName
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter contact person name"
                />
                {errors.contactPersonName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.contactPersonName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name*
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#134B70] focus:border-transparent text-gray-900 bg-white ${
                    errors.companyName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter company name"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.companyName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address*
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#134B70] focus:border-transparent resize-none text-gray-900 bg-white ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter complete address"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#134B70] focus:border-transparent text-gray-900 bg-white ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile*
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#134B70] focus:border-transparent text-gray-900 bg-white ${
                    errors.mobile ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter mobile number"
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#134B70] focus:border-transparent text-gray-900 bg-white ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Comment*
                </label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  rows={6}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#134B70] focus:border-transparent resize-none text-gray-900 bg-white ${
                    errors.comment ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your message or inquiry..."
                />
                {errors.comment && (
                  <p className="text-red-500 text-sm mt-1">{errors.comment}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  reCAPTCHA Verification*
                </label>
                <div className="flex justify-start">
                  <div className="recaptcha-container">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={RECAPTCHA_SITE_KEY}
                      onChange={handleRecaptchaChange}
                      theme="light"
                    />
                  </div>
                </div>
                {errors.recaptcha && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.recaptcha}
                  </p>
                )}
                <style jsx>{`
                  .recaptcha-container :global(.grecaptcha-badge) {
                    visibility: hidden !important;
                  }
                  .recaptcha-container
                    :global(div[style*="color: rgb(255, 0, 0)"]) {
                    display: none !important;
                  }
                `}</style>
              </div>

              <div className="flex space-x-4 pt-4">
                <Button
                  type="button"
                  onClick={handleReset}
                  variant="outline"
                  className="flex-1 border-[#134B70] text-[#134B70] hover:bg-[#134B70] hover:text-white"
                >
                  Reset
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-[#134B70] hover:bg-[#134B70]/90 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
