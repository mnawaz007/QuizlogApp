/* eslint-disable no-mixed-spaces-and-tabs */
import { TfiAlert } from "react-icons/tfi";

export default function Footer () {
    return ( 
        <> 
    <div  className="container mt-5">
        <div  className="row d-flex  ">
       
            <nav className="navbar navbar-light bg-primary d-flex justify-content-center">
    <form  className="d-flex ">
      <input  className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
      <button  className="btn btn-outline-success" type="submit">Search</button>
    </form>
</nav>
            <div  className="col d-flex justify-content-center">
  <div  className="container-fluid">

    {/* /mmmmmmm */}
    <div className="container-fluid my-5">    
        <div className="row">
      <div className=" col">
        <p>{<TfiAlert />}</p>
        <small className="d-block mb-3 text-muted">© 2017–2021</small>
      </div>
      <div className="col">
        <h5>Features</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Random feature</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team feature</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another one</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Last time</a></li>
        </ul>
      </div>
      <div className="col">
        <h5>Resources</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource name</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another resource</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Final resource</a></li>
        </ul>
      </div>
      <div className="col">
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Locations</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
</div>



  </div>
                </div></div> 
         </div> 
        
        </>
        )}