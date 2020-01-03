import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EventNotFound from './EventNotFound';

const Event = ({ event, onDelete }) => {
  if (!event) return <EventNotFound />;

  return (
    <div className="eventContainer">
      <h2>
        {event.event_date}
        {' - '}
        {event.event_type}
        {' '}
        <Link to={`/events/${event.id}/edit`}>Edit</Link>
        <button className="delete" type="button" onClick={() => onDelete(event.id)}>
          Delete
        </button>
      </h2>
      <ul>
        <li>
          <strong>Type:</strong>
          {' '}
          {event.event_type}
        </li>
        <li>
          <strong>Date:</strong>
          {' '}
          {event.event_date}
        </li>
        <li>
          <strong>Description:</strong>
          {' '}
          {event.title}
        </li>
        <li>
          <strong>Tag:</strong>
          {' '}
          {event.tag}
        </li>
        <li>
          <strong>Completed:</strong>
          {' '}
          {event.completed ? 'yes' : 'no'}
        </li>
      </ul>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.shape(),
  onDelete: PropTypes.func.isRequired,
};

Event.defaultProps = {
  event: undefined,
};

export default Event;
