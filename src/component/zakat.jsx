'use client';

import { useState } from "react";

export default function ZakatCalculator() {
  const [cash, setCash] = useState(0);
  const [fixedDeposit, setFixedDeposit] = useState(0);
  const [mobileWallet, setMobileWallet] = useState(0);
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [businessStock, setBusinessStock] = useState(0);
  const [investment, setInvestment] = useState(0);
  const [receivables, setReceivables] = useState(0);
  const [livestock, setLivestock] = useState(0);
  const [rentalIncome, setRentalIncome] = useState(0);
  const [zakat, setZakat] = useState(0);

  const nisabGold = 87.48 * 8000; // Example gold price per gram (৳8000)
  const nisabSilver = 612.36 * 100; // Example silver price per gram (৳100)
  const nisab = Math.min(nisabGold, nisabSilver);

  const calculateZakat = () => {
    const totalWealth =
      parseFloat(cash) +
      parseFloat(fixedDeposit) +
      parseFloat(mobileWallet) +
      parseFloat(gold) +
      parseFloat(silver) +
      parseFloat(businessStock) +
      parseFloat(investment) +
      parseFloat(receivables) +
      parseFloat(livestock) +
      parseFloat(rentalIncome);

    if (totalWealth >= nisab) {
      setZakat(totalWealth * 0.025);
    } else {
      setZakat(0);
    }

    // Reset all the input fields
    setCash(0);
    setFixedDeposit(0);
    setMobileWallet(0);
    setGold(0);
    setSilver(0);
    setBusinessStock(0);
    setInvestment(0);
    setReceivables(0);
    setLivestock(0);
    setRentalIncome(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Zakat Calculator</h2>

        {/* Cash and Savings */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Cash in Hand or in Bank (৳)</label>
          <input
            type="number"
            value={cash}
            onChange={(e) => setCash(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <p className="text-xs text-gray-500 mt-1">Include cash available in hand or any savings in the bank.</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Fixed Deposits (৳)</label>
          <input
            type="number"
            value={fixedDeposit}
            onChange={(e) => setFixedDeposit(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <p className="text-xs text-gray-500 mt-1">Include the value of your savings bonds or fixed deposits.</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Mobile Wallet Balance (৳)</label>
          <input
            type="number"
            value={mobileWallet}
            onChange={(e) => setMobileWallet(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <p className="text-xs text-gray-500 mt-1">Include balance in mobile wallets or digital wallets.</p>
        </div>

        {/* Gold and Silver */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Gold Value (৳)</label>
          <input
            type="number"
            value={gold}
            onChange={(e) => setGold(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <p className="text-xs text-gray-500 mt-1">Include the value of gold jewelry, bars, or coins.</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Silver Value (৳)</label>
          <input
            type="number"
            value={silver}
            onChange={(e) => setSilver(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <p className="text-xs text-gray-500 mt-1">Include the value of silver jewelry, bars, or coins.</p>
        </div>

        {/* Business Goods and Capital */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Business Stock (৳)</label>
          <input
            type="number"
            value={businessStock}
            onChange={(e) => setBusinessStock(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <p className="text-xs text-gray-500 mt-1">Include the value of goods or stock purchased for business.</p>
        </div>

        {/* Investments */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Investments (৳)</label>
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <p className="text-xs text-gray-500 mt-1">Include shares, bonds, mutual funds, and other profitable investments.</p>
        </div>

        {/* Receivables */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Receivables (৳)</label>
          <input
            type="number"
            value={receivables}
            onChange={(e) => setReceivables(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <p className="text-xs text-gray-500 mt-1">Include loans or dues that are receivable with certainty of collection.</p>
        </div>

        {/* Livestock and Agricultural Products */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Livestock Value (৳)</label>
          <input
            type="number"
            value={livestock}
            onChange={(e) => setLivestock(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <p className="text-xs text-gray-500 mt-1">Include the value of cattle, buffalo, goats, sheep, or agricultural products like dates, wheat, etc.</p>
        </div>

        {/* Rental Income */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Rental Income (৳)</label>
          <input
            type="number"
            value={rentalIncome}
            onChange={(e) => setRentalIncome(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <p className="text-xs text-gray-500 mt-1">Include the income from rental properties (no zakat on property kept for personal use).</p>
        </div>

        <button onClick={calculateZakat} className="w-full bg-blue-500 text-white py-2 rounded">
          Calculate Zakat
        </button>

        {zakat > 0 && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
            <strong>Your Zakat: {zakat.toFixed(2)} Tk</strong>
          </div>
        )}
      </div>
    </div>
  );
}
