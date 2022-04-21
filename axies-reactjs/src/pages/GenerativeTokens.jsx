import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import img1 from '../assets/images/box-item/img3rank.jpg'
import img2 from '../assets/images/box-item/img4rank.jpg'
import img3 from '../assets/images/box-item/img5rank.jpg'
import img4 from '../assets/images/box-item/img6rank.jpg'
import img5 from '../assets/images/box-item/img1rank.jpg'
import img6 from '../assets/images/box-item/img2rank.jpg'
import imga1 from '../assets/images/avatar/author_rank.jpg'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'

import Marketplace from '../abi/Marketplace.json'
import GeneratorList from '../components/layouts/home-4/GeneratorList';
import todayPickData from '../assets/fake-data/data-today-pick';


const Ranking = () => {
    const [data, setData] = useState([])
    const [gts, setGts] = useState([])
    const [visible , setVisible] = useState(6);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    }

    useEffect(() => {
      async function initialize () {

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

        const data = await contract.getGenerativeTokens()

        console.log(data)
        setGts(data)

        // console.log(data.map((data, index) => data.name))
      }
      
      initialize()
    }, []);    

    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Ranking</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li>Ranking</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <section className="tf-section tf-rank">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-ranking">
                                <div className="flex th-title">
                                    <div className="column1">
                                      <h3>Name</h3>
                                    </div>
                                    <div className="column">
                                      <h3>Price</h3>
                                    </div>
                                    <div className="column">
                                      <h3>Current Supply</h3>
                                    </div>
                                    <div className="column">
                                      <h3>Max Supply</h3>
                                    </div>
                                </div>
                                {
                                    data.slice(0,visible).map((item,index) => (
                                        <div key={index} className="fl-item2">
                                            <div className="item flex">
                                                <div className="infor-item flex column1">
                                                    <div className="media">
                                                        <img src={item.imgUri} alt="Axies" />
                                                    </div>
                                                    <div className="content-collection m-auto">
                                                        <h5 className="title"><Link to="/item-detail">{item.name}</Link></h5>
                                                        {/* <div className="author flex">
                                                            <div className="author-avatar">
                                                                <img src={item.imgAuthor} alt="Axies" />
                                                                <div className="badge"><i className="ripple"></i></div>
                                                            </div>
                                                            <div className="content">
                                                                <p>Owned By</p>
                                                                <h6><Link to="/authors-01">{item.nameAuthor}</Link></h6>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>
                                                <div className="column">
                                                    <span>{10}</span>
                                                </div>
                                                <div className="column">
                                                    <span>{10}</span>
                                                </div>
                                                <div className="column">
                                                    <span>{10}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                {
                                    visible < data.length && 
                                    <div className="col-md-12 wrap-inner load-more text-center"> 
                                        <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                
                <GeneratorList data={gts} />
            </section>
            <Footer />
        </div>
    );
}

export default Ranking;
