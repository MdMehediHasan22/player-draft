import bannerImage from '../../assets/bg-shadow.png';
import bannerImage2 from '../../assets/banner-main.png';
import PropTypes from 'prop-types';

const Banner = ({ handleCoin }) => {
    return (
        <section 
            className="relative bg-cover bg-center bg-black bg-opacity-100 h-[500px] max-w-7xl mx-auto flex items-center justify-center text-center text-white rounded-lg"
            style={{ backgroundImage: `url(${bannerImage})` }}
        >
            <div className="p-8 rounded-lg">
                <div className='flex justify-center mb-4'>
                    <img src={bannerImage2} alt="Banner" className="mx-auto h-32" />
                </div>
                <h1 className="text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="mt-4 text-lg">Beyond Boundaries Beyond Limits</p>
                <button 
                    onClick={handleCoin} 
                    className="mt-6 px-6 py-3 border-2 border-lime-500 bg-lime-300 hover:bg-lime-400 transition text-white font-semibold rounded-lg"
                >
                    Claim Free Credit
                </button>
            </div>
        </section>
    );
};

Banner.propTypes = {
    handleCoin: PropTypes.func.isRequired
};

export default Banner;
