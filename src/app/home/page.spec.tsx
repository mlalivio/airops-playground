import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";

describe("Home Component", () => {
  beforeEach(() => {
    // Render the Home component before each test
    console.log("test");
    render(<Home />);
  });

  it("should render the main element", () => {
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeDefined();
  });

  it("should display the test button", () => {
    const buttonElement = screen.getByRole("button", { name: /Test/i });
    expect(buttonElement).toBeDefined();
  });

  it("should display the start editing message", () => {
    const startEditingMessage = screen.getByText(/Get started by editing/i);
    expect(startEditingMessage).toBeDefined();
  });

  it("should display the Vercel logo link", () => {
    const vercelLink = screen.getByRole("link", { name: /By Vercel Logo/i });
    expect(vercelLink).toBeDefined();
    expect(vercelLink).toHaveAttribute(
      "href",
      "https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    );
  });

  it("should ensure the Next.js logo has correct alt attribute", () => {
    const nextJsLogo = screen.getByAltText("Next.js Logo");
    expect(nextJsLogo).toBeDefined();
  });

  // Testing each link in the grid
  it.each([
    [
      "Docs",
      "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    ],
    [
      "Learn",
      "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    ],
    [
      "Templates",
      "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    ],
    [
      "Deploy",
      "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    ],
  ])("should display the %s link with correct href", (name, href) => {
    const link = screen.getByRole("link", { name: new RegExp(name, "i") });
    expect(link).toBeDefined();
    expect(link).toHaveAttribute("href", href);
  });
});
