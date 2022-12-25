import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');
    :root{

    }
    body {
        margin: 0;
        font-family: 'Barlow', sans-serif;
    } 
    *, *::after, *::before {
        /* margin: 0;
        padding: 0; */
        /* box-sizing: border-box; */
    }

`
export default GlobalStyles;

const breakpoints = {
    sm: '@media only screen and (min-width:600px)',
    md: '@media only screen and (min-width:900px)',
    lg: '@media only screen and (min-width:1200px)',
    xl: '@media only screen and (min-width:1600px)',
}

export {breakpoints}