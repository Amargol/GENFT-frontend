import React , { useState , Fragment } from 'react';
import PropTypes from 'prop-types'
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import CardModal from '../CardModal';

const TodayPicks = props => {
    const data = props.data;

    const [visible , setVisible] = useState(8);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    }

    const [modalShow, setModalShow] = useState(false);

    let getPercentage = (curSupply, maxSupply) => {
      return curSupply.mul(100).div(maxSupply)
    }

    return (
        <Fragment>
            <section className="tf-section today-pick">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-live-auctions mg-bt-21">
                                <h2 className="tf-title pad-l-7">
                                    Gallery:
                                </h2>
                                <Link to="/explore-03" className="exp style2">EXPLORE MORE</Link>
                            </div>
                        </div>
                        {
                            data.slice(0,visible).map((item,index) => (
                                <div key={index} className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className={`sc-card-product menu_card style2 ${true ? 'comingsoon' : '' } `}>
                                        {/* <div className="meta-info style">
                                            <div className="author">
                                                <div className="avatar">
                                                    <img src={item.imgUri} alt="Axies" />
                                                </div>
                                                <div className="info">
                                                    <span>Collection</span>
                                                    <h6> <Link to="/author-02">{item.name}</Link> </h6>
                                                </div>
                                            </div>
                                            <div className="menu_card">
                                                <Dropdown>
                                                    <Dropdown.Toggle id="dropdown-basic">
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu style={{ margin: 0 }}>
                                                    <Dropdown.Item href="#">
                                                        Refresh Metadata
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        Share
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        Report
                                                    </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div> */}
                                        <div className="card-media">
                                            {/* <Link to="/item-details-01"><img src={"https://www.dictionary.com/e/wp-content/uploads/2018/05/100_800x800-300x300.png"} alt="Axies" /></Link> */}
                                            <div style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
                                                <iframe src={"http://35.232.44.3:8080/ipfs/QmQ5nusUzBAeS3YGBnYroimd2jcQRYXvDZMj9c72D83Hxn"}  height="300" width="300" title="IPFS Frame"></iframe>
                                            </div>
                                            {/* <Link to="/login" className="wishlist-button heart"><span className="number-like">{"item.wishlist"}</span></Link> */}
                                            {/* <div className="coming-soon">{"item.feature"}</div> */}
                                        </div>
                                        {/* <div className="card-title">
                                            <h5 className="style2"><Link to={"/mintToken/" + item.tokenAddress} >{item.name}</Link></h5>
                                            <div className="tags">{item.curSupply + "/" + item.maxSupply}</div>
                                        </div> */}
                                        {/* <div className={"progress"} style={{height: "10px", marginBottom: "15px", backgroundColor: "var(--progress-color)"}} >
                                          <div className="b" role="progressbar" style={{"width": "25%", "backgroundColor": "var(--primary-color3)"}}></div>
                                        </div> */}
                                        <div className="meta-info">
                                            <div className="author">
                                                <div className="avatar">
                                                  <img src={"https://www.dictionary.com/e/wp-content/uploads/2018/05/100_800x800-300x300.png"} alt="Axies" />
                                                </div>
                                                <div className="info">
                                                    <span>Owned By</span>
                                                    <h6> <Link to="/author-02">{"Shreyas"}</Link> </h6>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <span>Current Bid</span>
                                                <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "end"}}>
                                                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6L8 260.8L160 0l151.9 260.8zM160 383.4L8 290.6L160 512l152-221.4l-152 92.8z"/></svg>
                                                  <h5 style={{marginTop: "0px"}}>{item.price.toString()}</h5>
                                                </div>
                                            </div>
                                        </div>                                        
                                        <div className="card-bottom">
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
            </section>
            <CardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Fragment>
    );
}



TodayPicks.propTypes = {
    data: PropTypes.array.isRequired,
}

export default TodayPicks;
