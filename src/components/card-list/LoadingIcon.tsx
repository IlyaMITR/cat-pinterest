import icon from '../../img/loading1.gif'

export default function LoadingIcon() {
	return (
		<div className="loading">
			<img className="loading__icon" src={icon} />
			<span className="loading__label">Загружаем котиков</span>
		</div>
	)
}