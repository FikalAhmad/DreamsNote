import { css } from "@emotion/css";

export const BNContainer = css`
  font-family: CircularMedium;
  display: flex;
  justify-content: center;
  position: absolute;

  .btn {
    &--wrap {
    }
    &--button {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(2px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      &:hover {
        background: rgba(5, 5, 5, 0.05);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(15.5px);
        -webkit-backdrop-filter: blur(15.5px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.18);
      }
    }
    &--link {
      display: inline-block;
      padding: 15px;
      width: auto;
      height: auto;
    }
  }
`;
