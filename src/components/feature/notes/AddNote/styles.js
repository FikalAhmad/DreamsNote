import { css } from "@emotion/css";

export const addNoteContainer = css`
  margin: auto;
  padding: 42px 21px;
  max-width: 42rem;
  font-family: CircularMedium;
  background-color: #fdfdfd;
  height: auto;
  border: 1px solid red;
  .form {
    display: flex;
    flex-direction: column;
    &--input {
      padding: 20px 16px;
      font-size: 16px;
      font-family: CircularLight;
      border: 3px solid black;
      border-radius: 8px;
    }
    &--input_textarea {
      font-family: CircularLight;
      resize: none;
      overflow: hidden;
      padding: 20px 16px;
      font-size: 16px;
      border: 3px solid black;
      border-radius: 8px;
      height: 500px;
    }
    &--label {
      margin: 24px 0 8px;
    }
    &--btn {
      margin-top: 20px;
      padding: 10px;
      border: none;
      border-radius: 8px;
      background-color: var(--hijaucerah);
      font-family: CircularBold;
      font-size: 16px;
    }
  }
`;
