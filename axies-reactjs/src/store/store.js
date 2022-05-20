import { action, computed, makeObservable, observable } from "mobx"
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'


class Store {
  signer = null

  constructor () {
    makeObservable(this, {
      signer: observable,
      connect: action
    })
  }

  async connect () {
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

    this.signer = signer
  }

  async getCurrentAddress () {
    if (this.signer) {
      return await this.signer.getAddress()
    } else {
      return null
    }
  }
}

const store = new Store()

export default store