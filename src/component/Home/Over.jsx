import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Loader from '../../component/Loaders/Loader';
import StatCard from './Heros/Stat';
import MyContainer from '../MyContainer/MyContainer';

const Over = () => {
    const { user } = useContext(AuthContext);
    const [infos, setInfos] = useState([]);
    const [loader, setLoader] = useState(true);

  
    if (!user) {
        return <Loader />;
    }

    useEffect(() => {
        if (!user?.email) return; 

        setLoader(true);

        fetch(`https://assignment-ten-serversites.vercel.app/management?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setInfos(data);
                setLoader(false);
            })
            .catch(() => setLoader(false));

    }, [user]); 

    if (loader) {
        return <Loader />;
    }

    // =============================
    //      INCOME CALCULATION
    // =============================
    const allIncome = infos.filter(item => item.type === "Income");
    const totalIncome = allIncome.reduce((acc, c) => acc + Number(c.amount), 0);

    // =============================
    //      EXPENSE CALCULATION
    // =============================
    const allExpense = infos.filter(item => item.type === "Expense");
    const totalExpense = allExpense.reduce((acc, c) => acc + Number(c.amount), 0);

    // =============================
    //      SAVINGS CALCULATION
    // =============================
    const totalSavings = Math.max(totalIncome - totalExpense, 0);

    return (
        <section className="py-20 bg-neutral"> <h2 className="font-extrabold text-2xl md:text-4xl mb-8 text-center text-secondary"> <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-pink-500"> Overview </span> </h2> <MyContainer> <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 shadow-lg p-6 md:p-10 xl:px-52 rounded-3xl bg-white/70 backdrop-blur-sm relative overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

    {/* Total Income Card */}
    <StatCard
      title="Total Income"
      amount={totalIncome}
      change={
        totalIncome
          ? totalIncome > totalExpense
            ? "Great! You're earning more than you're spending."
            : totalIncome === totalExpense
              ? "Your income is equal to your expense."
              : "Warning: Your income is less than your expense."
          : "No income data found yet!"
      }
      changeColor="text-green-500"
      iconClass="bg-green-100 text-green-500"
    />

    {/* Total Expense Card */}
    <StatCard
      title="Total Expense"
      amount={totalExpense}
      change={
        totalExpense
          ? totalExpense > totalIncome
            ? "Warning: Your expense is higher than your income."
            : totalExpense === totalIncome
              ? "Your expense is equal to your income."
              : "Great! You're spending less than you're earning."
          : "No expense data found yet!"
      }
      changeColor="text-orange-500"
      iconClass="bg-orange-100 text-orange-500"
    />

    {/* Total Savings Card */}
    <StatCard
      title="Total Savings"
      amount={totalSavings}
      change={
        totalSavings <= 0
          ? "No savings. Try reducing expenses."
          : "Good job! You have savings this month."
      }
      changeColor="text-blue-500"
      iconClass="bg-blue-100 text-blue-500"
    />

  </div>
</div>
            </MyContainer>
        </section>
    );
};

export default Over;
