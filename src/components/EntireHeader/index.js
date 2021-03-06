import { default as HostgatorLogo } from "../../components/svgIcons/HostgatorLogo.svg";
import { default as IconCheck } from "../../components/svgIcons/IconCheck.svg";
import { default as HeaderDesks } from "../../components/svgIcons/HeaderDesks.svg";
import { default as TableGuy } from "../../components/svgIcons/TableGuy.svg";
import { default as DownArrowBlue } from "../../components/svgIcons/DownArrowBlue.svg";

import {
	EntireHeaderDiv,
	SoftBluePTag,
	TextAlignCenterDiv,
	PositionAbsoluteBottom0,
	WhiteH3,
	FlexHorizontallyDiv,
	FiftyPercentDiv,
	SvgContainerDisappearTabletMobile,
	LogoDiv
} from "./styles";

export default function EntireHeader() {
	return (
		<>
			<LogoDiv>
				<FiftyPercentDiv>
					<img src={HostgatorLogo} alt="logo" />
				</FiftyPercentDiv>
				<FiftyPercentDiv></FiftyPercentDiv>
			</LogoDiv>
			<EntireHeaderDiv>
				<SvgContainerDisappearTabletMobile>
					<img src={HeaderDesks} alt="header desks" />
				</SvgContainerDisappearTabletMobile>
				<TextAlignCenterDiv>
					<SoftBluePTag>Hospedagem de Sites</SoftBluePTag>
					<WhiteH3>
						Tenha uma hospedagem de sites estável e <br />
						evite perder visitantes diariamente
					</WhiteH3>
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
				<SvgContainerDisappearTabletMobile>
					<img src={TableGuy} alt="table guy" />
				</SvgContainerDisappearTabletMobile>
				<PositionAbsoluteBottom0>
					<img src={DownArrowBlue} alt="down arrow blue" />
				</PositionAbsoluteBottom0>
			</EntireHeaderDiv>
		</>
	);
}
