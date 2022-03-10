import styled from "styled-components"

const CallToActionButton = styled.button`
	background-color: ${(props) => props.backgroundColor};
	color: white;
	font-size: 22px;
	font-weight: 600;
	padding: 10px 50px;
	margin: 30px;
	border-radius: 26px;
	border: 0;
`;

export default CallToActionButton;
