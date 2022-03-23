import { render, screen } from "@testing-library/react";
import LandingPage from "./landingPage";

test("renders learn react link", () => {
  render(<LandingPage />);
  const landingPageWrapper = screen.getByTestId("landingPage");
  expect(landingPageWrapper).toBeInTheDocument();

  expect(landingPageWrapper).toHaveClass("landingPage");
});

test("renders learn react link", () => {
  render(<LandingPage />);
  const welcomeWrapper = screen.getByTestId("welcomeTag");
  expect(welcomeWrapper).toBeInTheDocument();

  expect(welcomeWrapper).toHaveClass("landingPageWrapper");
});

test("renders learn react link", () => {
  render(<LandingPage />);
  const arrowWrapper = screen.getByTestId("arrowWrapper");
  expect(arrowWrapper).toBeInTheDocument();

  expect(arrowWrapper).toHaveClass("arrow");
});


