import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faBoltLightning, faBuilding,  faChartLine, faCheck,  faCircleHalfStroke,  faDiagramProject, faGauge, faGear, faHillAvalanche, faLandMineOn, faShoppingBag, faSign, faUser, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import '../components/CssFile/Service.css';
import Card from 'react-bootstrap/Card';
import img2 from '../assests/SERVICE1.jpg';
import img3 from '../assests/SERVICE2.jpg';
import img4 from '../assests/SERVIE3.jpg';
import img5 from '../assests/devimg.jpg';
import CardGroup from 'react-bootstrap/CardGroup';
import Footercomp from '../components/footer/Footercomp';

const Service = () => {
    useEffect(()=>{
        Aos.init({});
      },[]);
    return (
        <div>
            <div className='service'>
           
                <h1 className='serviceh1'>Services</h1>
            </div>

            <div className='servicecat container'>
            <CardGroup >
      <Card className='group'>
        <Card.Img variant="top" src={img2} />
        <Card.Body className='crdbody' >
          <Card.Title>Digital Solution</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptate perspiciatis sapiente vel. Nobis, distinctio?
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className='group'>
        <Card.Img variant="top" src={img3} />
        <Card.Body className='crdbody'>
          <Card.Title>Testin & Support</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam ipsam dicta totam vel amet.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className='group'>
        <Card.Img variant="top" src={img4} />
        <Card.Body className='crdbody'>
          <Card.Title>Work Automation</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laborum quisquam, distinctio ratione nobis delectus?
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
            </div>



            <section className='d-flex container iconpart2 '> 
                <div>
                <FontAwesomeIcon className='sicon' icon={faBuilding} />
                <h5>Build Anything</h5>
               
                </div>
                <div>
                <FontAwesomeIcon className='sicon' icon={faLandMineOn} />
                <h5>Fast Leading</h5>   
                 </div>
                <div>
                <FontAwesomeIcon className='sicon' icon={faGauge} />
                <h5>Premium Design</h5>
                </div>
                <div>
                <FontAwesomeIcon className='sicon' icon={faDiagramProject} />
                <h4>Block Builder</h4>
                </div>
                <div>
                <FontAwesomeIcon className='sicon' icon={faHillAvalanche} />
                <h5>Enhanced Speed</h5>
                </div>
                <div>
                <FontAwesomeIcon className='sicon' icon={faCircleHalfStroke} />
                <h5>Lifetime Update</h5>   
                 </div>
            
            </section>
           
           <section className='development'>
                <div className="row">
                    
                    <div className="col-md-4">
                        <div className='ms-5 mt-5'>
                        <h2>Development</h2>
                        <div></div>
                        <p>Aliquam malesuada bibendum arcu vitae elementum curabitur vitae ven. Pellentesque pulvinar elementum habitant morbi tristique.</p>
                        <div className='d-flex container'>
                        <FontAwesomeIcon className='devicon' icon={faCheck} />
                        <p>Give your website a name</p>
                        </div>
                        <div className='d-flex container'>
                        <FontAwesomeIcon className='devicon' icon={faCheck} />
                        <p>Add your unique content</p>
                        </div>
                        <div className='d-flex container'>
                        <FontAwesomeIcon className='devicon' icon={faCheck} />
                        <p>Add your stunning images</p>
                        </div>
{/* ..................................................................................................... 

development part

*/}
                        <div className=' devpart'>
                        <div className='d-flex dev'>
                        <FontAwesomeIcon className='devicon' icon={faGear} />
                        <h6>Development</h6>
                        </div>
                        <div className='d-flex dev'>
                        <FontAwesomeIcon className='devicon' icon={faBoltLightning} />
                        <h6>Performance</h6>
                        </div>
                        <div className='d-flex dev'>
                        <FontAwesomeIcon className='devicon' icon={faChartLine} />
                        <h6>Analystics</h6>
                        </div>
                        </div>
                        </div>

                    
                        
                       
                    </div>
                    <div className="col-md-8">
                        <div className='mt-5' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                        <img className='devimg' src={img5} alt="" />
                        </div>
                       
                    </div>

                </div>
           </section>
        {/* ................................................................................................
        
        6icon part
        
        
        */}



        <section className='container mt-5'>
            <div className="row ">
                <div className="col-md-4">
                <div>
                <FontAwesomeIcon className='slasticon' icon={faBuilding} />
                <h5>Build Anything</h5>
                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum non rerum, eveniet similique ex officia suscipit optio culpa tenetur repellendus repellat.</p>
                </div>
                </div>
                <div className="col-md-4">
                <div>
                <FontAwesomeIcon className='slasticon' icon={faWandMagicSparkles} />
                <h5>Unlock your creativity</h5> 
                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum non rerum, eveniet similique ex officia suscipit optio culpa tenetur repellendus repellat.</p>
                 </div>
                </div>
                <div className="col-md-4">
                <div>
                <FontAwesomeIcon className='slasticon' icon={faAward} />
                <h5>High-quality fonts</h5>
                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum non rerum, eveniet similique ex officia suscipit optio culpa tenetur repellendus repellat.</p>
                </div>
                </div>
            
            </div>
        </section>


        {/* .........................................................................................
        
        6 icon part
        */}

        <section className='container'>
        <div className="row ">
                <div className="col-md-4">
                <div>
                <FontAwesomeIcon className='slasticon' icon={faHillAvalanche} />
                <h5>Perfect grid system</h5>
                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum non rerum, eveniet similique ex officia suscipit optio culpa tenetur repellendus repellat.</p>
                </div>
                </div>
                <div className="col-md-4">
                <div>
                <FontAwesomeIcon className='slasticon' icon={faDiagramProject} />
                <h5>Premium design</h5>
                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum non rerum, eveniet similique ex officia suscipit optio culpa tenetur repellendus repellat.</p>
                 </div>
                </div>
                <div className="col-md-4">
                <div>
                <FontAwesomeIcon className='slasticon' icon={faCircleHalfStroke} />
                <h5>Lifetime updates</h5>
                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum non rerum, eveniet similique ex officia suscipit optio culpa tenetur repellendus repellat.</p>
                </div>
                </div>
            
            </div>
        </section>

        {/* .................................................................................................. */}



       


        <section className='footer'>
                <Footercomp></Footercomp>
            </section>

           
            
        </div>
    );
};

export default Service;