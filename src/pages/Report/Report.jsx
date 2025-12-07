import React, { useContext, useEffect, useState } from 'react';
import MyContainer from '../../component/MyContainer/MyContainer';
import PieChartExample from './Chart';
import { AuthContext } from '../../context/AuthProvider';
import Loader from '../../component/Loaders/Loader';

const Report = () => {
    const [infos, setInfos] = useState([]);
    const [loader, setLoader] = useState(true);
    const { user } = useContext(AuthContext);

    // 🛑 user না থাকলে loader দেখাও
    if (!user) {
        return <Loader />;
    }

    useEffect(() => {
        if (!user?.email) return; // 🛑 user না থাকলে fetch বন্ধ

        setLoader(true);

        fetch(`https://assignment-ten-serversites.vercel.app/management?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(result => result.json())
            .then(data => {
                setInfos(data);
                setLoader(false);
            });

    }, [user]);   // 🟢 user load হলে আবার fetch করবে

    if (loader) {
        return <Loader />;
    }

    // Expense
    const allExpenses = infos.filter(expense => expense.type === 'Expense');
    const categories = [...new Set(allExpenses.map(item => item.category))];

    const updatedExpenseData = categories.map(category => {
        const total = allExpenses
            .filter(exp => exp.category === category)
            .reduce((acc, curr) => acc + Number(curr.amount), 0);

        return { name: category, value: total };
    });

    // Income
    const allIncome = infos.filter(income => income.type === 'Income');
    const categoriesI = [...new Set(allIncome.map(item => item.category))];

    const updatedIncomeData = categoriesI.map(category => {
        const total = allIncome
            .filter(exp => exp.category === category)
            .reduce((acc, curr) => acc + Number(curr.amount), 0);

        return { name: category, value: total };
    });

    return (
        <section className='bg-neutral min-h-screen py-10'>
            <MyContainer>
                <PieChartExample
                    updatedExpenseData={updatedExpenseData}
                    updatedIncomeData={updatedIncomeData}
                />
            </MyContainer>
        </section>
    );
};

export default Report;
