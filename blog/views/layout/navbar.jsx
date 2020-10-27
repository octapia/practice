var React = require('react');

module.exports = props => {
    return (

        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a className="navbar-brand brand-logo mr-5" href=""><img src="./images/logo.png" className="mr-2" alt="logo" /></a>
        <a className="navbar-brand brand-logo-mini" href=""><img src="./images/logo.png" alt="logo" /></a>
    </div>
    <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span className="ti-layout-grid2"></span>
        </button>
        <ul className="navbar-nav mr-lg-2">
            <li className="nav-item nav-search d-none d-lg-block">
                <div className="input-group">
                    <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                        <span className="input-group-text" id="search">
                            <i className="ti-search"></i>
                        </span>
                    </div>
                    <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" />
                </div>
            </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
            
            <li className="nav-item nav-profile dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                    <img src="images/profile.jpg" alt="profile" />
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                    <a className="dropdown-item">
                        <i className="ti-settings text-primary"></i>
                        Settings
                    </a>
                    <a className="dropdown-item">
                        <i className="ti-power-off text-primary"></i>
                        Logout
                    </a>
                </div>
            </li>
            
        </ul>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span className="ti-layout-grid2"></span>
        </button>
    </div>
</nav>


    );
}
