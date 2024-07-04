import { expect, it, describe, afterEach, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { Button } from "./Button";

const mockedOnClick = vi.fn();

const makeSut = (color: "default" | "red" = "default") => {
  return render(<Button title="Test" color={color} onClick={mockedOnClick} />);
};

describe("GIVEN the button is rendered", () => {
  afterEach(cleanup);
  it("THEN should be defined", () => {
    makeSut();
    expect(screen.getByRole("button")).toBeDefined();
  });

  it("THEN should check if color has changed", () => {
    makeSut("red");
    expect(screen.getByRole("button").className).toBe(
      "_button_7b3ee8 _buttonRed_7b3ee8"
    );
  });

  it("THEN should check if button was clicked", () => {
    makeSut();
    screen.getByRole("button").click();
    expect(mockedOnClick).toBeCalled();
  })
});
