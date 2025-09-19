import "./App.css";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
// import Nads from "./components/Nads/Nads";
import News from "./components/News/News";
import Questions from "./components/Questions/Questions";
import Trading from "./components/Trading/Trading";
// import { BrowserRoute, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Trading></Trading>
      {/* <Nads></Nads> */}
      <Form></Form>
      <News></News>
      <Questions></Questions>
      <Footer></Footer>
    
    </div>
  );
}

export default App;
