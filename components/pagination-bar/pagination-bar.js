import { html, LitElement } from "lit";
import { styles } from "./pagination-bar-styles";

export class PaginationBar extends LitElement {
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
    return html` <div class="container">
      <button>Anterior</button>
      <p>paginación</p>
      <button>Siguiente</button>
    </div>`;
  }
}

window.customElements.define("pagination-bar", PaginationBar);
