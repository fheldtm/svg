<template id="myTemplate">
  <div>template</div>
</template>

class ArticleLists extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return []
  }

  connectedCallback() {
    const template = document.getElementById('myTemplate')
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.append(template.content.cloneNode(true))
  }

  disconnectedCallback() {}

  attributeChangedCallback() {}

  render() {
  }
}

window.customElements.define('article-lists', ArticleLists)
