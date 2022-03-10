import React,{useState} from "react";
import { Grid, Card, TextField } from "@material-ui/core";
import { getBaseUrl } from "../../Components/Utlis";
import MenuItem from "@mui/material/MenuItem";
import Loder from "../Loder/loder";
import axios from "axios";
import Expand from "react-expand-animated";
import { showNotificationMsz } from "../../Components/Utlis/validation";

const CardSection = () => {
 
  const [pickuppincode,setPickupPincode] = useState (" ");
  const [destinationpincode,setDestinationPincode] =useState(" "); 
  const [weight,setWeight] = useState (" ");
  const [length,setLength] = useState (" ");
  const [height,setHeight] = useState (" ");
  const [width,setWidth] = useState (" ");

  const [isloading, setisloading] = useState(false);
  const [opendialogbox, setopendialogbox] = useState(false);

  const AddPackageOrder = () => {

    setopendialogbox(true)

    setisloading(true);
    let url = getBaseUrl() + "packageorder"
    

    let temp = {pickuppincode,destinationpincode,weight,length,height,width }

    axios
    .post(url , temp)
    .then(
      (res) => {
        console.log("response Data :::", res)
        setisloading(false)
        showNotificationMsz(res.data.msg, "success");
      },
      (error) => {
        console.log("response Data :::", error)
        showNotificationMsz(error, "success");
      }
    )
    .catch((e) => {
      console.log("Response Data:::", e);
      showNotificationMsz(e, "success");
    })  
  }

  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
      

   

  };

  return (
    <>
      {/* card section */}
      <section className="category_section pt-5 pb-5">
        <div className="container">
          <Grid className="Component_main_grid">
            <h4 className="text-info mb-4">Enter the details to calculate your shipment Rate</h4>
            <Grid item md={7}>
              <Card className="Card_shadow p-4">
                <div>
                  <Grid className="Component_main_grid">
                    <Grid item md={4}>
                      <TextField
                        required
                        id="outlined-required"
                        label="PICKUP PINCODE"
                        value={pickuppincode}
                        onChange={(e)=>{
                        setPickupPincode(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item md={4}>
                      <TextField
                        required
                        id="outlined-required"
                        label="DESTINATION PINCODE"
                        value={destinationpincode}
                        onChange={(e)=>{
                          setDestinationPincode(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item md={4}>
                      <TextField
                        required
                        id="outlined-required"
                        label="WEIGHT(In Kg)"
                        value={weight}
                        onChange={(e)=>{
                        setWeight(e.target.value)
                     
                        }}
                      />
                    </Grid>
                  </Grid>
                </div>
                <h6 className="mt-3 mb-3">Add Dimensions(cm)</h6>
                <div>
                  <Grid className="Component_main_grid">
                    {/* <Grid item md={3}>
                      <TextField
                        id="outlined-select-currency"
                        select
                        label="CM"
                        value={currency}
                        onChange={handleChange}
                        helperText="Please select item cm"
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid> */}
                    <Grid item md={3}>
                      <TextField
                        required
                        type="number"
                        id="outlined-required"
                        label="LENGTH"
                        value={length}
                        onChange={(e)=>{
                          setLength(e.target.value)
                        }}
                        
                      />
                    </Grid>
                    <Grid item md={3}>
                      <TextField
                        required
                        type="number"
                        id="outlined-required"
                        label="HEIGHT"
                        value={height}
                        onChange={(e)=>{
                          setHeight(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item md={3}>
                      <TextField
                        required
                        type="number"
                        id="outlined-required"
                        label="WIDTH"
                        value={width}
                        onChange={(e)=>{
                          setWidth(e.target.value);
                        }}
                      />
                    </Grid>
                  </Grid>
                </div>
              </Card>
            </Grid>



            <Grid item md={5} className="pl-3">
            <Expand open={opendialogbox}>
<Card className="Card_shadow p-4 ">
  <div>
    <Grid className="Component_main_grid">
     <p className="text-info  " style={{fontSize:"20px"}}>Shipment rate of your order</p>
     <p>Result is based on your Cheapest Rule </p>
     <p>Delivery Charges - </p>
     <h4>₹{weight * 37}</h4>
     
    
    </Grid>
  </div>
</Card>
</Expand>
</Grid>



          </Grid>




          <div className="pricing_btn text-center mt-3">
            <button type="button" class="pricing_button"
            onClick={AddPackageOrder}
            >
              PRICING
            </button>
            {/* 3 card secton  */}

            <div className="mt-5 mb-5">
              <Grid className="Component_main_grid">
                <Grid item md={4}>
                  <div className="p-2">
                    <Card className="Card_shadow_white p-5">
                      <div className="box">
                        <h3 className="text-center mb-3">24/7 ON WORK</h3>
                        <p className="" style={{ fontSize: "15px" }}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book
                        </p>
                      </div>
                    </Card>
                  </div>
                </Grid>
                <Grid item md={4} className="Card_shadow_color">
                  <div className="p-2">
                    <Card className="Card_shadow_white p-5">
                      <div className="box">
                        <h3 className="text-center mb-3">24/7 ON WORK</h3>
                        <p className="" style={{ fontSize: "15px" }}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book
                        </p>
                      </div>
                    </Card>
                  </div>
                </Grid>
                <Grid item md={4}>
                  <div className="p-2">
                    <Card className="Card_shadow_white p-5">
                      <div className="box">
                        <h3 className="text-center mb-3">24/7 ON WORK</h3>
                        <p className="" style={{ fontSize: "15px" }}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book
                        </p>
                      </div>
                    </Card>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </section>
      <Loder loading={isloading} />
    </>
  );
};

export default CardSection;
