import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from '../../open-wc-logo.js';

export class ViewMain extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
      }

      main {
        flex-grow: 1;
      }
    `;
  }

  render() {
    return html`
      <main>
          <div class="logo">${openWcLogo}</div>
          <h1>My app</h1>
          <p>Edit <code>src/NoBuildStarter.js</code> and save to reload.</p>
          <a class="app-link"
             href="https://open-wc.org/developing/#code-examples"
             target="_blank"
             rel="noopener noreferrer">
            Code examples
          </a>
      </main>
    `;
  }
}
