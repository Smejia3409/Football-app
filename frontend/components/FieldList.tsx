import { IEvent, IField } from "@/types";
import React, { useState } from "react";
import { Accordion, Button, Card, Collapse, ListGroup } from "react-bootstrap";

const FieldList = (props: { fields: IField[]; events: IEvent[] }) => {
  let fields = props.fields;

  const [open, setOpen] = useState<boolean>(false);

  return (
    <ListGroup>
      {fields.map((field: IField) => {
        return (
          <Accordion
            key={field._id.toString()}
            id={field._id.toString()}
            defaultActiveKey="0"
            // onClick={() => {
            //   if (field._id) {
            //     field._id.toString();
            //   }
            // }}
            // aria-controls="example-collapse-text"
            // aria-expanded={open}
            // variant="light"
          >
            <Accordion.Header>{field.name}</Accordion.Header>

            <SelectedField events={props.events} open={open} />

            <br />
          </Accordion>
        );
      })}
    </ListGroup>
  );
};

const SelectedField = (props: { events: IEvent[]; open: boolean }) => {
  return (
    <Accordion.Body>
      <div>
        {props.events.map((event: IEvent) => {
          return (
            <div key={event._id.toString()}>
              <h5>{event.event}</h5>
              <p>{event.date}</p>
              <p>{event.time}</p>
              <p>{event.description}</p>
            </div>
          );
        })}
      </div>
    </Accordion.Body>
  );
};

export default FieldList;
