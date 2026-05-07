import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("User can submit the form successfully", () => {
  const mockAvailableTimes = ["17:00", "18:00"];
  const mockDispatch = jest.fn();

  render(
    <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />,
  );

  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const occasionSelect = screen.getByLabelText(/occasion/i);
  const submitButton = screen.getByRole("button", { name: /reserve table/i });

  fireEvent.change(dateInput, { target: { value: "2026-04-25" } });
  fireEvent.change(timeSelect, { target: { value: "18:00" } });
  fireEvent.change(guestsInput, { target: { value: "4" } });
  fireEvent.change(occasionSelect, { target: { value: "Regular Meal" } });

  fireEvent.click(submitButton);

  expect(submitButton).toBeEnabled();
});

test("Date field has HTML5 validation attributes", () => {
  render(<BookingForm availableTimes={["17:00"]} dispatch={jest.fn()} />);
  const dateInput = screen.getByLabelText(/choose date/i);

  expect(dateInput).toHaveAttribute("required");
});
