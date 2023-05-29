import { html, LitElement } from "lit";
import { styles } from "./user-information-styles";

export class UserInformation extends LitElement {
  static get styles() {
    return styles;
  }
  static get properties() {
    return {
      name: { type: String },
      characterData: { type: Object },
      charactersList: { type: Array },
    };
  }

  constructor() {
    super();
    this.name = "";
    this.characterData = {};
    this.charactersList = [];
  }

  render() {
    return html`
      <div class="container">
        <input @input=${this._handleChangeName} placeholder="Search..." />

        <character-data .characterData=${this.characterData}></character-data>
      </div>
    `;
  }

  _handleChangeName = (event) => {
    this.name = event.target?.value;

    let inputChange = new CustomEvent("inputChange", {
      detail: { inputValue: this.name },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(inputChange);
  };
}

window.customElements.define("user-information", UserInformation);
