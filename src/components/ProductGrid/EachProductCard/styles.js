import styled from "styled-components";
import { customColors } from "../../../colors";

export const CallToActionButton = styled.button`
	background-color: ${(props) => props.backgroundButtonColor};
	color: white;
	font-size: 22px;
	font-weight: 600;
	padding: 10px 50px;
	margin: 30px;
	border-radius: 26px;
	border: 0;
	cursor: pointer;
	transition: transform 0.25s;

	&:hover {
		transform: scale(1.08);
	}
`;

export const BoldBlueP = styled.p`
	color: ${customColors.darkBluePrimary};
	font-weight: bold;
`;

export const FlexSection = styled.section`
	display: flex;
	align-items: center;
`;

export const ProductCardDiv = styled.div`
	display: flex;
	flex-direction: column;
	border-top: ${(props) => props.borderTop};
	border-bottom: ${(props) => props.borderBottom};
	align-items: center;
	justify-content: center;
	text-align: center;
	background-color: ${customColors.plainWhite};
	margin: 0px 10px;
`;

export const DisabledButton = styled.button`
	height: 20%;
	background-color: ${customColors.greenPrimary};
	border-radius: 31px;
	font-weight: bold;
	color: ${customColors.plainWhite};
`;