import { IEvent, IField } from "@/types";
import React, { useState } from "react";
import { Accordion, Button, Card, Collapse, ListGroup } from "react-bootstrap";

const FieldList = (props: { fields: IField[]; events: IEvent[] }) => {
  let fields = props.fields;

  return (
    <ListGroup className="listgroup">
      {fields.map((field: IField) => {
        // finds all the events for specifc field
        let fieldEvents: IEvent[] = props.events.filter(
          (fieldEvent: IEvent) => {
            return fieldEvent.field === field.name;
          }
        );

        return (
          <Accordion
            key={field._id.toString()}
            id={field._id.toString()}
            defaultActiveKey="0"
          >
            <Accordion.Header>{field.name}</Accordion.Header>

            <SelectedField events={fieldEvents} />

            <br />
          </Accordion>
        );
      })}
    </ListGroup>
  );
};

const SelectedField = (props: { events: IEvent[] }) => {
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
