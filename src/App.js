import "./App.css";
import Header from "./components/pages/Header";
import SimpleBottomNavigation from "./components/pages/MainNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
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
            <Route exact path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
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
