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
      <div className="App">
      <Container>
          <Routes>
            <Route exact path="/" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
      </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
