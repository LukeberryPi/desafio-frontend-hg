import styled from "styled-components";
import { customColors } from "../../../colors";

export const CallToActionButton = styled.button`
	@media (min-width: 1024px) {
		background-color: ${(props) => props.buttonColor};
		color: white;
		font-size: 22px;
		font-weight: 600;
		padding: 10px 50px;
		margin: 10px 30px 30px;
		border-radius: 26px;
		border: 0;
		cursor: pointer;
		transition: transform 0.25s;
	}

	&:hover {
		transform: scale(1.08);
	}
`;

export const BoldBlueP = styled.p`
	color: ${customColors.darkBluePrimary};
	font-weight: bold;
`;

export const FlexDiv = styled.div`
	display: flex;
	align-items: center;
`;

export const ProductCardSection = styled.section`
	@media (min-width: 1024px) {
		display: flex;
		height: 650px;
		flex-direction: column;
		box-shadow: ${(props) => props.boxShadow};
		align-items: center;
		justify-content: center;
		text-align: center;
		background-color: ${customColors.plainWhite};
		margin: 0px 8px;
		border-radius: 4px;
		padding-top: 32px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		display: flex;
		height: 650px;
		flex-direction: column;
		box-shadow: ${(props) => props.boxShadow};
		align-items: center;
		justify-content: center;
		text-align: center;
		background-color: ${customColors.plainWhite};
		margin: 24px 8px;
		border-radius: 4px;
		padding-top: 32px;
	}

	@media (max-width: 768px) {
		display: flex;
		height: 650px;
		flex-direction: column;
		box-shadow: ${(props) => props.boxShadow};
		align-items: center;
		justify-content: center;
		text-align: center;
		background-color: ${customColors.plainWhite};
		margin: 24px 8px;
		border-radius: 4px;
		padding-top: 32px;
	} ;
`;

export const DisabledButton = styled.button`
	height: 20%;
	background-color: ${customColors.greenPrimary};
	border-radius: 31px;
	font-weight: bold;
	color: ${customColors.plainWhite};
	border: 4px solid ${customColors.greenPrimary};
`;

export const DarkBluePrimaryPTag = styled.p`
	font-size: 14px;
	color: ${customColors.darkBluePrimary};
	margin-right: 5px;
`;
