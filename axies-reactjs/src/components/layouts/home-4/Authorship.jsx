import {react} from 'react';
import { Button } from 'react-bootstrap';
import { People, PeopleFill, PersonHeart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Authorship = () => {
    return (
        <div className="tf-create-item tf-section">
                <div className="themesflat-container">
                    <h1>Who's authoring the piece?</h1>
                    <div className="row">
                        <Button style={{padding: 20, minWidth: 200, minHeight: 200, marginTop: 30}} active={true}  variant="outline-primary">
                            <div>
                                <PersonHeart style={{fontSize:30}}/>
                                <br/>
                                <span style={{fontSize: 18}}>You</span>
                            </div>
                        </Button>
                        <Button style={{padding: 20, minWidth: 200, minHeight: 200, marginTop: 30, marginLeft: 30}}  variant="outline-primary">
                            <div>
                                <PeopleFill style={{fontSize:30}}/>
                                <br/>
                                <span style={{fontSize: 18}}>Collaboration</span>
                            </div>
                        </Button>
                    </div>
                </div>
           
        </div>
    );
}

export default Authorship;