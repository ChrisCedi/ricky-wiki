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

  render() {
    return this.characterData?.name
      ? html`
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
                  <div class="box-data">
                    <p class="subtitle">Type</p>
                    <p class="infoText">
                      ${this.characterData?.type?.length > 0
                        ? html`<p>${this.characterData.type}</p>`
                        : html`<p>Not defined</p>`}
                    </p>
                  </div>
                  <div class="box-data">
                    <p class="subtitle">Species</p>
                    <p class="infoText">${this.characterData.species}</p>
                  </div>
                  <div class="box-data">
                    <p class="subtitle">Gender</p>
                    <p class="infoText">${this.characterData.gender}</p>
                  </div>
                  <div class="box-data">
                    <p class="subtitle">Location</p>
                    <p class="infoText">${this.characterData.location?.name}</p>
                  </div>
                </div>
                <div>
                  <div class="box-data">
                    <p class="subtitle">ID</p>
                    <p class="infoText">${this.characterData.id}</p>
                  </div>
                  <div class="box-data">
                    <p class="subtitle">Status</p>
                    <p
                      class=${this.characterData.status == "Alive"
                        ? "status_alive"
                        : this.characterData.status == "Dead" && "status_dead"}
                    >
                      ${this.characterData.status}
                    </p>
                  </div>
                  <div class="box-data">
                    <p class="subtitle">Origin</p>
                    <p class="infoText">${this.characterData.origin?.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      : html`<div class="select-box"><p>Select a character</p></div>`;
  }
}

window.customElements.define("character-data", CharacterData);
