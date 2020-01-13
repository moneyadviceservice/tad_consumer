import styled from 'styled-components';
import { MainCard } from '../Cards';
import theme from '../theme';
import { paddingBottomMixin, respondTo } from '../helpers';
// import LogoImg from 'assets/Images/logoImg.png';





export const Header = styled(MainCard)`

    height: 50px;
    display: flex;
    justify-content: space-between;
    background: ${theme.baseColor};
    ${props => (props.pb ? `padding-bottom:${props.pb}` : paddingTopMixin )};  
    ${props => (props.pt ? `padding-bottom:${props.pt}` : paddingBottomMixin )};  
    ${respondTo.sm`
    
    `}

    

`;

export const Logo = styled.span`

    background-image: url('/assets/Images/logoImg.png');
    background-position: left; 
    background-repeat: no-repeat; 
    background-size: cover; 
    width:150px;
    background-size: 100%;
    ${respondTo.sm`
        cursor: pointer;
        padding: 12px 20px 6px
    `}
    

`;
