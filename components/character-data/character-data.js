import { html, LitElement } from "lit";
import { styles } from "./character-data-styles";

export class CharacterData extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      characterData: { type: Object },
    };
  }

  constructor() {
    super();
    this.characterData = {};
  }

  firstUpdated() {
    console.log(this.characterData);
  }
  render() {
    return html`
      <div class="character-container">
        <img
          src=${this.characterData.image}
          alt=${this.characterData.name}
          class="avatar"
        />
        <div class="body">
          <h1>${this.characterData.name}</h1>
          <div class="information">
            <div>
              <div>
                <p class="subtitle">Type</p>
                <p>
                  ${this.characterData?.type?.length > 0
                    ? html`<p>${this.characterData.type}</p>`
                    : html`<p>Not defined</p>`}
                </p>
              </div>
              <div>
                <p class="subtitle">Species</p>
                <p>${this.characterData.species}</p>
              </div>
              <div>
                <p class="subtitle">Gender</p>
                <p>${this.characterData.gender}</p>
              </div>
              <div>
                <p class="subtitle">Location</p>
                <p>${this.characterData.location.name}</p>
              </div>
            </div>
            <div>
              <div>
                <p class="subtitle">ID</p>
                <p>${this.characterData.id}</p>
              </div>
              <div>
                <p class="subtitle">Status</p>
                <p
                  class=${this.characterData.status == "Alive"
                    ? "status_alive"
                    : this.characterData.status == "Dead" && "status_dead"}
                >
                  ${this.characterData.status}
                </p>
              </div>
              <div>
                <p class="subtitle">Origin</p>
                <p>${this.characterData.origin?.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define("character-data", CharacterData);
