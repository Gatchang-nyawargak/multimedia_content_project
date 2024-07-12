import FavourPortfolio from '../Favour';
import HawaPortfolio from '../Hawa';
import NancyPortfolio from '../Nancy';
import WargaPortfolio from '../Warga';
import DeborahPortfolio from '../Deborah';
import './index.css'


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


