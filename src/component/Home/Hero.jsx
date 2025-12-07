import React, { use, useContext } from 'react';
import bannerLight from '../../assets/banner1.png'
import bannerDark from '../../assets/banner1.png'
import ReportCard from './Heros/Report';
import StatCard from './Heros/Stat';
import leftChart from '../../assets/banner1.png'
import rightChart from '../../assets/bg.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Hero = () => {
    const { user } = useContext(AuthContext)
    const { themeController } = useContext(AuthContext)

    return (
        <>
          <section className="md:min-h-screen flex justify-center items-center bg-no-repeat bg-center bg-cover relative" 
          style={{ backgroundImage: `url(${themeController === 'dark' ? bannerDark : bannerLight})` }} > 
          <div className="w-full md:min-h-screen bg-gradient-to-b from-accent/80 to-[#ff690000] flex justify-center items-center py-10 md:py-0"> 
          <div className="w-full lg:py-20 px-6 lg:px-20 flex flex-col items-center justify-center text-center relative space-y-8">
  {/* Hero Title */}
  <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight max-w-4xl bg-clip-text text-transparent 
  bg-gradient-to-r from-orange-400 to-red-500 animate-fadeIn">
    Take Control of Your <span className="text-yellow-400">Finances</span>, <br /> One Smart Step at a Time
  </h1>

  {/* Hero */}
 {/* <p className="text-slate-200 md:text-indigo-700
  xl:text-slate-300 text-xl md:text-2xl lg:text-3xl xl:text-4xl 
 max-w-3xl leading-relaxed animate-fadeIn delay-150 text-center">
  Manage your <span 
  className="font-bold text-shadow-fuchsia-600">money effortlessly</span>, track <span 
  className="font-semibold text-cyan-300">expenses</span>, <span 
  className="font-bold text-blue-500">maximize savings</span>, and achieve <span 
  className="font-extrabold bg-clip-text text-transparent 
  bg-gradient-to-r from-cyan-400 to-blue-500">financial freedom</span>. 
  <span className="text-fuchsia-500">
    No clutter, no confusion</span> — just clear insights to grow your wealth.
</p> */}

  {/* Call to Action */}
  {!user && (
    <div className="flex gap-4 mt-6 animate-fadeIn delay-300">
      <Link
        to="/signup"
        className="bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold text-sm px-6 py-3 
        rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        Get Started
      </Link>
      <Link
        to="/signin"
        className="border border-orange-400 text-orange-400 font-semibold text-sm px-6 py-3 rounded-full hover:bg-orange-50 transition"
      >
        Learn More
      </Link>
    </div>
  )}

  {/* Floating Report Cards (Desktop Only) */}
  <div className="hidden lg:block absolute -left-64 top-10 rotate-[8deg] animate-pulse-slow">
    <ReportCard image={leftChart} />
  </div>

  <div className="hidden lg:block absolute -right-72 top-10 rotate-[-8deg] animate-pulse-slow">
    <ReportCard image={rightChart} />
  </div>

  {/* Stats Cards */}
  <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 w-full max-w-6xl animate-fadeIn delay-500">
    <StatCard
      title="Total Income"
      amount="18,532"
      change="Income exceeds your spending — keep growing!"
      changeColor="text-green-500"
      iconClass="bg-green-100 text-green-500"
    />
    <StatCard
      title="Total Expense"
      amount="3,177"
      change="Your spending is controlled and under budget."
      changeColor="text-orange-500"
      iconClass="bg-orange-100 text-orange-500"
    />
    <StatCard
      title="Total Savings"
      amount="1,658"
      change="Great! You are saving consistently this month."
      changeColor="text-blue-500"
      iconClass="bg-blue-100 text-blue-500"
    />
  </div>

</div>

</div> </section>
        </>
    );
};

export default Hero;