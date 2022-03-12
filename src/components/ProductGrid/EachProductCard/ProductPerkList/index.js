import { UnderlinedSpan, LeftMostDiv } from "./styles";

export default function ProductPerkList(props) {
	return (
		<LeftMostDiv>
			<p>{props.numberOfSites}</p>
			<p>
				<strong>{props.productStorage}GB</strong> de Armazenamento
			</p>
			<p>
				Contas de E-mail <strong>Ilimitadas</strong>
			</p>
			<p>
				Criador de Sites 
				<UnderlinedSpan>
					<strong> Grátis</strong>
				</UnderlinedSpan>
			</p>
			<p>
				Certificado SSL
				<strong>
					<UnderlinedSpan> Grátis </UnderlinedSpan>
				</strong>
				(https)
			</p>
		</LeftMostDiv>
	);
}
