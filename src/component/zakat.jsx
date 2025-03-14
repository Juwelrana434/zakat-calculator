// 'use client';

// import { useState } from "react";

// export default function ZakatCalculator() {
//   const [cash, setCash] = useState(0);
//   const [fixedDeposit, setFixedDeposit] = useState(0);
//   const [mobileWallet, setMobileWallet] = useState(0);
//   const [gold, setGold] = useState(0);
//   const [silver, setSilver] = useState(0);
//   const [businessStock, setBusinessStock] = useState(0);
//   const [investment, setInvestment] = useState(0);
//   const [receivables, setReceivables] = useState(0);
//   const [livestock, setLivestock] = useState(0);
//   const [rentalIncome, setRentalIncome] = useState(0);
//   const [zakat, setZakat] = useState(null);

//   const nisabGold = 87.48 * 12346; // Gold Nisab: 87.48g * Gold Price (৳12346/g)
//   const nisabSilver = 612.36 * 100; // Silver Nisab: 612.36g * Silver Price (৳100/g)
//   const nisab = Math.min(nisabGold, nisabSilver); // Use the lower Nisab value

//   const calculateZakat = () => {
//     const totalWealth =
//       (parseFloat(cash) || 0) +
//       (parseFloat(fixedDeposit) || 0) +
//       (parseFloat(mobileWallet) || 0) +
//       (parseFloat(gold) || 0) +
//       (parseFloat(silver) || 0) +
//       (parseFloat(businessStock) || 0) +
//       (parseFloat(investment) || 0) +
//       (parseFloat(receivables) || 0) +
//       (parseFloat(livestock) || 0) +
//       (parseFloat(rentalIncome) || 0);

//     if (totalWealth >= nisab) {
//       setZakat(totalWealth * 0.025);
//     } else {
//       setZakat(0);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl">
//         <h2 className="text-2xl font-semibold mb-4 text-center">Zakat Calculator</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {[
//             { label: "Cash in Hand or Bank (৳)", state: cash, setState: setCash, info: "Include cash available in hand or any savings in the bank." },
//             { label: "Fixed Deposits (৳)", state: fixedDeposit, setState: setFixedDeposit, info: "Include savings bonds or fixed deposits." },
//             { label: "Mobile Wallet Balance (৳)", state: mobileWallet, setState: setMobileWallet, info: "Include balance in mobile wallets like bKash, Nagad, Rocket, etc." },
//             { label: "Gold Value (৳)", state: gold, setState: setGold, info: "Include the value of gold jewelry, bars, or coins." },
//             { label: "Silver Value (৳)", state: silver, setState: setSilver, info: "Include the value of silver jewelry, bars, or coins." },
//             { label: "Business Stock (৳)", state: businessStock, setState: setBusinessStock, info: "Include the value of goods or stock for business." },
//             { label: "Investments (৳)", state: investment, setState: setInvestment, info: "Include shares, bonds, mutual funds, and other investments." },
//             { label: "Receivables (৳)", state: receivables, setState: setReceivables, info: "Include loans or money owed to you that can be recovered." },
//             { label: "Livestock Value (৳)", state: livestock, setState: setLivestock, info: "Include the value of cattle, goats, sheep, etc." },
//             { label: "Rental Income (৳)", state: rentalIncome, setState: setRentalIncome, info: "Include rental property income (not personal use property)." }
//           ].map((field, index) => (
//             <div key={index} className="mb-4">
//               <label className="block text-sm font-medium">{field.label}</label>
//               <input
//                 type="number"
//                 value={field.state}
//                 onChange={(e) => field.setState(parseFloat(e.target.value) || 0)}
//                 className="w-full p-2 border rounded"
//               />
//               <p className="text-xs text-gray-500 mt-1">{field.info}</p>
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={calculateZakat}
//           className="w-full bg-rose-500 text-white py-2 rounded mt-4 hover:bg-rose-600 transition"
//         >
//           Calculate Zakat
//         </button>

//         {zakat !== null && (
//           <div className="mt-4 p-4 bg-rose-500 text-white rounded text-center">
//             <strong>Your Zakat is: {zakat.toFixed(2)} Tk</strong>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useState } from "react";

