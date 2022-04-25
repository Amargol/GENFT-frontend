import { useState } from 'react';
import {react} from 'react';
import { Button } from 'react-bootstrap';
import { People, PeopleFill, PersonHeart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const IPFSAdd = () => {

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [cidGen, setcidGen] = useState("Qmd286K6pohQcTKYqnS1YhWrCiS4gz7Xi34sdwMe9USZ7u");

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

    async function toIPFS (e) {
        e.preventDefault()

        const formData = new FormData();
        formData.append('file', selectedFile);
    
        //make a post request to localhost:5000/file and pass in a file in the response
        let IPFSresponse = await fetch('http://35.232.44.3:5000/file', {
            method: 'POST',
            contentType: 'multipart/form-data',
            body: formData
        }).then(response => {
            var data = response.json().then(async d => {
                console.log(d)
                
                //split d into an array by space
                var cidStream = d.cid
                var cidArr = cidStream.split(' ')
                var cid = cidArr = cidArr[cidArr.length - 2]
                
                setcidGen(cid)
            })
        })
    }


    return (
        <div className="tf-create-item tf-section">
                <div className="themesflat-container">
                    <h3>The .zip file of your project needs to be uploaded on the IPFS network.</h3>
                    <div className="row" style={{width:'100%', marginTop: 30}}>
                        <form action="#" style={{width:'100%'}}>
                            <h4 className="title-create-item">Upload file</h4>
                            <label className="uploadFile">
                                <span className="filename">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</span>
                                <input type="file" className="inputfile form-control" name="file" onChange={changeHandler} />
                            </label>
                        </form>
                    </div>
                </div>
           
        </div>
    );
}

export default IPFSAdd;