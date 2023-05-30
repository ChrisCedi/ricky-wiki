import { html, LitElement } from "lit";
import { styles } from "./my-home-styles";
import { ApiModule } from "../../api/ApiModule";
import { listMap } from "./helpers";

export class MyHome extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      characterSelected: { type: Object },
      charactersList: { type: Array },
      info: { type: Object },
      currentPage: { type: Number },
      name: { type: String },
    };
  }

  constructor() {
    super();
    this.characterSelected = {};
    this.charactersList = [];
    this.info = {};
    this.currentPage = 1;
    this.name = "";
  }

  firstUpdated() {
    this._handleChangeList({ detail: { inputValue: "" } });
  }

  render() {
    return html`
      <div class="container">
        <my-characters
          @characterSelected=${this._viewCharacter}
          .charactersList=${this.charactersList}
          .info=${this.info}
          @currentPage=${this._changePage}
        ></my-characters>

        <user-information
          .characterData=${this.characterSelected}
          @inputChange=${this._handleChangeList}
        ></user-information>
      </div>
    `;
  }
  _viewCharacter = (e) => {
    this.characterSelected = e.detail.characterSelected;
    setTimeout(() => {
      this._selectCharacter(e.detail.characterSelected);
    }, 100);
  };

  _selectCharacter = (character) => {
    this.charactersList = this.charactersList.map((item) => ({
      ...item,
      active: item.id === character.id,
    }));
  };

  _changePage(e) {
    this.currentPage = e.detail.currentPage;
    this._getCharacters(this.name, this.currentPage);
  }

  _handleChangeList = (list) => {
    this.name = list.detail.inputValue;
    this._getCharacters(this.name, this.currentPage);
  };

  _getCharacters = (name, page) => {
    ApiModule(this.name, this.currentPage).then((data) => {
      this.charactersList = listMap(data.results);
      this.info = data.info;
    });
  };
}

window.customElements.define("my-home", MyHome);
