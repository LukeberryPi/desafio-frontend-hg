import styled from "styled-components";
import { customColors } from "../../colors";

export const TextAlignCenterDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	margin: 20px 0px;
`;

export const BillingCycleRowDiv = styled.div`
	display: inline-block;
	border-top-right-radius: ${(props) => props.borderRadius}px;
	border-bottom-right-radius: ${(props) => props.borderRadius}px;
	border-top-left-radius: ${(props) => props.borderRadius}px;
	border-bottom-left-radius: ${(props) => props.borderRadius}px;
	border: 2px solid ${customColors.hostGatorBlue};
	box-shadow: 0px 1px 4px ${customColors.hostGatorBlue};
	margin: 10px 0px 20px 0px;
	height: 30px;
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
	height: 100%;

	&:hover {
		color: ${customColors.plainWhite};
		background-color: ${customColors.hostGatorBlue};
		outline: 2px solid ${customColors.hostGatorBlue};
	}
`;

export const ButtonDiv = styled.div`
	display: flex;
	flex-direction: row;
	text-align: center;
	align-items: center;
	height: 50%;
`;

export const HostGatorBluePTag = styled.p`
	color: ${customColors.darkBluePrimary};
	font-size: 14px;
	margin-bottom: 4px;
`;

export const ButtonText = styled.p`
	margin-left: 5px;
`
