import { css } from 'styled-components';

import theme from './theme'


export const breakpoints = {
	xs: '480px',
	sm: '768px',
	md: '992px',
	lg: '1200px'
};



export const respondTo = Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (min-width: ${breakpoints[label]}) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});


export const backgroundMixin = css`
	background: ${props => (props.background ? theme.alternateBackground: theme.primaryBackground)};
`;

export const paddingBottomMixin = css`
	padding-bottom : ${props => (props.paddingBottom ? '' : '36px' )} //set value
`;

export const paddingRightMixin = css`
	padding-right : ${props => (props.paddingRight ? '' : '40px' )} //set value
`;

export const paddingLeftMixin = css`
	padding-left : ${props => (props.paddingLeft ? '' : '40px' )} //set value
`;


export const colorMixin = css`
	color : ${props => (props.color ? theme.accentColor : theme.textColor )} //set value
`;



export const behaviour = (props, tags) => {
	if (props && tags){

	}
}