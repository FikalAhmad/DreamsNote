import { css } from "@emotion/css";

export const homeContainer = css`
  background-color: var(--birumuda);
  .home {
    padding: 42px 21px;
    font-family: CircularMedium;
    min-height: 100vh;
    background-color: var(--birutua);
    &--textcontainer {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &--title {
      font-size: 48px;
      color: var(--birumuda);
    }
    &--desc {
      font-size: 18px;
      color: gray;
      font-family: CircularLight;
    }
  }
`;
