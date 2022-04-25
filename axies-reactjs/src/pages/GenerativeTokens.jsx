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
import Explore from '../components/layouts/explore-04/Explore';
import widgetSidebarData from '../assets/fake-data/data-widget-sidebar'
import { Accordion } from 'react-bootstrap';


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
        const contract = new ethers.Contract("0xeC11bc29bE96dcaB7590D4e90a1d366C0c394c15", Marketplace, signer)

        const data = await contract.getGenerativeTokens()

        let res = []

        for (let i = data.length - 1; i >= 0; i--) {
            res.push(data[i])
        }

        console.log(res)
        setGts(res)
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
                                <h1 className="heading text-center">Explore Marketplace</h1>
                            </div>
                            {/* <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Explore</Link></li>
                                    <li>Explore 4</li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>                    
            </section>
            <section className="tf-explore tf-section">
            <div className="themesflat-container">
                <div className="row">
                    <div className="tf-explore tf-section col-xl-3 col-lg-3 col-md-12">
                        <div id="side-bar" className="side-bar style-3">
                            {
                                widgetSidebarData.map((item,index) => (
                                    
                                    <div className="widget widget-category mgbt-24 boder-bt" key={index}>
                                        <div className="content-wg-category">
                                            <Accordion title={item.title} show={true}>
                                                <form action="#">
                                                    {
                                                        item.content.map((itemm , index) => (
                                                            <div key={index}>
                                                                <label>{itemm.field}
                                                                    <input type="checkbox" defaultChecked={itemm.checked} />
                                                                    <span className="btn-checkbox"></span>
                                                                </label><br/>
                                                            </div>
                                                        ))
                                                    }                                            
                                                </form>
                                            </Accordion>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    
                    <div className="col-xl-9 col-lg-9 col-md-12">
                        <GeneratorList data={gts} />
                    </div>
                    
                </div>
            </div>
        </section>
            
            <Footer />
        </div>
    );
}

export default Ranking;
