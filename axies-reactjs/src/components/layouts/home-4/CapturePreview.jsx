import {react} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {People, EmojiKissFill} from 'react-bootstrap-icons'

const CapturePreview = (props) => {
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
                            
                            <iframe style={{ padding: 10}} src={"http://35.232.44.3:8080/ipfs/QmTJL14kceNbrAtmbD5PhBbFPHUJA2XvUZZZCoQdjmDUKN/?seed="}  height="500" width="500" title="IPFS Frame"></iframe>
                            <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
                                <Button style={{fontSize: 22, paddingLeft: 20, paddingRight: 20}} onClick={props.next} variant="fill-primary">Open in new tab</Button>
                            </div>
                        </div>
                        
                        
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <h4 style={{textAlign: 'center', }}>Captured Image</h4>
                            </div>
                            
                            <iframe style={{ padding: 10}} src={"http://35.232.44.3:8080/ipfs/QmTJL14kceNbrAtmbD5PhBbFPHUJA2XvUZZZCoQdjmDUKN/?seed="}  height="500" width="500" title="IPFS Frame"></iframe>
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