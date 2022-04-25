import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img1 from '../assets/images/box-item/image-box-6.jpg'
import avt from '../assets/images/avatar/avt-9.jpg'

import Marketplace from '../abi/Marketplace.json'
import GenerativeToken from '../abi/GenerativeToken.json'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import CardModal from '../components/layouts/CardModal';
import PreviewModal from '../components/layouts/PreviewModal';
import Wizard from '../components/layouts/home-4/Wizard';

//const [files, setFiles] = useState([]);

const CreateItemPage = () => {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [royaltyRate, setRoyaltyRate] = useState("")
    const [maxSupply, setMaxSupply] = useState("")

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [cidGen, setcidGen] = useState("Qmd286K6pohQcTKYqnS1YhWrCiS4gz7Xi34sdwMe9USZ7u");

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

    async function onSubmit(){
        const formData = new FormData();
        formData.append('file', selectedFile);
    
        //make a post request to localhost:5000/file and pass in a file in the response
        const response = await fetch('http://localhost:5000/file', {
          method: 'POST',
          headers: new Headers({
            'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
            'Access-Control-Allow-Methods' : 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
          }),
          contentType: 'multipart/form-data',
          body: formData
        });
    
        console.log("ipfs folder hash: ", response);
    }


    async function createGenerator (e) {
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

                const providerOptions = {
                  /* See Provider Options Section */
                  binancechainwallet: {
                    package: true
                  }      
                };
                
                const web3Modal = new Web3Modal({
                  network: "mainnet", // optional
                  cacheProvider: true, // optional
                  providerOptions // required
                });
                
                const instance = await web3Modal.connect();
          
                const provider = new ethers.providers.Web3Provider(instance);
                const signer = provider.getSigner();
                const contract = new ethers.Contract("0xA73B8Bd084dcFd0DDA40Fcf500a82ec71ea7d74D", Marketplace, signer)

                const seed = Math.floor(Math.random() * 1000000000).toString();
                
                await contract.mintGT(name, description, "http://35.232.44.3:8080/ipfs/" + cid, seed, parseInt(maxSupply), parseInt(price), parseInt(royaltyRate))

                setModalShow(true)
            })
            console.log()
        }).catch((error) => console.log(error))
        
        
    
        

    //make a post request to localhost:5000/file and pass in a file in the response
    // const response = await fetch('http://localhost:5000/file', {
    //   method: 'POST',
    //   headers: new Headers({
    //     'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
    //     'Access-Control-Allow-Methods' : 'POST',
    //     'Access-Control-Allow-Headers': 'Content-Type',
    //   }),
    //   contentType: 'multipart/form-data',
    //   body: formData
    // });

      
    }



    // async function getName (e) {
    //   e.preventDefault()

    //   console.log("hi")
    //   const providerOptions = {
    //     /* See Provider Options Section */
    //     binancechainwallet: {
    //       package: true
    //     }      
    //   };
      
    //   const web3Modal = new Web3Modal({
    //     network: "mainnet", // optional
    //     cacheProvider: true, // optional
    //     providerOptions // required
    //   });
      
    //   const instance = await web3Modal.connect();
  
    //   const provider = new ethers.providers.Web3Provider(instance);
    //   const signer = provider.getSigner();
    //   const contract = new ethers.Contract("0xF1d5Ac71Cd04fc3142cbA2A2A75AdEE6E3c62937", GenerativeToken, signer)
      
    //   console.log(await contract.name())
    // }

    return (
        <div className='create-item'>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Create Item</h1>
                            </div>
                            {/* <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li>Create Item</li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>                    
            </section>

            <Wizard/>

            <Footer />
            
            
        </div>
    );
}

export default CreateItemPage
