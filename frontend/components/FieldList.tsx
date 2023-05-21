import { IField } from "@/types";
import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const FieldList = (props: { fields: IField[] }) => {
  let fields = props.fields;
  return (
    <ListGroup>
      {fields.map((field: IField) => {
        return (
          <>
            <ListGroup.Item key={field._id.toString()}>
              <Card.Body>{field.name}</Card.Body>
            </ListGroup.Item>
            <br />
          </>
        );
      })}
    </ListGroup>
  );
};

export default FieldList;
