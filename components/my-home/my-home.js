import { html, LitElement } from "lit";
import { styles } from "./my-home-styles";

export class MyHome extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      characterSelected: { type: Object },
      charactersList: { type: Array },
    };
  }

  constructor() {
    super();
    this.characterSelected = {};
    this.charactersList = [];
  }

  render() {
    return html`
      <div class="container">
        <my-characters
          @characterSelected=${this._viewCharacter}
          .charactersList=${this.charactersList}
        ></my-characters>

        <user-information
          .characterData=${this.characterSelected}
          @listToHome=${this._handleChangeList}
        ></user-information>
      </div>
    `;
  }
  _viewCharacter = (e) => {
    console.log("view", e.detail);
    this.characterSelected = e.detail.characterSelected;
  };

  _handleChangeList = (list) => {
    console.log("list", list.detail.charactersList);
    this.charactersList = list.detail.charactersList;
  };
}

window.customElements.define("my-home", MyHome);
