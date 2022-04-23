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
                                <h1 className="heading text-center">Collections</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li>Collections</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <section className="tf-section tf-rank">                
                <GeneratorList data={gts} />
            </section>
            <Footer />
        </div>
    );
}

export default Ranking;
