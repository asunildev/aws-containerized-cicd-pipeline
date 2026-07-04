import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders the main heading", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        name: /aws ci\/cd pipeline demo/i,
      })
    ).toBeInTheDocument();
  });

  test("renders all pipeline technologies", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /github actions/i })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("heading", { name: /docker/i })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("heading", { name: /amazon ecr/i })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("heading", { name: /elastic beanstalk/i })
  ).toBeInTheDocument();
});

  test("renders all feature cards", () => {
    render(<App />);

    expect(screen.getByText(/automated build/i)).toBeInTheDocument();
    expect(screen.getByText(/docker image creation/i)).toBeInTheDocument();
    expect(screen.getByText(/push to amazon ecr/i)).toBeInTheDocument();
    expect(screen.getByText(/deploy to elastic beanstalk/i)).toBeInTheDocument();
    expect(screen.getByText(/ci\/cd via github actions/i)).toBeInTheDocument();
    expect(screen.getByText(/automated testing/i)).toBeInTheDocument();
  });

  test("renders the GitHub source code link", () => {
    render(<App />);

    const link = screen.getByRole("link", {
      name: /view source code/i,
    });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "https://github.com/ananthu-sunil/aws-containerized-cicd-pipeline"
    );
  });
});