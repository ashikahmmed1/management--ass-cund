import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import MyContainer from "../../component/MyContainer/MyContainer";
import { toast } from "react-toastify";

const Add_Transactions = () => {
  const [type, setType] = useState("income");
  const [loading, setLoading] = useState(false);
  const [errAmount, setErrAmount] = useState(false);
  const [errDes, setErrDes] = useState(false);
  const [errDate, setErrDate] = useState(false);
  const { user } = useContext(AuthContext);

  const validate = (amount, desc, date) => {
    setErrAmount(!amount);
    setErrDes(!desc);
    setErrDate(!date);

    if (!amount) toast.error("Please enter a valid amount!");
    if (!desc) toast.error("Please enter a valid description!");
    if (!date) toast.error("Please select a valid date!");

    return amount && desc && date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const amount = e.target.amount.value;
    const desc = e.target.description.value;
    const date = e.target.date.value;

    if (!validate(amount, desc, date)) return;

    const transactData = {
      type: type === "income" ? "Income" : "Expense",
      category: e.target.category.value,
      amount: Number(amount),
      description: desc,
      date,
      email: user?.email,
      name: user?.displayName,
    };

    setLoading(true);

    fetch("https://assignment-ten-serversites.vercel.app/management", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transactData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Transaction Added Successfully!");
        e.target.reset();
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <section className="bg-neutral min-h-screen py-14 text-secondary">
      <MyContainer>
        <div className="max-w-xl mx-auto bg-base-100 rounded-2xl shadow-xl p-8 relative overflow-hidden">

          {/* Accent Background Shapes */}
          <div className="absolute w-40 h-40 bg-primary/20 rounded-full -top-10 -left-10 blur-xl"></div>
          <div className="absolute w-32 h-32 bg-accent/20 rounded-full -bottom-10 -right-10 blur-xl"></div>

          {/* Toggle Buttons */}
          <div className="flex mb-8 rounded-lg overflow-hidden shadow-md">
            <button
              onClick={() => setType("income")}
              className={`flex-1 py-3 font-semibold transition ${
                type === "income"
                  ? "bg-primary text-white"
                  : "bg-base-200 text-secondary"
              }`}
            >
              Income
            </button>
            <button
              onClick={() => setType("expense")}
              className={`flex-1 py-3 font-semibold transition ${
                type === "expense"
                  ? "bg-primary text-white"
                  : "bg-base-200 text-secondary"
              }`}
            >
              Expense
            </button>
          </div>

          {/* Title */}
          <h2 className="text-center text-3xl font-bold mb-6">
            Add Your <span className="text-primary capitalize">{type}</span>
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Category */}
            <div>
              <label className="font-medium">Select Category</label>
              <select
                name="category"
                className="select select-bordered w-full mt-1"
              >
                {type === "income" ? (
                  <>
                    <option>Salary</option>
                    <option>Ride Sharing</option>
                    <option>Pocket Money</option>
                    <option>Side Business</option>
                  </>
                ) : (
                  <>
                    <option>Home rent</option>
                    <option>Food</option>
                    <option>Transportation</option>
                    <option>Health</option>
                    <option>Personal</option>
                    <option>Education</option>
                    <option>Technology</option>
                    <option>Entertainment</option>
                    <option>Family</option>
                    <option>Others</option>
                  </>
                )}
              </select>
            </div>

            {/* Amount */}
            <div>
              <label className="font-medium">Amount</label>
              <input
                type="number"
                name="amount"
                placeholder="Enter amount"
                className={`input input-bordered w-full mt-1 ${
                  errAmount && "border-red-500"
                }`}
              />
            </div>

            {/* Description */}
            <div>
              <label className="font-medium">Description</label>
              <textarea
                name="description"
                placeholder="Write details..."
                className={`textarea textarea-bordered w-full mt-1 ${
                  errDes && "border-red-500"
                }`}
              />
            </div>

            {/* Date */}
            <div>
              <label className="font-medium">Date</label>
              <input
                type="date"
                name="date"
                className={`input input-bordered w-full mt-1 ${
                  errDate && "border-red-500"
                }`}
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-medium">Email</label>
              <input
                type="text"
                value={user?.email}
                readOnly
                className="input input-bordered w-full bg-base-200 cursor-not-allowed mt-1"
              />
            </div>

            {/* Name */}
            <div>
              <label className="font-medium">Name</label>
              <input
                type="text"
                value={user?.displayName}
                readOnly
                className="input input-bordered w-full bg-base-200 cursor-not-allowed mt-1"
              />
            </div>

            {/* Submit */}
            <button
              className="btn btn-primary w-full text-lg font-semibold mt-4"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Add Transaction"
              )}
            </button>
          </form>
        </div>
      </MyContainer>
    </section>
  );
};

export default Add_Transactions;
