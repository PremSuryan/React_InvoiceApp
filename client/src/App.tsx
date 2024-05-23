import "./sass/main.scss";
import { NavBar, Main, InvoiceDetails } from "./components";
import { BrowserRouter as Routes,Route, BrowserRouter, Switch } from "react-router-dom";
import {Register} from "./components";
import {LoginPage} from "../src/components";
import {InvoiceProvider} from "./context/invoice_context";

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
          <Route path ="/" children = {<LoginPage/>}/>
          <Route path ="/register" children = {<Register />} />
          <Route path ="/main" children = {<Main />} />
          <Route path="/:id" children={<InvoiceDetails />} />
          {/* <Route path="/invoices" children={<Main />} /> */}

      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;

