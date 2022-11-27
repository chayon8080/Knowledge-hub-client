import React from 'react';
import Catagories from '../../Catagories/Catagories';
import Banner from '../Banner.js/Banner';
import ExtraOption from '../ExtraOption/ExtraOption';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ExtraOption></ExtraOption>
            <Catagories></Catagories>
        </div>
    );
};

export default Home;