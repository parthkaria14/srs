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
import { Calculator, Download, RotateCcw } from "lucide-react";

export default function HomeLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [tenure, setTenure] = useState(20);
  const [tenureType, setTenureType] = useState("Years");
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanDetails, setLoanDetails] = useState({
    emi: 0,
    totalAmount: 0,
    totalInterest: 0,
    yearlyInterest: 0,
    monthlyInterest: 0,
  });

  useEffect(() => {
    const calculateEMI = () => {
      const principal = loanAmount;
      const rate = interestRate / 12 / 100;
      const time = tenureType === "Years" ? tenure * 12 : tenure;

      if (rate === 0) {
        const emi = principal / time;
        const totalAmount = principal;
        const totalInterest = 0;
        const yearlyInterest = 0;
        const monthlyInterest = 0;

        setLoanDetails({
          emi: Math.round(emi),
          totalAmount: Math.round(totalAmount),
          totalInterest: Math.round(totalInterest),
          yearlyInterest: Math.round(yearlyInterest),
          monthlyInterest: Math.round(monthlyInterest),
        });
      } else {
        const emi =
          (principal * rate * Math.pow(1 + rate, time)) /
          (Math.pow(1 + rate, time) - 1);
        const totalAmount = emi * time;
        const totalInterest = totalAmount - principal;
        const yearlyInterest = totalInterest / (time / 12);
        const monthlyInterest = totalInterest / time;

        setLoanDetails({
          emi: Math.round(emi),
          totalAmount: Math.round(totalAmount),
          totalInterest: Math.round(totalInterest),
          yearlyInterest: Math.round(yearlyInterest),
          monthlyInterest: Math.round(monthlyInterest),
        });
      }
    };

    calculateEMI();
  }, [loanAmount, tenure, tenureType, interestRate]);

  const downloadHomeLoanReceipt = () => {
    const receiptContent = `
      <html>
        <head>
          <title>Home Loan EMI Receipt</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; background: white; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #134B70; padding-bottom: 20px; }
            .company-name { font-size: 28px; font-weight: bold; color: #134B70; margin-bottom: 10px; }
            .receipt-title { font-size: 20px; color: #666; }
            .content { max-width: 600px; margin: 0 auto; }
            .details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 30px 0; }
            .detail-item { background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #134B70; }
            .detail-label { font-size: 14px; color: #666; margin-bottom: 5px; }
            .detail-value { font-size: 18px; font-weight: bold; color: #134B70; }
            .summary { background: #134B70; color: white; padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center; }
            .summary-title { font-size: 20px; margin-bottom: 15px; }
            .emi-amount { font-size: 36px; font-weight: bold; margin: 10px 0; }
            .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; }
            .print-date { margin-top: 20px; font-size: 12px; color: #999; }
            @media print { body { margin: 0; } }
          </style>
        </head>
        <body>
          <div class="content">
            <div class="header">
              <div class="company-name">SRS Property Consultants</div>
              <div class="receipt-title">Home Loan EMI Calculation Receipt</div>
            </div>
            
            <div class="details-grid">
              <div class="detail-item">
                <div class="detail-label">Loan Amount</div>
                <div class="detail-value">₹${loanAmount.toLocaleString()}</div>
              </div>
              <div class="detail-item">
                <div class="detail-label">Interest Rate</div>
                <div class="detail-value">${interestRate}% p.a.</div>
              </div>
              <div class="detail-item">
                <div class="detail-label">Loan Tenure</div>
                <div class="detail-value">${tenure} ${tenureType}</div>
              </div>
              <div class="detail-item">
                <div class="detail-label">Total Interest</div>
                <div class="detail-value">₹${loanDetails.totalInterest.toLocaleString()}</div>
              </div>
            </div>

            <div class="summary">
              <div class="summary-title">Monthly EMI</div>
              <div class="emi-amount">₹${loanDetails.emi.toLocaleString()}</div>
              <div>Total Amount Payable: ₹${loanDetails.totalAmount.toLocaleString()}</div>
            </div>

            <div class="details-grid">
              <div class="detail-item">
                <div class="detail-label">Yearly Interest</div>
                <div class="detail-value">₹${loanDetails.yearlyInterest.toLocaleString()}</div>
              </div>
              <div class="detail-item">
                <div class="detail-label">Monthly Interest</div>
                <div class="detail-value">₹${loanDetails.monthlyInterest.toLocaleString()}</div>
              </div>
            </div>

            <div class="footer">
              <p><strong>Note:</strong> This is an estimated calculation. Actual EMI may vary based on bank policies and processing fees.</p>
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

  const resetCalculator = () => {
    setLoanAmount(5000000);
    setTenure(20);
    setTenureType("Years");
    setInterestRate(8.5);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-[#134B70] to-[#1a5c8a]">
          <CardHeader className="text-center p-4 sm:p-6">
            <Calculator className="w-12 h-12 sm:w-16 sm:h-16 text-[#D4AF37] mx-auto mb-3 sm:mb-4" />
            <CardTitle className="text-white text-lg sm:text-xl">
              Plan Your Home Loan Smartly
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center p-4 sm:p-6 pt-0">
            <p className="text-white/90 text-sm sm:text-base">
              Calculate your monthly EMI and plan your budget
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
          <DialogTitle>Home Loan Calculator</DialogTitle>
        </DialogHeader>
        <div className="bg-[#134B70] rounded-xl overflow-hidden shadow-2xl border border-white/20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[600px] sm:min-h-[700px] w-full">
            {/* Left Panel - Input Controls */}
            <div className="bg-white p-4 sm:p-6 lg:p-12 space-y-4 sm:space-y-6 lg:space-y-8 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#134B70] mb-4 sm:mb-6 lg:mb-8">
                Home Loan Calculator
              </h3>

              {/* Loan Amount Slider */}
              <div className="space-y-3 sm:space-y-4">
                <label className="block text-base sm:text-lg font-medium text-gray-700">
                  Loan Amount (₹)
                </label>
                <div className="space-y-2 sm:space-y-3">
                  <input
                    type="range"
                    min="100000"
                    max="10000000"
                    step="50000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs sm:text-sm text-gray-500">
                    <span>₹1L</span>
                    <span className="font-bold text-[#134B70] text-base sm:text-lg">
                      ₹{(loanAmount / 100000).toFixed(1)}L
                    </span>
                    <span>₹1Cr</span>
                  </div>
                </div>
              </div>

              {/* Loan Tenure Slider */}
              <div className="space-y-3 sm:space-y-4">
                <label className="block text-base sm:text-lg font-medium text-gray-700">
                  Loan Tenure ({tenureType})
                </label>
                <div className="space-y-2 sm:space-y-3">
                  <input
                    type="range"
                    min={tenureType === "Years" ? "1" : "12"}
                    max={tenureType === "Years" ? "30" : "360"}
                    step="1"
                    value={tenure}
                    onChange={(e) => setTenure(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <select
                        value={tenureType}
                        onChange={(e) => {
                          setTenureType(e.target.value);
                          setTenure(e.target.value === "Years" ? 20 : 240);
                        }}
                        className="text-xs sm:text-sm border rounded px-2 sm:px-3 py-1 sm:py-2 focus:outline-none focus:ring-1 focus:ring-[#134B70]"
                      >
                        <option value="Years">Years</option>
                        <option value="Months">Months</option>
                      </select>
                    </div>
                    <span className="font-bold text-[#134B70] text-base sm:text-lg">
                      {tenure} {tenureType}
                    </span>
                  </div>
                </div>
              </div>

              {/* Interest Rate Slider */}
              <div className="space-y-3 sm:space-y-4">
                <label className="block text-base sm:text-lg font-medium text-gray-700">
                  Interest Rate (% per annum)
                </label>
                <div className="space-y-2 sm:space-y-3">
                  <input
                    type="range"
                    min="6"
                    max="20"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) =>
                      setInterestRate(parseFloat(e.target.value))
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <button className="text-xs sm:text-sm border rounded px-2 sm:px-3 py-1 sm:py-2 hover:bg-gray-50">
                        ▲
                      </button>
                      <button className="text-xs sm:text-sm border rounded px-2 sm:px-3 py-1 sm:py-2 hover:bg-gray-50">
                        ▼
                      </button>
                    </div>
                    <span className="font-bold text-[#134B70] text-base sm:text-lg">
                      {interestRate}%
                    </span>
                  </div>
                </div>
              </div>

              {/* EMI Result */}
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 lg:p-8 text-center">
                <h4 className="text-lg sm:text-xl font-bold text-[#134B70] mb-3 sm:mb-4">
                  Your Estimated EMI
                </h4>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#134B70] mb-4 sm:mb-6">
                  ₹{loanDetails.emi.toLocaleString()}
                </div>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 justify-center">
                  <Button
                    variant="outline"
                    size="default"
                    onClick={downloadHomeLoanReceipt}
                    className="text-[#134B70] border-[#134B70] hover:bg-[#134B70] hover:text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base lg:text-lg"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                    Download
                  </Button>
                  <Button
                    variant="outline"
                    size="default"
                    onClick={resetCalculator}
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
              {/* Total Payable */}
              <div>
                <h4 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-gray-300">
                  Total Payable (Loan + Interest)
                </h4>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  {loanDetails.totalAmount.toLocaleString("en-IN")}
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-300 mt-1 sm:mt-2">
                  ₹{loanDetails.totalAmount.toLocaleString("en-IN")}
                </div>
              </div>

              {/* Interest Payable Alone */}
              <div>
                <h4 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-gray-300">
                  Interest Payable Alone
                </h4>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  {loanDetails.totalInterest.toLocaleString("en-IN")}
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-300 mt-1 sm:mt-2">
                  ₹{loanDetails.totalInterest.toLocaleString("en-IN")}
                </div>
              </div>

              {/* Yearly & Monthly Interest Breakdown */}
              <div>
                <h4 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6 text-gray-300">
                  Yearly & Monthly Interest Breakdown
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-white">
                      {loanDetails.yearlyInterest.toLocaleString("en-IN")}
                    </div>
                    <div className="text-base sm:text-lg text-gray-300">
                      Yearly
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      ₹{loanDetails.yearlyInterest.toLocaleString("en-IN")}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-white">
                      {loanDetails.monthlyInterest.toLocaleString("en-IN")}
                    </div>
                    <div className="text-base sm:text-lg text-gray-300">
                      Monthly
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      ₹{loanDetails.monthlyInterest.toLocaleString("en-IN")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
