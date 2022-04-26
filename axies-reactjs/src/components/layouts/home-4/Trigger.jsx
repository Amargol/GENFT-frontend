import { MenuItem, Select, Slider, styled, TextField } from '@mui/material';
import { useState } from 'react';
import {react} from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Trigger = (props) => {

    const [cidGen, setcidGen] = useState("Qmd286K6pohQcTKYqnS1YhWrCiS4gz7Xi34sdwMe9USZ7u");
    const [seed, setSeed] = useState("Qmd286K6pohQcTKYqnS1YhWrCiS4gz7Xi34sdwMe9USZ7u")

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const PrettoSlider = styled(Slider)({
        color: '#52af77',
        height: 8,
        '& .MuiSlider-track': {
          border: 'none',
        },
        '& .MuiSlider-thumb': {
          height: 24,
          width: 24,
          backgroundColor: '#fff',
          border: '2px solid currentColor',
          '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
          },
          '&:before': {
            display: 'none',
          },
        },
        '& .MuiSlider-valueLabel': {
          lineHeight: 1.2,
          fontSize: 12,
          background: 'unset',
          padding: 0,
          width: 32,
          height: 32,
          borderRadius: '50% 50% 50% 0',
          backgroundColor: '#52af77',
          transformOrigin: 'bottom left',
          transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
          '&:before': { display: 'none' },
          '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
          },
          '& > *': {
            transform: 'rotate(45deg)',
          },
        },
      });


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

                    <div style={{display: 'flex', justifyContent: 'space-between', width:'100%'}}>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12" style={{ padding: 0, marginTop: 50}}>

                        <h3 style={{marginBottom: 10}}>Time before capture taken</h3>
                        <h4 style={{fontWeight: 'normal'}}>Remember better safe than sorry</h4>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 30}}>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                aria-label="pretto slider"
                                defaultValue={20}
                            />
                            <h3 style={{width: 100, textAlign: 'right'}}>1.0 s</h3>
                        </div>

                        <h3 style={{marginBottom: 10, marginTop: 30}}>Target</h3>
                        <h4 style={{fontWeight: 'normal'}}>What will be the target of the capture module?</h4>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 30}}>
                        <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            style={{width: '100%', fontSize: 18}}
                            >
                            <MenuItem value={10}>Canvas</MenuItem>
                            <MenuItem value={20}>ViewPort</MenuItem>
                        </Select>
                        </div>

                        <h3 style={{marginTop: 30}}>Canvas CSS Selector</h3>
                        <h4 style={{fontWeight: 'normal', marginTop: 10}}>A CSS Selector that targets the canvas on which your graphics are rendered</h4>
                        <TextField style={{marginTop: 20, width: "100%"}} placeholder="Hash" value={"#"} ></TextField>

                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-12" style={{width:'100%', padding: 0, marginTop: 30, display: 'flex', flexDirection: 'row-reverse'}}>
                        <iframe src={"http://35.232.44.3:8080/ipfs/QmTJL14kceNbrAtmbD5PhBbFPHUJA2XvUZZZCoQdjmDUKN/?seed=" + seed}  height="600" width="600" title="IPFS Frame"></iframe>
                    </div>
                   
                    </div>
                   
                </div>

                <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
                    <Button style={{fontSize: 22, paddingLeft: 20, paddingRight: 20}} onClick={props.next} variant="outline-primary">next step</Button>
                </div>
           
        </div>
    );
}

export default Trigger;