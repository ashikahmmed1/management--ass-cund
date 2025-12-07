import React, { useContext, useEffect, useState } from 'react';
import Container from '../../layout/MainLayout';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MyContainer from '../../component/MyContainer/MyContainer';
import { AuthContext } from '../../context/AuthProvider';
import Loaders from '../../component/Loaders/Loader';
import Swal from "sweetalert2";


const Details = () => {
    const [sData, setSdata] = useState(null);
    const [loader, setLoader] = useState(true);
    const [infos, setInfos] = useState([]);

    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    // Fetch single transaction
    useEffect(() => {
        if (!id) return;

        fetch(`https://assignment-ten-serversites.vercel.app/management/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log("Single data:", data);
                setSdata(data);
                setLoader(false);
            })
            .catch(err => console.log("Fetch error:", err));
    }, [id]);

    // Fetch user transactions
    useEffect(() => {
        if (!user?.email) return;

        fetch(`https://assignment-ten-serversites.vercel.app/management?email=${user.email}`)
            .then(res => res.json())
            .then(data => setInfos(data));
    }, [user]);

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

                fetch(`https://assignment-ten-serversites.vercel.app/management/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        Swal.fire("Deleted!", "Your transaction has been deleted.", "success");
                        navigate('/my-transactions');
                    }
                });

            }
        });

    };

    if (loader) {
        return <Loaders />;
    }

    const { type, category, amount, date, description, _id } = sData || {};

    const sameCate = infos.filter(item => item.category === category);
    const total = sameCate.reduce((acc, item) => acc + Number(item.amount), 0);

    return (
        <div>
            <section className='flex items-center py-5 lg:py-10 bg-neutral px-5 lg:px-7 xl:px-0 text-secondary'>
                <MyContainer>
                    <div className='shadow-sm p-10 xl:px-52 rounded-xl bg-base-100 relative overflow-hidden'>
                        
                        <div className='space-y-3'>
                            <h2 className='text-2xl lg:text-4xl text-primary text-center font-semibold'>{type}</h2>

                            <div className='flex justify-between items-center flex-col md:flex-row'>
                                <p className='text-xl md:text-2xl font-semibold'>Amount: {amount} BDT</p>
                                <p className='text-lg md:text-xl'>Date: {date}</p>
                            </div>

                            <p className='text-2xl font-semibold'>
                                Category: "{category}"
                            </p>

                            <div>
                                <h2 className='text-lg md:text-xl'>Description</h2>
                                <p className='text-base text-gray-800'>
                                    {description}
                                </p>
                            </div>

                            <p className='font-semibold'>
                                Total {type} in "{category}" : <b>{total}</b> BDT
                            </p>

                            <div className='flex justify-between items-center'>
                                
                                <div className='flex flex-col gap-4 md:flex-row md:space-x-2'>
                                    <Link
                                      to={`/update/${_id}`}  
                                      className="px-4 py-1.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm transition"
                                    >
                                      Update
                                    </Link>

                                    <button
                                        onClick={onDelete}
                                        className="px-4 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm transition"
                                    >
                                        Delete
                                    </button>
                                </div>

                                <Link 
                                    className='bg-orange-500 text-white text-sm px-5 py-2 rounded-xl hover:bg-orange-400 transition' 
                                    to="/my-transactions"
                                >
                                    Back
                                </Link>

                            </div>
                        </div>
                    </div>
                </MyContainer>
            </section>
        </div>
    );
};

export default Details;
