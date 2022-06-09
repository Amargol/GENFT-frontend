import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import liveAuctionData from '../assets/fake-data/data-live-auction';
import LiveAuction from '../components/layouts/LiveAuction';
import img1 from '../assets/images/avatar/avt-3.jpg'
import img2 from '../assets/images/avatar/avt-11.jpg'
import img3 from '../assets/images/avatar/avt-1.jpg'
import img4 from '../assets/images/avatar/avt-5.jpg'
import img5 from '../assets/images/avatar/avt-7.jpg'
import img6 from '../assets/images/avatar/avt-8.jpg'
import img7 from '../assets/images/avatar/avt-2.jpg'
import imgdetail1 from '../assets/images/box-item/images-item-details.jpg'
import { ethers, BigNumber } from 'ethers'
import Web3Modal from 'web3modal'

import IterationList from '../components/layouts/home-4/IterationList';
import GenerativeToken from '../abi/GenerativeToken.json'
import Marketplace from '../abi/Marketplace.json'
import axios from 'axios';

// 0x0A87E5Aa5A1e33Fb29b4AdcC133ca5B6ca4B919C

const MintToken = () => {
    const {tokenAddress} = useParams()
    const navigate = useNavigate()

    let iframeWidth = window.innerWidth < 600 ? 400 : 690

    const [details, setDetails] = useState({
      tokenAddress: "0xc2C36fCcB3ec68C6a376377433C43d39418D1890",
      imgUri: "https://picsum.photos/500/500",
      baseSiteURI: "https://picsum.photos/1000/1000",
      name: "this is the name",
      description: "this is the description",
      price: BigNumber.from("1"),
      maxSupply: BigNumber.from("20"),
      curSupply: BigNumber.from("3")
    })
    
    const [gts, setGts] = useState(
      [
        // {
        //   "metadata": {
        //     "attributes": [
        //       {
        //         "trait_type": "Base", 
        //         "value": "Starfish"
        //       }, 
        //       {
        //         "trait_type": "Eyes", 
        //         "value": "Big"
        //       }, 
        //       {
        //         "trait_type": "Mouth", 
        //         "value": "Surprised"
        //       }, 
        //       {
        //         "trait_type": "Level", 
        //         "value": 5
        //       }, 
        //       {
        //         "trait_type": "Stamina", 
        //         "value": 1.4
        //       }, 
        //       {
        //         "trait_type": "Personality", 
        //         "value": "Sad"
        //       }, 
        //       {
        //         "display_type": "boost_number", 
        //         "trait_type": "Aqua Power", 
        //         "value": 40
        //       }, 
        //       {
        //         "display_type": "boost_percentage", 
        //         "trait_type": "Stamina Increase", 
        //         "value": 10
        //       }, 
        //       {
        //         "display_type": "number", 
        //         "trait_type": "Generation", 
        //         "value": 2
        //       }
        //     ], 
        //     "description": "MYDESCRIPTION", 
        //     "external_url": "http://35.193.145.29:8080/ipfs/QmR1dDnSXz98vYXf4eL7kiR5qUEWCjJ3F96ts1Y7cfaqFH/?seed=44470282801578348832179893024236370200726324621251949271272486906730161538163", 
        //     "image": "https://gateway.fxhash2.xyz/ipfs/QmUMfurjHWuFZ5zCBMpqd54dtCDrQ73nL2vr1Fz5anJ8ih/?fxhash=oouAU63vbKrixoY6fVFXBG5T1mpFxkx7yZpvucHgE1iY4Di77Zd", 
        //     "name": "MYNAME"
        //   }, 
        //   "owner": "0x6018039B4D08274C5A546D6f0C5AFe1294bda0DF", 
        //   "tokenID": 1, 
        //   "tokenURI": "http://35.193.145.29:8080/getMetaData?tokenAddress=0x0a87e5aa5a1e33fb29b4adcc133ca5b6ca4b919c&seed=44470282801578348832179893024236370200726324621251949271272486906730161538163"
        // }, 
        // {
        //   "metadata": {
        //     "attributes": [
        //       {
        //         "trait_type": "Base", 
        //         "value": "Starfish"
        //       }, 
        //       {
        //         "trait_type": "Eyes", 
        //         "value": "Big"
        //       }, 
        //       {
        //         "trait_type": "Mouth", 
        //         "value": "Surprised"
        //       }, 
        //       {
        //         "trait_type": "Level", 
        //         "value": 5
        //       }, 
        //       {
        //         "trait_type": "Stamina", 
        //         "value": 1.4
        //       }, 
        //       {
        //         "trait_type": "Personality", 
        //         "value": "Sad"
        //       }, 
        //       {
        //         "display_type": "boost_number", 
        //         "trait_type": "Aqua Power", 
        //         "value": 40
        //       }, 
        //       {
        //         "display_type": "boost_percentage", 
        //         "trait_type": "Stamina Increase", 
        //         "value": 10
        //       }, 
        //       {
        //         "display_type": "number", 
        //         "trait_type": "Generation", 
        //         "value": 2
        //       }
        //     ], 
        //     "description": "MYDESCRIPTION", 
        //     "external_url": "http://35.193.145.29:8080/ipfs/QmR1dDnSXz98vYXf4eL7kiR5qUEWCjJ3F96ts1Y7cfaqFH/?seed=1549774233326679714722068223303179428761130751150441233103473846208146457050", 
        //     "image": "https://gateway.fxhash2.xyz/ipfs/QmUMfurjHWuFZ5zCBMpqd54dtCDrQ73nL2vr1Fz5anJ8ih/?fxhash=ooLjChswzirThg46abzQVkGiBoJck2vjPbdw3Za8XNeSuLBVnUx", 
        //     "name": "MYNAME"
        //   }, 
        //   "owner": "0x6018039B4D08274C5A546D6f0C5AFe1294bda0DF", 
        //   "tokenID": 2, 
        //   "tokenURI": "http://35.193.145.29:8080/getMetaData?tokenAddress=0x0a87e5aa5a1e33fb29b4adcc133ca5b6ca4b919c&seed=1549774233326679714722068223303179428761130751150441233103473846208146457050"
        // },
        // {
        //   "metadata": {
        //     "attributes": [
        //       {
        //         "trait_type": "Base", 
        //         "value": "Starfish"
        //       }, 
        //       {
        //         "trait_type": "Eyes", 
        //         "value": "Big"
        //       }, 
        //       {
        //         "trait_type": "Mouth", 
        //         "value": "Surprised"
        //       }, 
        //       {
        //         "trait_type": "Level", 
        //         "value": 5
        //       }, 
        //       {
        //         "trait_type": "Stamina", 
        //         "value": 1.4
        //       }, 
        //       {
        //         "trait_type": "Personality", 
        //         "value": "Sad"
        //       }, 
        //       {
        //         "display_type": "boost_number", 
        //         "trait_type": "Aqua Power", 
        //         "value": 40
        //       }, 
        //       {
        //         "display_type": "boost_percentage", 
        //         "trait_type": "Stamina Increase", 
        //         "value": 10
        //       }, 
        //       {
        //         "display_type": "number", 
        //         "trait_type": "Generation", 
        //         "value": 2
        //       }
        //     ], 
        //     "description": "MYDESCRIPTION", 
        //     "external_url": "http://35.193.145.29:8080/ipfs/QmR1dDnSXz98vYXf4eL7kiR5qUEWCjJ3F96ts1Y7cfaqFH/?seed=1549774233326679714722068223303179428761130751150441233103473846208146457050", 
        //     "image": "https://gateway.fxhash2.xyz/ipfs/QmUMfurjHWuFZ5zCBMpqd54dtCDrQ73nL2vr1Fz5anJ8ih/?fxhash=oojXiD1rdg2Ss9ZRTxyNioeHDzhvppG7YRc3TsLPkVKYgTfFDYh", 
        //     "name": "MYNAME"
        //   }, 
        //   "owner": "0x6018039B4D08274C5A546D6f0C5AFe1294bda0DF", 
        //   "tokenID": 2, 
        //   "tokenURI": "http://35.193.145.29:8080/getMetaData?tokenAddress=0x0a87e5aa5a1e33fb29b4adcc133ca5b6ca4b919c&seed=1549774233326679714722068223303179428761130751150441233103473846208146457050"
        // }
      ]
    )

    const tokenContract = useRef(null);
    const marketplaceContract = useRef(null);
    
    console.log(tokenAddress)

    const [dataHistory] = useState(
        [
            {
                img: img1,
                name:"Mason Woodward",
                time: "8 hours ago",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
            {
                img: img2,
                name:"Mason Woodward",
                time: "at 06/10/2021, 3:20 AM",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
            {
                img: img3,
                name:"Mason Woodward",
                time: "8 hours ago",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
            {
                img: img4,
                name:"Mason Woodward",
                time: "8 hours ago",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
            {
                img: img5,
                name:"Mason Woodward",
                time: "8 hours ago",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
            {
                img: img6,
                name:"Mason Woodward",
                time: "8 hours ago",
                price: "4.89 ETH",
                priceChange: "$12.246"
            },
        ]
    )

    useEffect(() => {


    }, []);

    async function mint (e) {
      e.preventDefault()

      console.log(await tokenContract.current.getInfo())

      let overrides = {
        // To convert Ether to Wei:
        value: details.price
    
        // Or you can use Wei directly if you have that:
        // value: someBigNumber
        // value: 1234   // Note that using JavaScript numbers requires they are less than Number.MAX_SAFE_INTEGER
        // value: "1234567890"
        // value: "0x1234"
    
        // Or, promises are also supported:
        // value: provider.getBalance(addr)
      };    

      try {
        await tokenContract.current.create(overrides)
      } catch (error) {
        // console.log(error.message)
        alert("error")
      }
    }

    return (
        <div className='item-details'>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Item Details 1</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Explore</Link></li>
                                    <li>Item Details 1</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            {
              details &&
              <div className="tf-section tf-item-details">
                  <div className="themesflat-container">
                      <div className="row">
                          <div className="col-xl-6 col-md-12">
                              <div className="content-left">
                                  <div className="media">
                                      <div style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
                                          <iframe src={"https://gateway.fxhash2.xyz/ipfs/QmUMfurjHWuFZ5zCBMpqd54dtCDrQ73nL2vr1Fz5anJ8ih/?fxhash=oo7N6gqMeM5WoYkRRZEzo9QD5D4FTfF8MyKgBwJ9r9GEMdAD22L"}  height={iframeWidth} width={iframeWidth} title="IPFS Frame"></iframe>
                                      </div>
                                      <img src={imgdetail1} alt="Axies" />
                                  </div>
                              </div>
                          </div>
                          <div className="col-xl-6 col-md-12">
                              <div className="content-right">
                                  <div className="sc-item-details">
                                      <h2 className="style2">{details.name}</h2>
                                      <div className="meta-item">
                                          <div className="left">
                                              <span className="viewed eye">225</span>
                                              <span to="/login" className="liked heart wishlist-button mg-l-8"><span className="number-like">100</span></span>
                                          </div>
                                          <div className="right">
                                              <Link to="#" className="share"></Link>
                                              <Link to="#" className="option"></Link>
                                          </div>
                                      </div>
                                      <div className="client-infor sc-card-product">
                                          <div className="meta-info">
                                              <div className="author">
                                                  <div className="avatar">
                                                      <img src={img6} alt="Axies" />
                                                  </div>
                                                  <div className="info">
                                                      <span>Created By</span>
                                                      <h6> <Link to="/author-02">Ralph Garraway</Link> </h6>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="meta-info">
                                              <div className="author">
                                                  <div className="avatar">
                                                      <img src={"https://storage.googleapis.com/opensea-static/Logomark/Logomark-White.png"} alt="Axies" />
                                                  </div>
                                                  <div className="info">
                                                      <span>View in OpenSea</span>
                                                      <h6> <a target={"_blank"} href="https://testnets.opensea.io/collection/bob-le8sw1ljyp">OpenSea Link</a> </h6>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="meta-item-details style2">
                                          <div className="item meta-price">
                                              <span className="heading">Price</span>
                                              <div className="price">
                                                  <div className="price-box">
                                                      <h5>{details.price.toString()} ETH</h5>
                                                      <span>= ${details.price.mul(2953).toString()}</span>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="item count-down">
                                              <span className="heading style-2"></span>
                                              {/* <Countdown date={Date.now() + 500000000}>
                                                  <span>You are good to go!</span>
                                              </Countdown> */}
                                              <div className="tags">
                                                <h6> <a target={"_blank"} href="https://testnets.opensea.io/collection/bob-le8sw1ljyp">View In Etherscan</a> </h6>
                                              </div>
                                              <span className="heading style-2"></span>
                                          </div>
                                      </div>
                                      <div style={{paddingTop: 10, paddingBottom: 10, marginBottom: 10}}>
                                        <h5 style={{textAlign: "right"}}>
                                          {details.curSupply + "/" + details.maxSupply} Minted
                                        </h5>
                                        <div className={"progress"} style={{height: "10px", marginTop: "12px", backgroundColor: "var(--progress-color)"}} >
                                          <div className="b" role="progressbar" style={{"width": details.curSupply.mul(100).div(details.maxSupply) + "%", "backgroundColor": "var(--primary-color3)"}}></div>
                                        </div>
                                      </div>
                                      <Link to="/wallet-connect" onClick={mint} className="sc-button loadmore style bag fl-button pri-3"><span>Mint Iteration</span></Link>
                                      <p style={{marginBottom: 15}}>{details.description}</p>
                                      <div className="flat-tabs themesflat-tabs">
                                      <Tabs>
                                          <TabList>
                                          <Tab>Bid History</Tab>
                                          <Tab>Info</Tab>
                                          <Tab>Provenance</Tab>
                                          </TabList>

                                          <TabPanel>
                                              <ul className="bid-history-list">
                                              {
                                                  dataHistory.map((item, index) => (
                                                      <li key={index} item={item}>
                                                          <div className="content">
                                                              <div className="client">
                                                                  <div className="sc-author-box style-2">
                                                                      <div className="author-avatar">
                                                                          <Link to="#">
                                                                              <img src={item.img} alt="Axies" className="avatar" />
                                                                          </Link>
                                                                          <div className="badge"></div>
                                                                      </div>
                                                                      <div className="author-infor">
                                                                          <div className="name">
                                                                              <h6><Link to="/author-02">{item.name} </Link></h6> <span> place a bid</span>
                                                                          </div>
                                                                          <span className="time">{item.time}</span>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div className="price">
                                                                  <h5>{item.price}</h5>
                                                                  <span>= {item.priceChange}</span>
                                                              </div>
                                                          </div>
                                                      </li>
                                                  ))
                                              }
                                              </ul>
                                          </TabPanel>
                                          <TabPanel>
                                              <ul className="bid-history-list">
                                                      <li>
                                                          <div className="content">
                                                              <div className="client">
                                                                  <div className="sc-author-box style-2">
                                                                      <div className="author-avatar">
                                                                          <Link to="#">
                                                                              <img src={img1} alt="Axies" className="avatar" />
                                                                          </Link>
                                                                          <div className="badge"></div>
                                                                      </div>
                                                                      <div className="author-infor">
                                                                          <div className="name">
                                                                              <h6> <Link to="/author-02">Mason Woodward </Link></h6> <span> place a bid</span>
                                                                          </div>
                                                                          <span className="time">8 hours ago</span>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </li>
                                              </ul>
                                          </TabPanel>
                                          <TabPanel>
                                              <div className="provenance">
                                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                                      It has survived not only five centuries, but also the leap into electronic typesetting, 
                                                      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                                      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                              </div>
                                          </TabPanel>
                                      </Tabs>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            }
            <IterationList data={gts}/>
            <LiveAuction data={liveAuctionData} />
            <Footer />
        </div>
    );
}

export default MintToken;
