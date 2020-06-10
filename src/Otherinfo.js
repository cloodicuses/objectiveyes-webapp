import React from "react";

// reactstrap components
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import ExamplesNavbar from "./components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "./components/Headers/LandingPageHeader.js";
import DefaultFooter from "./components/Footers/DefaultFooter.js";

function LandingPage() {
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    React.useEffect(() => {
        document.body.classList.add("landing-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        return function cleanup() {
            document.body.classList.remove("landing-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });
    return (
        <>
            <ExamplesNavbar />
            <div className="wrapper">
                <LandingPageHeader />
                <Row>
                    <Col className="ml-auto mr-auto text-center" md="8">
                        <h2 className="title">Other graphs about project</h2>
                        <h5 className="description">
                            That's kinda cool I guess.
                        </h5>
                    </Col>
                </Row>
            </div>
            <DefaultFooter />
        </>
    );
}

export default LandingPage;
