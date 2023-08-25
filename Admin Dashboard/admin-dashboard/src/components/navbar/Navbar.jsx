import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  const navigate = useNavigate();
  const handleLogout = async ()=>{
    try{
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/login")
    }catch(err){
      console.log(err)
    }
  }

  // const currentUser = {
  //   id: 1,
  //   username: "Anna",
  //   isSeller: true,
  // };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">Habesha Insights</span>
          </Link>
          {/* <span className="dot">.</span> */}
        </div>
        <div className="links">
          {/* <span>Liverr Business</span>
          <span>Explore</span>
          <span>English</span> */}
          {/* {!currentUser?.isSeller && <span>Become a Seller</span>} */}
          {currentUser ? (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img
                src={currentUser.profilePicture||"/public/img/man.png"}
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="link" to="/mygigs">
                      Gigs
                    </Link>
                    <Link className="link" to="/add">
                      Add New Gig
                    </Link>
                  </>
                )}
                {/* <Link className="link" to="/orders">
                  Orders
                </Link>
                <Link className="link" to="/messages">
                  Messages
                </Link> */}
                <Link className="link" onClick={handleLogout}>
                  Logout
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <Link className="link" to="/login">
                <button>Sign in</button>
              </Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Schools
            </Link>
            <Link className="link menuLink" to="/">
              Hospitals
            </Link>
            <Link className="link menuLink" to="/">
              Hotels
            </Link>
            <Link className="link menuLink" to="/">
              Cafes
            </Link>
            <Link className="link menuLink" to="/">
              Resorts
            </Link>
            <Link className="link menuLink" to="/">
              Bakery
            </Link>
            <Link className="link menuLink" to="/">
              Clinics
            </Link>
            <Link className="link menuLink" to="/">
              Meeting Halls
            </Link>
            <Link className="link menuLink" to="/">
              Higher Education
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
