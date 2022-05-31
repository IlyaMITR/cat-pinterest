import { useAppSelector } from "../../hooks/redux";
import Card from "./Card";
import './card-list.scss';


export default function LikeList() {

	const favourites = useAppSelector(state => state.data.favourites)

	return (
		<div className="card-list">
			{
				favourites.map((cat: any) => <Card key={cat.id} cat={cat} />)
			}
		</div>
	)
}