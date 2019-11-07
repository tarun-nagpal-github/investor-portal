import React from 'react';
import ScrollArea from 'react-scrollbar';
import { Row, Col, Card, CardBody, CardTitle,BreadcrumbItem,Breadcrumb } from 'reactstrap';
import './nicescroll.css';

class Nicescroll extends React.Component {
    render() {

        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Nicescroll </h4>
                        </Col>
                        <Col sm={6}>
                            <Breadcrumb className="pt-0 pr-0 float-left float-sm-right">
                                    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                    <BreadcrumbItem active>Nicescroll </BreadcrumbItem>
                                </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col md={6}>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Basic scroll</CardTitle>
                                <div className="scrollbar max-h-200" tabIndex={2} >
                                    <ScrollArea speed={0.8} style={{ overflow: 'hidden' }}
                                        className="scrollbar max-h-200"
                                        contentClassName="content"
                                        horizontal={false} >
                                        <div className="content">
                                            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                                            Declarative views make your code more predictable and easier to debug.Build encapsulated components that manage their own state, then compose them to make complex UIs.
                                            Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
                                            We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
                                            React can also render on the server using Node and power mobile apps using React Native.
                                            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                                            Declarative views make your code more predictable and easier to debug.Build encapsulated components that manage their own state, then compose them to make complex UIs.
                                            Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
                                            We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
                                            React can also render on the server using Node and power mobile apps using React Native.
                                            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                                            Declarative views make your code more predictable and easier to debug.Build encapsulated components that manage their own state, then compose them to make complex UIs.
                                            Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
                                            We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
                                            React can also render on the server using Node and power mobile apps using React Native.
                                    </div>
                                    </ScrollArea>
                                </div>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col md={6}>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Fast scroll</CardTitle>
                                <div className="scrollbar max-h-200" tabIndex={3} style={{ overflowY: 'hidden', outline: 'none' }}>
                                    <ScrollArea speed={2}
                                        className="scrollbar max-h-200"
                                        contentClassName="content"
                                        horizontal={false} >
                                        <div className="content">
                                            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                                            Declarative views make your code more predictable and easier to debug.Build encapsulated components that manage their own state, then compose them to make complex UIs.
                                            Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
                                            We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
                                            React can also render on the server using Node and power mobile apps using React Native.
                                            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                                            Declarative views make your code more predictable and easier to debug.Build encapsulated components that manage their own state, then compose them to make complex UIs.
                                            Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
                                            We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
                                            React can also render on the server using Node and power mobile apps using React Native.
                                            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                                            Declarative views make your code more predictable and easier to debug.Build encapsulated components that manage their own state, then compose them to make complex UIs.
                                            Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
                                            We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
                                            React can also render on the server using Node and power mobile apps using React Native.
                                    </div>
                                    </ScrollArea>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Nicescroll;