import { useEffect, useState } from "react";

export default function DataFetching(props) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const url = "https://2891637c-8ab7-4a84-906b-a98465726f85.mock.pstmn.io/prices";
		
		fetch(url)
			.then((res) => res.json())
			.then((dados) => {
				console.log(dados);
				const actualApi = Object.keys(dados.shared.products);
				let myArray = [];
				actualApi.forEach((e) =>
					myArray.push(dados.shared.products[e])
				);
				setPosts(myArray);
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
