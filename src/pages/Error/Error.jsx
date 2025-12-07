import React from 'react';
import Header from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import errorImg from '../../assets/error.png';
import MyContainer from '../../component/MyContainer/MyContainer';

const NotFound = () => {
    return (
        <>
        <Header />
            <section className='bg-neutral py-10'>
                <MyContainer>
                    <div className='flex items-center bg-info rounded-lg text-secondary justify-evenly py-10 flex-col md:flex-row'>
                        <img className='w-[400px]' src={errorImg} alt="" />
                        <div className='w-[350px] space-y-4'>
                            <h2 className='font-semibold text-secondary text-lg md:text-xl'>
                                This Page is Not Found.
                            </h2>
                            <h2 className='text-2xl md:text-4xl'>
                                We are very sorry for error. We  <span className='text-primary'>can’t find this</span> page.
                            </h2>
                            <a className='btn border-none shadow-none text-secondary bg-primary' href='/'>
                                Back To Home
                            </a>
                        </div>
                    </div>
                </MyContainer>
            </section>
            <Footer />
        </>
    );
};

export default NotFound;