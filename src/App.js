import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/reset.css";
import Home from "./components/Home"
import SendExam from "./components/SendExam.js"
import ViewExams from "./components/ViewExams.js"
import Teachers from "./components/Teachers";
import Subjects from "./components/Subjects";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/view" component={ViewExams} exact/>
                <Route path="/send" component={SendExam} exact/>
                <Route path="/teachers" component={Teachers} exact/>
                <Route path="/subjects" component={Subjects} exact/>
            </Switch>            
        </BrowserRouter>        
    )  
}