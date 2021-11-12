import chat from './images/chat.png';

const Myprofilestudent = () => {
    return (
        <div className="myprofilemaindiv">
            <div className="managestudenttable">
                <table>
                    <caption>Class Schedule</caption>
                    <thead>
                        <tr>
                            <th className="thclass">#</th>
                            <th className="thclass" scope="col">Class</th>
                            <th className="thclass" scope="col">Date</th>
                            <th className="thclass" scope="col">Location</th>
                            <th className="thclass" scope="col">Time</th>
                            <th className="thclass" scope="col">Chat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="tdclass">1</td>
                            <td className="tdclass" data-label="ID">WDM</td>
                            <td className="tdclass" data-label="Name">02/04/21</td>
                            <td className="tdclass" data-label="Phone">SEIR</td>
                            <td className="tdclass" data-label="Type">02:00pm</td>
                            <td className="tdclass" data-label="Type"><a href="chat_students.html"><img className="chaticon" src={chat}/></a></td>
                        </tr>
                        <tr>
                            <td className="tdclass">2</td>
                            <td className="tdclass" data-label="ID">WDM</td>
                            <td className="tdclass" data-label="Name">02/04/21</td>
                            <td className="tdclass" data-label="Phone">SEIR</td>
                            <td className="tdclass" data-label="Type">02:00pm</td>
                            <td className="tdclass" data-label="Type"><a href="chat_students.html"><img className="chaticon" src={chat}/></a></td>
                        </tr>
                        <tr>
                            <td className="tdclass">3</td>
                            <td className="tdclass" data-label="ID">WDM</td>
                            <td className="tdclass" data-label="Name">02/04/21</td>
                            <td className="tdclass" data-label="Phone">SEIR</td>
                            <td className="tdclass" data-label="Type">02:00pm</td>
                            <td className="tdclass" data-label="Type"><a href="chat_students.html"><img className="chaticon" src={chat}/></a></td>
                        </tr>
                        <tr>
                            <td className="tdclass">4</td>
                            <td className="tdclass" data-label="ID">WDM</td>
                            <td className="tdclass" data-label="Name">02/04/21</td>
                            <td className="tdclass" data-label="Phone">SEIR</td>
                            <td className="tdclass" data-label="Type">02:00pm</td>
                            <td className="tdclass" data-label="Type"><a href="chat_students.html"><img className="chaticon" src={chat}/></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="managestudenttable">
                <table>
                    <caption>Manage Homework Submission</caption>
                    <thead>
                        <tr>
                            <th className="thclass">#</th>
                            <th className="thclass" scope="col">ID</th>
                            <th className="thclass" scope="col">Name</th>
                            <th className="thclass" scope="col">Submission</th>
                            <th className="thclass" scope="col">Grade</th>
                        </tr>
                    </thead>                    
                    <tbody>
                        <tr>
                            <td className="tdclass">1</td>
                            <td className="tdclass" data-label="ID">axm9538</td>
                            <td className="tdclass" data-label="Name">Mike Jhones</td>
                            <td className="tdclass" data-label="Submission">zip</td>
                            <td className="tdclass" data-label="Grade">A</td>
                        </tr>
                        <tr>
                            <td className="tdclass">2</td>
                            <td className="tdclass" data-label="Submission">zip</td>
                            <td className="tdclass" data-label="Name">Mike Jhones</td>
                            <td className="tdclass" data-label="Submission">zip</td>
                            <td className="tdclass" data-label="Grade">A</td>
                        </tr>
                        <tr>
                            <td className="tdclass">3</td>
                            <td className="tdclass" data-label="Submission">zip</td>
                            <td className="tdclass" data-label="Name">Mike Jhones</td>
                            <td className="tdclass" data-label="Submission">zip</td>
                            <td className="tdclass" data-label="Grade">A</td>
                        </tr>
                        <tr>
                            <td className="tdclass">4</td>
                            <td className="tdclass" data-label="Submission">zip</td>
                            <td className="tdclass" data-label="Name">Mike Jhones</td>
                            <td className="tdclass" data-label="Submission">zip</td>
                            <td className="tdclass" data-label="Grade">A</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="studentprofilepageflex">
                <div className="managestudentrecording">
                    <p className="profileannouncementp">Manage Recording</p>
                    <div className="announcementcontainer">
                        <div className="button-wrap">
                            <label className ="recordingbutton" for="upload">Upload Name Recording</label>                            
                            <input className="namerecordinginput" id="upload" type="file" />
                        </div>
                        <button type="submit" className="announcementsubmitbutton">Upload Recording</button>
                    </div>
                </div>
                <div className="studenthomeworksubmitformdiv">
                    <form className="homeworksubmitform">
                        <p className="profileannouncementp">Submit Homework</p>
                        <div className="announcementdiv">
                            <div className="announcementinputdiv">
                                <textarea placeholder="write your comment here" className="announcementinput" type="text" rows="5" cols="100" name="announcement"></textarea>
                                <div className="announcementcontainer">
                                    <div className="button-wrap">
                                        <label className ="new-button" for="upload">Upload Homework File </label>  
                                        <input id="upload" type="file" />
                                    </div>
                                    <button type ="submit" className="announcementsubmitbutton">Submit Homework</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Myprofilestudent;