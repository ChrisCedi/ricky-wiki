import { html, LitElement } from "lit";
import { styles } from "./search-field-styles";
import { ApiModule } from "../../api/ApiModule";

export class SearchField extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      name: { type: String },
      charactersList: { type: Array },
    };
  }

  constructor() {
    super();
    this.name = "";
    this.charactersList = [];
  }

  render() {
    return html` <div>
      <input @input=${this._handleChangeName} placeholder="Search..." />
    </div>`;
  }

  _getCharacters = () => {
    ApiModule("").then((data) => (this.charactersList = data.results));
  };

  _handleChangeName = (event) => {
    console.log(event);

    this.name = event.target?.value;
    ApiModule(this.name).then((data) => (this.charactersList = data.results));

    let charactersList = new CustomEvent("charactersList", {
      detail: { charactersList: this.charactersList },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(charactersList);
  };
}

window.customElements.define("search-field", SearchField);
