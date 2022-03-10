import React, { useState } from "react";
import { getBaseUrl } from "../../Components/Utlis";
import axios from "axios";
import { showNotificationMsz } from "../../Components/Utlis/validation";
import {
  Grid,
  Card,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loder from "../Loder/loder";

const Dialogbox = (props) => {
  let navigate = useNavigate();
  let state = useLocation();
  console.log("state", props);


  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [isloading, setisloading] = useState(false);

  const LoginUser = () => {
    let url = getBaseUrl() + "userLogin";
    setisloading(true);

    let temp = {
      email,
      password,
    };
    axios
      .post(url, temp)
      .then(
        (res) => {
          console.log("data response:::", res);
          setisloading(false);
          navigate("/loginHome");
          showNotificationMsz(res.data.msg, "success");
         
        },

        (error) => {
          setisloading(false);
          console.log("data response error:::", error);
          showNotificationMsz(error, "danger");
        }
      )
      .catch((e) => {
        setisloading(false);
        console.log("data response error:::", e);
        showNotificationMsz(e, "danger");
      });
  };


  return (
    <>
      <section>
        <Dialog
          open={props.open}
          aria-labelledby="form-dialog-title"
          maxWidth="sm"
          fullWidth="fullWidth"
          onClose={() => {
            props.close();
          }}
        >
          <DialogTitle className="text-center">
            LOGIN
            <span className="float-right icon_color">
              <i
                class="fa fa-times hover_cursor"
                aria-hidden="true"
                onClick={() => {
                  props.close();
                }}
              ></i>{" "}
            </span>
          </DialogTitle>
          <DialogContent>
            <Grid className="Component_main_grid">
              <Grid item md={12} xs={12}>
                <div className="text_filed_heading pl-1 ">Email</div>
                <div className=" mt-1 mr-2 mb-4">
                  <input
                    type="email"
                    className="form-control "
                    autoComplete="off"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value)
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
                    onChange={(e) => {
                      setpassword(e.target.value)
                    }}

                  />
                </div>
              </Grid>
            </Grid>
            <div className="forgot_password">
              <div>
                <p>Forgot Password?</p>
              </div>
              <div>
                <p>Signup</p>
              </div>
            </div>

            <div className="pricing_btn text-center mt-3 mb-4">
              <button
                type="button"
                class="pricing_button"
                onClick={LoginUser}
              >
                Continue
              </button>
            </div>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </section>
      <Loder loading={isloading} />
    </>
  );
};

export default Dialogbox;
