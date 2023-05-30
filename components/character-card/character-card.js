import { html, LitElement } from "lit";
import { styles } from "./character-card-styles";

export class CharacterCard extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      character: { type: Object },
    };
  }

  constructor() {
    super();
    this.character = {};
  }

  render() {
    return html` <div class=${this.character.active ? "active" : "container"}>
      <img
        src=${this.character.image}
        alt=${this.character.name}
        class="image-card"
      />
      <p>${this.character.name}</p>
    </div>`;
  }
}

window.customElements.define("character-card", CharacterCard);
