import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import CreateItem from '../../../pages/CreateItem';
import Authorship from './Authorship';
import CapturePreview from './CapturePreview';
import CheckFiles from './CheckFiles';
import Contract from './Contract';
import Info from './Info';
import IPFSAdd from './IPFSAdd';
import Trigger from './Trigger';

//create a component called wizard that is a react step

const Wizard = () => {

    const [step, setStep] = useState(0)
    const [cid, setCID] = useState("");
    const [filesChecked, setFilesChecked] = useState(false);

    const [time, setTime] = useState('');
    const [target, setTarget] = useState('');
    const [cssSelector, setCssSelector] = useState('');

    const [numEditions, setNumEditions] = useState("")
    const [pricingMethod, setPricingMethod] = useState("Fixed Price")
    const [listingPrice, setListingPrice] = useState("")
    const [primaryRoyalty, setPrimaryRoyalty] = useState("")
    const [secondaryRoyalty, setSecondaryRoyalty] = useState("")
    const [reserve, setReserve] = useState("")

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState([]);
    const [labels, setLabels] = useState([]);





    const dumbCID = (c) => {
        console.log("cid dumb: ", c)
        setCID(c)
        console.log("cid dumb state: ", cid)
    }



    const data = ["Authorship", "Upload", "Check Files", "Trigger", "Preview", "Contract", "Info", "Publish"]

    return (
        <div style={{paddingLeft: 100, paddingRight: 100}} className="tf-Create-item tf-section">
            <div style={{display: 'flex', justifyContent: 'space-between', flexStart: 'start'}}>
                {
                data.map((item,index) => {
                    if (index === step) {
                        return (
                            <div style={{width: 100, textAlign: "center"}}>
                                <h4 className="title-create-item">{item}</h4>
                                <div style={{width: "100%", height: 5, backgroundColor: 'var(--primary-color2)'}}></div>
                            </div>
                        )
                    } else {
                        return (
                            <div style={{width: 100, opacity: 0.2, textAlign: "center"}}>
                                <h4 className="title-create-item">{item}</h4>
                                <div style={{width: "100%", height: 5, backgroundColor: 'var(--primary-color2)'}}></div>
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
                            <IPFSAdd setCID={dumbCID} next={() => setStep(step+1)}/>
                        )
                    } else if (index === step && index === 2) {
                        return (
                            <CheckFiles setFilesChecked={setFilesChecked} cid={cid} next={() => setStep(step+1)}/>
                        )
                    } else if (index === step && index === 3) {
                        return (
                            <Trigger cid={cid} setTime={setTime} setTarget={setTarget} setCssSelector={setCssSelector} next={() => setStep(step+1)}/>
                        )
                    } else if (index === step && index === 4) {
                        return (
                            <CapturePreview cid={cid} time={time} target={target} cssSelector={cssSelector} next={() => setStep(step+1)}/>
                        )
                    } else if (index === step && index === 5) {
                        return (
                            <Contract next={() => setStep(step+1)} setReserve={setReserve} setSecondaryRoyalty={setSecondaryRoyalty} setPrimaryRoyalty={setPrimaryRoyalty} setNumEditions={setNumEditions} setListingPrice={setListingPrice} setPricingMethod={setPricingMethod}  />
                        )
                    } else if (index === step && index === 6) {
                        return (
                            <Info next={() => setStep(step+1)} setName={setName} setDescription={setDescription} setTags={setTags} setLabels={setLabels} />
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