// export default function ZakatCalculator() {
//   const [cash, setCash] = useState(0);
//   const [fixedDeposit, setFixedDeposit] = useState(0);
//   const [mobileWallet, setMobileWallet] = useState(0);
//   const [gold, setGold] = useState(0);
//   const [silver, setSilver] = useState(0);
//   const [businessStock, setBusinessStock] = useState(0);
//   const [investment, setInvestment] = useState(0);
//   const [receivables, setReceivables] = useState(0);
//   const [livestock, setLivestock] = useState(0);
//   const [rentalIncome, setRentalIncome] = useState(0);
//   const [borrowedMoney, setBorrowedMoney] = useState(0);
//   const [wagesDue, setWagesDue] = useState(0);
//   const [taxesRent, setTaxesRent] = useState(0);
//   const [zakat, setZakat] = useState(null);

//   const nisabGold = 87.48 * 12346; // Gold Nisab: 87.48g * Gold Price (৳12346/g)
//   const nisabSilver = 612.36 * 100; // Silver Nisab: 612.36g * Silver Price (৳100/g)
//   const nisab = Math.min(nisabGold, nisabSilver); // Use the lower Nisab value

//   const calculateZakat = () => {
//     const totalWealth =
//       (parseFloat(cash) || 0) +
//       (parseFloat(fixedDeposit) || 0) +
//       (parseFloat(mobileWallet) || 0) +
//       (parseFloat(gold) || 0) +
//       (parseFloat(silver) || 0) +
//       (parseFloat(businessStock) || 0) +
//       (parseFloat(investment) || 0) +
//       (parseFloat(receivables) || 0) +
//       (parseFloat(livestock) || 0) +
//       (parseFloat(rentalIncome) || 0);

//     const totalLiabilities =
//       (parseFloat(borrowedMoney) || 0) +
//       (parseFloat(wagesDue) || 0) +
//       (parseFloat(taxesRent) || 0);

//     const netWealth = totalWealth - totalLiabilities;

//     if (netWealth >= nisab) {
//       setZakat(netWealth * 0.025);
//     } else {
//       setZakat(0);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-green-100 p-6">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl">
//         <h2 className="text-2xl font-semibold mb-4 text-center">Zakat Calculator</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-green-100">
//           {[
//             { label: "Cash in Hand or Bank (৳)", state: cash, setState: setCash, info: "Include cash available in hand or any savings in the bank." },
//             { label: "Fixed Deposits (৳)", state: fixedDeposit, setState: setFixedDeposit, info: "Include savings bonds or fixed deposits." },
//             { label: "Mobile Wallet Balance (৳)", state: mobileWallet, setState: setMobileWallet, info: "Include balance in mobile wallets like bKash, Nagad, Rocket, etc." },
//             { label: "Gold Value (৳)", state: gold, setState: setGold, info: "Include the value of gold jewelry, bars, or coins." },
//             { label: "Silver Value (৳)", state: silver, setState: setSilver, info: "Include the value of silver jewelry, bars, or coins." },
//             { label: "Business Stock (৳)", state: businessStock, setState: setBusinessStock, info: "Include the value of goods or stock for business." },
//             { label: "Investments (৳)", state: investment, setState: setInvestment, info: "Include shares, bonds, mutual funds, and other investments." },
//             { label: "Receivables (৳)", state: receivables, setState: setReceivables, info: "Include loans or money owed to you that can be recovered." },
//             { label: "Livestock Value (৳)", state: livestock, setState: setLivestock, info: "Include the value of cattle, goats, sheep, etc." },
//             { label: "Rental Income (৳)", state: rentalIncome, setState: setRentalIncome, info: "Include rental property income (not personal use property)." },
//             { label: "Borrowed Money or Credit (৳)", state: borrowedMoney, setState: setBorrowedMoney, info: "Include borrowed money or goods bought on credit." },
//             { label: "Wages Due to Employees (৳)", state: wagesDue, setState: setWagesDue, info: "Include wages that are due to be paid to employees." },
//             { label: "Taxes, Rent, Utility Bills (৳)", state: taxesRent, setState: setTaxesRent, info: "Include any taxes, rent, or utility bills due immediately." }
//           ].map((field, index) => (
//             <div key={index} className="mb-4">
//               <label className="block text-sm font-medium">{field.label}</label>
//               <input
//                 type="number"
//                 value={field.state}
//                 onChange={(e) => field.setState(parseFloat(e.target.value) || 0)}
//                 className="w-full p-2 border rounded"
//               />
//               <p className="text-xs text-gray-500 mt-1">{field.info}</p>
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={calculateZakat}
//           className="w-full bg-rose-500 text-white py-2 rounded mt-4 hover:bg-rose-600 transition"
//         >
//           Calculate Zakat
//         </button>

