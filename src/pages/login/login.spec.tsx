import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LoginPage from "./login";

describe("Login page", () => {
  it("should render with required files ", () => {
    //arrange
    render(<LoginPage />);

    //act
    expect(screen.getByText("Sign In")).toBeInTheDocument();

    //assert
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Log in" })).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: "Remember Me" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "Forgot Password" })
    ).toBeInTheDocument();
  });
});
