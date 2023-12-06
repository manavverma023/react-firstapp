import Header from "./Header"
import Products_list from "./Products_list";
import './App.css';

function App() {

  function doSomething(data){
    console.log("button is clicked"+data);
  }
  return (
    <div className="App">
      <Header/>
      <Products_list/>
      <button className="btn" onClick={()=>{doSomething(" great")}}>Click</button>
    </div>
  );
}

export default App;
