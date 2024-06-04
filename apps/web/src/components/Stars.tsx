import React, { useState } from "react";

interface IProps {
  setRating: (index: number) => void;
  rating: number;
}

const StarRating = (props: IProps) => {
  const handleClick = (index: number) => {
    props.setRating(index);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {[1, 2, 3, 4, 5].map((star, index) => (
        <svg
          key={index}
          onClick={() => handleClick(star)}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill={star <= props.rating ? "gold" : "transparent"}
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ cursor: "pointer" }}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
