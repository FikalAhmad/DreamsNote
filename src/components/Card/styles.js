import { css } from "@emotion/css";

export const cardContainer = css`
  padding: 32px 36px;
  border-radius: 32px;
  min-width: 300px;
  max-width: 327px;
  max-height: 349px;
  background-color: var(--hijaumuda);
  color: var(--hijautua);
  font-family: CircularLight;

  .card {
    &--title {
      font-size: 36px;
      font-family: CircularMedium;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    &--link {
      color: var(--hijautua);
      text-decoration: none;
    }
    &--desc-wrap {
      overflow: hidden;
      height: 100px;
    }
    &--desc {
      font-size: 24px;
      margin: 10px 0 20px;
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
