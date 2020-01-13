import styled from 'styled-components';
import theme from '../theme';
import { respondTo } from '../helpers';

export const Button = styled.button`

align-items: center;
width: auto;
font-size: 0.75rem;
border-radius: 4px;
margin-bottom: 0;
line-height: 2.5;
filter: none;
text-align: center;
white-space: nowrap;
padding: 5px 22px;
border: none;
border-bottom: 3px solid ${props => props.primary ? theme.primaryButtonButtomColor: theme.alternateButtonButtomColor};  
background: ${props => props.primary ? theme.primaryButtonBackground : theme.alternateButtonBackground};  
color: ${theme.textColor};
border-buttom-color: ${props => props.primary ? theme.primaryButtonBorder : theme.alternateButtonBorder}; 


${respondTo.sm`
    cursor: pointer;
    width: 50%;
    transition: background 0.2s ease;
    font-size: .85rem;
    margin-top: 20px;
    padding: 15px 22px;

    line-height: ${props => props.line ? props.line: 1}
    
    ${props => {
        if(props.primary){
            
            return`
                &:hover{
                    outline: none;
                    background: #edde74;
                    border-buttom-color: #e1c260;
            
            `;

            } else {
            return`

            &:hover{
                outline: none;
                background: #ecf0ef;
                border-buttom-color: #d1d5d5;
            `;
        }
    
}}
    `}
`;
