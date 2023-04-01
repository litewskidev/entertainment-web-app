import { Route, Routes } from "react-router-dom";
import Container from "./components/Container/Container";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import TvSeries from "./components/TvSeries/TvSeries";
import Bookmarked from "./components/Bookmarked/Bookmarked";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import E404 from "./components/E404/E404";

const App = () => {
  return(
    <main>
      <Container>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/tvseries" element={<TvSeries />} />
          <Route exact path="/bookmarked" element={<Bookmarked />} />
          <Route exact path='*' element={<E404 />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
