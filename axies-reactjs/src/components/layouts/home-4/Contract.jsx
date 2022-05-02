import { MenuItem, Select, Slider, styled, TextField } from '@mui/material';
import { useState } from 'react';
import {react} from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { EmojiKissFill, People } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Contract = (props) => {
    const [seed, setSeed] = useState("Qmd286K6pohQcTKYqnS1YhWrCiS4gz7Xi34sdwMe9USZ7u")

    const [numEditions, setNumEditions] = useState("")
    const [pricingMethod, setPricingMethod] = useState("Fixed Price")
    const [listingPrice, setListingPrice] = useState("")
    const [primaryRoyalty, setPrimaryRoyalty] = useState("")
    const [secondaryRoyalty, setSecondaryRoyalty] = useState("")
    const [reserve, setReserve] = useState("")

    const handleSubmit = (event) => {
        props.setNumEditions(numEditions)
        props.setPricingMethod(pricingMethod)
        props.setListingPrice(listingPrice)
        props.setPrimaryRoyalty(primaryRoyalty)
        props.setSecondaryRoyalty(secondaryRoyalty)
        props.setReserve(reserve)
        props.next()
    };


    const handleChange1 = (event) => {
        setNumEditions(event.target.value);
    };

    const handleChange2 = (event) => {
        setPricingMethod(event.target.value);
    };

    const handleChange3 = (event) => {
        setListingPrice(event.target.value);
    };

    const handleChange4 = (event) => {
        setPrimaryRoyalty(event.target.value);
    };

    const handleChange5 = (event) => {
        setSecondaryRoyalty(event.target.value);
    };

    const handleChange6 = (event) => {
        setReserve(event.target.value);
    };

    const makeHash = () => {
        //make 20 digit random numbers
        var hash = "";
        for (var i = 0; i < 20; i++) {
            hash += Math.floor(Math.random() * 10);
        }
        setSeed(hash);
    }

    return (
        <div className="tf-create-item tf-section" style={{width: '100%'}}>
                <div className="">
                        <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
                            <div>
                                <h3 style={{marginBottom: 10, textAlign: 'center'}}>How will your piece be sold</h3>
                                <h4 style={{fontWeight: 'normal', textAlign: 'center'}}>You will be able to modify these settings after publication, unless otherwise noted on corrosponding fields.</h4>
                            </div>
                            
                        </div>
                        
                        
                    <div style={{display: 'flex', justifyContent: 'space-between', width:'100%'}}>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12" style={{ padding: 0, marginTop: 50}}>

                        <h3 style={{marginBottom: 10}}>Number of editions</h3>
                        <h4 style={{fontWeight: 'normal'}}>How many NFTs can be generated using your token - <b>can only be decreased after publication</b></h4>
                        <TextField style={{marginTop: 20, width: "100%"}} onChange={handleChange1} placeholder="Hash" value={"#"} ></TextField>

                        <h3 style={{marginBottom: 10, marginTop: 50}}>Pricing Method</h3>
                        <h4 style={{fontWeight: 'normal'}}>You will not be able to update the pricing method after publication, only update it's pricing settings</h4>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <Button style={{padding: 20, minWidth: 200, minHeight: 100, marginTop: 30}} active={true}  variant="outline-primary">
                            <div>
                                <EmojiKissFill style={{fontSize: 30}}/>
                                <br/>
                                <span style={{fontSize: 18}}>Fixed Price</span>
                            </div>
                        </Button>
                        <Button style={{padding: 20, minWidth: 200, minHeight: 100, marginTop: 30, marginLeft: 30}}  variant="outline-primary">
                            <div>
                                <People style={{fontSize: 30}}/>
                                <br/>
                                <span style={{fontSize: 18}}>Dutch Auction</span>
                            </div>
                        </Button>
                    </div>

                        <h3 style={{marginTop: 50}}>Listing Price</h3>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
                            <TextField style={{ width: "100%"}} onChange={handleChange3} placeholder="Hash" value={"#"} ></TextField>
                            <h3 style={{width: 100, textAlign: 'right'}}>TEZ</h3>
                        </div>

                        <h3 style={{marginTop: 50}}>Primary Royalties</h3>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
                            <TextField style={{ width: "100%"}} placeholder="Hash" onChange={handleChange4} value={"#"} ></TextField>
                            <h3 style={{width: 100, textAlign: 'right'}}>TEZ</h3>
                        </div>

                        <h3 style={{marginTop: 50}}>Secondary Royalties</h3>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
                            <TextField style={{ width: "100%"}} placeholder="Hash" onChange={handleChange5} value={"#"} ></TextField>
                            <h3 style={{width: 100, textAlign: 'right'}}>TEZ</h3>
                        </div>

                        <h3 style={{marginTop: 50}}>Reserves</h3>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
                            <TextField style={{ width: "100%"}} placeholder="Hash" onChange={handleChange6} value={"#"} ></TextField>
                            <h3 style={{width: 100, textAlign: 'right'}}>TEZ</h3>
                        </div>
                        

                    </div>
                   
                    </div>
                   
                </div>

                <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
                    <Button style={{fontSize: 22, paddingLeft: 20, paddingRight: 20}} onClick={handleSubmit} variant="outline-primary">next step</Button>
                </div>
           
        </div>
    );
}

export default Contract;