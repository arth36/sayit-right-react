import $ from 'jquery';
const Header = () => {
    $(document).ready(function(){
        $(".navtoggle").click(function(){
            $("body").toggleClass("opennav");
        });
        $(".nav li a").click(function(){
            var target = $(this).parent().children(".nav li ul");
            $(target).slideToggle();
        });
    });
    return (
        <header className="headerdiv">
            <div className="logo">
                <a className="logoa" href="/">sayItRight</a>
            </div>
            <div className="navtoggle">
                <span>

                </span>
                <span>

                </span>
                <span>
                            
                </span>
            </div>
            <div className="nav">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/aboutUs">About us</a>
                    </li>
                    <li>
                        <a href="/services">Services</a>
                    </li>
                    <li>
                        <a href="/contactUs">Contact us</a>
                    </li>
                    <li>
                        <a href={'https://blogs.axm9538.uta.cloud/'}>Blogs</a>
                    </li>
                    <li>
                        <a href="#">My profile</a>
                        <ul>
                            <li><a href="/myprofileadmin">Manage Admin</a></li>
                            <li><a href="/myprofilestudent">Manage Student</a></li>
                            <li><a href="/myprofileprof">Manage Professor</a></li>
                            <li><a href="/myprofileadvisor">Manage Advisor</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
 
export default Header;