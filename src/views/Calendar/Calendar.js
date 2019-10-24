import React from "react";
import { render } from "react-dom";
import InfiniteCalendar, { Calendar, withRange } from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";

const CalendarWithRange = withRange(Calendar);

const MyCalendar = () => {
  // Render the Calendar

  return (
    <InfiniteCalendar
      width={600}
      height={500}
      Component={CalendarWithRange}
      selected={{
        start: new Date(),
        end: new Date(2019,9,28)
      }}
    />
  );
};

export default MyCalendar;
