import { IconTypes } from "@/types/icon";

const CommentIcon = ({ variants, color = "#FF0057" }: IconTypes) => {
  return (
    <>
      {variants === "outline" ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_3_12826)">
            <path
              d="M20 17.17L18.83 16H4V4H20V17.17ZM20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22V4C22 2.9 21.1 2 20 2Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_3_12826">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : variants === "full" ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_3_12826)">
            <path
              d="M20 17.17L18.83 16H4V4H20V17.17ZM20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22V4C22 2.9 21.1 2 20 2Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_3_12826">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : null}
    </>
  );
};

export default CommentIcon;
