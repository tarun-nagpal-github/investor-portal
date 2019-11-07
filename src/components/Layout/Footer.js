import React,{Component} from 'react';
import { Row, Col} from 'reactstrap';

class Footer extends Component{
    render(){
        return(
            //<!--================================= footer -->
           
        <footer className="bg-white p-4">
               <Row>
                <Col md={6}>
                    <div className="text-center text-md-left">
                      <p className="mb-0"> © Copyright <span id="copyright"> {new Date().getFullYear()}</span>. <a href="/"> Investor Portal </a> All Rights Reserved. </p>
                    </div>
                    </Col>
                    <Col md={6}>
                      {/* <ul className="text-center text-md-right">
                        <li className="list-inline-item"><p>Terms &amp; Conditions </p> </li>
                        <li className="list-inline-item"><p>Privacy Policy </p> </li>
                      </ul> */}
                    </Col>
                </Row>
        </footer>
        
        );
    }
}
export default Footer;