import "./App.css";
import Header from "./components/pages/Header";
import SimpleBottomNavigation from "./components/pages/MainNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trending from "./components/pages/Trending/Trending";
import Movies from "./components/pages/Movies/Movies";
import Series from "./components/pages/Series/Series";
import Search from "./components/pages/Search/Search";
import { Container } from "reactstrap";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">jkknkjnkj
      <Container>
          <Routes>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Routes>
      </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
