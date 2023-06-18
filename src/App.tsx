import React from "react";
import "./App.css";
import { DatePicker, RangePicker } from "@Gix73/date-picker";

const HOLIDAYS = [
  {
    month: 1,
    day: 1,
  },
  {
    month: 1,
    day: 2,
  },
  {
    month: 1,
    day: 7,
  },
  {
    month: 3,
    day: 8,
  },
  {
    month: 4,
    day: 25,
  },
  {
    month: 5,
    day: 1,
  },
  {
    month: 5,
    day: 9,
  },
  {
    month: 6,
    day: 3,
  },
  {
    month: 11,
    day: 7,
  },
  {
    month: 12,
    day: 25,
  },
];

function App() {
  return (
    <div className="App">
      <DatePicker
        minDate={new Date(2020, 4, 1)}
        maxDate={new Date(2025, 5, 20)}
        title={"Calendar month"}
        showWeekends={true}
        type={"month"}
        holidays={HOLIDAYS}
        onChange={() => {
          console.log("changed");
        }}
      />
      <DatePicker
        minDate={new Date(2020, 4, 1)}
        maxDate={new Date(2025, 5, 20)}
        title={"Calendar week"}
        showWeekends={true}
        type={"week"}
        holidays={HOLIDAYS}
        onChange={() => {
          console.log("changed");
        }}
      />

      <DatePicker
        minDate={new Date(2020, 4, 1)}
        maxDate={new Date(2025, 5, 20)}
        title={"Calendar year"}
        showWeekends={true}
        type={"year"}
        holidays={HOLIDAYS}
        onChange={() => {
          console.log("changed");
        }}
      />

      <RangePicker
        onChange={() => {
          console.log("changedr");
        }}
        minDate={new Date(2020, 4, 1)}
        maxDate={new Date(2025, 5, 20)}
        title={"Calendar"}
        showWeekends={true}
        type={"month"}
        weekStart="su"
        holidays={HOLIDAYS}
        startDate={new Date(2023, 5, 5)}
        endDate={new Date(2023, 5, 17)}
      />
    </div>
  );
}

export default App;
