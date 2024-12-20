import React from "react";

export const Navbar=()=>{
    return(
        <>
            <nav
              className="navbar navbar-expand-md fixed-top"
              style={{ backgroundImage: "linear-gradient( to top, #1f1f1f, #363636)" }}
              data-bs-theme="dark"
            >
              <div className="container">
                <a className="navbar-brand" href="#">
                  Brand
                </a>
                <button
                  data-bs-toggle="collapse"
                  className="navbar-toggler"
                  data-bs-target="#navcol-1"
                >
                  <span className="visually-hidden">Toggle navigation</span>
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navcol-1">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">
                        First Item
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Second Item
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Third Item
                      </a>
                    </li>
                  </ul>
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Third Item
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="dropdown-toggle nav-link"
                        aria-expanded="false"
                        data-bs-toggle="dropdown"
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-gear-fill"
                          style={{ fontSize: 17, marginBottom: 3 }}
                        >
                          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg>
                        <span style={{ color: "var(--bs-nav-link-hover-color)" }}>
                          &nbsp;
                        </span>
                        &nbsp;
                      </a>
                      <div
                        className="dropdown-menu text-bg-light dropdown-menu-end"
                        data-bs-theme="light"
                        style={{
                          boxShadow: "0px 0px 20px -14px",
                          border: "0px solid white"
                        }}
                      >
                        <a className="dropdown-item" href="#">
                          First Item
                        </a>
                        <a className="dropdown-item" href="#">
                          Second Item
                        </a>
                        <a className="dropdown-item" href="#">
                          Third Item
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

        </>
    )
}