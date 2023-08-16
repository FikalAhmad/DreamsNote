import { css } from "@emotion/css";

export const cardContainer = css`
  padding: 15px;
  border-radius: 10px;
  min-width: 300px;
  background-color: var(--hijaumuda);
  color: var(--hijautua);
  font-family: CircularLight;
  font-size: 16px;

  .card {
    &--title {
      font-size: 28px;
      font-family: CircularMedium;
    }
    &--btn {
      display: flex;
      margin-left: auto;
      max-width: 100px;
      border: none;
      background-color: #eeeeee;
      border-radius: 8px;
      padding: 8px;
    }
  }
`;
