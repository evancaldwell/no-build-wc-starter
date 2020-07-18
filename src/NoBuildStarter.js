import { LitElement, html, css } from 'lit-element';

import { Router } from '@vaadin/router';

// import './components/views/ViewOne';

export class NoBuildStarter extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
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

      header {
        padding: 40px 0 100px;
      }

      main {
        flex-grow: 1;
      }

      .logo > svg {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  firstUpdated() {
    const router = new Router(this.shadowRoot.querySelector('#outlet'));

    router.setRoutes([
      {path: '/', component: 'view-main'},
      {path: '/view-one', component: 'view-one', action: () => import('./components/views/ViewOne')},
      {path: '(.*)', component: 'view-not-found'}
    ]);
  }

  render() {
    return html`
      <header>
        <nav>
          <a href="/">View Main</a>
          <a href="/view-one">View One</a>
          <a href="/view-garbage">Bad Link</a>
          <a href="/view-not-found">Not Found</a>
        </nav>
      </header>

      <main>
        <div id="outlet"></div>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}
