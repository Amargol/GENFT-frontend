import {react} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {People, EmojiKissFill} from 'react-bootstrap-icons'
import { useState } from 'react';
import { useEffect } from 'react';

const CapturePreview = (props) => {

    const [seed, setSeed] = useState("Qmd286K6pohQcTKYqnS1YhWrCiS4gz7Xi34sdwMe9USZ7u")
    const [imageCID, setImageCID] = useState("")

    async function toIPFS (e) {
        e.preventDefault()

        const formData = new FormData();
        formData.append('file', e.target.files[0]);

        console.log("dat stick: , " , e.target.files[0].name)
    
        //make a post request to localhost:5000/file and pass in a file in the response
        let IPFSresponse = await fetch('http://35.193.145.29:5000/file', {
            method: 'POST',
            contentType: 'multipart/form-data',
            body: formData
        }).then(response => {
            var data = response.json().then(async d => {
                console.log(d)
                props.setCID(d.cid)
                //setLoading(false)
                // split d into an array by space
                // var cidStream = d.cid
                // var cidArr = cidStream.split(' ')
                // var cid = cidArr = cidArr[cidArr.length - 2]
                // setcidGen(cid)
                // setLoading(false)
                
            })
        })
    }


    useEffect( () => {
        toIPFS("")
    })


    const makeHash = () => {
        //make 20 digit random numbers
        var hash = "";
        for (var i = 0; i < 20; i++) {
            hash += Math.floor(Math.random() * 10);
        }
        setSeed(hash);
    }

    return (
        <div>
        <div style={{display: 'flex', justifyContent: 'center'}} className="tf-create-item tf-section">
                <div>
                    <h4 style={{textAlign: 'center', }}>Verify Capture</h4>
                    <h4 style={{textAlign: 'center', fontWeight: 'normal', marginTop: 10}}>The preview should match the generative artwork.</h4>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: 30}}>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <h4 style={{textAlign: 'center', }}>Generative Artwork</h4>
                            </div>
                            
                            <iframe style={{ padding: 10}} src={"http://35.193.145.29:8080/ipfs/" + props.cid + "/?seed=" + seed}  height="500" width="500" title="IPFS Frame"></iframe>
                            <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
                                <Button style={{fontSize: 22, paddingLeft: 20, paddingRight: 20}} onClick={props.next} variant="fill-primary">Open in new tab</Button>
                            </div>
                        </div>
                        
                        
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <h4 style={{textAlign: 'center', }}>Captured Image</h4>
                            </div>
                            
                            <iframe style={{ padding: 10}} src={"http://35.193.145.29:8080/ipfs/" + props.cid + "/?seed=" + seed}  height="500" width="500" title="IPFS Frame"></iframe>
                            <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
                                <Button style={{fontSize: 22, paddingLeft: 20, paddingRight: 20}} onClick={props.next} variant="fill-primary">Open in new tab</Button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button style={{fontSize: 22, paddingLeft: 20, paddingRight: 20}} onClick={props.next} variant="outline-primary">next step</Button>
        </div>
        </div>
    );
}

export default CapturePreview;