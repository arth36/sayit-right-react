import loginpageimage from './images/loginpageimage.jpg';
import role from './images/role.png';
import student from './images/student.png';
import faculty from './images/faculty.png';
import advisor from './images/advisor.png';
import admin from './images/admin.png';
import user from './images/user.png';
import password from './images/password.png';
import view from './images/view.png';

const Login = () => {
    return (
        <div className="loginbelowheader">
            <div className="leftdiv">
                <img className="loginscreenimage" src={loginpageimage}/>
            </div>
            <div className="loginformdiv">
                <form className="loginform">
                    <div className="labeldiv">
                        <img src={role}/>
                        <label className="formlabel">Select your user role: </label>
                    </div>
                    <div className="radiodiv">
                        <div className="loginicondiv">
                            <img className="loginicon" src={student} name="userrole" checked/>
                            <input className="loginradioinput" type="radio" name="loginradio" value="loginradioval" checked="checked"/>
                            <p className="loginradiop">Student</p>
                        </div>
                        <div className="loginicondiv">
                            <img className="loginicon" src={faculty} name="userrole"/>
                            <input className="loginradioinput" type="radio" value="loginradioval" name="loginradio" checked="checked"/>
                            <p className="loginradiop">Faculty</p>
                        </div>
                        <div className="loginicondiv">
                            <img className="loginicon" src={advisor} name="userrole" checked/>
                            <input className="loginradioinput" type="radio" name="loginradio" value="loginradioval" checked="checked"/>
                            <p className="loginradiop">Advisor</p>
                        </div>
                        <div className="loginicondiv">
                            <img className="loginicon" src={admin} name="userrole" checked/>
                            <input className="loginradioinput" type="radio" name="loginradio" value="loginradioval" checked="checked"/>
                            <p className="loginradiop">Admin</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="labeldiv">
                                <img src={user}/>
                                <label className="formlabel">email id/username: </label>
                            </div>
                            <div className="logininputdiv">
                                <input className="logininput" type="email" required/>
                            </div>
                        </div>
                        <div>
                            <div className="labeldiv">
                                <img src={password}/>
                                <label className="formlabel">password: </label>
                            </div>
                            <div className="logininputdiv">
                                <input className="logininput" type="password" required/>
                                <img className="viewpassword" src={view}/>
                            </div>
                        </div> 
                        <div className="remembermediv">
                            <label>
                                <input type="checkbox"/>
                                remember me
                            </label>
                        </div>   
                        <div className="loginbuttondiv">
                            <button className="loginbutton" id="login_button" type="login">
                                <a className="loginbuttona" href="contactus.html">login now!</a>
                            </button>
                        </div>
                        <div className="newaccdiv">
                            <p>
                                <a className="newacca" href="/signup">
                                    Create a new account ?
                                </a>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Login;