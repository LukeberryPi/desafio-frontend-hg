import styled from "styled-components";

const NonStyledList = styled.ul`
	text-align: left;
	list-style-type: none;
`;

const UnderlinedSpan = styled.span`
	text-decoration: underline;
`;

export default function ProductPerkList(props) {
	return (
		<NonStyledList>
			<li>{props.numberOfSites}</li>
			<li>
				<strong>{props.productStorage}GB</strong> de Armazenamento
			</li>
			<li>
				Contas de E-mail <strong>Ilimitadas</strong>
			</li>
			<li>
				Criador de Sites{" "}
				<strong>
					<UnderlinedSpan>Grátis</UnderlinedSpan>
				</strong>
			</li>
			<li>
				Certificado SSL{" "}
				<strong>
					<UnderlinedSpan>Grátis</UnderlinedSpan>
				</strong>{" "}
				(https)
			</li>
		</NonStyledList>
	);
}
