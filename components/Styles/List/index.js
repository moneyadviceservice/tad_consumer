import styled from 'styled-components';
import { respondTo } from '../helpers'



// List
export const UnorderedList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0 auto;
 

 

    ${respondTo.sm`
    
        justify-content: ${props => props.justify ? props.justify: 'center'};

    `}

`;

export const ListItems = styled.li`

    margin-bottom: 15px;
    margin-top: 15px;
    font-size: 13px;
    border-bottom: ${props => props.bb? props.bb: 'none'}; 
    padding-bottom: ${props => props.pb? props.pb: 'none'}; 
    padding-top: ${props => props.pt? props.pt: 'none'}; 
    ${props => {
        if(props.sign === "positive"){
            return `list-style-image : url(/assets/Images/check.svg);`
        }else{
            return `list-style-image : url(/assets/Images/cross.svg);`
        }
        
    }}


    ${respondTo.sm`
    
         width: ${props => props.width ? props.width : '100%'};
         font-size: 16px;
         margin: 0 auto;
         line-height: 2.3;
    `}
    

`;
