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

//const [files, setFiles] = useState([]);

const CreateItem = () => {

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
            

            <div className="tf-create-item tf-section">
                <div className="themesflat-container">
                    <div className="row">
                         {/* <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                             <h4 className="title-create-item">Preview item</h4>
                            <div className="sc-card-product">
                                <div className="card-media">
                                    <Link to="/item-details-01"><img src={img1} alt="Axies" /></Link>
                                    <Link to="/login" className="wishlist-button heart"><span className="number-like"> 100</span></Link>
                                    <div className="featured-countdown">
                                        <span className="slogan"></span>
                                        <Countdown date={Date.now() + 500000000}>
                                            <span>You are good to go!</span>
                                        </Countdown>
                                    </div>
                                </div>
                                <div className="card-title">
                                    <h5><Link to="/item-details-01">"Cyber Doberman #766”</Link></h5>
                                    <div className="tags">bsc</div>
                                </div>
                                <div className="meta-info">
                                    <div className="author">
                                        <div className="avatar">
                                            <img src={avt} alt="Axies" />
                                        </div>
                                        <div className="info">
                                            <span>Owned By</span>
                                            <h6> <Link to="/author-02">Freddie Carpenter</Link></h6>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <span>Current Bid</span>
                                        <h5> 4.89 ETH</h5>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <Link to="/wallet-connect" className="sc-button style bag fl-button pri-3"><span>Place Bid</span></Link>
                                    <Link to="/activity-01" className="view-history reload">View History</Link>
                                </div>
                            </div>
                         </div> */}
                         <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                             <div className="form-create-item">
                                 <form action="#">
                                    <h4 className="title-create-item">Upload file</h4>
                                    <label className="uploadFile">
                                        <span className="filename">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</span>
                                        <input type="file" className="inputfile form-control" name="file" onChange={changeHandler} />
                                    </label>
                                 </form>
                                <div className="flat-tabs tab-create-item">
                                    <h4 className="title-create-item">Select method</h4>
                                    <Tabs>
                                        <TabList>
                                            <Tab><span className="icon-fl-tag"></span>Fixed Price</Tab>
                                            <Tab><span className="icon-fl-clock"></span>Time Auctions</Tab>
                                            <Tab><span className="icon-fl-icon-22"></span>Open For Bids</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <form onSubmit={createGenerator}>
                                              
                                                <h4 className="title-create-item">Name</h4>
                                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Item Name" />

                                                <h4 className="title-create-item">Description</h4>
                                                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="e.g. “This is a good project”"></textarea>

                                                <div className="row-form style-3">
                                                    <div className="inner-row-form">
                                                        <h4 className="title-create-item">Price (eth)</h4>
                                                        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Enter price for one item (ETH)" />
                                                    </div>
                                                    <div className="inner-row-form">
                                                        <h4 className="title-create-item">Royalty Rate (%)</h4>
                                                        <input value={royaltyRate} onChange={(e) => setRoyaltyRate(e.target.value)} type="text" placeholder="5%" />
                                                    </div>
                                                    <div className="inner-row-form">
                                                        <h4 className="title-create-item">Max Supply</h4>
                                                        <input value={maxSupply} onChange={(e) => setMaxSupply(e.target.value)} type="text" placeholder="512" />
                                                    </div>
                                                    {/* This is a multi input */}
                                                    {/* <div className="inner-row-form style-2">
                                                        <div className="seclect-box">
                                                            <div id="item-create" className="dropdown">
                                                                <Link to="#" className="btn-selector nolink">Abstraction</Link>
                                                                <ul >
                                                                    <li><span>Art</span></li>
                                                                    <li><span>Music</span></li>
                                                                    <li><span>Domain Names</span></li>
                                                                    <li><span>Virtual World</span></li>
                                                                    <li><span>Trading Cards</span></li>
                                                                    <li><span>Sports</span></li>
                                                                    <li><span>Utility</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                </div>

                                                <button type="submit" className="submit" style={{"borderRadius": "8px", "marginTop": 25}}>Submit</button>
                                            </form>
                                        </TabPanel>
                                        <TabPanel>
                                            <form action="#">
                                                <h4 className="title-create-item">Minimum bid</h4>
                                                <input type="text" placeholder="enter minimum bid" />
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h5 className="title-create-item">Starting date</h5>
                                                        <input type="date" name="bid_starting_date" id="bid_starting_date" className="form-control" min="1997-01-01" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h4 className="title-create-item">Expiration date</h4>
                                                        <input type="date" name="bid_expiration_date" id="bid_expiration_date" className="form-control" />
                                                    </div>
                                                </div>

                                                <h4 className="title-create-item">Title</h4>
                                                <input type="text" placeholder="Item Name" />

                                                <h4 className="title-create-item">Description</h4>
                                                <textarea placeholder="e.g. “This is very limited item”"></textarea>
                                            </form>
                                        </TabPanel>
                                        <TabPanel>
                                            <form action="#">
                                                <h4 className="title-create-item">Price</h4>
                                                <input type="text" placeholder="Enter price for one item (ETH)" />

                                                <h4 className="title-create-item">Minimum bid</h4>
                                                <input type="text" placeholder="enter minimum bid" />

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h5 className="title-create-item">Starting date</h5>
                                                        <input type="date" name="bid_starting_date" id="bid_starting_date2" className="form-control" min="1997-01-01" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h4 className="title-create-item">Expiration date</h4>
                                                        <input type="date" name="bid_expiration_date" id="bid_expiration_date2" className="form-control" />
                                                    </div>
                                                </div>

                                                <h4 className="title-create-item">Title</h4>
                                                <input type="text" placeholder="Item Name" />

                                                <h4 className="title-create-item">Description</h4>
                                                <textarea placeholder="e.g. “This is very limited item”"></textarea>
                                            </form>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
            
            <PreviewModal
                show={modalShow}
                cid={cidGen}
                onHide={() => setModalShow(false)}
                />


            
        </div>
    );
}

export default CreateItem
