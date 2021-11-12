import edit from './images/edit.png';
import sound from './images/sound.png';
import deleteimage from './images/delete.png';

const Myprofileadmin = () => {
    return (
        <div className="myprofilemaindiv">
            <div className="managestudenttable">
                <table>
                    <caption>Manage Everybody</caption>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td className="tdclass" data-label="ID">axm9538</td>
                            <td className="tdclass" data-label="Name">Arth Modi</td>
                            <td className="tdclass" data-label="Phone">6825528689</td>
                            <td className="tdclass" data-label="Type">W</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td className="tdclass" data-label="ID">kxa7263</td>
                            <td className="tdclass" data-label="Name">Kunjal Ahir</td>
                            <td className="tdclass" data-label="Phone">7777728787</td>
                            <td className="tdclass" data-label="Type">W</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td className="tdclass" data-label="ID">das9019</td>
                            <td className="tdclass" data-label="Name">Devanshi Sheth</td>
                            <td className="tdclass" data-label="Phone">5548989898</td>
                            <td className="tdclass" data-label="Type">W</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td className="tdclass" data-label="ID">hhs9538</td>
                            <td className="tdclass" data-label="Name">Andrew Arlington</td>
                            <td className="tdclass" data-label="Phone">6825528787</td>
                            <td className="tdclass" data-label="Type">P</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="managestudenttable">
                <table>
                    <caption>Manage Courses</caption>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th scope="col">Course</th>
                            <th scope="col">ID</th>
                            <th scope="col">Professor</th>
                            <th scope="col">Schedule</th>
                        </tr>
                    </thead>                    
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td className="tdclass" data-label="Submission">WDM</td>
                            <td className="tdclass" data-label="ID">axm9538</td>
                            <td className="tdclass" data-label="Name">Elizabeth Diaz</td>
                            <td className="tdclass" data-label="Action"><img src={edit}/></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td className="tdclass" data-label="Submission">DB</td>
                            <td className="tdclass" data-label="ID">ahs8798</td>
                            <td className="tdclass" data-label="Name">Abhishek Santra</td>
                            <td className="tdclass" data-label="Action"><img src={edit}/></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td className="tdclass" data-label="Submission">DAA</td>
                            <td className="tdclass" data-label="ID">hjs7878</td>
                            <td className="tdclass" data-label="Name">Noman Mufti</td>
                            <td className="tdclass" data-label="Action"><img src={edit}/></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td className="tdclass" data-label="Submission">DAMT</td>
                            <td className="tdclass" data-label="ID">fgj6756</td>
                            <td className="tdclass" data-label="Name">Negin Feridoun</td>
                            <td className="tdclass" data-label="Action"><img src={edit}/></td>
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
                            <th scope="col">Recording</th>
                            <th scope="col">Language</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td className="tdclass" data-label="Name">Arth Modi</td>
                            <td className="tdclass" data-label="Recording"><img src={sound}/></td>
                            <td className="tdclass" data-label="Language">E</td>
                            <td className="tdclass" data-label="Action"><img style={{marginRight:"10px"}} src={edit}/><img src={deleteimage}/></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td className="tdclass" data-label="Name">Kunjal Ahir</td>
                            <td className="tdclass" data-label="Recording"><img src={sound}/></td>
                            <td className="tdclass" data-label="Language">E</td>
                            <td className="tdclass" data-label="Action"><img style={{marginRight:"10px"}} src={edit}/><img src={deleteimage}/></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td className="tdclass" data-label="Name">Devanshi Sheth</td>
                            <td className="tdclass" data-label="Recording"><img src={sound}/></td>
                            <td className="tdclass" data-label="Language">E</td>
                            <td className="tdclass" data-label="Action"><img style={{marginRight:"10px"}} src={edit}/><img src={deleteimage}/></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td className="tdclass" data-label="Name">Mike Jhones</td>
                            <td className="tdclass" data-label="Recording"><img src={sound}/></td>
                            <td className="tdclass" data-label="Language">E</td>
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
 
export default Myprofileadmin;