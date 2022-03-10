import CallToActionButton from "./CallToActionButton";
import ProductPerkList from "./ProductPerkList";
import { customColors } from "../colors";
import styled from "styled-components";

import { ReactComponent as PlanoPIcon } from "../components/svgIcons/PlanoPIcon.svg";
import { ReactComponent as PlanoMIcon } from "../components/svgIcons/PlanoMIcon.svg";
import { ReactComponent as PlanoTurboIcon } from "../components/svgIcons/PlanoTurboIcon.svg";
import { ReactComponent as InfoIcon } from "../components/svgIcons/InfoIcon.svg";

export const BoldBlueP = styled.p`
	color: ${customColors.darkBluePrimary};
	font-weight: bold;
`

export const FlexSection = styled.section`
	display: flex;
`;

export const ProductCardDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	outline: 1px red solid;
`;

export default function ProductsGrid() {
	return (
		<FlexSection>
			<ProductCardDiv>
				<PlanoPIcon />
				<BoldBlueP>
					Plano P
				</BoldBlueP>
				<p>AWAIT API</p>
				<CallToActionButton backgroundColor={customColors.hostGatorBlue}>
					Contrate Agora
				</CallToActionButton>
				<div>
					<strong>1 ano de Domínio Grátis </strong>
					<InfoIcon />
				</div>
				<ProductPerkList productStorage={100} numberOfSites="Para 1 site" />
			</ProductCardDiv>
			<ProductCardDiv>
				<PlanoMIcon />
				<BoldBlueP>Plano M</BoldBlueP>
				<p>AWAIT API</p>
				<CallToActionButton backgroundColor={customColors.hostGatorOrange}>
					Contrate Agora
				</CallToActionButton>
				<div>
					<strong>1 ano de Domínio Grátis </strong>
					<InfoIcon />
				</div>
				<ProductPerkList
					productStorage={100}
					numberOfSites="Sites Ilimitados"
				/>
			</ProductCardDiv>
			<ProductCardDiv>
				<PlanoTurboIcon />
				<BoldBlueP>Plano Turbo</BoldBlueP>
				<p>AWAIT API</p>
				<CallToActionButton backgroundColor={customColors.hostGatorBlue}>
					Contrate Agora
				</CallToActionButton>
				<div>
					<strong>1 ano de Domínio Grátis </strong>
					<InfoIcon />
				</div>
				<ProductPerkList
					productStorage={150}
					numberOfSites="Sites Ilimitados"
				/>
			</ProductCardDiv>
		</FlexSection>
	);
}
