import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Datam from "../../component/datam/datam";
import Loader from "../../component/Loaders/Loader";
import MyContainer from "../../component/MyContainer/MyContainer";
import Transaction from "./Transaction";

const MyTransactions = () => {
  const { user } = useContext(AuthContext);

  const [infos, setInfos] = useState([]);
  const [loader, setLoader] = useState(true);
  const [sorted, setSorted] = useState("none");
  const [sortedType, setSortedType] = useState("none");

  // 🟢 Fetch only when user exists
  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://assignment-ten-serversites.vercel.app/management?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setInfos(data);
        setLoader(false);
      });
  }, [user]);

  if (!user || loader) return <Loader />;

  // 🟢 Filter by Income/Expense
  const filtered = sortedType === "Income"
    ? infos.filter((i) => i.type === "Income")
    : sortedType === "Expense"
    ? infos.filter((i) => i.type === "Expense")
    : infos;

  // 🟢 Sort by amount/date
  const sortedTransactions = [...filtered].sort((a, b) => {
    if (sorted === "lowToHigh") return a.amount - b.amount;
    if (sorted === "highToLow") return b.amount - a.amount;
    if (sorted === "Newest") return new Date(b.date) - new Date(a.date);
    if (sorted === "Oldest") return new Date(a.date) - new Date(b.date);
    return 0;
  });

  return (
    <section className="bg-neutral min-h-screen py-10">
      <MyContainer>
        {/* ---- Heading ---- */}
        <h2 className="font-bold text-2xl lg:text-4xl text-center mb-8 text-yellow-400 drop-shadow-[0_0_10px_#facc15]">
          My <span className="text-primary">Transactions</span>
        </h2>


        {/* ---- Sorting Controls ---- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-6">
           <h5 className="text-lg font-semibold text-secondary drop-shadow-sm">
              <span className="text-primary font-bold drop-shadow-[0_0_6px_#60a5fa]">
                 {sortedTransactions.length}
               </span>{" "}
             Transaction{sortedTransactions.length !== 1 && "s"} Found
            </h5>


          <div className="flex flex-col md:flex-row gap-3">
            {/* Income/Expense filter */}
            <select
              onChange={(e) => setSortedType(e.target.value)}
              className="select select-bordered bg-base-100 w-56 border-primary/50 hover:border-primary focus:outline-primary"
            >
              <option value="none">Sort: Income & Expense</option>
              <option value="Income">Only Income</option>
              <option value="Expense">Only Expense</option>
            </select>

            {/* Amount/Date sorting */}
            <select
              onChange={(e) => setSorted(e.target.value)}
              className="select select-bordered bg-base-100 w-56 border-primary/50 hover:border-primary focus:outline-primary"
            >
              <option value="none">Sort: Date & Amount</option>
              <option value="lowToHigh">Amount → Low to High</option>
              <option value="highToLow">Amount → High to Low</option>
              <option value="Newest">Newest First</option>
              <option value="Oldest">Oldest First</option>
            </select>
          </div>
        </div>

        {/* ---- Transaction Cards ---- */}
        {infos.length === 0 ? (
          <Datam />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 md:px-0">
            {sortedTransactions.map((info) => (
              <Transaction
                key={info._id}
                info={info}
                infos={infos}
                setInfos={setInfos}
              />
            ))}
          </div>
        )}
      </MyContainer>
    </section>
  );
};

export default MyTransactions;
