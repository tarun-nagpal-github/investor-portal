import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import ScrollArea  from 'react-scrollbar';
import { Collapse } from 'reactstrap';
import './Header';

class Sitebar extends Component{
	constructor(props)
	{
		super(props);
     
		this.state={
			dashboard:false,
			investor: false,
			plussignele1:false,
			plussignele2:false
		}
   	}

	// investor = () =>{
	// 	this.setState({
	// 		investor:!this.state.investor,
	// 		plussignele1:!this.state.plussignele
	// 	})
	// }

	syndicate = () => {
		this.setState({
			syndicate:!this.state.syndicate,
			plussignele2:!this.state.plussignele
		})
	}

 	render(){
        return(
            <div className="side-menu-fixed">
				<ScrollArea speed={0.8} style={{overflow: 'hidden'}} className="scrollbar side-menu-bg" contentClassName="saidbar" horizontal={false} > 
					<div className="saidbar"> 
					
						<ul className="nav navbar-nav side-menu" id="sidebarnav">
							{/* <!-- menu item Dashboard--> */}
							<li className="active">
								<Link to="/"><i className="ti-home"></i><span className="right-nav-text">Dashboard</span></Link>  
							</li>
							<li>
								<li> <Link to="/syndicate-investor-report">Reports</Link> </li>
							</li>
							{/* <li>
								<a href="javascript:void(0);"  onClick={this.investor}   aria-expanded={this.state.plussignele2 ? "true" : "false"} className={this.state.plussignele2 ? "" : "collapsed"}>
									<div className="pull-left"><i className="ti-palette"></i><span className="right-nav-text">Annual Investor</span></div>
									<div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div>
								</a>
								<Collapse isOpen={this.state.investor}>
									<ul id="investor"  >
										<li> <Link to="/annual-investor-report">Reports</Link> </li>
									</ul>
								</Collapse>
							</li> */}
						</ul>
            		</div>
         	 	</ScrollArea> 
        	</div> 
        );
    }
}
export default Sitebar;