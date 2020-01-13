
import { createGlobalStyle } from 'styled-components';
// import MuseoSans300Woff from "assets/Fonts/MuseoSans_300.woff";
// import MuseoSans500Woff from "assets/Fonts/MuseoSans_500.woff";
// import MuseoSans700Woff from "assets/Fonts/MuseoSans_700.woff";
// import MuseoSans900Woff from "assets/Fonts/MuseoSlab_900.woff";




const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'MuseoSans';
  font-style: normal;
  font-weight: normal;
  src: 
    url('/assets/Fonts/MuseoSans_300.woff') fromat('woff'),
    url('/assets/Fonts/MuseoSans_500.woff') fromat('woff'),
    url('/assets/Fonts/MuseoSans_700.woff') fromat('woff'),
    url('/assets/Fonts/MuseoSlab_900.woff') fromat('woff');
}

body{
    margin: 0;
    padding: 0;
    font-family: 'MuseoSans',  "Helvetica Neue", Helvetica, Arial, serif;
   
  }
  li:last-child { border-bottom: none; }
  
`;
export default GlobalStyle;