import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import CreateItem from '../../../pages/CreateItem';
import Authorship from './Authorship';
import CheckFiles from './CheckFiles';
import IPFSAdd from './IPFSAdd';

//create a component called wizard that is a react step

const Wizard = () => {

    const [step, setStep] = useState(0)

    const data = ["Authorship", "Upload", "Check Files", "s4"]

    return (
        <div className="tf-Create-item tf-section container">
            <div style={{display: 'flex', justifyContent: 'space-between', flexStart: 'start'}}>
                {
                data.map((item,index) => {
                    if (index === step) {
                        return (
                            <div style={{width: 100}}>
                                <h4 className="title-create-item">{item}</h4>
                                <div style={{width: "100%", height: 10, backgroundColor: 'black'}}></div>
                            </div>
                        )
                    } else {
                        return (
                            <div style={{width: 100, opacity: 0.2}}>
                                <h4 className="title-create-item">{item}</h4>
                                <div style={{width: "100%", height: 10, backgroundColor: 'black'}}></div>
                            </div>
                        )
                    }
                    
                })
                }
            </div>
                {
                    data.map((item,index) => {
                    if (index === step && index === 0) {
                        return (
                            <Authorship/>
                        )
                    } else if (index === step && index === 1) {
                        return (
                            <IPFSAdd/>
                        )
                    } else if (index === step && index === 2) {
                        return (
                            <CheckFiles/>
                        )
                    } else {
                        return (
                            <div></div>
                        )
                    }
                    
                })
                }
            <Button style={{fontSize: 22, paddingLeft: 20, paddingRight: 20}} onClick={() => setStep(step+1)}  variant="outline-primary">next step</Button>
        </div>
    );
}

export default Wizard;