const content = `
  <style>
    div,
    p,
    ul,
    li,
    h1 {
      margin: 0;
      padding: 0;
      font-family: 'MaruBuri', 'Noto Sans KR';
    }
    .side-menu {
      width: 250px;
      height: 100%;
      border-right:1px solid #000;
    }
    .title {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #EEE;
    }
    .title h1 {
      font-size: 24px;
      font-weight: 500;
    }
    .menu {
      width:100%;
      height: calc(100% - 60px);
    }
    .menu__nav {
      width: 100%;
      height: 100%;
      padding: 20px;
    }
    .menu__list {
      border-bottom: 1px solid #eee;
      padding-bottom: 20px;
    }
    .menu__title {
      font-size: 18px;
      padding-bottom: 10px;
    }
    .menu__links {}
    .menu__links li {
      list-style: none;
    }
    .menu__links li a {
      text-decoration: none;
      padding: 5px 0;
    }
  </style>
  
  <aside class="side-menu">
    <div class="title">
      <h1>svg</h1>
    </div>
    <section class="menu">
      <nav class="manu__nav">
        <div class="menu__list">
          <h2 class="menu__title">study</h2>
          <ul class="menu__links">
            <li><a href="./study-1">study-1</a></li>
          </ul>
        </div>
      </nav>
    </section>
  </aside>
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
