import React from "react";

export default function page() {
  return (
    <section className=" pt-[4.5rem] pb-10 lg:pb-40 lg:px-[6.5rem] max-w7xl max-w-[90rem] mx-auto space-y-5 lg:space-y-10">
      <h1 className="text-[1.5rem] lg:text-[2.5rem] font-medium">
        Paid Courses
      </h1>
      <div className="relative overflow-x-auto">
        <table className="w-full table-fixed text-left border-collapse border border-[#232323]">
          <thead className="bg-[#080821]">
            <tr>
              <th className=" p-3 lg:p-6 border border-[#232323] font-semibold lg:text-2xl">
                Courses
              </th>
              <th className=" p-3 lg:p-6 border border-[#232323] font-semibold lg:text-2xl">
                Time frame
              </th>
              <th className=" p-3 lg:p-6 border border-[#232323] font-semibold lg:text-2xl">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td className="p-3 lg:p-6 border border-[#232323] max-w40">
                Blockchain Development (Solidity, Rust, Cairo)
              </td>
              <td className="p-3 lg:p-6 border border-[#232323]">3 Months</td>
              <td className="p-3 lg:p-6 border border-[#232323]">
                $60 Monthly - $162 Upfront
              </td>
            </tr>
            <tr>
              <td className="p-3 lg:p-6 border border-[#232323] max-w40">
                Web3 UI/UX Design
              </td>
              <td className="p-3 lg:p-6 border border-[#232323]">2 Months</td>
              <td className="p-3 lg:p-6 border border-[#232323]">
                $30 Monthly - $54 Upfront
              </td>
            </tr>
            <tr>
              <td className="p-3 lg:p-6 border border-[#232323] max-w40">
                Web3 Technical writing
              </td>
              <td className="p-3 lg:p-6 border border-[#232323]">2 Months</td>
              <td className="p-3 lg:p-6 border border-[#232323]">
                $30 Monthly - $54 Upfront
              </td>
            </tr>
            <tr>
              <td className="p-3 lg:p-6 border border-[#232323] max-w40">
                Zero Knowledge Proofs
              </td>
              <td className="p-3 lg:p-6 border border-[#232323]">3 Months</td>
              <td className="p-3 lg:p-6 border border-[#232323]">
                $100 Monthly - $270 Upfront
              </td>
            </tr>
            <tr>
              <td className="p-3 lg:p-6 border border-[#232323] max-w40">
                Blockchain Cyber Security
              </td>
              <td className="p-3 lg:p-6 border border-[#232323]">3 Months</td>
              <td className="p-3 lg:p-6 border border-[#232323]">
                $60 Monthly - $162 Upfront
              </td>
            </tr>
            <tr>
              <td className="p-3 lg:p-6 border border-[#232323] max-w40">
                Smart contract Auditing
              </td>
              <td className="p-3 lg:p-6 border border-[#232323]">3 Months</td>
              <td className="p-3 lg:p-6 border border-[#232323]">
                $70 Monthly - $126 Upfront
              </td>
            </tr>
            <tr>
              <td className="p-3 lg:p-6 border border-[#232323] max-w40">
                Front-End Engineering
              </td>
              <td className="p-3 lg:p-6 border border-[#232323]">3 Months</td>
              <td className="p-3 lg:p-6 border border-[#232323]">
                $30 Monthly - $81 Upfront
              </td>
            </tr>
            <tr>
              <td className="p-3 lg:p-6 border border-[#232323] max-w40">
                Web3 Marketing
              </td>
              <td className="p-3 lg:p-6 border border-[#232323]">1 Month</td>
              <td className="p-3 lg:p-6 border border-[#232323]">$30</td>
            </tr>
            <tr>
              <td className="p-3 lg:p-6 border border-[#232323] max-w40">
                Blockchain Research
              </td>
              <td className="p-3 lg:p-6 border border-[#232323]">1 Month</td>
              <td className="p-3 lg:p-6 border border-[#232323]">$30</td>
            </tr>
            <tr>
              <td className="p-3 lg:p-6 border border-[#232323] max-w40">
                Web3 Data Analysis
              </td>
              <td className="p-3 lg:p-6 border border-[#232323]">1 Month</td>
              <td className="p-3 lg:p-6 border border-[#232323]">$30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
