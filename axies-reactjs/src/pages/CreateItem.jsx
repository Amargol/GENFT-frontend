import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img1 from '../assets/images/box-item/image-box-6.jpg'
import avt from '../assets/images/avatar/avt-9.jpg'

import Marketplace from '../abi/Marketplace.json'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'

const CreateItem = () => {
    async function createGenerator (e) {
      e.preventDefault()

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
      const contract = new ethers.Contract("0x8FAd4aA9B8Fc933F2A234481904437396db3cB5a", Marketplace, signer)

      await contract.mintGT("MyName", "MyBaseUri", 1, 1, 1)
    }

    // async function createGeneratorEthers (e) {
    //   e.preventDefault()


    //   console.log("hi")
    //   // A Web3Provider wraps a standard Web3 provider, which is
    //   // what MetaMask injects as window.ethereum into each page
    //   const provider = new ethers.providers.Web3Provider(window.ethereum)
    //   console.log("hi")

    //   // MetaMask requires requesting permission to connect users accounts
    //   await provider.send("eth_requestAccounts", []);
    //   console.log("hi")

    //   // The MetaMask plugin also allows signing transactions to
    //   // send ether and pay to change state within the blockchain.
    //   // For this, you need the account signer...
    //   const signer = provider.getSigner()
    //   console.log("hi")
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
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li>Create Item</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <div className="tf-create-item tf-section">
                <div className="themesflat-container">
                    <div className="row">
                         <div className="col-xl-3 col-lg-6 col-md-6 col-12">
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
                         </div>
                         <div className="col-xl-9 col-lg-6 col-md-12 col-12">
                             <div className="form-create-item">
                                 <form action="#">
                                    <h4 className="title-create-item">Upload file</h4>
                                    <label className="uploadFile">
                                        <span className="filename">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</span>
                                        <input type="file" className="inputfile form-control" name="file" />
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
                                                <input type="text" placeholder="Item Name" />

                                                <h4 className="title-create-item">Description</h4>
                                                <textarea placeholder="e.g. “This is very limited item”"></textarea>

                                                <div className="row-form style-3">
                                                    <div className="inner-row-form">
                                                        <h4 className="title-create-item">Price</h4>
                                                        <input type="text" placeholder="Enter price for one item (ETH)" />
                                                    </div>
                                                    <div className="inner-row-form">
                                                        <h4 className="title-create-item">Royalty Rate (%)</h4>
                                                        <input type="text" placeholder="5%" />
                                                    </div>
                                                    <div className="inner-row-form">
                                                        <h4 className="title-create-item">Max Supply</h4>
                                                        <input type="text" placeholder="512" />
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
            <Footer />
        </div>
    );
}

export default CreateItem;
