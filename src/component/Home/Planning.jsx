import React from "react";
import { FaPiggyBank, FaChartLine, FaSmile } from "react-icons/fa";

export default function Planning() {
return (
<section className="w-full bg-neutral py-16 px-6 md:px-12">
<div className="max-w-6xl mx-auto text-center">
    {/* Description */}
    <p className="text-base md:text-lg text-secondary/80 leading-relaxed max-w-3xl mx-auto mt-6">
      Proper financial planning brings clarity and confidence. Manage your income, track expenses, build savings, and prepare for a secure future—no matter your income level.
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

      {/* Card 1 */}
      <div className="group p-8 bg-white border border-orange-200 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
        <div className="flex items-center gap-4 mb-4">
          <span className="p-4 bg-gradient-to-tr from-orange-400 to-red-500 text-white rounded-xl text-2xl">
            <FaChartLine />
          </span>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-500 transition">
            Better Control
          </h3>
        </div>
        <p className="text-secondary/80">
          Track where your money goes and prevent overspending effectively.
        </p>
        <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full" />
      </div>

      {/* Card 2 */}
      <div className="group p-8 bg-white border border-orange-200 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
        <div className="flex items-center gap-4 mb-4">
          <span className="p-4 bg-gradient-to-tr from-orange-400 to-red-500 text-white rounded-xl text-2xl">
            <FaPiggyBank />
          </span>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-500 transition">
            Build Savings
          </h3>
        </div>
        <p className="text-secondary/80">
          Save consistently and achieve your long-term financial goals.
        </p>
        <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full" />
      </div>

      {/* Card 3 */}
      <div className="group p-8 bg-white border border-orange-200 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
        <div className="flex items-center gap-4 mb-4">
          <span className="p-4 bg-gradient-to-tr from-orange-400 to-red-500 text-white rounded-xl text-2xl">
            <FaSmile />
          </span>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-500 transition">
            Reduce Stress
          </h3>
        </div>
        <p className="text-secondary/80">
          Organized finances reduce stress and help you feel more secure.
        </p>
        <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full" />
      </div>

    </div>
  </div>
</section>
);
}