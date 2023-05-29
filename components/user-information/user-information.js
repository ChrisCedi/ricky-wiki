import { html, LitElement } from "lit";
import { styles } from "./user-information-styles";

export class UserInformation extends LitElement {
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
    this.characterData = {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
      ],
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    };
  }

  render() {
    return html`
      <div class="container">
        <search-field></search-field>
        <character-data .characterData=${this.characterData}></character-data>
      </div>
    `;
  }
}

window.customElements.define("user-information", UserInformation);
