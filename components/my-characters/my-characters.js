import { html, LitElement } from "lit";
import { styles } from "./my-characters-styles";
import { ApiModule } from "../../api/ApiModule";

export class MyCharacters extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      info: { type: Object },
      charactersList: {
        type: Array,
      },
      characterSelected: { type: Object },
    };
  }

  constructor() {
    super();
    this.info = {};
    this.charactersList = [];
    this.characterSelected = {};
  }

  firstUpdated() {
    this.getCharacters();
  }

  render() {
    return html`
      <div class="container">
        <div class="box-title">
          <h1 class="title">characters</h1>
        </div>
        <div class="box-list">
          ${this.charactersList.map(
            (character) =>
              html`
                <character-card
                  .character=${character}
                  @click=${() => this.handleChangeCharacter(character)}
                ></character-card>
              `
          )}
        </div>
        <div class="footer"><pagination-bar></pagination-bar></div>
      </div>
    `;
  }

  getCharacters = () => {
    ApiModule("").then((data) => (this.charactersList = data.results));
  };

  handleChangeCharacter = (character) => {
    let characterSelected = new CustomEvent("characterSelected", {
      detail: {
        characterSelected: character,
      },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(characterSelected);
  };
}

window.customElements.define("my-characters", MyCharacters);
