import { css } from "@emotion/css";

export const notesListContainer = css`
  padding: 42px 21px;
  width: auto;
  .card {
    &--container {
      width: 100%;
      display: grid;
      grid-template-columns: 50% 50%;
      justify-content: center;
      /* flex-wrap: wrap; */
      gap: 20px;
      margin: 20px 0;
    }

    @media screen and (max-width: 576px) {
      .card {
        &--container {
          display: grid;
          grid-template-columns: auto;
          justify-content: center;
          /* flex-wrap: wrap; */
          gap: 20px;
          margin: 20px 0;
        }
      }
    }
  }
`;
