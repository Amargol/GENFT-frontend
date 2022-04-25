import { useState } from 'react';
import {react} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const IPFSAdd = (props) => {

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [fileName, setFileName] = useState("");
    const [cidGen, setcidGen] = useState("Qmd286K6pohQcTKYqnS1YhWrCiS4gz7Xi34sdwMe9USZ7u");

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
        setFileName(event.target.files[0].name);
		setIsFilePicked(true);
        toIPFS(event);
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
        <div>
        <div  style={{display: 'flex', justifyContent: 'space-around', width: '100%'}} className="tf-create-item tf-section">
                <div>
                    <h3 style={{textAlign: 'left'}}>The .zip file of your project needs to be uploaded on the IPFS network.</h3>
                    
                    <div style={{marginTop: 30, display: 'flex', justifyContent: 'space-around'}}>
                        <form action="#" style={{width:'100%'}}>
                            <label className="uploadFile" style={{display: 'block'}}>
                                <span className="filename">{fileName === "" ? "Upload Zip File. Max 200mb." : fileName}</span>
                                <br/>
                                <input type="file" className="inputfile form-control" name="file" onChange={changeHandler} />
                            </label>
                        </form>
                    </div>
                </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button style={{fontSize: 22, paddingLeft: 20, paddingRight: 20}} onClick={props.next} variant="outline-primary">next step</Button>
        </div>
        </div>
    );
}

export default IPFSAdd;