import CardList from "./components/card-list/CardList";
import LikeList from "./components/card-list/LikeList";
import Header from "./components/header/Header";
import { useAppSelector } from "./hooks/redux";

function App() {

  const page = useAppSelector(state => state.data.page)

  return (
    <div className="App">
      <Header />
      {page === 1 ? <CardList/> : <LikeList/>}
    </div>
  );
}

export default App;
