"use client"
import { useState, JSX } from "react";
import PropTypes from "prop-types";

interface StarRatingProps {
  value: number;
  size?: number;
  onChange?: (value: number) => void;
}

export const StarRating = ({
  value = 0,
  size = 24,
  onChange,
}: StarRatingProps): JSX.Element => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const getColor = (rating: number) => {
    if (rating === 0) return "transparent";
    if (rating >= 1 && rating <= 2) return "#D85562";
    if (rating >= 3 && rating <= 5) return "#1A604E";
    return "transparent";
  };

  const handleClick = (rating: number) => {
    if (onChange) {
      onChange(rating);
    }
  };

  const handleMouseEnter = (rating: number) => {
    setHoverValue(rating);
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  const stars = Array(5).fill(0);

  return (
    <div className="inline-flex items-center gap-1 w-min">
      {stars.map((_, index) => {
        const currentRating = index + 1;
        const isFilled = (hoverValue ?? value) >= currentRating;
        const fillColor = getColor(hoverValue ?? value);
        const borderColor =
          value <= 2 && value != 0 && index < value ? "#D85562" : "#1A604E";

        return (
          <div
            key={index}
            onClick={() => handleClick(currentRating)}
            onMouseEnter={() => handleMouseEnter(currentRating)}
            onMouseLeave={handleMouseLeave}
            style={{
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "scale(0.9)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <svg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill={isFilled ? fillColor : "transparent"}
                stroke={borderColor}
                strokeWidth="2"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

StarRating.propTypes = {
  value: PropTypes.number.isRequired,
  size: PropTypes.number,
  onChange: PropTypes.func,
};

StarRating.defaultProps = {
  size: 24,
  onChange: undefined,
};
