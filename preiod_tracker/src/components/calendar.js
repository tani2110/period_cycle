import React, { useState, useEffect } from 'react';
import './calendar.css'; // Assuming you have a CSS file for styling

const Calendar = () => {
  // Get current date
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({}); // Object to store events for each date

  // Function to get number of days in a month
  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to get the first day of the month
  const firstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  // Function to handle navigation to next month
  const nextMonth = () => {
    setCurrentMonth(prevMonth => (prevMonth + 1) % 12);
    if (currentMonth === 11) {
      setCurrentYear(prevYear => prevYear + 1);
    }
  };

  // Function to handle navigation to previous month
  const prevMonth = () => {
    setCurrentMonth(prevMonth => (prevMonth === 0 ? 11 : prevMonth - 1));
    if (currentMonth === 0) {
      setCurrentYear(prevYear => prevYear - 1);
    }
  };

  // Function to handle click on a date
  const handleDateClick = (day) => {
    setSelectedDate(`${currentMonth + 1}/${day}/${currentYear}`);
  };

  // Function to handle adding events
  const handleAddEvent = (event) => {
    if (selectedDate) {
      setEvents(prevEvents => ({
        ...prevEvents,
        [selectedDate]: event
      }));
      localStorage.setItem('events', JSON.stringify({
        ...events,
        [selectedDate]: event
      }));
    }
  };

  // Render calendar days
  const renderCalendarDays = () => {
    const firstDay = firstDayOfMonth(currentMonth, currentYear);
    const daysCount = daysInMonth(currentMonth, currentYear);
    const daysArray = [];

    // Fill in empty slots at the beginning of the month
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    // Fill in days of the month
    for (let day = 1; day <= daysCount; day++) {
      daysArray.push(
        <div
          key={`day-${day}`}
          className={`calendar-day ${selectedDate === `${currentMonth + 1}/${day}/${currentYear}` ? 'selected' : ''}`}
          onClick={() => handleDateClick(day)}
        >
          {day}
          {/* Display event if present for the selected date */}
          {events[`${currentMonth + 1}/${day}/${currentYear}`] && (
            <span className="event">{events[`${currentMonth + 1}/${day}/${currentYear}`]}</span>
          )}
        </div>
      );
    }

    return daysArray;
  };

  useEffect(() => {
    // Load events from local storage on component mount
    const storedEvents = JSON.parse(localStorage.getItem('events'));
    if (storedEvents) {
      setEvents(storedEvents);
    }
  }, []);

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={prevMonth}>&lt;</button>
        <span>{`${currentMonth + 1}/${currentYear}`}</span>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="calendar-body">
        {/* Render calendar days */}
        {renderCalendarDays()}
      </div>
      {/* Popup input box */}
      {selectedDate && (
        <div className="popup">
          <input type="text" placeholder="Enter event..." onKeyPress={(e) => e.key === 'Enter' && handleAddEvent(e.target.value)} />
        </div>
      )}
    </div>
  );
};

export default Calendar;
