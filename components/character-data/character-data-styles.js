import { css } from "lit";

export const styles = css`
  .container {
    background-color: #f2f3f4;
    height: 100vh;
    padding: 35px;
  }

  .character-container {
    background-color: white;
    margin-top: 25px;
    padding: 15px 25px;
    border-radius: 20px;
    display: flex;
  }

  .body {
    padding-left: 30px;
  }

  h1 {
    padding: 0px;
    font-family: "Quicksand:wght@300", sans-serif;
  }

  .information {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 40px;
  }

  .subtitle {
    font-weight: 600;
    text-transform: uppercase;
    padding-bottom: 0;
  }

  .avatar {
    height: 300px;
    border-radius: 20px;
    margin-top: 20px;
  }

  p {
    font-family: "Quicksand:wght@300", sans-serif;
  }

  .status_alive {
    background-color: #82e0aa;
    width: fit-content;
    padding: 12px;
    border-radius: 10px;
  }
  .status_dead {
    background-color: #ec7063;
    width: fit-content;
    padding: 12px;
    border-radius: 10px;
  }
`;
