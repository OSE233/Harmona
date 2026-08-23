import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar=()=> {
  const [selectedMood, setSelectedMood] = useState("Happy");

  const navLinks =[
       {
        name: 'Home',
        href: '/'
       },
       {
        name: 'Contact',
        href: '/contact'
       },
       {
        name: 'Settings',
        href: '/settings'
       },

  ]


 return (
    <div>
        
  <div

  >

    {/* NAVIGATION BAR */}

    <div
      style={{
        height: "65px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        background: "#111111",
        marginLeft: "-40px",
        marginRight: "-40px",
        marginBottom: "25px",
      }}
    >
  {
                navLinks.map((link)=> 
                <Link to={link.href}>
                   <button>{link.name}</button>
                </Link>
                )
           }

    </div>
     
      </div>
    </div>
    
  );
}

export default NavBar