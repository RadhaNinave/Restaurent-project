import { Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Cart></Cart>
     <Header/>
     <main>
     <Meals/>
     </main>
      
     </Fragment>
  
  );
}

export default App;