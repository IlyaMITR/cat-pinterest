import { useEffect, useState } from "react"
import { ICat } from "../../types/cats";
import Card from "./Card";
import './card-list.scss';
import LoadingIcon from "./LoadingIcon";
import LoadingText from "./LoadingText";

export default function CardList() {
	
	const fetchCats = async () => {
		let response = await fetch('https://api.thecatapi.com/v1/images/search');
		let cat = await response.json()
		return cat
	}

	const [catsArr, setCats] = useState([] as ICat[])
	const [fetching, setFetching] = useState(true)
	
	const fetchCatsNum = async (num: number) => {
		console.log('fetchCatsNum')
		let temp: ICat[] = []
		for (let i = 0; i < num; i++){
			temp.push(await fetchCats())
		}
		setCats([...catsArr, ...temp])
		setFetching(false)
	}

	const scrollHandler = (e: any) => {
		if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
			setFetching(true)
		}
	}

	useEffect(() => {
		if (fetching) fetchCatsNum(40)
	}, [fetching])

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
		return () => document.removeEventListener('scroll', scrollHandler)
	}, [])

	return catsArr.length > 0 ? (
		<>
			<div className="card-list">
				{
					catsArr.map((cat: any) => <Card key={cat[0].id} cat={cat[0]} />)
				}
			</div>
			{
				fetching ? <LoadingText /> : null
			}
		</>
	) :
	(
		<div
			className="card-list fetching"
			style={{
				justifyContent: 'center'
			}}
		>
				<LoadingIcon/>
		</div>
	)
}