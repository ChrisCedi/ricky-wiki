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
      statePage: { type: Number },
    };
  }

  constructor() {
    super();
    this.info = {};
    this.charactersList = [];
    this.characterSelected = {};
    this.statePage = 1;
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
                  @click=${() => this._handleChangeCharacter(character)}
                ></character-card>
              `
          )}
        </div>
        <div class="footer">
          <pagination-bar
            .info=${this.info}
            @currentPage=${this._changePage}
          ></pagination-bar>
        </div>
      </div>
    `;
  }

  _changePage = (page) => {
    this.statePage = page.detail.currentPage;
    let currentPage = new CustomEvent("currentPage", {
      detail: { currentPage: this.statePage },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(currentPage);
  };

  _handleChangeCharacter = (character) => {
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
