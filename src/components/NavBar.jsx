import { useState } from "react";

const NavBar=()=> {
  const [selectedMood, setSelectedMood] = useState("Happy");

  const navlinks =[
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
   navlinks.map((link)=>
  
      <a
        href = {link.href}
        style={{
          background: "none",
          border: "none",
          color: "white",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        {link.name}
      </a> 
)

   }


    </div>

    

   

    
     
      </div>
    </div>
    
  );
}

export default NavBar