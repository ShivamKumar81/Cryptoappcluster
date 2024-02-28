import {  BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core";
import  Alert  from "./components/Alert";

const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#f5f5f5",
      color: "gold",
      minHeight: "100vh",
      fontWeight: "bold",
    },
}));

function App() {
    const classes = useStyles();

    return (
        <BrowserRouter>
           <div className = {classes.App}>
            <Header/>
            <Routes>
                <Route path ="/" element = {<Homepage />} exact />
                <Route path ="/Coins/:id" element = {<CoinPage />} />
            </Routes>
           </div>
           <Alert />
        </BrowserRouter>
    );
}

export default App;