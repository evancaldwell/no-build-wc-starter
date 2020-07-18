import { LitElement, html, css } from 'lit-element';

export class ViewOne extends LitElement {
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
        <h1>View One</h1>

        <h2>Test Links</h2>
        <nav>
          <a href="/">Main</a>
          <a href="/view-not-found">Not Found</a>
        </nav>

        <p>Edit <code>src/ViewOne.js</code> and save to reload.</p>
      </main>
    `;
  }
}

customElements.define('view-one', ViewOne);