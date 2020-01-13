import styled from 'styled-components';
import theme from '../theme';
import { respondTo,
         backgroundMixin, 
         paddingBottomMixin,
         paddingRightMixin,
         paddingLeftMixin
          } from '../helpers';



export const MainCard = styled.div`

    display: flex;
    flex-direction: row;
    color: ${theme.textColor};
    flex-grow: 1;
    flex-wrap: wrap;
    justify-content: ${props => props.justify ? props.justify : 'center'}; 
    ${props => (props.bg ? `background:${props.bg}` : backgroundMixin )};  
    ${props => (props.pd ? `padding-bottom:${props.pd}` : paddingBottomMixin )};  

    ${respondTo.sm`

    
        ${props => (props.pr ? `padding-right:${props.pr}` : `padding-right: 120px` )};  
        ${props => (props.pl ? `padding-left:${props.pl}` : `padding-left: 120px` )};  


	`}
`;

export const ContentCard = styled.div`

  
    margin: 0 auto;
    padding: 20px 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.justify ? props.justify: 'center'}; 
    border: ${props => props.border ? props.border: 'none'}; 
    margin-top: ${props => props.mt ? props.mt: '0'}; 
    margin-bottom: ${props => props.mb ? props.mb: '0'}; 
    margin-left: ${props => props.ml ? props.ml : '1.6666666667%;'}; 
    margin-right: ${props => props.mr ? props.mr : '1.6666666667%;'}; 
    ${props => (props.bg ? `background:${props.bg}` : backgroundMixin )};  
    

    ${respondTo.sm`

        flex-direction: row;
        padding-left: ${props => props.pl ? props.pl : '1.6%'}; 
        padding-right: ${props => props.pr ? props.pr : '1.6%'}; 
        flex: ${props => props.flex ? props.flex : '1 0 45%'}; 
        margin-left:0;
        margin-right:0;
        max-width:  ${props => props.max ? props.max: '400px'}; 
      
          
    `}

`;

export const VideoCard = styled.div`
      postion: relative;
      padding-bottom: 56.25%;
      padding-top: 25;
      height: 0;
      
`;


export const YoutubeFrame = styled.iframe.attrs(props => ({
    
    
    frameBorder: "0"
    }))`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    

`;

export const DemoCard = styled.div``;