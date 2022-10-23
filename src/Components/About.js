import Accordion from 'react-bootstrap/Accordion';
import PropTypes from 'prop-types'

function BasicExample(props) {
  return (
    <>
      <div className="container my-3">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>{props.about1}</Accordion.Header>
            <Accordion.Body>
              This is a <strong>Single Page Application </strong>where you can convert your test in either <strong>Lower Case <span>or in </span>Upper Case</strong>. Also you can copy the text from the clipboard, you can count the number of characters and words and further review your text.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>{props.about2}</Accordion.Header>
            <Accordion.Body>
              This is me, Yagyaraj Majhi who is currently devoted towards React Js. This SPA was built for easy conversion of text to upper cases and lower cases.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </div>
    </>

  );
}

export default BasicExample;
BasicExample.propTypes = {
  about1: PropTypes.string.isRequired,
  about2: PropTypes.string.isRequired,
}