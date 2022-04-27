import { MenuItem, Select, Slider, styled, TextField } from '@mui/material';
import { useState } from 'react';
import {react} from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { EmojiKissFill, People } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Info = (props) => {

    const [cidGen, setcidGen] = useState("Qmd286K6pohQcTKYqnS1YhWrCiS4gz7Xi34sdwMe9USZ7u");
    const [seed, setSeed] = useState("Qmd286K6pohQcTKYqnS1YhWrCiS4gz7Xi34sdwMe9USZ7u")

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
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
                                <h3 style={{marginBottom: 10, textAlign: 'center'}}>Fill out collection Info</h3>
                                <h4 style={{fontWeight: 'normal', textAlign: 'center'}}>You will be able to modify these settings after publication, unless otherwise noted on corrosponding fields.</h4>
                            </div>
                            
                        </div>
                        
                        
                    <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                        <div className="" style={{ padding: 0, marginTop: 50,  width: 900,}}>
                            <h3 style={{marginBottom: 10}}>Name of Piece</h3>
                            <h4 style={{fontWeight: 'normal'}}>" #N" will be added to minted pieces</h4>
                            <TextField style={{marginTop: 20, width: "100%"}} placeholder="Collection Name" ></TextField>
                        </div>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                        <div className="" style={{ padding: 0, marginTop: 50,  width: 900,}}>
                            <h3 style={{marginBottom: 10}}>Descripton of Collection</h3>
                            <h4 style={{fontWeight: 'normal'}}>Give your collection a cool description nerd</h4>
                            <TextField style={{marginTop: 20, width: "100%"}} placeholder="Collection Description" ></TextField>
                        </div>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                        <div className="" style={{ padding: 0, marginTop: 50,  width: 900,}}>
                            <h3 style={{marginBottom: 10}}>Tags</h3>
                            <h4 style={{fontWeight: 'normal'}}>Comma-seperated values (used to enhance searcj results)</h4>
                            <TextField style={{marginTop: 20, width: "100%"}} placeholder="Collection Tags" ></TextField>
                        </div>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                        <div className="" style={{ padding: 0, marginTop: 50,  width: 900,}}>
                            <h3 style={{marginBottom: 10}}>Labels</h3>
                            <h4 style={{fontWeight: 'normal'}}>Comma-seperated values (used to enhance searcj results)</h4>
                            <TextField style={{marginTop: 20, width: "100%"}} placeholder="Collection Labels" ></TextField>
                        </div>
                    </div>

                   
                </div>

                <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
                    <Button style={{fontSize: 22, paddingLeft: 20, paddingRight: 20}} onClick={props.next} variant="outline-primary">next step</Button>
                </div>
           
        </div>
    );
}

export default Info;