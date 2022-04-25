import { TextField } from '@mui/material';
import { useState } from 'react';
import {react} from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CheckFiles = (props) => {

    const [cidGen, setcidGen] = useState("Qmd286K6pohQcTKYqnS1YhWrCiS4gz7Xi34sdwMe9USZ7u");


    return (
        <div className="tf-create-item tf-section" style={{width: '100%'}}>
                <div className="">

                    <div style={{display: 'flex', justifyContent: 'space-between', width:'100%'}}>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12" style={{ padding: 0, marginTop: 50}}>
                        <h3 style={{marginBottom: 30}}>Verify</h3>
                        <h4 style={{fontWeight: 'normal'}}>Now, double-check your Generative Token to see if it behaves properly on the IPFS network.</h4>
                        <h4 style={{fontWeight: 'normal'}}>Sometimes, the IPFS network can be <b> slow </b> 🐢. Please be patient.</h4>

                        <h4 style={{marginTop: 20, fontWeight: 'normal'}}>On the next step, you will configure how previews will be generated each time your token is collected.</h4>
                        <h4 style={{fontWeight: 'normal'}}>Use this step to find a hash you want to use for the thumbnail of the project on the platform.</h4>
                        <h3 style={{marginTop: 30}}>Testing</h3>
                        <br/>
                        <h4 style={{fontWeight:'normal'}}>You need to verify that:</h4>
                        <ul>
                            <li><h4 style={{fontWeight:'normal'}}>a same hash will always generate the same output</h4></li>
                            <li><h4 style={{fontWeight:'normal'}}>different hashes generate different outputs.</h4></li>
                        </ul>

                        <InputGroup style={{marginTop: 30, right: 0}}>
                            <FormControl as="textarea" aria-label="With textarea" placeholder="Hash" value={"0xA73B8Bd084dcFd0DDA40Fcf500a82ec71ea7d74D"} />
                        </InputGroup>

                        <TextField></TextField>

                        <div className="row" style={{marginTop: 20}}>
                            <Button style={{fontSize: 22, paddingLeft: 20, paddingRight: 20, marginRight: 30}} active={true} variant="outline-primary">new hash</Button>
                            <Button style={{fontSize: 22, paddingLeft: 20, paddingRight: 20}}  variant="outline-primary" >retry with same hash</Button>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-12" style={{width:'100%', padding: 0, marginTop: 30, display: 'flex', flexDirection: 'row-reverse'}}>
                        <iframe src={"http://35.232.44.3:8080/ipfs/QmQ5nusUzBAeS3YGBnYroimd2jcQRYXvDZMj9c72D83Hxn"}  height="600" width="600" title="IPFS Frame"></iframe>
                    </div>
                   
                    </div>
                   
                </div>

                <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
                    <Button style={{fontSize: 22, paddingLeft: 20, paddingRight: 20}} onClick={props.next} variant="outline-primary">next step</Button>
                </div>
           
        </div>
    );
}

export default CheckFiles;