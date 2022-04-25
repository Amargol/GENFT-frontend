import {react} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {People, EmojiKissFill} from 'react-bootstrap-icons'

const Authorship = (props) => {
    return (
        <div>
        <div style={{display: 'flex', justifyContent: 'center'}} className="tf-create-item tf-section">
                <div>
                    <h3 style={{textAlign: 'center'}}>Who's authoring the piece?</h3>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <Button style={{padding: 20, minWidth: 200, minHeight: 200, marginTop: 30}} active={true}  variant="outline-primary">
                            <div>
                                <EmojiKissFill style={{fontSize: 30}}/>
                                <br/>
                                <span style={{fontSize: 18}}>You</span>
                            </div>
                        </Button>
                        <Button style={{padding: 20, minWidth: 200, minHeight: 200, marginTop: 30, marginLeft: 30}}  variant="outline-primary">
                            <div>
                                <People style={{fontSize: 30}}/>
                                <br/>
                                <span style={{fontSize: 18}}>Collaboration</span>
                            </div>
                        </Button>
                    </div>
                </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button style={{fontSize: 22, paddingLeft: 20, paddingRight: 20}} onClick={props.next} variant="outline-primary">next step</Button>
        </div>
        </div>
    );
}

export default Authorship;