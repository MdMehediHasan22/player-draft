import PropTypes from 'prop-types'
import './Player.css'
import { BsPersonCircle } from "react-icons/bs";
import { IoFlag } from "react-icons/io5";
const Player = ({player}) => {
    const{name,country,image,role,battingType,bowlingType,biddingPrice} = player;
    return (
        <div className="player ">
            <img className='rounded-lg h-48' src={image} alt="" />
            <div className='flex gap-2'> 
                <button><BsPersonCircle></BsPersonCircle></button>
                <h3>{name}</h3>
            </div>
            <div className='flex justify-between'>

                <p> { country}</p>
                <button>{role}</button>
            </div>
            <div className='flex justify-between'>
                <p>{battingType}</p>
                <p>{bowlingType}</p>
            </div>

            <div className='flex justify-between'>
                <p>Price:${biddingPrice}</p>
            <button>Choose Player</button>
            </div>
        </div>
    );
};
Player.propTypes = {
    player:PropTypes.object.isRequired,
  
}
export default Player;