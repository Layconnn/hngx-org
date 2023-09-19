import React from "react";
import { useState } from "react";
import "../styles/components/Inputt.scss";

function Inputt(props) {
  const [showElement, setShowElement] = useState(false);

  const handleClick = () => {
    setShowElement(true);
  };

  const change = props.value;

  const handleBlur = () => {
    if (change === "") {
      setShowElement(false);
    } else {
      ("");
    }
  };

  // const {errorMessage} = props;
  return (
    <div
      className={`constant-placeholder ${showElement ? "show-content" : ""}`}
      onClick={handleClick}
    >
      <h5
        className={`constant-placeholder__label ${
          showElement ? "show-contents__label" : ""
        }`}
      >
        {props.h5}
      </h5>
      {showElement && (
        <input
          name={props?.name}
          type={props.type}
          value={change}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onBlur={handleBlur}
          autoFocus
          // pattern={props.pattern}
          className={`constant-placeholder__input-two ${
            showElement ? "show-content__input-two" : ""
          }`}
        />
      )}
    </div>
  );
}

export default Inputt;
