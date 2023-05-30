import { css } from "lit";

export const styles = css`
  .container {
    background-color: #f2f3f4;
    height: 100vh;
    padding: 35px;
  }

  .select-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .character-container {
    background-color: white;
    margin-top: 15px;
    padding: 15px 25px;
    border-radius: 20px;
    display: flex;
  }

  .body {
    padding-left: 25px;
  }

  h1 {
    padding: 0px;
    font-family: "Quicksand:wght@300", sans-serif;
  }

  .information {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 30px;
  }

  .box-data {
    padding-bottom: 10px;
  }

  .subtitle {
    font-weight: 600;
    text-transform: uppercase;
    font-family: "Quicksand:wght@300", sans-serif;
  }
  .infoText {
    font-family: "Quicksand:wght@300", sans-serif;
  }
  p {
    margin: 0;
  }

  .avatar {
    height: 260px;
    border-radius: 20px;
    margin-top: 20px;
  }

  .status_alive {
    background-color: #82e0aa;
    width: fit-content;
    padding: 12px;
    border-radius: 10px;
    font-family: "Quicksand:wght@300", sans-serif;
  }
  .status_dead {
    background-color: #ec7063;
    width: fit-content;
    padding: 12px;
    border-radius: 10px;
    font-family: "Quicksand:wght@300", sans-serif;
  }
`;
