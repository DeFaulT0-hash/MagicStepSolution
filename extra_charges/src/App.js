import Popup from'./components/popup'
import Cards from'./components/cards';
import './App.css';





let ob={
  'width' : '24 rem;'
} 

function App() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-light bg-white">
        <div className="container-fluid bg-white">
          <div className="card border-0" style={ob}>
            <div className="card-body h3 p-1">
              Manage Extra Charges 
            </div>
          </div>
          <div className="card border-0" style={{width:'24 rem'}}>
          <div className="card-body">
            <form className="d-flex">
              <input className="form-control" type="text" placeholder="Search"/>
              <button className="btn btn-outline-success" type="submit">c</button>
            </form>
          </div>
          </div>
        </div>
      </nav>
      <Cards/>
    <div  className="btn float-right mb-2 rounded-circle" type="button" >
        <Popup/>
    </div>
     
    </div>
  );
}

export default App;
