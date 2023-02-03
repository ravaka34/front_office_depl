import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="site-navbar  py-2">
      <div className="search-wrap">
        <div className="container">
          
          <form action="#" method="post">
            <input
              type="text"
              className="form-control"
              placeholder="Search keyword and hit enter..."
            />
          </form>
        </div>
      </div>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <div className="site-logo">
              <a href="index.html" className="js-logo-clone">
                MG AUCTION
              </a>
            </div>
          </div>
          <div className="main-nav d-none d-lg-block">
            <nav
              className="site-navigation text-right text-md-center"
              role="navigation"
            >
              <ul className="site-menu js-clone-nav d-none d-lg-block">
                <li>
                  <Link to="/mes-encheres">Mes encheres</Link>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
