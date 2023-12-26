import { css } from "@emotion/css";

export const ViewNoteContainer = css`
  background-color: var(--birutua);
  .viewnote {
    margin: auto;
    padding: 42px 21px;
    font-family: CircularMedium;
    min-height: 100vh;
    background-color: var(--birumuda);
    color: var(--birutua);
  }
  .heading {
    &-1 {
      font-family: CircularBold;
      font-size: 40px;
      padding: 0 25px;
      display: flex;
      justify-content: center;
    }
  }
  .post-content {
    padding: 50px 25px;
    font-family: CircularBook;
    text-align: justify;
    font-size: 18px;
    line-height: 32px;
  }
`;
