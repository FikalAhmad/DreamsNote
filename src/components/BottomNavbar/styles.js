import { css } from "@emotion/css";

export const BNContainer = css`
  font-family: CircularMedium;
  display: flex;
  justify-content: center;
  position: absolute;

  .btn {
    &--wrap {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 10px;
    }
    &--button {
      background: rgba(255, 255, 255, 0.45);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(15.5px);
      -webkit-backdrop-filter: blur(15.5px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      &:hover {
        background: rgba(255, 255, 255, 0.25);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(15.5px);
        -webkit-backdrop-filter: blur(15.5px);
        border-radius: 10px;
      }
      & img {
        width: 24px;
        height: 24px;
      }
    }
    &--link {
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 10px 15px;
      width: auto;
      height: auto;
      text-decoration: none;
      color: black;
    }
  }
`;
