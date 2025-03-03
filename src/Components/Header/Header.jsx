import logo from '../../assets/logo.png';
import coinIcon from '../../assets/coin1.png'; // Importing the coin icon

const Header = () => {
    return (
        <header className="border-b py-4">
            <div className='max-w-[1320px] mx-auto px-6'>
            <nav className="flex justify-between items-center px-6">
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
                        
                        <span> 0  </span> Coin
                        <img src={coinIcon} alt="Coin" className="h-5 w-5 mr-2" />
                    </button>
                </div>
            </nav>
            </div>
        </header>
    );
};

export default Header;
