import { render, screen, fireEvent } from "@testing-library/react";
import Like from "../Like"; 

test("Defaults to Likes: 0", () => {
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
});

test("Increment likes when Like button is clicked", () => {
    render(<Like />);
    const likeButton = screen.getByText("Like");
    fireEvent.click(likeButton);
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
});

test("Decrement likes when Dislike button is clicked", () => {
    render(<Like />);
    const likeButton = screen.getByText("Like");
    const dislikeButton = screen.getByText("Dislike");

    fireEvent.click(likeButton);
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();

    fireEvent.click(dislikeButton);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
});
