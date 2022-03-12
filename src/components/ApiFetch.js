import { useEffect, useState } from "react";

export default function ApiFetch(props) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const url = "https://2891637c-8ab7-4a84-906b-a98465726f85.mock.pstmn.io/prices";
		
		fetch(url)
			.then((res) => res.json())
			.then((dados) => {
				console.log(dados);
				const actualApi = Object.keys(dados.shared.products);
				let actualApiArray = [];
				actualApi.forEach((e) =>
					actualApiArray.push(dados.shared.products[e])
				);
				setPosts(actualApiArray);
			}).catch(err => console.log(err));
	}, []);

	return (
		<>
			{posts.map((post) => (
				<p>{JSON.stringify(post)}</p>
			))}
		</>
	);
}
