import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateTransaction = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        type: "",
        description: "",
        category: "",
        amount: "",
        date: "",
    });

    // 🔵 Fetch existing data
    useEffect(() => {
        fetch(`https://assignment-ten-serversites.vercel.app/management/${id}`)
            .then(res => res.json())
            .then(data => {
                setFormData({
                    type: data.type,
                    description: data.description,
                    category: data.category,
                    amount: data.amount,
                    date: data.date,
                });
            });
    }, [id]);

    // 🟢 Input handler
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // 🟢 Update data
    const handleUpdate = (e) => {
        e.preventDefault();

        fetch(`https://assignment-ten-serversites.vercel.app/management/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(() => {
                toast.success("Transaction Updated!");

                // Redirect to details page
                navigate(`/transaction-details/${id}`);
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-base-200">
            <form
                className="w-full max-w-md bg-base-100 shadow p-6 rounded-lg space-y-4"
                onSubmit={handleUpdate}
            >
                <h2 className="text-xl font-bold text-center">Update Transaction</h2>

                <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="select select-bordered w-full"
                >
                    <option disabled>Select Type</option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>

                <input
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    type="text"
                    placeholder="Description"
                    className="input input-bordered w-full"
                />

                <input
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    type="text"
                    placeholder="Category"
                    className="input input-bordered w-full"
                />

                <input
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    type="number"
                    placeholder="Amount"
                    className="input input-bordered w-full"
                />

                <input
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    type="date"
                    className="input input-bordered w-full"
                />

                <button className="btn btn-primary w-full">Update</button>
            </form>
        </div>
    );
};

export default UpdateTransaction;
