import style from './Container1.module.css'
import arrowSVG from './arrow_right.svg'
import { useNavigate } from "react-router-dom";
import bellSVG from './bell.svg'
import menuSVG from './menu.svg'
import iconSVG from './icon.svg'
import MainMenu from '../../screens/main_menu/MainMenu';
import { useState , useEffect} from 'react';

function Container1({headerContent, bodyContent}) {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false)
  const [toggleNotifications, setToggleNotifications] = useState(false)
  
  return (

    <div className={style.container}>
       <div className={!toggle ? style.menu : style.menu_opened}> 
        <MainMenu setToggle={setToggle}/>
        </div>
      <div className={style.navbar}>
        <div className={style.bell}> 
        <img  src={bellSVG}
         onClick={()=>setToggleNotifications(toggleNotifications=> !toggleNotifications)}
        
        ></img>
        <div className={style.circle}>1</div>
        
        </div>
       
        <img src={iconSVG}></img>
        <img className={style.menu_icon} src={menuSVG}
        onClick={()=>setToggle(toggle=> !toggle)}
        ></img>

<div className={!toggleNotifications ? style.notifications_container : style.notifications_container_opened}>
          <a href='/guestinvitationmessage'>הזמנה</a>


        </div>
      </div>
      <header className={style.header}>
        <img className={style.arrow_icon} src={arrowSVG} alt='arrow'
        onClick={()=>navigate(-1)}
        />
        {headerContent && headerContent}
      </header>

     
        {bodyContent && bodyContent}
     
      
    </div>
  );
}

export default Container1;
