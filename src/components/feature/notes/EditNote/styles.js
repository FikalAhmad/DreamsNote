import { css } from "@emotion/css";

export const EditNoteContainer = css`
  background-color: var(--birutua);
  .editnote {
    margin: auto;
    padding: 42px 50px;
    font-family: CircularMedium;
    min-height: 100vh;
    background-color: var(--birumuda);
    color: var(--birutua);
  }
  .heading {
    &-1 {
      font-family: CircularBold;
      font-size: 32px;
      display: flex;
      justify-content: center;
    }
  }
  .form {
    display: flex;
    flex-direction: column;
    &--input {
      padding: 20px 16px;
      font-size: 16px;
      font-family: CircularLight;
      border: none;
      border-radius: 8px;
      &:focus {
        outline: 0;
      }
    }
    &--input_textarea {
      font-family: CircularLight;
      resize: none;
      overflow: hidden;
      padding: 20px 16px;
      font-size: 16px;
      border: none;
      border-radius: 8px;
      height: 350px;
      &:focus {
        outline: 0;
      }
    }
    &--label {
      font-size: 20px;
      margin: 24px 0 8px;
      &::after {
        content: ":";
      }
    }
    &--btn {
      cursor: pointer;
      margin-top: 20px;
      padding: 10px;
      border: none;
      border-radius: 8px;
      background-color: var(--birutua);
      color: var(--birumuda);
      font-family: CircularBold;
      font-size: 16px;
      width: 100%;
    }
  }
`;
