import chat from './images/chat.png';
import edit from './images/edit.png';
import sound from './images/sound.png';
import deleteimage from './images/delete.png';

const Myprofileprof = () => {
    return (
        <div className="myprofilemaindiv">
            <div className="managestudenttable">
                <table>
                    <caption>Manage Students</caption>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Type</th>
                            <th class="thclass" scope="col">Chat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td className="tdclass" data-label="ID">axm9538</td>
                            <td className="tdclass" data-label="Name">Arth Modi</td>
                            <td className="tdclass" data-label="Phone">6825528789</td>
                            <td className="tdclass" data-label="Type">W</td>
                            <td className="tdclass" data-label="Type"><a href="chat_students.html"><img className="chaticon" src={chat}/></a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td className="tdclass" data-label="ID">das9019</td>
                            <td className="tdclass" data-label="Name">Devanshi Sheth</td>
                            <td className="tdclass" data-label="Phone">6825527678</td>
                            <td className="tdclass" data-label="Type">W</td>
                            <td className="tdclass" data-label="Type"><a href="chat_students.html"><img className="chaticon" src={chat}/></a></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td className="tdclass" data-label="ID">kxa7263</td>
                            <td className="tdclass" data-label="Name">Kunjal Ahir</td>
                            <td className="tdclass" data-label="Phone">6825526565</td>
                            <td className="tdclass" data-label="Type">W</td>
                            <td className="tdclass" data-label="Type"><a href="chat_students.html"><img className="chaticon" src={chat}/></a></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td className="tdclass" data-label="ID">asm6767</td>
                            <td className="tdclass" data-label="Name">Mike phillips</td>
                            <td className="tdclass" data-label="Phone">6825524756</td>
                            <td className="tdclass" data-label="Type">W</td>
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
                            <th>#</th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Submission</th>
                            <th scope="col">Grade</th>
                        </tr>
                    </thead>                    
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td className="tdclass" data-label="ID">axm9538</td>
                            <td className="tdclass" data-label="Name">Arth Modi</td>
                            <td className="tdclass" data-label="Submission">zip</td>
                            <td className="tdclass" data-label="Grade">A</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td className="tdclass" data-label="ID">das9019</td>
                            <td className="tdclass" data-label="Name">Devanshi Sheth</td>
                            <td className="tdclass" data-label="Submission">zip</td>
                            <td className="tdclass" data-label="Grade">A</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td className="tdclass" data-label="ID">kxa7263</td>
                            <td className="tdclass" data-label="Name">Kunjal Ahir</td>
                            <td className="tdclass" data-label="Submission">zip</td>
                            <td className="tdclass" data-label="Grade">A</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td className="tdclass" data-label="ID">asm6767</td>
                            <td className="tdclass" data-label="Name">Mike phillips</td>
                            <td className="tdclass" data-label="Submission">zip</td>
                            <td className="tdclass" data-label="Grade">A</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="managestudenttable">
                <table>
                    <caption>Student Recordings</caption>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Language</th>
                            <th scope="col">Recording</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td className="tdclass" data-label="Name">Arth Modi</td>
                            <td className="tdclass" data-label="Language">E</td>
                            <td className="tdclass" data-label="Recording"><img src={sound}/></td>
                            <td className="tdclass" data-label="Action"><img style={{marginRight:"10px"}} src={edit}/><img src={deleteimage}/></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td className="tdclass" data-label="Name">Kunjal Ahir</td>
                            <td className="tdclass" data-label="Language">E</td>
                            <td className="tdclass" data-label="Recording"><img src={sound}/></td>
                            <td className="tdclass" data-label="Action"><img style={{marginRight:"10px"}} src={edit}/><img src={deleteimage}/></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td className="tdclass" data-label="Name">Devanshi Sheth</td>
                            <td className="tdclass" data-label="Language">E</td>
                            <td className="tdclass" data-label="Recording"><img src={sound}/></td>
                            <td className="tdclass" data-label="Action"><img style={{marginRight:"10px"}} src={edit}/><img src={deleteimage}/></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td className="tdclass" data-label="Name">Mike phillips</td>
                            <td className="tdclass" data-label="Language">E</td>
                            <td className="tdclass" data-label="Recording"><img src={sound}/></td>
                            <td className="tdclass" data-label="Action"><img style={{marginRight:"10px"}} src={edit}/><img src={deleteimage}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="profileannouncementformdiv">
                <form className="adminannouncement">
                    <p className="profileannouncementp">Make an Announcement</p>
                    <div className="announcementdiv">
                        <div className="announcementinputdiv">
                            <textarea placeholder="write announcement here" className="announcementinput" type="text" rows="5" cols="200" name="announcement"></textarea>
                            <div className="announcementcontainer">
                                <div className="button-wrap">
                                    <label className ="new-button" for="upload">Want to attach Image?</label> 
                                    <input id="upload" type="file" />
                                </div>
                                <button type ="submit" className="announcementsubmitbutton">Make an Announcement</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Myprofileprof;