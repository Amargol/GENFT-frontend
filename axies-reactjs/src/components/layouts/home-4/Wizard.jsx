import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import CreateItem from '../../../pages/CreateItem';
import Authorship from './Authorship';
import CapturePreview from './CapturePreview';
import CheckFiles from './CheckFiles';
import Contract from './Contract';
import IPFSAdd from './IPFSAdd';
import Trigger from './Trigger';

//create a component called wizard that is a react step

const Wizard = () => {

    const [step, setStep] = useState(0)

    const data = ["Authorship", "Upload", "Check Files", "Trigger", "Capture Preview", "Contract", "Info", "Publish"]

    return (
        <div style={{paddingLeft: 100, paddingRight: 100}} className="tf-Create-item tf-section">
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
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {
                    data.map((item,index) => {
                    if (index === step && index === 0) {
                        return (
                            <Authorship next={() => setStep(step+1)}/>
                        )
                    } else if (index === step && index === 1) {
                        return (
                            <IPFSAdd next={() => setStep(step+1)}/>
                        )
                    } else if (index === step && index === 2) {
                        return (
                            <CheckFiles next={() => setStep(step+1)}/>
                        )
                    } else if (index === step && index === 3) {
                        return (
                            <Trigger next={() => setStep(step+1)}/>
                        )
                    } else if (index === step && index === 4) {
                        return (
                            <CapturePreview next={() => setStep(step+1)}/>
                        )
                    } else if (index === step && index === 5) {
                        return (
                            <Contract next={() => setStep(step+1)}/>
                        )
                    } else {
                        return (
                            <div></div>
                        )
                    }
                    
                })
                }
                </div>
            {/* <Button style={{fontSize: 22, paddingLeft: 20, paddingRight: 20}} onClick={() => setStep(step+1)}  variant="outline-primary">next step</Button> */}
        </div>
    );
}

export default Wizard;