import "./styles/globals.scss";

// the language used on the current page
const CURRENT_LANG = "EN";

// list of available translations with references to sources
const AVAILABLE_LANGS = {
  EN: {
    name: "English",
    source: "https://wallet.helpscoutdocs.com/",
  },
  RU: {
    name: "Русский",
    source: "https://walletru.helpscoutdocs.com/",
  },
};

function addLangToggle() {
  const navEl = document.querySelector("nav[role='navigation']");
  const navList = document.querySelector("ul.nav");

  if (!navEl || !navList) {
    return;
  }

  const defaultLang = document.createElement("span");
  defaultLang.className = "defaultLang";
  defaultLang.innerHTML = CURRENT_LANG;
  navEl.appendChild(defaultLang);

  let toggleEl = document.createElement("li");
  const currentLangData = AVAILABLE_LANGS[CURRENT_LANG];
  toggleEl.innerHTML = `
      <a style="pointer-events:none;">
        <span>${currentLangData.name}</span>
        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22" fill="none">
          <path d="M1.5 15.5L5.83176 20.7944C5.91474 20.8958 6.07258 20.8866 6.14322 20.7762L14 8.5" stroke="#007AFF" stroke-width="2.33" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>`;
  navList.appendChild(toggleEl);

  toggleEl = document.createElement("li");
  Object.entries(AVAILABLE_LANGS).forEach(([key, langData]) => {
    if (key !== CURRENT_LANG) {
      toggleEl.innerHTML = `
      <a href="${langData.source}"><span>${langData.name}</span></a>`;
      navList.appendChild(toggleEl);
      toggleEl = document.createElement("li");
    }
  });

  // display dropdown when lang button clicked
  navEl.addEventListener("click", () => {
    navList.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (
      navList.classList.contains("active") &&
      e.target.className !== "defaultLang"
    )
      navList.classList.remove("active");
  });
}

// wrap paragraphs of text separated by a hr[role="separator"] for further styling
function formatArticle() {
  const articleWrapper = document.querySelector("#fullArticle");

  if (!articleWrapper) {
    return;
  }

  const contentBlockWrapper = document.createElement("div");
  contentBlockWrapper.className = "contentBlockWrapper";

  const contentNodes = articleWrapper.children;
  Object.values(contentNodes).forEach((node) => {
    if (node.role !== "separator") {
      contentBlockWrapper.appendChild(node.cloneNode(true));
      node.remove();
      return;
    }
    node.remove();
    articleWrapper.appendChild(contentBlockWrapper.cloneNode(true));
    contentBlockWrapper.innerHTML = "";
  });
}

document.addEventListener("DOMContentLoaded", initPage);
function initPage() {
  addLangToggle();
  formatArticle();
}
