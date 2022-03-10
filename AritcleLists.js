class ArticleLists extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return []
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <div>template</div>
    `
  }

  disconnectedCallback() {}

  attributeChangedCallback() {}

  render() {
  }
}

window.customElements.define('article-lists', ArticleLists)
