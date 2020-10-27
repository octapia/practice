var React = require('react');
module.exports = props => {
    return (

        <html lang="en" >

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
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg">
        <div className="row flex-grow">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="auth-form-transparent text-left p-3">
              
              <h4>New here?</h4>
              <h6 className="font-weight-light">Join us today! It takes only few steps</h6>
              <form className="pt-3">
                <div className="form-group">
                  <label>Username</label>
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-right-0">
                        <i className="ti-user text-primary"></i>
                      </span>
                    </div>
                    <input type="text" className="form-control form-control-lg border-left-0" placeholder="Username" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-right-0">
                        <i className="ti-email text-primary"></i>
                      </span>
                    </div>
                    <input type="email" className="form-control form-control-lg border-left-0" placeholder="Email" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-right-0">
                        <i className="ti-lock text-primary"></i>
                      </span>
                    </div>
                    <input type="password" className="form-control form-control-lg border-left-0" id="exampleInputPassword" placeholder="Password" />                        
                  </div>
                </div>
                <div className="mb-4">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      I agree to all Terms & Conditions
                    </label>
                  </div>
                </div>
                <div className="mt-3">
                  <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">SIGN UP</a>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Already have an account? <a href="/login" className="text-primary">Login</a>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 register-half-bg d-flex flex-row">
            <p className="text-dark font-weight-medium text-center flex-grow align-self-end">Copyright &copy; 2018  All rights reserved.</p>
          </div>
        </div>
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
