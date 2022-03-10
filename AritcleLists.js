const content = `
  <style>
    div,
    p,
    ul,
    li,
    h1,
    h2 {
      margin: 0;
      padding: 0;
    }
    .side-menu {
      width: 250px;
      height: 100%;
      border-right: 1px solid #eee;
      box-sizing: border-box;
      display: inline-block;
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
      overflow: auto;
    }
    .menu__list {
      border-bottom: 1px solid #eee;
      padding: 24px 0 24px;
    }
    .menu__title {
      font-size: 18px;
      padding: 16px 16px;
      font-weight: 700;
    }
    .menu__links {}
    .menu__links li {
      list-style: none;
    }
    .menu__links li a {
      text-decoration: none;
      color: #777;
      display: block;
      padding: 16px 0 16px 30px;
    }
  </style>
  
  <aside class="side-menu">
    <div class="title">
      <h1>svg</h1>
    </div>
    <section class="menu">
      <nav id="menuNav" class="menu__nav">
      </nav>
    </section>
  </aside>
`

class ArticleLists extends HTMLElement {
  constructor() {
    super();

    this.articles = [
      {
        idx: 0,
        title: 'study',
        lists: [
          {
            index: 0,
            link: './study-1',
            str: 'study-1'
          }
        ]
      }
    ]
  }

  static get observedAttributes() {
    return []
  }

  connectedCallback() {
    const template = document.createElement('template')
    template.innerHTML = content
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.append(template.content.cloneNode(true))

    const nav = this.shadowRoot.getElementById('menuNav')

    this.articles.forEach(article => {
      const list = document.createElement('div')
      list.classList.add('menu__list')

      const title = document.createElement('h2')
      title.classList.add('menu__title')
      title.innerHTML = article.title
      list.appendChild(title)

      const links = document.createElement('ul')
      links.classList.add('menu__links')
      list.appendChild(links)

      article.lists.reduce((_, lst) => {
        const li = document.createElement('li')
        links.appendChild(li)

        const a = document.createElement('a')
        a.href = lst.link
        a.innerHTML = lst.str
        li.appendChild(a)
      }, null)

      nav.appendChild(list)
    })
  }

  disconnectedCallback() {}

  attributeChangedCallback() {}

  render() {
  }
}

window.customElements.define('article-lists', ArticleLists)
