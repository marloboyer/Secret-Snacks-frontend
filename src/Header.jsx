import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "#e3f2fd" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {localStorage.jwt ? (
                <>
                  {" "}
                  <li className="nav-item">
                    <Link className="nav-link" to="/snacks">
                      Snacks
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/reviews">
                      Reviews
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/locations">
                      Locations
                    </Link>
                  </li>
                  <li className="nav-item">
                    <LogoutLink />
                  </li>
                </>
              ) : (
                <>
                  {/* <div>
                    <h1>Secret Snacks</h1>
                  </div> */}
                  <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                      <span className="navbar-brand mb-0 h1">Secret Snacks</span>
                    </div>
                  </nav>

                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
