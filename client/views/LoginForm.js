import React from 'react';
 
const LoginForm = ({
    onSubmit,
    onChange,
    errors,
    successMessage,
    user
}) =>(
    <div className="login-img3-body">
    <div className="container">
        <form className="login-form" action="index.html">
            <div className="login-wrap">
                <p className="login-img"><i className="icon_lock_alt"></i></p>
                <div className="input-group">
                <span className="input-group-addon"><i className="icon_profile"></i></span>
                <input type="text" className="form-control" placeholder="Username" onChange={onChange} autoFocus value={user.username} name="username"/>
                </div>
                <div className="input-group">
                <span className="input-group-addon"><i className="icon_key_alt"></i></span>
                <input type="password" className="form-control" onChange={onChange} placeholder="Password" value={user.password} name="password"/>
                </div>
                {/* <label className="checkbox">
                        <input type="checkbox" value="remember-me" /> Remember me
                        <span className="pull-right"> <a href="#"> Forgot Password?</a></span>
                    </label> */}
                <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={onSubmit}>Login</button>
                <button className="btn btn-info btn-lg btn-block hide" type="submit">Signup</button>
                {successMessage}
            </div>
        </form>
            
    </div></div>
);



export default LoginForm