import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//testing in react
test("first test", () => {
  expect(true).toBeTruthy();
});

test("<name of the test>", () => {
  expect(10).toEqual(expect.any(Number));
});
