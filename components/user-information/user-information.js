import { html, LitElement } from "lit";
import { styles } from "./user-information-styles";

export class UserInformation extends LitElement {
  static get styles() {
    return styles;
  }
  static get properties() {
    return {
      characterData: { type: Object },
      charactersList: { type: Array },
    };
  }

  constructor() {
    super();
    this.characterData = {};
    this.charactersList = [];
  }

  render() {
    return html`
      <div class="container">
        <search-field @charactersList=${this._handleChangeList}></search-field>
        <character-data .characterData=${this.characterData}></character-data>
      </div>
    `;
  }

  _handleChangeList = (e) => {
    this.charactersList = e.detail.charactersList;
    let listToHome = new CustomEvent("listToHome", {
      detail: { charactersList: this.charactersList },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(listToHome);
  };
}

window.customElements.define("user-information", UserInformation);
