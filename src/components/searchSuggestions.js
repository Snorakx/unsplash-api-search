import React from "react";

import { ListGroup } from "react-bootstrap";

const Suggestions = (props) => {
  let someProps = { ...props };

  if (
    someProps.results.autocomplete !== undefined &&
    localStorage.myValueInLocalStorage.length > 2
  ) {
    if (
      someProps.results.autocomplete.length >= 1 &&
      someProps.isHidden === false
    ) {
      return (
        <ListGroup>
          {someProps.results.autocomplete?.map((s) => (
            <ListGroup.Item key={s.id}>
              <a onClick={() => someProps.onClick(s.query)}>
                <div> {s.query}</div>
              </a>
            </ListGroup.Item>
          ))}
        </ListGroup>
      );
    } else if (
      someProps.results.autocomplete.length < 1 &&
      someProps.isHidden === false
    ) {
      return (
        <ListGroup>
          <ListGroup.Item>
            <div>I tried hard to find the right words... Sorry!</div>
          </ListGroup.Item>
        </ListGroup>
      );
    } else {
      return null;
    }
  } else {
    return null;
  }
};

export default Suggestions;
