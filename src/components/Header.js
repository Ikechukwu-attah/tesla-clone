import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars}  from '../features/carSlice/carSlice'
import {useSelector} from 'react-redux'


function Header() {

    const[burgerOpen, setBurgerOpen] = useState(false);
    const cars = useSelector(selectCars);
    console.log("cars:", cars)
    return (
        <Cointainer>
           <a href="#">
             <img src="/images/logo.svg" alt="tesla" />

           </a>

           <Menu>
               {cars && cars.map((car, index)=>(
                      <a key={index} href="#">{car}</a>
               ))}
          
           </Menu>

           <RightMenu>
             <a href="#">Shop</a>
             <a href="#">Tesla Account</a>
             <CustomMenu onClick={()=>setBurgerOpen(true)}/>
           </RightMenu>

           <BurgerNav show = {burgerOpen}>
               <CloseWrapper>
                <CustomClose onClick={()=>setBurgerOpen(false)} />
                </CloseWrapper>
               
                {cars && cars.map((car, index)=>(
                       <li><a href="#" key={index}>{car}</a></li>
               ))}
          
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade-in</a></li>
                    <li><a href="#">Cybertruck</a></li>
                    <li><a href="#">Roadaster</a></li>
                   
           </BurgerNav>
        </Cointainer>
    )
}

export default Header


const Cointainer = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content:space-between;
  align-items:center;
  padding: 0 20px;
  top:0;
  left:0;
  right:0;
  z-index:1;
 


`

const Menu = styled.div`

display:flex;
align-items:center;
justify-content:center;
flex:1;

@media(max-width:768px){
    display:none;
}

a{
    font-weight:600;
    text-transform:upperCase;
    padding:0 10px;
    flex-wrap:nowrap;
}

`

const RightMenu = styled.div`
      display:flex;
      align-items:center;

    a{
        font-weight:600;
        text-transform:upperCase;
        margin-right: 10px;
        
    }
`

const CustomMenu = styled(MenuIcon)`

cursor:pointer;

`

const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background-color:#fff;
width:300px;
z-index:10;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform: ${props => props.show? 'translateX(0)': 'translateX(100%)'};

li{
    padding:15px 0;
    border-bottom: 1px solid rgba(0,0,0, .2);
    a{
        font-weight:600;
    }
}

`

const CustomClose = styled(CloseIcon)`
  cursor:pointer;
`

const CloseWrapper = styled.div`
      display: flex;
      justify-content:flex-end;
`