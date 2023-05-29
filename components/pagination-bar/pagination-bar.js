import { html, LitElement } from "lit";
import { styles } from "./pagination-bar-styles";

export class PaginationBar extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      statePage: { type: Number },
      info: { type: Object },
    };
  }

  constructor() {
    super();
    this.statePage = 1;
    this.info = {};
  }

  render() {
    return html` <div class="container">
      <button
        @click=${() => this._handleChangePage("decrement")}
        .disabled=${this.statePage === 1}
      >
        <
      </button>
      <p>${`${this.statePage}/ ${this.info.pages}`}</p>
      <button
        @click=${() => this._handleChangePage("increment")}
        .disabled=${this.statePage === this.info.pages}
      >
        >
      </button>
    </div>`;
  }

  _handleChangePage = (type) => {
    if (type === "increment") {
      if (this.statePage) {
        this.statePage++;
      }
    } else {
      if (this.statePage > 1) {
        this.statePage--;
      }
    }

    let currentPage = new CustomEvent("currentPage", {
      detail: { currentPage: this.statePage },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(currentPage);
  };
}

window.customElements.define("pagination-bar", PaginationBar);
