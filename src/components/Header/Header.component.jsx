import React, {useState, useEffect} from 'react'
import { ReactComponent as MenuIcon } from '../../icons/ham.svg';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import logo from '../../icons/logo/NSAS.png'

import {Container, InnerContainer, Logo, LogoContainer, NavIconContainer, SideNavigation, NavLink, DonateButton, HeaderNavigation} from "./Header.styles"

import useMDmediaQuery from '../../hooks/useMDmediaQuery';

const Header = () => {
  const isMD = useMDmediaQuery();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [displayBackground, setDisplayBackground] = useState(false);
  const [displayHeader, setDisplayHeader] = useState(true);

  useEffect(() => {
  
    if(isMD) {
      setIsNavOpen(false);
      document.body.style.overflowY = 'visible';
    }
    
  }, [isMD])
  
  const toggleNav = () => {
    document.body.style.overflowY = isNavOpen ? "visible": "hidden";
    setIsNavOpen(!isNavOpen);
    setDisplayBackground(isNavOpen ? false : true);
  };

  let prevScrollPos = window.pageYOffset;
  window.onscroll = () => {
    if(isNavOpen) return false;
    const currentScrollPos = window.pageYOffset;

    setDisplayBackground(currentScrollPos > 0);

    if(currentScrollPos > prevScrollPos)
    {
      setDisplayHeader(false);
    }else
    {
      setDisplayHeader(true);
    }
    prevScrollPos = currentScrollPos;
  }

  return (
    <Container isNavOpen={isNavOpen} displayBackground={displayBackground} displayHeader={displayHeader}>
      <InnerContainer>
        <LogoContainer>
           {/* <Logo src={logo}/>  */}
           <div><span style={{fontWeight: 700, fontSize: '2rem', color:'green'}}>NSAS</span></div>
        </LogoContainer>
        {isMD && (
        <HeaderNavigation displayBackground={displayBackground}>
          <div>
            <NavLink>Students</NavLink>
          </div>
          <div>
            <NavLink>Faculty</NavLink>
          </div>
          <div>
            <NavLink>About</NavLink>
          </div>
          <div>
            <NavLink>Contact Us</NavLink>
          </div>
          <div>
            <DonateButton displayBackground={displayBackground}><span>Donate</span></DonateButton>
          </div>
        </HeaderNavigation>
        )
      }
        {!isMD && (<NavIconContainer>
          {
            isNavOpen ? <CloseIcon onClick={toggleNav} /> : <MenuIcon onClick={toggleNav} />
          }
        </NavIconContainer>)}
      </InnerContainer>

      {isNavOpen && (<SideNavigation>
          <div>
            <NavLink>Students</NavLink>
          </div>
          <div>
            <NavLink>Faculty</NavLink>
          </div>
          <div>
            <NavLink>About</NavLink>
          </div>
          <div>
            <NavLink>Contact Us</NavLink>
          </div>
      </SideNavigation>)}
    </Container>
  )
}

export default Header