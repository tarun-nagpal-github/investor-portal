import React from 'react';
import { SketchPicker,PhotoshopPicker,ChromePicker,AlphaPicker,BlockPicker,TwitterPicker,SwatchesPicker,CirclePicker,SliderPicker,CompactPicker,GithubPicker,HuePicker } from 'react-color';
import reactCSS from 'reactcss';
import { Row, Col ,Card,CardBody,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';


class Colors extends React.Component {
    constructor(props)
    {
        
        super(props);   
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickbutton = this.handleClickbutton.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClosebutton = this.handleClosebutton.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            background: '#fff',
            displayColorPicker: false,
            displayColorPickerbutton:false,
            color: {
                r: '241',
                g: '112',
                b: '19',
                a: '1',
              }
          };
    }
    handleClick (){
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
      }
      handleClickbutton (){
        this.setState({ displayColorPickerbutton: !this.state.displayColorPickerbutton })
      }
      handleChange(color) {
        this.setState({ color: color.rgb })
      }
    
      handleClose(){
        this.setState({ displayColorPicker: false })
      }
      handleClosebutton(){
        this.setState({ displayColorPickerbutton: false }) 
      }
      handleChangeComplete(color){
        this.setState({ background: color.hex });
      }
      photohandleChangeComplete(color, event) {
        this.setState({ background: color.hex });
      }
    render() {
        const styles = reactCSS({
            'default': {
              color: {
                width: '36px',
                height: '14px',
                borderRadius: '2px',
                background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
              },
              swatch: {
                padding: '5px',
                background: '#fff',
                borderRadius: '1px',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                display: 'inline-block',
                cursor: 'pointer',
              },
              popover: {
                position: 'absolute',
                zIndex: '2',
              },
              cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
              },
            },
          });
        const popover = {
            position: 'absolute',
            zIndex: '2',
          }
          const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          }
        return (
            <div>
        
                    <div className="page-title">
                        <Row>
                            <Col md={6} >
                                <h4 className="mb-0">Colorpicker</h4>
                            </Col>
                            <Col md={6} >
                                    <Breadcrumb className="pt-0 pr-0 float-left float-sm-right">
                                        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                        <BreadcrumbItem active>Colorpicker</BreadcrumbItem>
                                    </Breadcrumb>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col md={6} mb={30}>
                   
                        <Card className="card-statistics mb-30"> 
                            <CardBody>
                            <CardTitle>SketchPicker </CardTitle>  
                                <div className="input-group colorpicker-component" title="Using input value">
                                    <div style={ styles.swatch } onClick={ this.handleClick }>
                                        <div style={ styles.color } />
                                    </div>
                                    { this.state.displayColorPicker ? <div style={ styles.popover }>
                                    <div style={ styles.cover } onClick={ this.handleClose }/>
                                    <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
                                    </div> : null 
                                    }
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30"> 
                            <CardBody>
                                <CardTitle>ChromePicker </CardTitle>  
                                <button onClick={ this.handleClickbutton }>Pick Color</button>
                                { this.state.displayColorPickerbutton ? <div style={ popover }>
                                <div style={ cover } onClick={ this.handleClosebutton }/>
                                <ChromePicker />
                                </div> : null }
                            </CardBody>
                        </Card>
                        
                 
                        <Card className="card-statistics mb-30"> 
                            <CardBody>
                                <CardTitle>AlphaPicker</CardTitle>  
                                <div id="cp5" className="input-group colorpicker-component colorpicker-element" title="Using format option" data-colorpicker-id={6}>
                                <AlphaPicker />
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30"> 
                            <CardBody>
                                <CardTitle>SwatchesPicker</CardTitle>  
                                <SwatchesPicker/>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30"> 
                            <CardBody>
                                <CardTitle>CirclePicker</CardTitle>  
                                <div id="cp5" className="input-group colorpicker-component colorpicker-element" title="Using format option" data-colorpicker-id={6}>
                                <CirclePicker />
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30"> 
                            <CardBody>
                                <CardTitle>SketchPicker</CardTitle>  
                                <div id="cp5" className="input-group colorpicker-component colorpicker-element" title="Using format option" data-colorpicker-id={6}>
                                <SketchPicker />
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30"> 
                            <CardBody>
                                <CardTitle>ChromePicker</CardTitle>  
                                <div id="cp5" className="input-group colorpicker-component colorpicker-element" title="Using format option" data-colorpicker-id={6}>
                                <ChromePicker />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} mb={30}>
                   
                        <Card className="card-statistics mb-30"> 
                            <CardBody>
                                <CardTitle>CompactPicker</CardTitle> 
                                <div id="cp9" className="input-group colorpicker-component colorpicker-element" data-colorpicker-id={11}>
                                <CompactPicker/>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30"> 
                            <CardBody>
                                <CardTitle>HuePicker</CardTitle> 
                                <div id="cp9" className="input-group colorpicker-component colorpicker-element" data-colorpicker-id={11}>
                                <HuePicker/>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30"> 
                            <CardBody>
                                <CardTitle>GithubPicker</CardTitle> 
                                <div id="cp9" className="input-group colorpicker-component colorpicker-element" data-colorpicker-id={11}>
                                <GithubPicker/>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30"> 
                            <CardBody>
                                <CardTitle>SketchPicker </CardTitle> 
                                <SketchPicker color={ this.state.background } onChangeComplete={ this.handleChangeComplete }/>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30"> 
                            <CardBody>
                                <CardTitle>PhotoshopPicker</CardTitle> 
                                <PhotoshopPicker onChangeComplete={ this.photohandleChangeComplete }   /> 

                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30"> 
                            <CardBody>
                                <CardTitle>BlockPicker</CardTitle> 
                                <div id="cp9" className="input-group colorpicker-component colorpicker-element" data-colorpicker-id={11}>
                                <BlockPicker/>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30"> 
                            <CardBody>
                                <CardTitle>TwitterPicker</CardTitle> 
                                <div id="cp9" className="input-group colorpicker-component colorpicker-element" data-colorpicker-id={11}>
                                <TwitterPicker/>
                                </div>
                            </CardBody>
                        </Card>
                       
                    </Col>
                   </Row>    
               
             
        </div>
         
            );
    }

}

export default Colors;