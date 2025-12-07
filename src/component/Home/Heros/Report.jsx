import React from 'react';

const Report = ({ image }) => {
    return (
        <div className="w-[500px] xl:w-[700px] bg-base-100 shadow-lg rounded-xl p-10">
            <img src={image} alt="report" className="w-full h-full object-contain" />
        </div>
    );
};

export default Report;