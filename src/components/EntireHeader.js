import styled from "styled-components";
import { ReactComponent as HostgatorLogo } from "../components/svgIcons/HostgatorLogo.svg";
import { ReactComponent as IconCheck } from "../components/svgIcons/IconCheck.svg";
import { ReactComponent as HeaderDesks } from "../components/svgIcons/HeaderDesks.svg";
import { ReactComponent as TableGuy } from "../components/svgIcons/TableGuy.svg";
// import { ReactComponent as DownArrowBlue } from "../components/svgIcons/DownArrowBlue.svg";
import { customColors } from "../colors";

export const FlexRowDiv = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
	background-color: ${customColors.darkBluePrimary};
`

export const SoftBluePTag = styled.p`
	color: #b9d0ef;
`

export const TextAlignCenterDiv = styled.div`
    text-align: center;
`

export const ColoredH3 = styled.h3`
    color: white;
`

export const FlexHorizontallyDiv = styled.div`
	display: flex;
	flex-direction: row;
`;

export default function EntireHeader() {
	return (
		<>
			<div>
				<HostgatorLogo />
			</div>
			<FlexRowDiv>
				<HeaderDesks />
				<TextAlignCenterDiv>
					<SoftBluePTag>Hospedagem de Sites</SoftBluePTag>
					<ColoredH3>
						Tenha uma hospedagem de sites estável e <br />
						evite perder visitantes diariamente
					</ColoredH3>
					<SoftBluePTag>
						<IconCheck /> 99,9% de disponibilidade: seu site sempre no ar
					</SoftBluePTag>
					<FlexHorizontallyDiv>
						<SoftBluePTag>
							<IconCheck /> Suporte 24h, todos os dias
						</SoftBluePTag>
						<SoftBluePTag>
							<IconCheck /> Painel de Controle cPanel
						</SoftBluePTag>
					</FlexHorizontallyDiv>
				</TextAlignCenterDiv>
				<TableGuy />
			</FlexRowDiv>
		</>
	);
}

