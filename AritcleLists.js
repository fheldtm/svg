<template id="myTemplate">
  <div>template</div>
</template>

class ArticleLists extends HTMLElement {
  constructor() {
    super();

    const template = document.getElementById('myTemplate')
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.append(template.content.cloneNode(true))
  }

  static get observedAttributes() {
    return []
  }

  connectedCallback() {}

  disconnectedCallback() {}

  attributeChangedCallback() {}

  render() {
  }
}

window.customElements.define('article-lists', ArticleLists)