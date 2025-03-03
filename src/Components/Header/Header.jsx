import logo from '../../assets/logo.png';
import coinIcon from '../../assets/coin1.png';
import PropTypes from 'prop-types';

const Header = ({ coin }) => {
    return (
        <header className="border-b py-4">
            <div className='max-w-7xl mx-auto px-6'>
                <nav className="flex justify-between items-center">
                    {/* Logo */}
                    <img src={logo} alt="Logo" className="h-16" />

                    {/* Navigation Links */}
                    <div className="flex items-center space-x-6">
                        <ul className="flex space-x-6 text-xl">
                            <li className="cursor-pointer hover:text-blue-500">Home</li>
                            <li className="cursor-pointer hover:text-blue-500">Fixture</li>
                            <li className="cursor-pointer hover:text-blue-500">Teams</li>
                            <li className="cursor-pointer hover:text-blue-500">Schedules</li>
                        </ul>

                        {/* Coin Button with Icon */}
                        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                            <span> {coin} </span> Coin
                            <img src={coinIcon} alt="Coin" className="h-5 w-5 ml-2" />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

Header.propTypes = {
    coin: PropTypes.number.isRequired,
};

export default Header;


