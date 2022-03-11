import styled from "styled-components";
import { default as HostgatorLogo } from "../components/svgIcons/HostgatorLogo.svg";
import { default as IconCheck } from "../components/svgIcons/IconCheck.svg";
import { default as HeaderDesks } from "../components/svgIcons/HeaderDesks.svg";
import { default as TableGuy } from "../components/svgIcons/TableGuy.svg";
// import { ReactComponent as DownArrowBlue } from "../components/svgIcons/DownArrowBlue.svg";
import { customColors } from "../colors";

const FlexRowDiv = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
	background-color: ${customColors.darkBluePrimary};
`

const SoftBluePTag = styled.p`
	color: #b9d0ef;
`

const TextAlignCenterDiv = styled.div`
    text-align: center;
`

const ColoredH3 = styled.h3`
    color: white;
`

const FlexHorizontallyDiv = styled.div`
	display: flex;
	flex-direction: row;
`;

export default function EntireHeader() {
	return (
		<>
			<div>
				<img src={HostgatorLogo} alt="logo" />
			</div>
			<FlexRowDiv>
				<img src={HeaderDesks} alt="header desks" />
				<TextAlignCenterDiv>
					<SoftBluePTag>Hospedagem de Sites</SoftBluePTag>
					<ColoredH3>
						Tenha uma hospedagem de sites estável e <br />
						evite perder visitantes diariamente
					</ColoredH3>
					<SoftBluePTag>
						<img src={IconCheck} alt="icon check" /> 99,9% de disponibilidade:
						seu site sempre no ar
					</SoftBluePTag>
					<FlexHorizontallyDiv>
						<SoftBluePTag>
							<img src={IconCheck} alt="icon check" /> Suporte 24h, todos os
							dias
						</SoftBluePTag>
						<SoftBluePTag>
							<img src={IconCheck} alt="icon check" /> Painel de Controle cPanel
						</SoftBluePTag>
					</FlexHorizontallyDiv>
				</TextAlignCenterDiv>
				<img src={TableGuy} alt='table guy' />
			</FlexRowDiv>
		</>
	);
}

