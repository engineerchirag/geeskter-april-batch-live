import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { pageNotFoundLinkMessage, pageNotFoundMessage } from "../Constants";
import "../styles/PageNotFound.css"

function PageNotFound(props) {
  return (
    <div className="page-not-found">
      <FontAwesomeIcon size="5x" icon={faExclamationCircle} color="#FF0000" />
      <br />
      <h5>{pageNotFoundMessage}</h5>
      <Link to="/">
        <span>{pageNotFoundLinkMessage}</span>
      </Link>
    </div>
  );
}

export default PageNotFound;
