import styled, { css } from "styled-components";
// import HomeIcon from "@mui/icons-material/Home";

const underlineLink = css`
  &:after {
    content: "";
    background: #38f;
    height: 0.2rem;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -1rem;
    display: block;

    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease-in-out;
  }
`;

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background: ${(props) =>
    props.displayBackground ? "#3336de" : "transparent"};
  transform: translateY(${(props) => (props.displayHeader ? 0 : "-100%")});
  transition: all 0.5s;

  ${(props) =>
    props.isNavOpen &&
    css`
      overflow-y: auto;
      width: 100%;
      height: 100vh;
    `}
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  height: 3rem;
`;

export const LogoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 20rem;
`;

export const SideNavigation = styled.nav`
  display: grid;
  grid-row-gap: 3rem;
  padding: 5rem;
`;

export const NavLink = styled.a`
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.23rem;
  cursor: pointer;
  position: relative;

  ${underlineLink}
  &:hover:after {
    transform: scaleX(1);
  }
`;

export const NavIconContainer = styled.div`
  & svg {
    fill: #038726;
    height: 2.3rem;
    width: 2.3rem;
    cursor: pointer;
  }
  z-index: 20;
`;

export const DonateButton = styled.button`
    @media only screen and (max-width: 900px) {
        display: none;
    }

    color: ${props => props.displayBackground ? '#038726' : 'white'};
    background: ${props => props.displayBackground ? 'white' : '#038726'};
    border: none;
    padding: 1.2rem;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;

    & span {
        display: block;
        position: relative;
    }

    &:hover span:after {
        transform: scaleX(1);
    }
`;

export const HeaderNavigation = styled.nav`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    & > * {
        margin: 0 0.5rem;
    }
`;
