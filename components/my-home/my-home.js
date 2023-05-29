import { html, LitElement } from "lit";
import { styles } from "./my-home-styles";

export class MyHome extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      characterSelected: { type: Object },
    };
  }

  constructor() {
    super();
    this.characterSelected = {};
  }

  render() {
    return html`
      <div class="container">
        <my-characters
          @characterSelected=${this._viewCharacter}
        ></my-characters>

        <user-information
          .characterData=${this.characterSelected}
        ></user-information>
      </div>
    `;
  }
  _viewCharacter = (e) => {
    this.characterSelected = e.detail.characterSelected;
  };
}

window.customElements.define("my-home", MyHome);
