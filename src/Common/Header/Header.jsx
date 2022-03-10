import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBaseUrl } from "../../Components/Utlis";
import Loder from "../../Components/Loder/loder";
import axios from "axios";
import { showNotificationMsz } from "../../Components/Utlis/validation";
//material ui appbar
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//css file
import "./Header.css";
//dialog box
import {
  Grid,
  Card,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import Dialogbox from "../../Components/dialogbox/Dialogbox";

const Header = (props) => {
  let navigate = useNavigate();
  /*local state */
  const [Sidebar, setSidebar] = useState(false);
  const [LoginDailogOpen, setLoginDailogOpen] = useState(false);
  const [SignDailogOpen, setSignDailogOpen] = useState(false);



  const logindata = () => {
    setLoginDailogOpen(!LoginDailogOpen);
  };
  /*function to open a sidebar */
  const setLoadingnewside = () => {
    document.getElementById("mySidenav").style.width = "250px";
    setSidebar(true);
  };

  /*function to close a sidebar */
  const Closesidebar = () => {
    document.getElementById("mySidenav").style.width = "0px";
    setSidebar(false);
  };

   
    
      const [firstname,setFirstName] = useState(" ");
      const [lastname,setLastName] = useState(" ");
      const [companyname,setCompanyName] = useState(" ");
      const [email,setEmail] = useState(" ");
      const [contactnumber,setContectNumber] = useState(" ");
      const [password,setPassword] = useState(" ");

      const [isloading, setisloading] = useState(false);

      const SignUpUser = () => {
        let url = getBaseUrl() +  "userRegister";

        let temp ={
          firstname,lastname,companyname,email,contactnumber,password
        }

        axios
        .post(url, temp)
        .then(
          (res) => {
            setisloading(false);
            console.log("data Response" ,res);
            navigate("/loginHome");
            showNotificationMsz(res.data.msg, "success");
          },

          (error) => {
            setisloading(false);
            console.log("data Error:::",error);
            showNotificationMsz(error, "danger");
          }
        )
        .catch((e)=>{
          setisloading(false);
          console.log("data response Error",e);
          // showNotificationMsz(e, "danger");
        })
      }

  return (
    <div className="topheader">
      <AppBar position="fixed" className="MainHeader">
        <Toolbar className="header_padding">
          <div className="header_link_color">
            <i onClick={() => navigate("/")}>SHOTWAP</i>
          </div>
          <div className="header_grow" />
          <div className="header_links">
            <span className="header_link_color" onClick={() => navigate("/")}>
              HOME
            </span>
            <span
              className="header_link_color"
              onClick={() => navigate("/aboutCompany")}
            >
              COMPANY
            </span>

            <span
              className="header_link_color"
              onClick={() => navigate("/contact")}
            >
              SUPPORT
            </span>
            <span
              className="header_link_color"
              // onClick={() => setLoginDailogOpen(!LoginDailogOpen)}
              onClick={logindata}
            >
              LOGIN
            </span>
            <span
              className="header_link_color"
              onClick={() => setSignDailogOpen(!SignDailogOpen)}
            >
              SIGNUP
            </span>
          </div>
          <div className="mobile_Burger_Menu">
            <span
              className="logout_Pointer_cursor mr-3 text-right mt-2"
              onClick={!Sidebar ? setLoadingnewside : Closesidebar}
            >
              <i class="fa fa-bars"></i>
            </span>

            <div id="mySidenav" className="sidenav">
              <div className="cross_icon_style">
                <i
                  class="fa fa-times cursor"
                  onClick={() => {
                    document.getElementById("mySidenav").style.width = "0px";
                    setSidebar(false);
                  }}
                ></i>
              </div>

              <span
                className="logout_Pointer_cursor"
                onClick={() => navigate("/aboutCompany")}
              >
                COMPANY
              </span>

              <span
                className="logout_Pointer_cursor"
                onClick={() => navigate("/contact")}
              >
                SUPPORT
              </span>
              <span
                className="logout_Pointer_cursor"
                onClick={() => setLoginDailogOpen(!LoginDailogOpen)}
              >
                LOGIN
              </span>
              <span
                className="logout_Pointer_cursor"
                onClick={() => setSignDailogOpen(!SignDailogOpen)}
              >
                SIGNUP
              </span>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      {/* //////Signup dialog */}
      <Card className="Card_shadow ">
        <Dialog
          open={SignDailogOpen}
          aria-labelledby="form-dialog-title"
          maxWidth="sm"
          fullWidth="fullWidth"
        >
          <DialogTitle className="text-center">
            SIGNUP
            <span
              className="float-right icon_color"
              onClick={() => setSignDailogOpen(!SignDailogOpen)}
            >
              <i class="fa fa-times hover_cursor" aria-hidden="true"></i>{" "}
            </span>
          </DialogTitle>
          <DialogContent>
            <Grid className="Component_main_grid">
              <Grid item md={12} xs={12}>
                <div className="text_filed_heading pl-1 ">First Name</div>
                <div className=" mt-1 mr-2 mb-4">
                  <input
                    type="text"
                    className="form-control "
                    autoComplete="off"
                    value={firstname}
                    onChange={(e)=>{
                      setFirstName(e.target.value)
                    }}
                  />
                </div>
              </Grid>
              <Grid item md={12} xs={12}>
                <div className="text_filed_heading pl-1 ">Last Name</div>
                <div className=" mt-1 mr-2">
                  <input
                    type="text"
                    className="form-control "
                    autoComplete="off"
                    value={lastname}
                    onChange={(e)=>{
                      setLastName(e.target.value)
                    }}

                  />
                </div>
              </Grid>
              <Grid item md={12} xs={12}>
                <div className="text_filed_heading pl-1 ">Company Name</div>
                <div className=" mt-1 mr-2">
                  <input
                    type="text"
                    className="form-control "
                    autoComplete="off"
                    value={companyname}
                    onChange={(e)=>{
                      setCompanyName(e.target.value)
                    }}
                  />
                </div>
              </Grid>
              <Grid item md={12} xs={12}>
                <div className="text_filed_heading pl-1 ">Email</div>
                <div className=" mt-1 mr-2">
                  <input
                    type="email"
                    className="form-control "
                    autoComplete="off"
                    value={email}
                    onChange={(e)=>{
                      setEmail(e.target.value)
                    }}
                  />
                </div>
              </Grid>
              <Grid item md={12} xs={12}>
                <div className="text_filed_heading pl-1 ">Contact Number</div>
                <div className=" mt-1 mr-2">
                  <input
                    type="text"
                    className="form-control "
                    autoComplete="off"
                    value={contactnumber}
                    onChange={(e)=>{
                      setContectNumber(e.target.value)
                    }}
                  />
                </div>
              </Grid>
              <Grid item md={12} xs={12}>
                <div className="text_filed_heading pl-1 ">Password</div>
                <div className=" mt-1 mr-2">
                  <input
                    type="text"
                    className="form-control "
                    autoComplete="off"
                    value={password}
                    onChange={(e)=>{
                      setPassword(e.target.value)
                    }}
                  />
                </div>
              </Grid>
              <Grid item md={12} xs={12}>
                <div className="text_filed_heading pl-1 ">Confirm Password</div>
                <div className=" mt-1 mr-2">
                  <input
                    type="text"
                    className="form-control "
                    autoComplete="off"
                    // value={firstName}
                    // onChange={(e)=>{
                    //   setFirstName(e.target.value)
                    // }}
                  />
                </div>
              </Grid>
            </Grid>
            <div className="forgot_passwords">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  I agree with Terms & Conditions
                </label>
              </div>
            </div>

            <div className="pricing_btn text-center mt-3 mb-4">
              <button
                type="button"
                class="pricing_button"
                onClick={SignUpUser}
              >
                Continue
              </button>
            </div>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </Card>

      <Dialogbox open={LoginDailogOpen} close={logindata} />
    </div>
    
  );
};

export default Header;
