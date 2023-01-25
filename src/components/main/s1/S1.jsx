import React from 'react';
import Overview from './overview/Overview';
import Repo from './repo/Repo';
import Nav2 from './nav2/Nav2';
import Acc from './account/Acc';
import { Route, Routes } from 'react-router-dom';


const s1 = () => {
    return (
        <section>
            <Nav2 />
            <hr className='mt-0' />
            <div className='d-flex container-xxl'>
                <Acc />
                <Routes>
                    <Route path="/" element={<Overview />} />
                    <Route path="/repos" element={<Repo />} />
                </Routes>
            </div>
        </section>
    );
};

export default s1;