// CHANGE COMPLETELY
// NO LONGER A GRID
// RENAME AND ADD NEW COMPONENTS
import { correctPlanIcon } from "./EachProductCard";
import { customColors } from "../colors";
import styled from "styled-components";

import EachProductCard from "./EachProductCard";

const BoldBlueP = styled.p`
	color: ${customColors.darkBluePrimary};
	font-weight: bold;
`;

const FlexSection = styled.section`
	display: flex;
	justify-content: center;
`;

const ProductCardDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export default function ProductsGrid() {
	return (
		<FlexSection>
			<EachProductCard buttonColor={customColors.hostGatorBlue} plan={correctPlanIcon.planP} />
			<EachProductCard buttonColor={customColors.hostGatorOrange} plan={correctPlanIcon.planM} />
			<EachProductCard buttonColor={customColors.hostGatorBlue} plan={correctPlanIcon.planTurbo} />
		</FlexSection>
		// </EachProductCard>// <FlexSection>
		// 	<ProductCardDiv>
		// 		<img src={PlanoPIcon} alt="plano p icon" />
		// 		<BoldBlueP>Plano P</BoldBlueP>
		// 		<p>AWAIT API</p>
		// 		<CallToActionButton backgroundColor={customColors.hostGatorBlue}>
		// 			Contrate Agora
		// 		</CallToActionButton>
		// 		<div>
		// 			<strong>1 ano de Domínio Grátis </strong>
		// 			<img src={InfoIcon} alt="info icon" />
		// 		</div>
		// 		<ProductPerkList productStorage={100} numberOfSites="Para 1 site" />
		// 	</ProductCardDiv>
		// 	<ProductCardDiv>
		// 		<img src={PlanoMIcon} alt="plano m icon" />
		// 		<BoldBlueP>Plano M</BoldBlueP>
		// 		<p>AWAIT API</p>
		// 		<CallToActionButton backgroundColor={customColors.hostGatorOrange}>
		// 			Contrate Agora
		// 		</CallToActionButton>
		// 		<div>
		// 			<strong>1 ano de Domínio Grátis </strong>
		// 			<img src={InfoIcon} alt="info icon" />
		// 		</div>
		// 		<ProductPerkList
		// 			productStorage={100}
		// 			numberOfSites="Sites Ilimitados"
		// 		/>
		// 	</ProductCardDiv>
		// 	<ProductCardDiv>
		// 		<img src={PlanoTurboIcon} alt="plano turbo icon" />
		// 		<BoldBlueP>Plano Turbo</BoldBlueP>
		// 		<p>AWAIT API</p>
		// 		<CallToActionButton backgroundColor={customColors.hostGatorBlue}>
		// 			Contrate Agora
		// 		</CallToActionButton>
		// 		<div>
		// 			<strong>1 ano de Domínio Grátis </strong>
		// 			<img src={InfoIcon} alt="info icon" />
		// 		</div>
		// 		<ProductPerkList
		// 			productStorage={150}
		// 			numberOfSites="Sites Ilimitados"
		// 		/>
		// 	</ProductCardDiv>
		// </FlexSection>
	);
}
