import { render, screen } from "@testing-library/react";
import Homepage from "./homePage";

test("renders the whole homepage main", () => {
  render(<Homepage />);
  const homePageMainWrapper = screen.getByTestId("homepage_main_wrapper");
  expect(homePageMainWrapper).toBeInTheDocument();

  expect(homePageMainWrapper).toHaveClass("homepage_main_wrapper");
});

test("renders the whole homepage main wrapper", () => {
  render(<Homepage />);
  const homePageMain = screen.getByTestId("homepage_main");
  expect(homePageMain).toBeInTheDocument();

  expect(homePageMain).toHaveClass("homepage_main");
});


test("renders the whole homepage triangleholder", () => {
  render(<Homepage />);
  const homePageTraingleHolder = screen.getByTestId("homepage_triangleHolder");
  expect(homePageTraingleHolder).toBeInTheDocument();

  expect(homePageTraingleHolder).toHaveClass("homepage_triangleHolder");
});

test("renders the whole homepage textHolder", () => {
  render(<Homepage />);
  const homePageTextHolder = screen.getByTestId("homepage_textHolder");
  expect(homePageTextHolder).toBeInTheDocument();

  expect(homePageTextHolder).toHaveClass("homepage_textHolder");
});

test("renders the whole homepage paginationHolder", () => {
  render(<Homepage />);
  const homePagePaginationHolder = screen.getByTestId("homepage_paginationHolder");
  expect(homePagePaginationHolder).toBeInTheDocument();

  expect(homePagePaginationHolder).toHaveClass("homepage_paginationHolder");
});

