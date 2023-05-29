import { css } from "lit";

export const styles = css`
  .container {
    display: flex;
    justify-content: center;
    background-color: white;
    margin: 20px 30px;
    border-radius: 15px;
    transition: transform 0.3s ease;
    cursor: pointer;
    align-items: center;
  }

  .container:hover {
    transform: scale(1.1);
  }

  .image-card {
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
  }

  p {
    font-family: "Quicksand:wght@300", sans-serif;
    font-size: 20px;
  }
`;
