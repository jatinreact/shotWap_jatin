import React, { useState, useEffect } from "react";
import HOC from "../../Common/HOC/HOC";
import { getBaseUrl } from "../../Components/Utlis";
import axios from "axios";
import { Grid, Card } from "@material-ui/core";
import Loder from "../Loder/loder";
import Expand from "react-expand-animated";
import { useThemeProps } from "@mui/material";
const NewOrder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [opendialogbox, setopendialogbox] = useState(false);

  const [warehouse, setwarehouse] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [date, setDate] = useState(" ");
  const [ordertype, setOrdertype] = useState(" ");
  const [mobilenumber, setMobileNumber] = useState(" ");
  const [alternatemobilenumber, setAlternatemobilenumber] = useState(" ");
  const [b2c20kgbelow, setB2c20kgbelow] = useState(" ");
  const [b2c20kgabove, setB2c20kgabove] = useState(" ");
  const [length, setLength] = useState(" ");
  const [width, setWidth] = useState(" ");
  const [height, setHeight] = useState(" ");
  const [totalweight, setTotalweight] = useState(" ");
  const [packageInfoId, setPackageInfoId] = useState(" ")
const [orderidbycustomer  ,setorderidbycustomer ] = useState("")
  const [isloading, setisloading] = useState(false);

  const addOrder = () => {
    setisloading(true);
    let url = getBaseUrl() + "createorder"

    let temp = { warehouse, address, date, ordertype, mobilenumber, alternatemobilenumber, alternatemobilenumber, b2c20kgbelow, b2c20kgabove, b2c20kgabove, length, width, height, totalweight, packageInfoId }
    axios
      .post(url, temp)
      .then(
        (res) => {
          console.log("response Data :::", res)
          setisloading(false);
        },
        (error) => {
          console.log("response Data :::", error)
          setisloading(false);
        }
      )
      .catch((e) => {
        console.log("Response Data:::", e);
        setisloading(false);
      })
  }


  const orderid = ()=>{

    var maxNumber =  455677;
    var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
    setorderidbycustomer(randomNumber)

  }

  return (
    <>
      <div className="home_padding">
        <div>
          <div className="container">
            <div className="pt-3">
              <h3 className="pl-3 mt-5 mb-5">New Order</h3>
            </div>

            <Card className="Card_shadoww p-3 card_color_neworder mb-4">
              <Grid className="Component_main_grid">
                <Grid item md={6} xs={12}>
                  <div className="p-3">
                    <div>
                      <h5>Order Information</h5>
                      <div>
                        <label for="formGroupExampleInput">Warehouse</label>
                        <select class="form-control">
                          <option value>Default select</option>
                          <option>Default select</option>
                          <option>Default select</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <div className="mt-3">
                        <label for="formGroupExampleInput">Address</label>
                        <textarea
                          rows={3}
                          type="text"
                          class="form-control"
                          id="formGroupExampleInput"
                          value={address}
                          onChange={(e) => {
                            setAddress(e.target.value)
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item md={6} xm={12}>
                  <h5>Customer Information</h5>
                  <Grid className="Component_main_grid">
                    <Grid item md={6} xs={12}>
                      <div className="p-3">
                        <div>
                          <div>
                            <label for="formGroupExampleInput">Name</label>
                            <input
                              type="text"
                              class="form-control"
                              id="formGroupExampleInput"
                              placeholder="Enter Customer Name"
                            />
                          </div>
                        </div>
                      </div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <div className="p-3">
                        <div>
                          <div>
                            <label for="formGroupExampleInput">Email</label>
                            <input
                              type="text"
                              class="form-control"
                              id="formGroupExampleInput"
                              placeholder="Enter Customer Email"
                            />
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                  <div className="">
                    <label for="formGroupExampleInput">Address</label>
                    <textarea
                      rows={3}
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Enter Customer Address"
                    />
                  </div>
                </Grid>
              </Grid>

              {/* //second Part */}
              <Grid className="Component_main_grid p-3">
                <Grid item md={6} xs={12}>
                  <div>
                    <Grid className="Component_main_grid">
                      <Grid item md={6} xs={12}>
                        <div className="">
                          <label for="formGroupExampleInput">Order ID</label>
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput"
                            placeholder="Enter Customer Address"
                            value={orderidbycustomer}
                          />
                        </div>
                      </Grid>
                      <Grid item md={6} xs={12}>
                      <button style={{marginTop:"28px"}} type="button" class="pricing_button pt-5"   onClick={orderid}>
                    
                      Auto Gen Order ID
                  </button>
                        {/* <div className="pl-2">
                          <label for="formGroupExampleInput">
                            Auto Gen Order ID
                          </label>
                          <input
                            disabled
                            style={{ borderRadius: "16px" }}
                            class="form-control "
                            id="formGroupExampleInput"
                            placeholder="Order ID"
                          />
                        </div> */}
                      </Grid>
                    </Grid>
                  </div>
                  <div className="mt-3">
                    <Grid className="Component_main_grid">
                      <Grid item md={6} xs={12}>
                        <div className="">
                          <label for="formGroupExampleInput">Date</label>
                          <input
                            type="date"
                            class="form-control"
                            id="formGroupExampleInput"
                            placeholder="Enter Customer Address"
                            value={date}
                            onChange={(e) => {
                              setDate(e.target.value)
                            }}
                          />
                        </div>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <div className="pl-2">
                          <label for="formGroupExampleInput">Order Type</label>
                          <select class="form-control">
                            <option>Order Type</option>
                            <option>Order Type</option>
                            <option>Order Type</option>
                          </select>
                        </div>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="mt-3">
                    <Grid className="Component_main_grid">
                      <Grid item md={6} xs={12}>
                        <div className="">
                          <label for="formGroupExampleInput">
                            Add Phone Number
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="formGroupExampleInput"
                            placeholder="Enter Number"
                            value={mobilenumber}
                            onChange={(e) => {
                              setMobileNumber(e.target.value)
                            }}
                          />
                        </div>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <div className="pl-2">
                          <label for="formGroupExampleInput">
                            Alternate Phone Number
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="formGroupExampleInput"
                            placeholder="Enter Number"
                            value={alternatemobilenumber}
                            onChange={(e) => {
                              setAlternatemobilenumber(e.target.value)
                            }}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                <Grid item md={6} xs={12}>
                  <div className="p-4" style={{ cursor: "pointer" }}>
                    <h6 onClick={() => setopendialogbox(!opendialogbox)}>
                      Parcel Type<i class="fa fa-chevron-up"></i>
                    </h6>
                    <Expand open={opendialogbox}>
                      <Card className=" mb-2 Card_shadow p-3">
                        <div className="mt-3">
                          <Grid className="Component_main_grid">
                            <Grid item md={12} xs={12}>
                              <div className="pb-3">
                                <label for="formGroupExampleInput">
                                  Parcel Type{" "}
                                </label>
                                <select class="form-control">
                                  <option>Default select</option>
                                  <option>B2C 20kg Below</option>
                                  <option>B2B 20kg Above</option>
                                </select>
                              </div>
                            </Grid>
                            <Grid item md={12} xs={12}>
                              <div className="pl-2">
                                <label for="formGroupExampleInput">
                                  Invoice Upload
                                </label>
                                <input
                                  type="file"
                                  class="form-control"
                                  id="formGroupExampleInput"
                                  placeholder="Enter Number"
                                />
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      </Card>
                    </Expand>
                  </div>
                </Grid>
              </Grid>

              {/* ///package information */}
              <div className="mt-3">
                <div className="package_info p-3">
                  <h5>Package information</h5>
                </div>

                <Grid className="Component_main_grid">
                  <Grid item md={4} xs={12}>
                    <div className="p-3">
                      <div>
                        <div>
                          <label for="formGroupExampleInput">Item Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput"
                            placeholder="Enter Item Name"
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <div className="p-3">
                      <div>
                        <div>
                          <label for="formGroupExampleInput">
                            SKU (Option)
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput"
                            placeholder="Enter SKU Name"
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <div className="p-3">
                      <div>
                        <div>
                          <label for="formGroupExampleInput">Quantity</label>
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput"
                            placeholder="0"
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid className="Component_main_grid">
                  <Grid item md={4} xs={12}>
                    <div className="p-3">
                      <div>
                        <div>
                          <label for="formGroupExampleInput">
                            Weight (Kg) (Option)
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput"
                            placeholder="0"
                            value={totalweight}
                            onChange={(e) => {
                              setTotalweight(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <div className="p-3">
                      <div>
                        <div>
                          <label for="formGroupExampleInput">
                            Value (Option)
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput"
                            placeholder="0.00"
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <div className="pricing_btn text-right mt-5 mb-3 mr-4">
                      <button type="button" class="pricing_button">
                        <i
                          class="fa fa-plus-square pr-2"
                          style={{ fontSize: "20px" }}
                        ></i>
                        Add Item
                      </button>
                    </div>
                  </Grid>
                </Grid>
              </div>

              {/* Packages Information */}
              <div className="mt-3">
                <div className="package_info p-3">
                  <h5>Package Dimension</h5>
                </div>

                <Grid className="Component_main_grid">
                  <Grid item md={4} xs={12}>
                    <div className="p-3">
                      <div>
                        <div>
                          <label for="formGroupExampleInput">Length(CM)</label>
                          <input
                            type="number"
                            class="form-control"
                            id="formGroupExampleInput"
                            placeholder="Enter Length"
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={4} xs={12}>
                  <div className="p-3">
                      <div>
                        <div>
                          <label for="formGroupExampleInput">Width(CM)</label>
                          <input
                            type="number"
                            class="form-control"
                            id="formGroupExampleInput"
                            placeholder="Enter width"
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={4} xs={12}>
                  <div className="p-3">
                      <div>
                        <div>
                          <label for="formGroupExampleInput">Height(CM)</label>
                          <input
                            type="number"
                            class="form-control"
                         
                            placeholder="Enter Height"
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid className="Component_main_grid">
                  <Grid item md={4} xs={12}>
                    <div className="p-3">
                      <div>
                        <div>
                          <label for="formGroupExampleInput">
                            Weight (Kg) 
                          </label>
                          <input
                            type="number"
                            class="form-control"
                          
                            placeholder="Enter weight"
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={4} xs={12}>
                  
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <div className="pricing_btn text-right mt-5 mb-3 mr-4">
                      <button type="button" class="pricing_button"   onClick={addOrder}>
                    
                        Create Order
                      </button>
                    </div>
                  </Grid>
                  {/* <button type="button" class="button"
                 
                  >
                    <i
                      class="fa  pr-2"
                      style={{ fontSize: "20px" }}
                    ></i>
                    Place Order
                  </button> */}
                </Grid>

              </div>
            </Card>
          </div>
        </div>
      </div>
      <Loder loading={isloading} />
    </>
  );
};

export default HOC(NewOrder);
