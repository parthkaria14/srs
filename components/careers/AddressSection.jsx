"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

export default function AddressSection() {
  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg bg-gradient-to-br from-[#134B70] to-[#1a5c8a] text-white">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-gray-100 mb-4">
          ADDRESS
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <div className="bg-[#134B70] rounded-lg p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <MapPin className="w-6 h-6 mr-3" />
            Registered Office
          </h3>

          <div className="space-y-4 text-lg">
            <div className="text-white leading-relaxed">
              <p className="font-medium">Shree Riddhi Siddhi Group,</p>
              <p>103, Sumukh Darshan Behind Parekh Nagar,</p>
              <p>Near Swami Vivekanand International School,</p>
              <p>S.V. Road Kandivali (West).</p>
            </div>

            <div className="border-t border-white/20 pt-6 space-y-3">
              <div className="flex items-center text-white">
                <Phone className="w-5 h-5 mr-3 text-[#D4AF37]" />
                <span className="font-medium">Phone:</span>
                <a
                  href="tel:+912228013354"
                  className="ml-2 hover:text-[#D4AF37] transition-colors"
                >
                  +91 22 2801 3354
                </a>
              </div>

              <div className="flex items-center text-white">
                <Mail className="w-5 h-5 mr-3 text-[#D4AF37]" />
                <span className="font-medium">E-mail:</span>
                <a
                  href="mailto:info@srsgroup.in"
                  className="ml-2 hover:text-[#D4AF37] transition-colors underline"
                >
                  info@srsgroup.in
                </a>
              </div>
            </div>
          </div>

          {/* Optional: Add a map or additional styling */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-sm text-gray-200 text-center">
              Visit us during business hours or reach out through our contact
              form above.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
