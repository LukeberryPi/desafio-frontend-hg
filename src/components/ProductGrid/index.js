import { correctPlanIcon } from "./EachProductCard";
import { customColors } from "../../colors";

import EachProductCard from "./EachProductCard/index.js";

import { FlexSection, FooterNote } from "./styles";
import { FlexHorizontallyDiv, FiftyPercentDiv } from "../EntireHeader/styles";

export default function ProductGrid(props) {
	return (
		<>
			<FlexSection>
				<EachProductCard
					api={props.api}
					productStorage={100}
					numberOfSites="Para 1 site"
					buttonColor={customColors.hostGatorBlue}
					plan={correctPlanIcon.planP}
					index={0}
				/>
				<EachProductCard
					api={props.api}
					productStorage={100}
					numberOfSites="Sites Ilimitados"
					buttonColor={customColors.hostGatorOrange}
					plan={correctPlanIcon.planM}
					boxShadow={`0 -12px 0 ${customColors.hostGatorOrange}, 0 5px 0 ${customColors.hostGatorOrange}`}
					index={1}
				/>
				<EachProductCard
					api={props.api}
					productStorage={150}
					numberOfSites="Sites Ilimitados"
					buttonColor={customColors.hostGatorBlue}
					plan={correctPlanIcon.planTurbo}
					index={5}
				/>
			</FlexSection>
			<FlexHorizontallyDiv>
				<FiftyPercentDiv></FiftyPercentDiv>
				<FiftyPercentDiv>
					<FiftyPercentDiv>
						<FooterNote>*Confira as condições da promoção</FooterNote>
					</FiftyPercentDiv>
				</FiftyPercentDiv>
			</FlexHorizontallyDiv>
		</>
	);
}
