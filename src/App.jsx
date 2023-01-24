import Header from "./components/header/Header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav2 from './components/main/nav2/Nav2';
import Footer from "./components/footer/Footer";
import Repo from "./components/main/repo/Repo"
import Overview from './components/main/overview/Overview'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <main>
        <Nav2 />
        <hr />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/repos" element={<Repo />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
