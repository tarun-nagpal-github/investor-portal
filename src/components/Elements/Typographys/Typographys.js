import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Col, Row, Card, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    width: '100%',
    maxWidth: 500,
  },
};

function Types(props) {
  const { classes } = props;

  return (
    <div>
      <div className="page-title">
        <Row>
          <Col md={6}>
            <h4 className="mb-0"> Typography </h4>
          </Col>
          <Col md={6}>
            <Breadcrumb className="pt-0 pr-0 float-left float-sm-right">
              <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
              <BreadcrumbItem active>Typography </BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
      <Row>
        <Col md={6}>
          <Card className="card-statistics mb-30">
            <CardBody>
              <CardTitle>Heading</CardTitle>
              <h1>h1. heading</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores quidem qui aspernatur ipsum accusantium fugiat soluta commodi esse.</p>
              <h2 className="mt-30">h2. heading</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores quidem qui aspernatur ipsum accusantium fugiat soluta commodi esse.</p>
              <h3 className="mt-30">h3. heading</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores quidem qui aspernatur ipsum accusantium fugiat soluta commodi esse.</p>
              <h4 className="mt-30">h4. heading</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores quidem qui aspernatur ipsum accusantium fugiat soluta commodi esse.</p>
              <h5 className="mt-30">h5. heading</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores quidem qui aspernatur ipsum accusantium fugiat soluta commodi esse.</p>
              <h6 className="mt-30">h6. heading</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores quidem qui aspernatur ipsum accusantium fugiat soluta commodi esse.</p>
            </CardBody>
          </Card>
          <Card className=" card-statistics mb-30">
            <CardBody>
              <CardTitle>Marked text</CardTitle>
              <p>You can use the mark tag to <mark>highlight</mark> text.</p>
            </CardBody>
          </Card>
          <Card className=" card-statistics mb-30">
            <CardBody>
              <CardTitle>Deleted text</CardTitle>
              <del>This line of text is meant to be treated as deleted text.</del>
            </CardBody>
          </Card>
          <Card className=" card-statistics mb-30">
            <CardBody>
              <CardTitle>Strikethrough text</CardTitle>
              <s>This line of text is meant to be treated as no longer accurate.</s>
            </CardBody>
          </Card>
          <Card className=" card-statistics mb-30">
            <CardBody>
              <CardTitle>Underlined text</CardTitle>
              <u>This line of text will render as underlined</u>
            </CardBody>
          </Card>
          <Card className=" card-statistics mb-30">
            <CardBody>
              <CardTitle>Text Color</CardTitle>
              <p className="text-primary">.text-primary</p>
              <p className="text-secondary">.text-secondary</p>
              <p className="text-success">.text-success</p>
              <p className="text-danger">.text-danger</p>
              <p className="text-warning">.text-warning</p>
              <p className="text-info">.text-info</p>
              <p className="text-light bg-dark">.text-light</p>
              <p className="text-dark">.text-dark</p>
              <p className="text-muted">.text-muted</p>
              <p className="text-white bg-dark">.text-white</p>
            </CardBody>
          </Card>
        </Col>
        <Col md={6}>
          <Card className=" card-statistics mb-30">
            <CardBody>
              <Typography variant="display4" gutterBottom>
                Display 4
                    </Typography>
              <Typography variant="display3" gutterBottom>
                Display 3
                    </Typography>
              <Typography variant="display2" gutterBottom>
                Display 2
                    </Typography>
              <Typography variant="display1" gutterBottom>
                Display 1
                    </Typography>
            </CardBody>
          </Card>
          <Card className=" card-statistics mb-30">
            <CardBody>
              <CardTitle>Contextual variations</CardTitle>
              <span className="badge badge-primary">Primary</span>{" "}
              <span className="badge badge-secondary">Secondary</span>{" "}
              <span className="badge badge-success">Success</span>{" "}
              <span className="badge badge-danger">Danger</span>{" "}
              <span className="badge badge-warning">Warning</span>{" "}
              <span className="badge badge-info">Info</span>{" "}
              <span className="badge badge-light">Light</span>{" "}
              <span className="badge badge-dark">Dark</span>
            </CardBody>
          </Card>
          <Card className=" card-statistics mb-30">
            <CardBody>
              <CardTitle>Pill badges</CardTitle>
              <span className="badge badge-pill badge-primary">Primary</span>{" "}
              <span className="badge badge-pill badge-secondary">Secondary</span>{" "}
              <span className="badge badge-pill badge-success">Success</span>{" "}
              <span className="badge badge-pill badge-danger">Danger</span>{" "}
              <span className="badge badge-pill badge-warning">Warning</span>{" "}
              <span className="badge badge-pill badge-info">Info</span>{" "}
              <span className="badge badge-pill badge-light">Light</span>{" "}
              <span className="badge badge-pill badge-dark">Dark</span>
            </CardBody>
          </Card>
          <Card className="card-statistics mb-30">
            <CardBody>
              <CardTitle>Links</CardTitle>
              <Link to="" className="badge badge-primary">Primary</Link>{" "}
              <Link to="" className="badge badge-secondary">Secondary</Link>{" "}
              <Link to="" className="badge badge-success">Success</Link>{" "}
              <Link to="" className="badge badge-danger">Danger</Link>{" "}
              <Link to="" className="badge badge-warning">Warning</Link>{" "}
              <Link to="" className="badge badge-info">Info</Link>{" "}
              <Link to="" className="badge badge-light">Light</Link>{" "}
              <Link to="" className="badge badge-dark">Dark</Link>
            </CardBody>
          </Card>
          <Card className="card-statistics mb-30">
            <CardBody>
              <CardTitle>Badges</CardTitle>
              <button type="button" className="btn btn-primary">
                Notifications <span className="badge badge-light">4</span>
              </button>&nbsp;&nbsp;
                      <button type="button" className="btn btn-primary">
                Profile <span className="badge badge-light">9</span>
                <span className="sr-only">unread messages</span>
              </button>
            </CardBody>
          </Card>
          <Card className="card-statistics  mb-30">
            <CardBody>
              <CardTitle>Background color</CardTitle>
              <div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>
              <div className="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
              <div className="p-3 mb-2 bg-success text-white">.bg-success</div>
              <div className="p-3 mb-2 bg-danger text-white">.bg-danger</div>
              <div className="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
              <div className="p-3 mb-2 bg-info text-white">.bg-info</div>
              <div className="p-3 mb-2 bg-light text-dark">.bg-light</div>
              <div className="p-3 mb-2 bg-dark text-white">.bg-dark</div>
              <div className="p-3 mb-2 bg-white text-dark">.bg-white</div>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </div>
  );
}
Types.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Types);
