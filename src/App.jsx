import Header from "./components/header/Header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Nav2 from './components/main/s1/nav2/Nav2';
import Footer from "./components/footer/Footer";
import Repo from "./components/main/s1/repo/Repo"
import Overview from './components/main/s1/overview/Overview'
import S1 from "./components/main/s1/S1";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <main>
      <S1 />
      </main>
      <Footer />
    </>
  )
}

export default App
