import React, { useState } from "react";
import { submitAPI } from "../api";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("17:00");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Regular Meal");

  const formContainerStyle = {
    backgroundColor: "#EDEFEE",
    padding: "2.5rem",
    borderRadius: "16px",
    maxWidth: "450px",
    margin: "0 auto",
    display: "grid",
    gap: "20px",
    textAlign: "left",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    color: "#333333",
  };

  const labelStyle = {
    fontFamily: "Karla",
    fontWeight: "bold",
    fontSize: "1rem",
    marginBottom: "-10px",
  };

  const inputStyle = {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #CCCCCC",
    fontFamily: "Karla",
    fontSize: "1rem",
  };

  const submitButtonStyle = {
    backgroundColor: "#F4CE14",
    color: "#333333",
    padding: "14px",
    borderRadius: "8px",
    border: "none",
    fontWeight: "bold",
    fontSize: "1.1rem",
    cursor: "pointer",
    marginTop: "10px",
    transition: "0.3s",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isSubmitted = submitAPI({
      date: resDate,
      time: resTime,
      guests: guests,
      occasion: occasion,
    });

    submitForm(isSubmitted);

    if (isSubmitted) {
      alert("Success! Your reservation has been made.");
      // Optional: Reset form
      setResDate("");
      setResTime("17:00");
      setGuests("1");
      setOccasion("Birthday");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  const handleDateChange = (e) => {
    setResDate(e.target.value);
    dispatch({ type: "UPDATE_TIMES", date: e.target.value });
  };

  return (
    <form style={formContainerStyle} onSubmit={handleSubmit}>
      <label htmlFor="res-date" style={labelStyle}>
        Choose date
      </label>
      <input
        type="date"
        id="res-date"
        value={resDate}
        onChange={handleDateChange}
        style={inputStyle}
        required
      />

      <label htmlFor="res-time" style={labelStyle}>
        Choose time
      </label>
      <select
        id="res-time"
        value={resTime}
        onChange={(e) => setResTime(e.target.value)}
        style={inputStyle}
      >
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests" style={labelStyle}>
        Number of guests
      </label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        style={inputStyle}
      />

      <label htmlFor="occasion" style={labelStyle}>
        Occasion
      </label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        style={inputStyle}
      >
        <option>Regular Meal</option>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Engagement</option>
      </select>

      <button type="submit" style={submitButtonStyle}>
        Reserve Table
      </button>
    </form>
  );
};

export default BookingForm;
