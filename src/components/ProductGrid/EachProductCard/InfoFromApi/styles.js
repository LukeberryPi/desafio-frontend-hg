import styled from "styled-components";
import { customColors } from "../../../../colors";

export const DashedP = styled.p`
	text-decoration: line-through;
	font-size: 13px;
	margin-right: 4px;
	margin-left: 8px;
`;

export const BoldedP = styled.p`
	font-weight: bold;
	font-size: 13px;
	margin-right: 8px;
	margin-left: 4px;
`;

export const Resize13pxP = styled.p`
	margin: -6px 0px 0px;
	font-size: 13px;
`;

export const InstallmentPrice = styled.div`
	color: ${customColors.darkBluePrimary};
	font-size: 20px;
`;

export const HugeInstallmentPrice = styled.p`
	color: ${customColors.darkBluePrimary};
	font-size: 35px;
	font-weight: bold;
	top: 0px;
	margin: 0px 0px 0px 6px;
`;

export const BaselineDiv = styled.div`
	height: 10%;
	display: flex;
	align-items: baseline;
	padding: 0;
`;

export const CallToActionButton = styled.button`
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

	&:hover {
		transform: scale(1.08);
	}
`;

export const DisabledButton = styled.button`
	height: 20%;
	background-color: ${customColors.greenPrimary};
	border-radius: 31px;
	font-weight: bold;
	color: ${customColors.plainWhite};
	border: 4px solid ${customColors.greenPrimary};
`;

export const FlexDiv = styled.div`
	display: flex;
	align-items: center;
`;

export const DarkBluePrimaryPTag = styled.p`
	font-size: 14px;
	color: ${customColors.darkBluePrimary};
	margin-right: 5px;
`;

export const BoldBlueP = styled.p`
	color: ${customColors.darkBluePrimary};
	font-weight: bold;
`;
