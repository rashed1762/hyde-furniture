import React from 'react';
import img2 from '../assests/banner (2).jpg'
import img3 from '../assests/banner2.jpg'
import '../components/CssFile/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import Catagorycomp from '../components/Category/Catagorycomp';

const Home = () => {
    return (
            <div >
            <div className='banner container-fluid'>
                <div className="row ">
                    <div className="col-md-6 bannerinfo">
                            <h1>Furniture fit for the
                                modern urban life.
                                    Start shopping.</h1>
                                    <p>Hady is a fully packed practical
                                         tool of premium built and design</p>

                                         <button className='btn-2'>Shop Now</button>
                    </div>
                    <div className="col-md-6 ">
                        <img className='bannerimg' src={img2} alt="" />
                    </div>
                </div>
            </div>

            <section>
                <div className="banner2 container  ">
                    <div className='banner21'>
                    <img className='banner2img' src={img3} alt="" />
                    </div>
                   
                    <div className='banner2info'>
                        <h1>Reasons to shop with us</h1>
                        <p>Dictum varius duis at consectetur lorem donec. Nisi lacus sed viverra
                            tellus in hac. Fusce id velit ut tortor pretium viverra.</p>
                    </div>
                </div>
            </section>
                <br />
                <br />
                <br />
            <section className='container container-fluid banner3 '>
                <div className="row">
                    <div className="col-md-3">
                        <div className='text-start banner3info'>
                        <FontAwesomeIcon className='icon' icon={faClock} />
                        <br />
                        <br />
                         <h4>30 Days returns</h4>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nobis.</p>
                        </div>
                  
                    </div>
                    <div className="col-md-3">
                    <div className='text-start  banner3info'>
                        <FontAwesomeIcon className='icon' icon={faClock} />
                        <br />
                        <br />
                         <h4>30 Days returns</h4>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nobis.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className='text-start  banner3info'>
                        <FontAwesomeIcon className='icon' icon={faClock} />
                        <br />
                        <br />
                         <h4>30 Days returns</h4>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nobis.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className='text-start  banner3info'>
                        <FontAwesomeIcon className='icon' icon={faClock} />
                        <br />
                        <br />
                         <h4>30 Days returns</h4>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nobis.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <Catagorycomp></Catagorycomp>
            </section>
            
            </div>
    );
};

export default Home;