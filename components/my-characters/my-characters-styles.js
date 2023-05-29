import { css } from "lit";

export const styles = css`
  .container {
    background-color: white;
    height: 100vh;
    overflow-y: scroll;
    background-color: #f2f3f4;
    border: 1px solid white;
  }

  .box-title {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 3px 8px, rgba(0, 0, 0, 0.23) 0px 3px 3px;
    position: fixed;
    background-color: white;
    width: 40%;
    z-index: 1;
  }

  .title {
    text-align: center;
    padding: 8px;
    font-family: "Quicksand:wght@300", sans-serif;
  }
  .box-list {
    padding-top: 115px;
    padding-bottom: 70px;
  }
  .footer {
    position: fixed;
    bottom: 0;
    padding: 12px 0px;
    background-color: white;
    width: 40%;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 3px 18px,
      rgba(0, 0, 0, 0.23) 0px 3px 3px;
  }
`;
