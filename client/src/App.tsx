import "./sass/main.scss";
import { NavBar, Main, InvoiceDetails } from "./components";
import { BrowserRouter as Router,Route, BrowserRouter } from "react-router-dom";
import {Register} from "./components";
import {LoginPage} from "../src/components";
import {InvoiceProvider} from "./context/invoice_context"


function App() {
  return (
   <>
    <BrowserRouter>
      <Route>
          <Route exact path ="/" children = {<LoginPage/>}/>
          <Route path ="/register" children = {<Register/>} />
          <Route exact path="/:id" children={<InvoiceDetails />} />
      </Route>
    </BrowserRouter>
   </>
  );
}

export default App;

