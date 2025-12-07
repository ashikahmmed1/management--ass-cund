import React, { use, useContext } from 'react';
import Hero from '../../component/Home/Hero';
import Delo from '../../component/Home/Delo';
import { AuthContext } from '../../context/AuthProvider';
import Over from '../../component/Home/Over';
import Planning from '../../component/Home/Planning';

const HomePages = () => {
    const {user} = useContext(AuthContext);
    return (
        <>
        <title>Home | FinEase</title>
            <Hero />
            {
                user && <Over />
            }
            <Delo />
            <Planning />
        </>
    );
};

export default HomePages;