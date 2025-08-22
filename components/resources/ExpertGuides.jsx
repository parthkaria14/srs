"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BookOpen, DollarSign } from "lucide-react";

export default function ExpertGuides() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#134B70] text-center mb-8 sm:mb-10 lg:mb-12">
          Expert Guides
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {/* Real Estate Guide Modal */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-[#134B70] to-[#1a5c8a]">
                <CardHeader className="text-center p-4 sm:p-6">
                  <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-[#D4AF37] mx-auto mb-3 sm:mb-4" />
                  <CardTitle className="text-white text-lg sm:text-xl">
                    Real Estate Guide
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center p-4 sm:p-6 pt-0">
                  <p className="text-white/90 text-sm sm:text-base">
                    Everything You Need to Know Before Buying a Property
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] w-[95vw] sm:max-w-[90vw] sm:w-[90vw] lg:max-w-[80vw] lg:w-[80vw] max-h-[90vh] overflow-y-auto bg-white border-0 shadow-2xl">
              <DialogHeader className="border-b pb-3 sm:pb-4 px-4 sm:px-6 pt-4 sm:pt-6">
                <DialogTitle className="text-[#134B70] text-lg sm:text-xl lg:text-2xl font-bold">
                  Real Estate Guide: Everything You Need to Know Before Buying a
                  Property
                </DialogTitle>
              </DialogHeader>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base">
                {/* Featured Section - Full Width */}
                <div className="bg-[#134B70] text-white p-4 sm:p-6 lg:p-8 rounded-lg mb-6 sm:mb-8">
                  <h3 className="font-bold text-white mb-3 sm:mb-4 text-lg sm:text-xl lg:text-2xl">
                    India's Urban Future
                  </h3>
                  <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6">
                    India is experiencing rapid urbanization — by 2050, over 850
                    million people are expected to live in cities. This urban
                    boom is driving a major demand for:
                  </p>
                  <ul className="list-disc ml-4 sm:ml-6 lg:ml-8 space-y-2 sm:space-y-3 text-white text-sm sm:text-base lg:text-lg">
                    <li>Residential Properties</li>
                    <li>Commercial Spaces</li>
                    <li>Retail Outlets</li>
                  </ul>
                  <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed mt-4 sm:mt-6">
                    Key cities witnessing the highest growth: Mumbai, Delhi,
                    Bengaluru & Hyderabad.
                  </p>
                </div>

                {/* Two Column Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  {/* Left Column */}
                  <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                    <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg">
                      <h3 className="font-bold text-[#134B70] mb-4 sm:mb-6 text-lg sm:text-xl lg:text-2xl">
                        Legal Approvals to Verify
                      </h3>
                      <p className="text-gray-800 text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">
                        Make sure the property has necessary clearances from:
                      </p>
                      <ul className="list-disc ml-4 sm:ml-6 lg:ml-8 space-y-2 sm:space-y-3 lg:space-y-4 text-gray-800 text-sm sm:text-base lg:text-lg">
                        <li>Municipal / Municipal Corporation</li>
                        <li>Electricity Board</li>
                        <li>Area Development Authorities</li>
                        <li>Airport Authorities</li>
                        <li>Pollution Control Boards</li>
                        <li>Forest & Agricultural Departments</li>
                      </ul>
                    </div>

                    <div className="bg-[#D4AF37]/10 p-4 sm:p-6 lg:p-8 rounded-lg">
                      <h3 className="font-bold text-[#134B70] mb-4 sm:mb-6 text-lg sm:text-xl lg:text-2xl">
                        Documentation & Ownership
                      </h3>
                      <p className="text-gray-800 text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">
                        Cross-check these:
                      </p>
                      <ul className="list-disc ml-4 sm:ml-6 lg:ml-8 space-y-2 sm:space-y-3 lg:space-y-4 text-gray-800 text-sm sm:text-base lg:text-lg">
                        <li>Title deed and ownership history (13 years)</li>
                        <li>Encumbrance certificate</li>
                        <li>Property tax payment receipts</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 p-8 rounded-lg">
                      <h3 className="font-bold text-[#134B70] mb-6 text-2xl">
                        Types of Deeds
                      </h3>
                      <div>
                        <h4 className="font-semibold text-[#134B70] text-xl mb-3">
                          Bargain & Sale Deed
                        </h4>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          Transfers ownership without guaranteeing the property
                          is free of prior claims — use with legal caution.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    <div className="bg-white border border-gray-200 p-8 rounded-lg">
                      <h3 className="font-bold text-[#134B70] mb-6 text-2xl">
                        Location Insights
                      </h3>
                      <p className="text-gray-800 text-xl mb-6">
                        Research before you buy:
                      </p>
                      <ul className="list-disc ml-8 space-y-4 text-gray-800 text-lg">
                        <li>Uninterrupted water & electricity supply</li>
                        <li>Clean, pollution-free environment</li>
                        <li>Good connectivity and approach roads</li>
                        <li>Proper drainage & sanitation</li>
                        <li>
                          Proximity to schools, hospitals, markets, and
                          transport
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-lg">
                      <h3 className="font-bold text-[#134B70] mb-6 text-2xl">
                        Know Your Real Estate Types
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-[#134B70] text-xl mb-3">
                            Residential Property
                          </h4>
                          <p className="text-gray-700 text-lg">
                            Flats, apartments, villas, townships, co-ops
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#134B70] text-xl mb-3">
                            Commercial Property
                          </h4>
                          <p className="text-gray-700 text-lg">
                            Shops, showrooms, offices, malls
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#134B70] text-xl mb-3">
                            Vacant Land
                          </h4>
                          <p className="text-gray-700 text-lg">
                            Undeveloped or raw land plots
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#134B70] text-xl mb-3">
                            Lease Purchase (Rent-to-Own)
                          </h4>
                          <p className="text-gray-700 text-lg">
                            Agreements where tenants buy the property they rent
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Financial Guide Modal */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-[#D4AF37] to-[#f0c557]">
                <CardHeader className="text-center p-4 sm:p-6">
                  <DollarSign className="w-12 h-12 sm:w-16 sm:h-16 text-[#134B70] mx-auto mb-3 sm:mb-4" />
                  <CardTitle className="text-[#134B70] text-lg sm:text-xl">
                    Financial Guide
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center p-4 sm:p-6 pt-0">
                  <p className="text-[#134B70]/90 text-sm sm:text-base">
                    Smart Insights to Finance Your Dream Home Wisely
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] w-[95vw] sm:max-w-[90vw] sm:w-[90vw] lg:max-w-6xl lg:w-[90vw] max-h-[90vh] overflow-y-auto bg-white border-0 shadow-2xl">
              <DialogHeader className="border-b pb-3 sm:pb-4 px-4 sm:px-6 pt-4 sm:pt-6">
                <DialogTitle className="text-[#134B70] text-lg sm:text-xl lg:text-2xl font-bold">
                  Financial Guide: Smart Insights to Finance Your Dream Home
                  Wisely
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 p-4 sm:p-6 text-sm sm:text-base">
                {/* Introduction */}
                <div className="bg-[#134B70] text-white p-4 sm:p-6 rounded-lg">
                  <p className="text-base sm:text-lg leading-relaxed">
                    Buying your dream home is a big step. Understanding the home
                    loan process can help you make informed, confident
                    decisions.
                  </p>
                </div>

                {/* Home Loan Basics */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                  <h3 className="font-bold text-[#134B70] mb-3 sm:mb-4 text-lg sm:text-xl">
                    Home Loan Basics
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#134B70] mb-2 text-base sm:text-lg">
                        Loan Tenure
                      </h4>
                      <p className="text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed">
                        Home loans are typically available for up to 25 years.
                        Choose tenure based on your repayment capacity and
                        financial goals.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Repayment Options */}
                <div className="bg-white border border-gray-200 p-4 sm:p-6 rounded-lg">
                  <h3 className="font-bold text-[#134B70] mb-3 sm:mb-4 text-lg sm:text-xl">
                    Repayment Options
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#134B70] mb-2 text-base sm:text-lg">
                        Fixed Rate
                      </h4>
                      <p className="text-gray-800 text-sm sm:text-base lg:text-lg">
                        EMI remains constant throughout.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#134B70] mb-2 text-lg">
                        Floating Rate
                      </h4>
                      <p className="text-gray-800 text-lg">
                        EMI varies with market conditions. Many institutions
                        allow a free switch between these once a year.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#134B70] mb-2 text-lg">
                        Pre-Payment / No Penalty Option
                      </h4>
                      <p className="text-gray-800 text-lg">
                        Some lenders allow pre-payment of up to 25% of your loan
                        annually without penalty usually after 6 months of
                        disbursement.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tax Benefits */}
                <div className="bg-[#134B70] text-white p-6 rounded-lg">
                  <h3 className="font-bold mb-4 text-xl">Tax Benefits</h3>
                  <p className="mb-4 text-lg">
                    Under Section 24 and Section 80C of the Income Tax Act:
                  </p>
                  <ul className="list-disc ml-6 space-y-3 text-lg">
                    <li>Deduction up to ₹1.5 lakh on interest paid</li>
                    <li>
                      Rebate up to ₹2 lakh on principal repayment (includes
                      stamp duty & registration)
                    </li>
                  </ul>
                  <p className="mt-4 text-gray-200 text-lg">
                    Always consult a financial advisor to explore the best loan
                    offers and tax-saving options.
                  </p>
                </div>

                {/* 10-Step Home Buying Guide */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-[#134B70] mb-6 text-xl">
                    10-Step Home Buying Guide
                  </h3>
                  <div className="grid gap-4">
                    {[
                      {
                        step: 1,
                        title: "Set Your Budget",
                        description:
                          "Know what you can afford based on income and expenses.",
                      },
                      {
                        step: 2,
                        title: "Understand Your Rights",
                        description: "Be aware of legal protections.",
                      },
                      {
                        step: 3,
                        title: "Compare Loan Offers",
                        description:
                          "Check interest rates and get pre-approved.",
                      },
                      {
                        step: 4,
                        title: "Explore Govt Schemes",
                        description: "Look for subsidies or benefits.",
                      },
                      {
                        step: 5,
                        title: "Start House Hunt",
                        description:
                          "Make a checklist and work with a trusted agent.",
                      },
                      {
                        step: 6,
                        title: "Make an Offer",
                        description: "Negotiate price and terms.",
                      },
                      {
                        step: 7,
                        title: "Inspect the Property",
                        description: "Ensure it's in good condition.",
                      },
                      {
                        step: 8,
                        title: "Get Insurance",
                        description: "Required for most home loans.",
                      },
                      {
                        step: 9,
                        title: "Sign the Papers",
                        description: "Read all documents before closing.",
                      },
                      {
                        step: 10,
                        title: "Move In & Celebrate!",
                        description:
                          "Welcome home with a puja or small ritual.",
                      },
                    ].map((item) => (
                      <div
                        key={item.step}
                        className="flex items-start space-x-4 p-3 bg-white rounded-lg border border-gray-200"
                      >
                        <span className="bg-[#134B70] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                          {item.step}
                        </span>
                        <div>
                          <h4 className="font-semibold text-[#134B70] text-lg">
                            {item.title}
                          </h4>
                          <p className="text-gray-800 text-lg">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
