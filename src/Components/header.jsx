/* eslint-disable react/prop-types */
import './App.css'


export default function Header () {
    return (
        <>  

    <div className="container ddd">
  
    <nav className="navbar navbar-success navbar-expand-sm " >
    <nav className="navbar  navbar-light bg-primary w-100 d-flex justify-content-center mx-auto  ">
  <div className="container-fluid  ">
    <a className="navbar-brand text-light" href="#">Quiz Arena</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown ">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Features</a>
        </li>
        
       
      </ul>
    </div>
  </div>
</nav>
</nav>
  
   
    </div> 


    </> )	}