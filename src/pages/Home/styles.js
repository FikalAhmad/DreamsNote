import { css } from "@emotion/css";

export const homeContainer = css`
  margin: auto;
  padding: 42px 21px;
  max-width: 42rem;
  font-family: CircularMedium;
  background-color: #fdfdfd;
  height: auto;
  .home {
    &--textcontainer {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &--title {
      font-size: 80px;
    }
    &--desc {
      color: #959e9c;
      font-family: CircularLight;
    }
  }
`;
