import { Form } from "react-bootstrap";
import "../../../../index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';

const SearchForCoin = (props) => {

  return (
    <>
      <div className="centerItems" onClick={props.expandCard}>
        <FontAwesomeIcon icon={props.isExpanded ? faChevronUp : faChevronDown}/>
      </div>
      {props.isExpanded &&
        <Form.Control type="text" placeholder="Search For a Coin" onChange={props.handleSearchChange} />
      }
    </>
  );
};
export default SearchForCoin;
