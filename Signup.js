const Signup = () => {
    return (
        <div class="loginbelowheader signupbelowheader">
            <div class="signupformdiv">
                <form class="signupform">
                    <div class="firstlastnameinput">
                        <input class="signupnameinput signupinputfirst" type="text" placeholder="First Name" required/>
                        <input class="signupnameinput" type="text" placeholder="Last Name" required/>
                    </div>
                    <div>
                        <input class="signupemailinput signupinput" type="text" placeholder="Email" required/>
                    </div>
                    <div>
                        <input class="signupemailinput signupinput" type="text" placeholder="Password" required/>
                    </div>
                    <div>
                        <input class="signupemailinput signupinput" type="text" placeholder="Confirm Password" required/>
                    </div>
                    <div>
                        <input class="signupemailinput signupinput" type="date" id="birthday" placeholder="Date of Birth" name="birthday" required/>
                    </div>
                    <div class="selectrole signupinputselect">
                        <select>
                            <option value="1">Choose Gender</option>
                            <option value="2">Male</option>
                            <option value="3">Female</option>
                        </select>
                    </div>
                    <div class="selectrole signupinputselect">
                        <select>
                            <option value="1">Choose User Role</option>
                            <option value="2">Student</option>
                            <option value="3">Professor</option>
                            <option value="4">Advisor</option>
                        </select>
                    </div>
                    <button class="signupbutton">Sign up now!</button>
                </form>
            </div>
        </div>
    );
}
 
export default Signup;