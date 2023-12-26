import { css } from "@emotion/css";

export const cardContainer = css`
  padding: 30px;
  border-radius: 10px;
  background-color: var(--birumuda);
  width: 100%;
  color: var(--birutua);
  font-family: CircularLight;

  .card {
    &--title {
      font-family: CircularMedium;
      font-size: 24px;
      white-space: nowrap; /* Prevent text from wrapping to the next line */
      overflow: hidden; /* Hide any overflowing content */
      text-overflow: ellipsis; /* Display an ellipsis (...) when text overflows */
    }
    &--link {
      color: var(--birutua);
      text-decoration: none;
    }
    &--desc-wrap {
      overflow: hidden;
      height: 60px;
      margin: 10px 0;
    }
    &--desc {
      max-height: 3 * 1.2rem; /* Set the maximum height for three lines of text */
      overflow: hidden; /* Hide any overflowing content */
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3; /* Number of lines to display */
      line-height: 1.2rem;
    }
    &--navbottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &--date {
      font-family: CircularMedium;
    }
    &--btn {
      border: none;
      background-color: var(--birutua);
      border-radius: 5px;
      padding: 8px;
    }
    &--btn img {
      width: 24px;
    }
    &--btn-group {
      display: flex;
      gap: 15px;
    }
  }
`;
