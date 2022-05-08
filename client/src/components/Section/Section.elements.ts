import styled from 'styled-components';
import { Theme } from '../../global/theme';

interface Props{
	bkgColor?: string,
	orderImg?: number,
	orderText?:number
}

export const Container = styled.div<Props>`
	height: 100vh;
	width: 100vw;
	overflow-x: hidden;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	background-color: ${Theme.colors.darkPurple};
`

export const TextContainer = styled.div<Props>`
	height: 30vh;
	width: 40vw;
	display: flex;
	flex-direction: column;
	align-content: space-between;
	margin-left: 5vw;
	order: ${props => props.orderText};
`

export const Title1 = styled.h1`
	color: ${Theme.colors.lilac};
	font-weight: 500;
	font-size: 50px;
	text-align: left;
`

export const Subtitle = styled.h2`
	color: ${Theme.colors.lilac};
	font-weight: 500;
	font-size: 25px;
	text-align: left;
`

export const Description = styled.p`
	color: ${Theme.colors.lilac};
	font-weight: 500;
	font-size: 20px;
	text-align: left;
	overflow-wrap: break-word;
`

export const Picture = styled.img<Props>`
	width: 30vw;
	min-width: 50px;
	order: ${props => props.orderImg};
`
