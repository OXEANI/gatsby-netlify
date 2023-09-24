import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SEO from "../components/SEO";

const PrimaryLayout = (props) => (
    <div>
        <SEO/>
        <Header/>

        <div className="container pt-3">
            
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <h1>{props.title}</h1>

                    {props.children}
                </Col>
            </Row>
        </div>
        <Footer/>
    </div>
)

export default PrimaryLayout