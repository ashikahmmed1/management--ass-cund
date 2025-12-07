import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

// import Swal from 'sweetalert2';

const Transaction = ({ info, infos, setInfos }) => {
    const { type, category, amount, date, _id } = info;

    const onDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-ten-serversites.vercel.app/management/${_id}`, {
                    method: 'DELETE'
                })
                    .then(result => result.json())
                    .then(data => {
                        
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your transaction has been deleted.",
                                icon: "success"
                            });
                            const remainData = infos.filter(remain => remain._id !== _id);
                            setInfos(remainData)
                        }
                    })
            }
        });
    }

    return (
        <>
            <div className="bg-base-100/80 backdrop-blur-md rounded-2xl shadow-lg border border-accent/40 p-6 w-full 
    transition-all duration-300 hover:shadow-xl hover:border-primary/70 hover:-translate-y-1">

    {/* Header */}
    <div className="flex justify-between items-start mb-4">
        <h3
            className={`text-lg font-semibold ${type === "Income" ? "text-green-500" : "text-red-500"}`}
        >
            {type}
        </h3>

        <span className="text-xs text-secondary opacity-70 bg-accent/20 px-2 py-0.5 rounded-md">
            {date}
        </span>
    </div>

    {/* Details */}
    <div className="space-y-2 mb-5">
        <p className="text-sm">
            <span className="font-semibold text-secondary">Category:</span>{" "}
            <span className="text-primary">{category}</span>
        </p>
        <p className="text-sm">
            <span className="font-semibold text-secondary">Amount:</span>{" "}
            <span className="font-bold text-primary">{amount} BDT</span>
        </p>
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap justify-center gap-3">
        <a
            href={`/transaction-details/${_id}`}
            className="px-4 py-2 text-sm rounded-lg bg-blue-500/90 text-white hover:bg-blue-600 
                shadow-md hover:shadow-lg transition-all"
        >
            View Details
        </a>

        <Link
            to={`/update/${_id}`}
            className="px-4 py-2 text-sm rounded-lg bg-yellow-400 text-black hover:bg-yellow-500 
                shadow-md hover:shadow-lg transition-all"
        >
            Update
        </Link>

        <button
            onClick={onDelete}
            className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 
                shadow-md hover:shadow-lg transition-all"
        >
            Delete
        </button>
    </div>
</div>

        </>
    );
};

export default Transaction;