import styled from 'styled-components';
import theme from '../theme';
import { paddingBottomMixin, respondTo } from '../helpers';
import { HeadingThree, Paragraph } from '../Text/index'

export const TopInnner = styled.div`

    text-align: center;
    
    

`;




export const TopImage = styled.span`

    
    background-image: url(${props => props.src? props.src : ''}); 
    background-position: left; 
    background-repeat: no-repeat; 
    background-size: cover; 
    width:150px;
    height: 300px;
    background-size: 100%;
    ${respondTo.sm`
        cursor: pointer;
        padding: 12px 20px 6px
`}


`;







export const TopDesc = styled(HeadingThree)`
    color: black;

`;

export const BottomInner = styled.div`

    height: 220px;

`;

export const BottomDesc = styled(Paragraph)`

    

    ${respondTo.sm`
    font-size: 15px;
    }
    `}

`;
export const BottomSpan = styled.span`
    ${respondTo.sm`
    font-size: 12px;
    }
    `}

`;

