import React from 'react';
import { Row, Col, Table, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
class Invoice extends React.Component {
  constructor(props) {
    super(props);
    this.pdgform = this.pdgform.bind(this);
  }

  pdgform() {
    window.print();
  }
  render() {
    return (
      <div>
        <Row className="page-title">
          <Col sm={6}>
            <h4 className="mb-0">Invoice</h4>
          </Col>
          <Col sm={6} >
            <Breadcrumb className="float-left float-sm-right">
              <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
              <BreadcrumbItem active>Invoice</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Card className="mb-30">
          <CardBody className="container-fluid">
            <Row>
              <Col sm={6}>
                <div className="mb-20">
                  <img className="logo-small mt-0" src="assets/images/logo-dark.png" alt="logo" />
                </div>
                <ul className="addresss-info invoice-addresss list-unstyled">
                  <li>17504 Carlton Cuevas Rd,<br />
                    Gulfport, MS, 39503</li>
                  <li><strong>Email: </strong> letstalk@investorportal.com</li>
                  <li><strong>Phone: </strong> <a href="tel:7042791249"> +(704) 279-1249 </a></li>
                  <li><strong>Fax: </strong>+(704) 213-7895 </li>
                </ul>
              </Col>
              <Col sm={6} className="col-sm-3 text-left text-sm-right mb-5">
                <h4>Invoice Information</h4>
                <div>
                  <p> Invoice No: <a href="#">#PGS009180</a> </p> <br />
                  <h4><small>Invoice to:</small> Michael Bean</h4>
                </div>
                <ul className="addresss-info invoice-addresss list-unstyled">
                  <li> 1234 North Avenue Luke Lane,<br />
                    South Bend, IN 360001</li>
                  <li><span><strong>Email: </strong> letstalk@investorportal.com</span></li>
                  <li><span><strong>Phone: </strong> <a href="tel:7042791249"> +(704) 279-1249 </a></span></li>
                </ul>
                <span>Invoice Date: February 20, 2018</span>
                <br />
                <span>Due Date: February 24, 2018</span>
              </Col>
            </Row>
            <div className="page-invoice-table table-responsive">
              <Table className="table table-hover text-right" responsive>
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th className="text-left">Description</th>
                    <th className="text-right">Quantity</th>
                    <th className="text-right">Unit rate</th>
                    <th className="text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">01</td>
                    <td className="text-left">Character Illustration Design</td>
                    <td>22</td>
                    <td>$250</td>
                    <td>$2500</td>
                  </tr>
                  <tr>
                    <td className="text-center">02</td>
                    <td className="text-left">Apple Hospital Branding logo</td>
                    <td>15</td>
                    <td>$50</td>
                    <td>$300</td>
                  </tr>
                  <tr>
                    <td className="text-center">03</td>
                    <td className="text-left">Mackbook Pro Retina Display Model 2017</td>
                    <td>105</td>
                    <td>$30</td>
                    <td>$3500</td>
                  </tr>
                  <tr>
                    <td className="text-center">04</td>
                    <td className="text-left">iPhone X 256 GB</td>
                    <td>65</td>
                    <td>$26</td>
                    <td>$1500</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="text-right clearfix mb-3 mt-2">
              <div className="float-right mt-30">
                <h6>Sub - Total amount: <strong>$5500</strong></h6>
                <h6>Vat: <strong>$50</strong></h6>
                <h6 className="grand-invoice-amount">Grand Total: <strong>$5550</strong></h6>
              </div>
            </div>
            <div className="text-right">
              <button type="submit" className="btn btn-primary">
                <span>  Proceed to payment</span>
              </button>
              <button type="button" className="btn btn-dark ml-1" onClick={this.pdgform}>
                <span><i className="fa fa-print" /> Print</span>
              </button>
            </div>
          </CardBody>
          <div className="col-sm-12">
            <div className="border p-4 mb-3"><strong>Note:</strong>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur id illo incidunt, iste libero quisquam? A aut cumque fuga fugit iusto libero officia optio quasi, quisquam saepe voluptate voluptatibus voluptatum.
                    <strong className="mt-3 d-block">Thanks for your business</strong>
            </div>
          </div>
        </Card>
      </div>

    );
  }
}


export default Invoice;