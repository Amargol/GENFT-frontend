import { MenuItem, Select, Slider, styled, TextField } from '@mui/material';
import {react, useState} from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Trigger = (props) => {

    const [time, setTime] = useState('');
    const [target, setTarget] = useState('');
    const [cssSelector, setCssSelector] = useState('');

    const handleSliderChange = (event, newValue) => {
        setTime(newValue);  
        console.log(newValue);
      };

    const handleChange = (event) => {
        setTarget(event.target.value);
    };

    const handleTextChange = (event) => {
        setCssSelector(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.setTime(time);
        props.setTarget(target);
        props.setCssSelector(cssSelector);
        props.next()
    }

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
                                value={typeof time === 'number' ? time : 0}
                                onChange={handleSliderChange}
                            />
                            <h3 style={{width: 100, textAlign: 'right'}}>1.0 s</h3>
                        </div>

                        <h3 style={{marginBottom: 10, marginTop: 30}}>Target</h3>
                        <h4 style={{fontWeight: 'normal'}}>What will be the target of the capture module?</h4>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 30}}>
                        <Select
                            value={target}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            style={{width: '100%', fontSize: 18}}
                            >
                            <MenuItem value={'canvas'}>Canvas</MenuItem>
                            <MenuItem value={'ViewPort'}>ViewPort</MenuItem>
                        </Select>
                        </div>

                        <h3 style={{marginTop: 30}}>Canvas CSS Selector</h3>
                        <h4 style={{fontWeight: 'normal', marginTop: 10}}>A CSS Selector that targets the canvas on which your graphics are rendered</h4>
                        <TextField style={{marginTop: 20, width: "100%"}} onChange={handleTextChange}  placeholder="Hash" ></TextField>

                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-12" style={{width:'100%', padding: 0, marginTop: 30, display: 'flex', flexDirection: 'row-reverse'}}>
                        <iframe src={"http://35.193.145.29:8080/ipfs/" + props.cid + "/?seed="}  height="600" width="600" title="IPFS Frame"></iframe>
                    </div>
                   
                    </div>
                   
                </div>

                <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
                    <Button style={{fontSize: 22, paddingLeft: 20, paddingRight: 20}} onClick={handleSubmit} variant="outline-primary">next step</Button>
                </div>
           
        </div>
    );
}

export default Trigger;