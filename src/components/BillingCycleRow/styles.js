import styled from "styled-components";
import { customColors } from "../../colors";

export const TextAlignCenterDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export const BillingCycleRowDiv = styled.div`
display: inline-block;
border-top-right-radius: ${(props) => props.borderRadius}px;
border-bottom-right-radius: ${(props) => props.borderRadius}px;
border-top-left-radius: ${(props) => props.borderRadius}px;
border-bottom-left-radius: ${(props) => props.borderRadius}px;
border: 2px solid ${customColors.hostGatorBlue};
	box-shadow: 0px 1px #4480c570;
	margin: 5px;
`;

export const BillingCycleButton = styled.button`
	display: inline-block;
	border-top-right-radius: ${(props) => props.borderRadius}px;
	border-bottom-right-radius: ${(props) => props.borderRadius}px;
	border-top-left-radius: ${(props) => props.borderRadius}px;
	border-bottom-left-radius: ${(props) => props.borderRadius}px;
	border: white;
	background-color: ${(props) => props.billingCycleButtonColor};
	color: ${(props) => props.billingCycleButtonTextColor};
	font-weight: ${(props) => props.bold};
	cursor: pointer;

	&:hover {
		background-color: ${customColors.softBlue};
		outline: 2px solid ${customColors.softBlue};
	}
`;

export const HostGatorBluePTag = styled.p`
	color: ${customColors.darkBluePrimary};
`;
