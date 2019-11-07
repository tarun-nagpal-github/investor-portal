import React,{Component} from 'react';
import Footer from './Footer';
import Header from './Header';

import Sitebar from './Sitebar';


class Base extends Component{
    constructor(props) {
        super(props);
        this.state = {
            toggleactive: false
          };
        this.updateValue=this.updateValue.bind(this);
      }
      updateValue(value) {
        this.setState(prevState => ({
            toggleactive:!prevState.toggleactive
        }))
      }
    render(){
       
        return(
            <div className={this.state.toggleactive ? "wrapper  slide-menu" : "wrapper"}>
                <Header updateParent={this.updateValue} />
                <div className="container-fluid">
                    <div className="row">
                        <Sitebar />
                        <div className="content-wrapper">
                            { this.props.children }
                            <Footer />
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
 
}
export default Base;