//         {zakat !== null && (
//           <div className="mt-4 p-4 bg-rose-500 text-white rounded text-center">
//             <strong>Your Zakat is: {zakat.toFixed(2)} Tk</strong>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
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
  const [borrowedMoney, setBorrowedMoney] = useState(0);
  const [wagesDue, setWagesDue] = useState(0);
  const [taxesRent, setTaxesRent] = useState(0);
  const [EMIBills, setEMIBills] = useState(0);
  const [zakat, setZakat] = useState(null);

  const nisabGold = 87.48 * 12346; // Gold Nisab: 87.48g * Gold Price (৳12346/g)
  const nisabSilver = 612.36 * 100; // Silver Nisab: 612.36g * Silver Price (৳100/g)
  const nisab = Math.min(nisabGold, nisabSilver); // Use the lower Nisab value

  const calculateZakat = () => {
    const totalWealth =
      (parseFloat(cash) || 0) +
      (parseFloat(fixedDeposit) || 0) +
      (parseFloat(mobileWallet) || 0) +
      (parseFloat(gold) || 0) +
      (parseFloat(silver) || 0) +
      (parseFloat(businessStock) || 0) +
      (parseFloat(investment) || 0) +
      (parseFloat(receivables) || 0) +
      (parseFloat(livestock) || 0) +
      (parseFloat(rentalIncome) || 0);

    const totalLiabilities =
      (parseFloat(borrowedMoney) || 0) +
      (parseFloat(wagesDue) || 0) +
      (parseFloat(taxesRent) || 0)+
      (parseFloat(EMIBills) || 0);

    const netWealth = totalWealth - totalLiabilities;

    if (netWealth >= nisab) {
      setZakat(netWealth * 0.025);
    } else {
      setZakat(0);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-4 text-center text-black">Zakat Calculator</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Cash in Hand or Bank (৳)", state: cash, setState: setCash, info: "Include cash available in hand or any savings in the bank." },
            { label: "Fixed Deposits (৳)", state: fixedDeposit, setState: setFixedDeposit, info: "Include savings bonds or fixed deposits." },
            { label: "Mobile Wallet Balance (৳)", state: mobileWallet, setState: setMobileWallet, info: "Include balance in mobile wallets like bKash, Nagad, Rocket, etc." },
            { label: "Gold Value (৳)", state: gold, setState: setGold, info: "Include the value of gold jewelry, bars, or coins." },
            { label: "Silver Value (৳)", state: silver, setState: setSilver, info: "Include the value of silver jewelry, bars, or coins." },
            { label: "Business Stock (৳)", state: businessStock, setState: setBusinessStock, info: "Include the value of goods or stock for business." },
            { label: "Investments (৳)", state: investment, setState: setInvestment, info: "Include shares, bonds, mutual funds, and other investments." },
            { label: "Receivables (৳)", state: receivables, setState: setReceivables, info: "Include loans or money owed to you that can be recovered." },
            { label: "Livestock Value (৳)", state: livestock, setState: setLivestock, info: "Include the value of cattle, goats, sheep, etc." },
            { label: "Rental Income (৳)", state: rentalIncome, setState: setRentalIncome, info: "Include rental property income (not personal use property)." },
            { label: "Borrowed Money or Credit (৳)", state: borrowedMoney, setState: setBorrowedMoney, info: "Include borrowed money or goods bought on credit." },
            { label: "Wages Due to Employees (৳)", state: wagesDue, setState: setWagesDue, info: "Include wages that are due to be paid to employees." },
            { label: "Taxes, Rent, Utility Bills (৳)", state: taxesRent, setState: setTaxesRent, info: "Include any taxes, rent, or utility bills due immediately." },
            { label: "EMI Bills (৳)", state: EMIBills, setState: setEMIBills, info: "Next one year total EMI bill ." }
          ].map((field, index) => (
            <div key={index} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">{field.label}</label>
              <input
                type="number"
                value={field.state}
                onChange={(e) => field.setState(parseFloat(e.target.value) || 0)}
                className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300 bg-green-100 text-black"
              />
              <p className="text-xs text-gray-500 mt-1">{field.info}</p>
            </div>
          ))}
        </div>

        <button
          onClick={calculateZakat}
          className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700 transition"
        >
          Calculate Zakat
        </button>

        {zakat !== null && (
          <div className="mt-4 p-4 bg-blue-500 text-white rounded text-center">
            <strong>Your Zakat is: {zakat.toFixed(2)} Tk</strong>
          </div>
        )}
      </div>
    </div>
  );
}
