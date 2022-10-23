import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

function ColorSchemesExample(props) {
    return (
        <>
            <div>
                <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">{props.home}</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/contact">{props.contact}</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">{props.about}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    );
}

export default ColorSchemesExample;

//Defining PropTypes
ColorSchemesExample.propTypes = {
    home: PropTypes.string.isRequired,
    // contact: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
}




    //React Bootstrap ko code haru

    // < Navbar bg = "dark" variant = "dark" >
    //     <Container>

    //         <Nav className="me-auto">
    //             <Nav.Link to="/">{props.home}</Nav.Link>
    //             <Nav.Link to="/contact">{props.contact}</Nav.Link>
    //             <Nav.Link to="/about">{props.about}</Nav.Link>


    //             {/* <Nav>
    //                         <Link to="/">{ props.home}</Link>
    //                     </Nav> */}
    //         </Nav>


    //         {/* <Link to="/">{ props.home}</Link>
    //             <Link to="/contact">{ props.contact}</Link>
    //             <Link to="/about">{ props.about}</Link> */}
    //     </Container>