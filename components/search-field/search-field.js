import { html, LitElement } from "lit";
import { styles } from "./search-field-styles";

export class SearchField extends LitElement {
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
    return html` <div>
      <input @input=${this._handleChangeName} placeholder="Search..." />
    </div>`;
  }

  _handleChangeName = (event) => {
    const input = event.target;
    this.name = input.value;
  };
}

window.customElements.define("search-field", SearchField);
