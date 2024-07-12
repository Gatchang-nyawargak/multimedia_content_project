import FavourPortfolio from '../Favour';
import HawaPortfolio from '../Hawa';
import NancyPortfolio from '../Nancy';
import WargaPortfolio from '../Warga';
import DeborahPortfolio from '../Deborah';
import './index.css'
import React from 'react';


function OurPortFolio(){
    return(
        <div className='portfolios'>
    <WargaPortfolio/>
    <NancyPortfolio/>
    <HawaPortfolio/>
    <FavourPortfolio/>
    <DeborahPortfolio/>
        </div>

    )
    

}
export default OurPortFolio;


