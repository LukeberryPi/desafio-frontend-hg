import { default as UnselectedRadio } from "../svgIcons/UnselectedRadio.svg";
import { default as SelectedRadio } from "../svgIcons/SelectedRadio.svg";

import {
	TextAlignCenterDiv,
	BillingCycleRowDiv,
	BillingCycleButton,
	HostGatorBluePTag,
	ButtonDiv,
	ButtonText,
} from "./styles";

import { customColors } from "../../colors";

export default function BillingCycleRow() {
	// QUAL DESSAS UTILIZAR?
	// (A) useState para definir ciclo de pagamento
	// const [billingCycle, setBillingCycle] = useState("triennially")

	// (B) arrow function para definir ciclo de pagamento
	// const setBillingCycle = (billingCycle) => {
	// }

	// armar com prop onClick

	return (
		<TextAlignCenterDiv>
			<HostGatorBluePTag>Quero pagar a cada:</HostGatorBluePTag>
			<BillingCycleRowDiv borderRadius={21}>
				<BillingCycleButton
					billingCycleButtonTextColor={customColors.plainWhite}
					billingCycleButtonColor={customColors.hostGatorBlue}
					borderRadius={21}
					bold="bold"
					// onClick={setBillingCycle("triennially")}
				>
					<ButtonDiv>
						<img src={SelectedRadio} alt="unselected radio" />{" "}
						<ButtonText>3 anos</ButtonText>
					</ButtonDiv>
				</BillingCycleButton>
				<BillingCycleButton
					billingCycleButtonTextColor={customColors.hostGatorBlue}
					borderRadius={21}
					// onClick={setBillingCycle("annually")}
				>
					<ButtonDiv>
						<img src={UnselectedRadio} alt="unselected radio" />{" "}
						<ButtonText>1 ano</ButtonText>
					</ButtonDiv>
				</BillingCycleButton>
				<BillingCycleButton
					billingCycleButtonTextColor={customColors.hostGatorBlue}
					borderRadius={21}
					// onClick={setBillingCycle("monthly")}
				>
					<ButtonDiv>
						<img src={UnselectedRadio} alt="unselected radio" />{" "}
						<ButtonText>1 mês</ButtonText>
					</ButtonDiv>
				</BillingCycleButton>
			</BillingCycleRowDiv>
		</TextAlignCenterDiv>
	);
}
