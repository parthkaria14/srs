"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileText, Download, RotateCcw } from "lucide-react";

export default function StampDutyCalculator() {
  const [propertyValue, setPropertyValue] = useState(5000000);
  const [selectedState, setSelectedState] = useState("Maharashtra");
  const [stampDuty, setStampDuty] = useState(0);
  const [registrationCharges, setRegistrationCharges] = useState(0);

  const stateRates = {
    Maharashtra: { stampDuty: 0.05, registration: 0.01 },
    Karnataka: { stampDuty: 0.0575, registration: 0.01 },
    "Tamil Nadu": { stampDuty: 0.07, registration: 0.01 },
    Gujarat: { stampDuty: 0.0549, registration: 0.01 },
    Rajasthan: { stampDuty: 0.055, registration: 0.01 },
    Delhi: { stampDuty: 0.06, registration: 0.01 },
    Mumbai: { stampDuty: 0.05, registration: 0.01 },
    Pune: { stampDuty: 0.05, registration: 0.01 },
    Hyderabad: { stampDuty: 0.055, registration: 0.01 },
    Bengaluru: { stampDuty: 0.0575, registration: 0.01 },
  };

  useEffect(() => {
    const calculateStampDuty = () => {
      const rates = stateRates[selectedState];
      if (rates) {
        const calculatedStampDuty = propertyValue * rates.stampDuty;
        const calculatedRegistration = propertyValue * rates.registration;
        setStampDuty(Math.round(calculatedStampDuty));
        setRegistrationCharges(Math.round(calculatedRegistration));
      }
    };

    calculateStampDuty();
  }, [propertyValue, selectedState]);

  const downloadStampDutyReceipt = () => {
    const receiptContent = `
      <html>
        <head>
          <title>Stamp Duty Calculation Receipt</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; background: white; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #D4AF37; padding-bottom: 20px; }
            .company-name { font-size: 28px; font-weight: bold; color: #134B70; margin-bottom: 10px; }
            .receipt-title { font-size: 20px; color: #666; }
            .content { max-width: 600px; margin: 0 auto; }
            .details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 30px 0; }
            .detail-item { background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #D4AF37; }
            .detail-label { font-size: 14px; color: #666; margin-bottom: 5px; }
            .detail-value { font-size: 18px; font-weight: bold; color: #134B70; }
            .summary { background: #D4AF37; color: #134B70; padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center; }
            .summary-title { font-size: 20px; margin-bottom: 15px; font-weight: bold; }
            .stamp-duty-amount { font-size: 36px; font-weight: bold; margin: 10px 0; }
            .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; }
            .print-date { margin-top: 20px; font-size: 12px; color: #999; }
            @media print { body { margin: 0; } }
          </style>
        </head>
        <body>
          <div class="content">
            <div class="header">
              <div class="company-name">SRS Property Consultants</div>
              <div class="receipt-title">Stamp Duty Calculation Receipt</div>
            </div>
            
            <div class="details-grid">
              <div class="detail-item">
                <div class="detail-label">Property Value</div>
                <div class="detail-value">₹${propertyValue.toLocaleString()}</div>
              </div>
              <div class="detail-item">
                <div class="detail-label">Selected State</div>
                <div class="detail-value">${selectedState}</div>
              </div>
              <div class="detail-item">
                <div class="detail-label">Stamp Duty Rate</div>
                <div class="detail-value">${(
                  stateRates[selectedState].stampDuty * 100
                ).toFixed(2)}%</div>
              </div>
              <div class="detail-item">
                <div class="detail-label">Registration Rate</div>
                <div class="detail-value">${(
                  stateRates[selectedState].registration * 100
                ).toFixed(2)}%</div>
              </div>
            </div>

            <div class="summary">
              <div class="summary-title">Total Stamp Duty</div>
              <div class="stamp-duty-amount">₹${stampDuty.toLocaleString()}</div>
              <div>Registration Charges: ₹${registrationCharges.toLocaleString()}</div>
              <div style="margin-top: 15px; font-weight: bold; font-size: 18px;">
                Total Charges: ₹${(
                  stampDuty + registrationCharges
                ).toLocaleString()}
              </div>
            </div>

            <div class="footer">
              <p><strong>Note:</strong> This is an estimated calculation. Actual charges may vary based on local regulations and property type.</p>
              <p>For more information, contact SRS Property Consultants</p>
              <div class="print-date">Generated on: ${new Date().toLocaleDateString()}</div>
            </div>
          </div>
        </body>
      </html>
    `;

    const printWindow = window.open("", "_blank");
    printWindow.document.write(receiptContent);
    printWindow.document.close();
    printWindow.print();
  };

  const resetStampDutyCalculator = () => {
    setPropertyValue(5000000);
    setSelectedState("Maharashtra");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-[#D4AF37] to-[#f0c557]">
          <CardHeader className="text-center p-4 sm:p-6">
            <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-[#134B70] mx-auto mb-3 sm:mb-4" />
            <CardTitle className="text-[#134B70] text-lg sm:text-xl">
              Instant Stamp Duty Check
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center p-4 sm:p-6 pt-0">
            <p className="text-[#134B70]/90 text-sm sm:text-base">
              Calculate stamp duty and registration charges
            </p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent
        className="!max-w-[95vw] !w-[95vw] sm:!max-w-[90vw] sm:!w-[90vw] lg:!max-w-[70vw] lg:!w-[70vw] max-h-[95vh] overflow-y-auto p-0 bg-white/98 backdrop-blur-md border-0 shadow-2xl"
        style={{
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
        }}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Stamp Duty Calculator</DialogTitle>
        </DialogHeader>
        <div className="bg-[#D4AF37] rounded-xl overflow-hidden shadow-2xl border border-white/20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[600px] sm:min-h-[700px] w-full">
            {/* Left Panel - Input Controls */}
            <div className="bg-white p-4 sm:p-6 lg:p-12 space-y-4 sm:space-y-6 lg:space-y-8 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#134B70] mb-4 sm:mb-6 lg:mb-8">
                Stamp Duty Calculator
              </h3>

              {/* State Selection */}
              <div className="space-y-3 sm:space-y-4">
                <label className="block text-base sm:text-lg font-medium text-gray-800">
                  Select the State
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#134B70] bg-white text-gray-900 text-sm sm:text-base lg:text-lg"
                >
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Pune">Pune</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Bengaluru">Bengaluru</option>
                </select>
              </div>

              {/* Property Value Slider */}
              <div className="space-y-3 sm:space-y-4">
                <label className="block text-base sm:text-lg font-medium text-gray-800">
                  Property Value (Rs.)
                </label>
                <div className="space-y-2 sm:space-y-3">
                  <input
                    type="range"
                    min="1000000"
                    max="50000000"
                    step="100000"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs sm:text-sm text-gray-600">
                    <span>₹10L</span>
                    <span className="font-bold text-[#134B70] text-base sm:text-lg">
                      ₹{(propertyValue / 100000).toFixed(1)}L
                    </span>
                    <span>₹5Cr</span>
                  </div>
                </div>
              </div>

              {/* Manual Input */}
              <div className="space-y-3 sm:space-y-4">
                <label className="block text-base sm:text-lg font-medium text-gray-800">
                  Or Enter Manually
                </label>
                <input
                  type="number"
                  value={propertyValue}
                  onChange={(e) =>
                    setPropertyValue(parseInt(e.target.value) || 0)
                  }
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#134B70] text-gray-900 text-sm sm:text-base lg:text-lg"
                  placeholder="Enter property value"
                />
              </div>

              {/* Stamp Duty Result */}
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 lg:p-8 text-center">
                <h4 className="text-lg sm:text-xl font-bold text-[#134B70] mb-3 sm:mb-4">
                  Stamp Duty (Rs.)
                </h4>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#134B70] mb-4 sm:mb-6">
                  ₹{stampDuty.toLocaleString()}
                </div>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 justify-center">
                  <Button
                    variant="outline"
                    size="default"
                    onClick={downloadStampDutyReceipt}
                    className="text-[#134B70] border-[#134B70] hover:bg-[#134B70] hover:text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base lg:text-lg"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                    Download
                  </Button>
                  <Button
                    variant="outline"
                    size="default"
                    onClick={resetStampDutyCalculator}
                    className="text-[#134B70] border-[#134B70] hover:bg-[#134B70] hover:text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base lg:text-lg"
                  >
                    <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                    Reset
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Panel - Results */}
            <div className="bg-[#134B70] text-white p-4 sm:p-6 lg:p-12 space-y-4 sm:space-y-6 lg:space-y-8 w-full">
              {/* Total Charges */}
              <div>
                <h4 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-white">
                  Total Charges
                </h4>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  {((stampDuty + registrationCharges) / 100000).toFixed(2)}
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-200 mt-1 sm:mt-2">
                  ₹{(stampDuty + registrationCharges).toLocaleString()}
                </div>
              </div>

              {/* Stamp Duty Breakdown */}
              <div>
                <h4 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-white">
                  Stamp Duty
                </h4>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  {(stampDuty / 100000).toFixed(2)}
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-200 mt-1 sm:mt-2">
                  ₹{stampDuty.toLocaleString()}
                </div>
              </div>

              {/* Registration Charges */}
              <div>
                <h4 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-white">
                  Registration Charges
                </h4>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  {(registrationCharges / 100000).toFixed(2)}
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-200 mt-1 sm:mt-2">
                  ₹{registrationCharges.toLocaleString()}
                </div>
              </div>

              {/* State Info */}
              <div className="bg-white/20 rounded-lg p-6">
                <h5 className="font-semibold mb-3 text-white text-lg">
                  Selected State: {selectedState}
                </h5>
                <p className="text-base text-gray-100">
                  Rates may vary based on property type, buyer category, and
                  local regulations. Please consult with local authorities for
                  exact calculations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
