import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { AddTask } from "../../components/add-task";

test("renders AddTask component", () => {
    render(<AddTask onClickHandler={vi.fn()} text="" setText={vi.fn()} />);

    expect(
        screen.getByPlaceholderText("Add a new task..."),
    ).toBeInTheDocument();
});
