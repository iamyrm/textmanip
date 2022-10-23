import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

function ColorSchemesExample(props) {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    
                    {/* <Nav className="me-auto">
                        <Nav.Link to="/contact">{props.home}</Nav.Link>
                        <Nav.Link to="/contact">{props.contact}</Nav.Link>
                        <Nav.Link to="/about">{props.about}</Nav.Link>
                    </Nav> */}
                    

                    <Link to="/">{ props.home}</Link>
                <Link to="/contact">{ props.contact}</Link>
                <Link to="/about">{ props.about}</Link>
                </Container>
                
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;

//Defining PropTypes
ColorSchemesExample.propTypes = {
    home: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
}