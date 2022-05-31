import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setPage } from '../../store/slices/cat-slice';
import './header.scss';


export default function Header() {

	const page = useAppSelector(state => state.data.page)
	const dispatch = useAppDispatch()
	
	const handleClick = (num: number) => {
		dispatch(setPage(num))
	}

	return (
		<header className="app-header">
			<button
				className={`app-header__button ${page === 1 ? 'checked' : null}`}
				onClick={() => handleClick(1)}
			>
				Все котики
			</button>

			<button
				className={`app-header__button ${page === 2 ? 'checked' : null}`}
				onClick={() => handleClick(2) }
			>
				Любимые котики
			</button>
		</header>
	)
}