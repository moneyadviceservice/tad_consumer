import styled from 'styled-components';
import { respondTo, colorMixin } from '../helpers';
import theme from '../theme';
import Link from 'next/link'





export const Translation = styled.p`
    color: #ffffff;
    text-align: right;
    padding-right: 10px;
    font-size: 12px;
    line-height: 2.8;
    ${respondTo.sm`
        color: #ffffff;
        font-weight: 400;
        cursor: pointer;
        padding-top: 0;
        &:hover,
        &:focus {
        outline: none;
        color: #ffffff; 
        text-decoration: underline;
        }
    `}
      
`;


// Headings

export const HeadingOne = styled.h1`

    font-size: 20px;
    color: ${theme.accentColor};
    width: ${props => props.width ? props.width: 'auto'}; 
    text-align: ${props => props.align ? props.align : 'center'}; 
    ${respondTo.sm`
        font-size: 30px;
    
    `}
    

`;

export const HeadingTwo = styled.h2`

    font-size: 18px;
    color: ${theme.accentColor};
    width: ${props => props.width ? props.width: 'auto'}; 
    text-align: ${props => props.align ? props.align : 'left'}; 
    
    ${respondTo.sm`
    font-size: 28px;
    margin-bottom: ${props => props.mb ? props.mb: '0'}; 
`}

`;

export const HeadingThree = styled.h3`

    font-size: 16px;
    width: ${props => props.width ? props.width: 'auto'}; 
    text-align: ${props => props.align ? props.align : 'left'}; 

    ${respondTo.sm`
    font-size: 25px;

`}

`;

export const HeadingFour = styled.h4`

    font-size: 14px;
    color: ${theme.accentColor};
    width: ${props => props.width ? props.width: 'auto'}; 
    text-align: ${props => props.align ? props.align : 'left'}; 
    ${props => (props.cl ? `color:${props.cl}` : colorMixin )};  

`;

export const HeadingFive = styled.h5`

    font-size: 12px;
    color: ${theme.accentColor};
    width: ${props => props.width ? props.width: 'auto'}; 
    text-align: ${props => props.align ? props.align : 'left'}; 
    ${props => (props.cl ? `color:${props.cl}` : colorMixin )};  

`;

export const SectionHeading = styled(HeadingTwo)`

  font-size: 30px;
  margin: 42px 0 0;
  width: ${props => props.width ? props.width: 'auto'}; 
    text-align: ${props => props.align ? props.align : 'left'}; 

`;

export const PageHeader = styled(HeadingOne)`

  font-size: 40px;
  margin: 0 20px;
  width: ${props => props.width ? props.width: 'auto'}; 
  text-align: ${props => props.align ? props.align : 'left'}; 

`;


export const Paragraph = styled.p`

    font-size: 12px;
    text-align: ${props => props.align ? props.align : 'center'}; 
    width: 100%;
    line-height: 1.6;
    ${respondTo.sm`
        font-size: 18px;
    }
`}


`;

export const BoldText = styled (Paragraph)`

    font-weight: 700;
    width: 100%;
    font-size: ${props => props.size ? props.size: '16px'}; 
    

`;

export const LinkText = styled.a`

    
    text-decoration: none;
    pointer: cursor;
    margin: 0;
    width: 100%;
    font-size: 12px;
    text-align: left;
    color: ${theme.linkColor}; 
    &:visited {
      color: #003d8e;
    }
    text-align: ${props => props.align ? props.align : 'center'}; 
  
    &:hover,
    &:focus {
      outline: none;
      color: #003d8e; 
      text-decoration: underline;
    }
    ${respondTo.sm`
    font-size: 18px;
    text-align: right;
    line-height: 5;
    pointer: cursor;
    display:inline;
}
`}
    
    
` ;