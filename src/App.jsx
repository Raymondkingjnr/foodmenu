import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav, Footer } from "./componenets/index";
import { Home, About, Book, Menu, Error } from "./pages";
import "./App.css";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
