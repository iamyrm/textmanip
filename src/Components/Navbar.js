import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types'

function ColorSchemesExample(props) {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/">{props.home}</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link to="/contact">{props.contact}</Nav.Link>
                        <Nav.Link to="/about">{props.about}</Nav.Link>
                    </Nav>
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