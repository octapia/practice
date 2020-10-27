var React = require('react');
var Navbar = require('./navbar');

module.exports = props => {
    return (

        <html lang="en">

    <head>
        
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>{props.title} : Blog</title>
        
        <link rel="stylesheet" href="/css/themify-icons.css" />
        <link rel="stylesheet" href="/css/vendor.bundle.base.css" />        
        <link rel="stylesheet" href="/css/style.css" />
        
    </head>

    <body className="sidebar-fixed">
        <div className="container-scroller">
            <Navbar></Navbar>
            
            <div className="container-fluid page-body-wrapper"> 

                <nav className="sidebar sidebar-offcanvas" id="sidebar">
                    <ul className="nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="">
                                <i className="ti-home menu-icon"></i>
                                <span className="menu-title">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                <i className="ti-export menu-icon"></i>
                                <span className="menu-title">Popups</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                <i className="ti-bell menu-icon"></i>
                                <span className="menu-title">Notifications</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                 <div className="main-panel">
                    {/*<!-- content-wrapper -->*/}
                    <div className="content-wrapper">
                    {props.children}
                    </div>
                    {/*<!-- content-wrapper ends -->*/}
                    {/*<!-- footer -->*/}
                    <footer className="footer">
                        <div className="d-sm-flex justify-content-center justify-content-sm-between">
                            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright ©  <a href="http://octapia.com/" target="_blank">Octapia</a>. All rights reserved.</span>
                            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Made with <i className="ti-heart text-danger ml-1"></i></span>
                        </div>
                    </footer>
                    {/*<!-- footer ends -->*/}
                </div>
            </div>
            
        </div>
        
        <script src="js/vendor.bundle.base.js"></script>        
        <script src="js/off-canvas.js"></script>
        <script src="js/hoverable-collapse.js"></script>
        <script src="js/template.js"></script>
         
        
    </body>

</html>

    );
}
