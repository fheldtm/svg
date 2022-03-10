const content = `
  <div>template</div>
`

class ArticleLists extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return []
  }

  connectedCallback() {
    const template = document.createElement('template')
    template.innerHTML = content
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.append(template.content.cloneNode(true))
  }

  disconnectedCallback() {}

  attributeChangedCallback() {}

  render() {
  }
}

window.customElements.define('article-lists', ArticleLists)
