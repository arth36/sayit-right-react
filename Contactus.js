import call from './images/call.png';

const Contactus = () => {
    return (
        <div class="contactusdiv">
            <div class="innercontactusdiv">
                <form className="contactusform" action="mailto:arthmodi36@gmail.com" method="POST" enctype="text/plain">
                    <div className="formcontactus">
                        <div className="callusdiv">
                            <img className="callimg" src={call}/>
                            <p className="callusp">call us on: +1 999-999-9999</p>
                        </div>
                        <div className="contactusordiv">
                            <hr className="contactusfirsthr"/>
                            <p className="orp">or</p>
                            <hr className="contactussecondhr"/>
                        </div>
                        <div>
                            <div className="contactusformdivs">
                                <div className="contactuslabeldiv">
                                    <label className="contactuslabel">first name: </label>
                                </div>
                                <div className="contactinputdiv">
                                    <input className="contactusinput" type="text" name="firstname" required/>
                                </div>
                            </div>
                            <div className="contactusformdivs">
                                <div className="contactuslabeldiv">
                                    <label className="contactuslabel">last name: </label>
                                </div>
                                <div className="contactinputdiv">
                                    <input className="contactusinput" type="text" name="lastname" required/>
                                </div>
                            </div>
                            <div className="contactusformdivs">
                                <div className="contactuslabeldiv">
                                    <label className="contactuslabel">email id: </label>
                                </div>
                                <div className="contactinputdiv">
                                    <input className="contactusinput" type="email" name="email" required/>
                                </div>
                            </div>
                            <div className="contactusformdivs">
                                <div className="contactuslabeldiv">
                                    <label className="contactuslabel">phone #: </label>
                                </div>
                                <div className="contactinputdiv">
                                    <input className="contactusinput" type="number" size="10" name="phone" required/>
                                </div>
                            </div>
                            <div className="contactusformdivs">
                                <div className="contactuslabeldiv">
                                    <label className="contactuslabel">reason for contact: </label>
                                </div>
                                <div className="contactinputdiv">
                                    <textarea className="contactusinput" type="text" rows="4" cols="50" name="reason" required></textarea>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="loginbutton contactusbutton">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Contactus;