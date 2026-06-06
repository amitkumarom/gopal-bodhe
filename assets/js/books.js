// File: assets/js/books.js

// ====== GLOBAL CONFIG ======
const SITE_CONFIG = {
  // NOTE: WhatsApp format should ideally be country-code + number with NO '+' for wa.me.
  whatsappNumber: "+919930027257",

  // Default currency used when book.currency is missing
  defaultCurrency: "INR",

  // Instagram profile URL
  instagramUrl: "https://www.instagram.com/siddhishakti_publication",

  // Facebook page URL
  facebookUrl: "https://www.facebook.com/Siddhishaktipublication",

  // YouTube channel URL
  youtubeUrl: "https://www.youtube.com/@SiddhiShaktiPublication"
};


// Backwards-compatible constants (if any code still uses them)
const WHATSAPP_NUMBER = SITE_CONFIG.whatsappNumber;
const DEFAULT_CURRENCY = SITE_CONFIG.defaultCurrency;

// wa.me expects digits only (no leading '+'). We keep config flexible and sanitize at runtime.
function normalizeWhatsAppNumber(num) {
  return String(num || "").trim().replace(/^\+/, "");
}

// ====== AUTHOR METADATA ======
const AUTHOR = {
  name: "Gopal Bodhe",
  tagline: "Author, photographer, and pioneer of aerial imagery in India.",
  shortBio:
    "Gopal Bodhe is a photographer, author and former Indian Navy officer known for pioneering aerial photography in India. He has documented thousands of kilometres of coastline and heritage sites from the air and authored multiple books on Goa, Mumbai, Maharashtra and forts from a bird’s eye view.",
  email: "Siddhishakti1@gmail.com" // if you want to use the real email
};

// ====== BOOK DATA MODEL ======
// IMPORTANT:
// Keep your existing BOOKS array here – just paste it into this array body,
// do NOT change your titles, images, prices, etc.
const BOOKS = [

  {
    id: 1,
    title: "A Trade route",
    slug: "sample-book-one", // used for deep-links (#sample-book-one)
    subtitle: "Replace with real title and subtitle",
    description:
      "This is placeholder text for one of the books by Shri Gopal Bodhe. Replace with a 2–3 line description.",
    coverImage: "assets/images/books/a-trade-route.jpg",
    price: 399,
    currency: DEFAULT_CURRENCY,
    isbn: "978-1-23456-789-0",
    publisher: "Publisher Name",
    publicationYear: 2022,
    pages: 240,
    language: "Marathi",
    format: "Paperback",
    tags: ["sample"],
    isActive: true,
    externalPurchaseLink: "", // e.g. Amazon / Flipkart / Razorpay link if available
    whatsappMessageTemplate:
      "Namaste, I would like to order the book \"A Trade route\" by Shri Gopal Bodhe. Please share payment and shipping details."
  },
  {
    id: 2,
    title: "Mumbai Book",
    slug: "sample-book-two",
    subtitle: "",
    description:
      "Another placeholder entry. Add the real book name, theme, and a short blurb here.",
    coverImage: "assets/images/books/mumbai.jpg",
    price: 299,
    currency: DEFAULT_CURRENCY,
    isbn: "",
    publisher: "",
    publicationYear: 2020,
    pages: 180,
    language: "Marathi",
    format: "Paperback",
    tags: ["sample"],
    isActive: true,
    externalPurchaseLink: "",
    whatsappMessageTemplate:
      "Namaste, I am interested in buying \"Mumbai Book\" by Shri Gopal Bodhe. Please share payment and shipping details."
  },
  {
    id: 3,
    title: "Fort Book",
    slug: "sample-book-two",
    subtitle: "",
    description:
      "Another placeholder entry. Add the real book name, theme, and a short blurb here.",
    coverImage: "assets/images/books/fort-book.jpg",
    price: 299,
    currency: DEFAULT_CURRENCY,
    isbn: "",
    publisher: "",
    publicationYear: 2020,
    pages: 180,
    language: "Marathi",
    format: "Paperback",
    tags: ["sample"],
    isActive: true,
    externalPurchaseLink: "",
    whatsappMessageTemplate:
      "Namaste, I am interested in buying \"Fort Book\" by Shri Gopal Bodhe. Please share payment and shipping details."
  },
  {
    id: 4,
    title: "GOA Book",
    slug: "sample-book-two",
    subtitle: "",
    description:
      "Another placeholder entry. Add the real book name, theme, and a short blurb here.",
    coverImage: "assets/images/books/goa.jpg",
    price: 299,
    currency: DEFAULT_CURRENCY,
    isbn: "",
    publisher: "",
    publicationYear: 2020,
    pages: 180,
    language: "Marathi",
    format: "Paperback",
    tags: ["sample"],
    isActive: true,
    externalPurchaseLink: "",
    whatsappMessageTemplate:
      "Namaste, I am interested in buying \"GOA Book\" by Shri Gopal Bodhe. Please share payment and shipping details."
  },
  {
    id: 5,
    title: "Lakshadeep Book",
    slug: "sample-book-two",
    subtitle: "",
    description:
      "Another placeholder entry. Add the real book name, theme, and a short blurb here.",
    coverImage: "assets/images/books/lakshadeep.jpg",
    price: 299,
    currency: DEFAULT_CURRENCY,
    isbn: "",
    publisher: "",
    publicationYear: 2020,
    pages: 180,
    language: "Marathi",
    format: "Paperback",
    tags: ["sample"],
    isActive: true,
    externalPurchaseLink: "",
    whatsappMessageTemplate:
      "Namaste, I am interested in buying \"Lakshadeep Book\" by Shri Gopal Bodhe. Please share payment and shipping details."
  },
  {
    id: 6,
    title: "Lighthouse Book",
    slug: "sample-book-two",
    subtitle: "",
    description:
      "Another placeholder entry. Add the real book name, theme, and a short blurb here.",
    coverImage: "assets/images/books/lighthouse.jpg",
    price: 299,
    currency: DEFAULT_CURRENCY,
    isbn: "",
    publisher: "",
    publicationYear: 2020,
    pages: 180,
    language: "Marathi",
    format: "Paperback",
    tags: ["sample"],
    isActive: true,
    externalPurchaseLink: "",
    whatsappMessageTemplate:
      "Namaste, I am interested in buying \"Lighthouse Book\" by Shri Gopal Bodhe. Please share payment and shipping details."
  },
  {
    id: 7,
    title: "Maharashtra Book",
    slug: "sample-book-two",
    subtitle: "",
    description:
      "Another placeholder entry. Add the real book name, theme, and a short blurb here.",
    coverImage: "assets/images/books/maharashtra.jpg",
    price: 299,
    currency: DEFAULT_CURRENCY,
    isbn: "",
    publisher: "",
    publicationYear: 2020,
    pages: 180,
    language: "Marathi",
    format: "Paperback",
    tags: ["sample"],
    isActive: true,
    externalPurchaseLink: "",
    whatsappMessageTemplate:
      "Namaste, I am interested in buying \"Maharashtra Book\" by Shri Gopal Bodhe. Please share payment and shipping details."
  },
  {
    id: 8,
    title: "Sidhivinayak",
    slug: "sample-book-two",
    subtitle: "",
    description:
      "Another placeholder entry. Add the real book name, theme, and a short blurb here.",
    coverImage: "assets/images/books/sidhivinayak.jpg",
    price: 299,
    currency: DEFAULT_CURRENCY,
    isbn: "",
    publisher: "",
    publicationYear: 2020,
    pages: 180,
    language: "Marathi",
    format: "Paperback",
    tags: ["sample"],
    isActive: true,
    externalPurchaseLink: "",
    whatsappMessageTemplate:
      "Namaste, I am interested in buying \"Sidhivinayak Book\" by Shri Gopal Bodhe. Please share payment and shipping details."
  }
  // TODO: Add real books 3–9 here following the same structure
];

const CURATED_BUNDLES = [
  {
    id: "coastal-explorer",
    title: "Coastal Explorer Bundle",
    description: "Comprehensive aerial coverage of western India's shoreline with complementary lighthouse studies.",
    focus: "Coastline & islands",
    bookIds: [1, 4, 5, 6],
    perks: [
      "Signed note from Shri Gopal Bodhe",
      "Protective archival sleeves for each volume",
      "Curatorial brief for seafront exhibitions"
    ],
    dispatchEstimate: "Ships within 5 business days",
    audience: "Maritime museums, tourism ministries"
  },
  {
    id: "fortress-heritage",
    title: "Fortress Heritage Capsule",
    description: "Bird's-eye narratives of iconic forts and temple precincts from Mumbai to Siddhivinayak.",
    focus: "Forts & heritage corridors",
    bookIds: [3, 7, 8],
    perks: [
      "Lecture-ready talking points (PDF)",
      "Co-branded tent cards for gallery displays"
    ],
    dispatchEstimate: "Ships within 4 business days",
    audience: "Universities, history festivals"
  },
  {
    id: "city-skylines",
    title: "City Skylines Study Set",
    description: "Documenting Mumbai’s evolution with trade-route context for urban planning dialogues.",
    focus: "Urban studies",
    bookIds: [1, 2, 8],
    perks: [
      "Digital contact sheets for projection",
      "Option to add 20\" x 30\" mounted print at cost"
    ],
    dispatchEstimate: "Ships within 6 business days",
    audience: "Design schools, municipal archives"
  }
];

const FEATURED_COLLECTIONS = [
  {
    id: "maritime-trade",
    title: "Maritime Trade Routes",
    description: "Pair aerial narratives of ports and lighthouses to highlight the evolution of India's sea commerce.",
    badge: "Gallery talk kit",
    highlight: "Includes author Q&A prompts for docents.",
    bookIds: [1, 6]
  },
  {
    id: "sacred-skyline",
    title: "Sacred Skyline Stories",
    description: "Contrast temple towns and metropolitan shrines with immersive spreads ideal for lecture slides.",
    badge: "Campus tour",
    highlight: "Suggested 40-minute walkthrough outline.",
    bookIds: [2, 8]
  },
  {
    id: "island-biodiversity",
    title: "Island Biodiversity Watch",
    description: "Spotlight Lakshadweep’s delicate reefs alongside Goa’s wetlands for sustainability programming.",
    badge: "Environment week",
    highlight: "Comes with printable checklists for visitors.",
    bookIds: [4, 5]
  }
];

// ====== HELPERS ======

function getWhatsAppLinkForBook(book) {
  const base = `https://wa.me/${normalizeWhatsAppNumber(WHATSAPP_NUMBER)}`;
  const text =
    book.whatsappMessageTemplate ||
    `Namaste, I would like to order the book "${book.title}" by Shri Gopal Bodhe. Please share payment and shipping details.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

function getGlobalWhatsAppLink() {
  const base = `https://wa.me/${normalizeWhatsAppNumber(WHATSAPP_NUMBER)}`;
  const text = "Namaste, I am interested in the books of Shri Gopal Bodhe.";
  return `${base}?text=${encodeURIComponent(text)}`;
}

function getWhatsAppLinkWithMessage(message) {
  const base = `https://wa.me/${normalizeWhatsAppNumber(WHATSAPP_NUMBER)}`;
  return `${base}?text=${encodeURIComponent(message)}`;
}

function getTagsArray(book) {
  if (!book) return [];
  if (Array.isArray(book.tags)) {
    return book.tags.filter(Boolean);
  }
  return book.tags ? [book.tags] : [];
}

function getBooksByIds(ids) {
  if (!Array.isArray(ids)) {
    return [];
  }
  return ids
    .map((id) => BOOKS.find((book) => book.id === id))
    .filter(Boolean);
}

function getBundleWhatsAppLink(bundle, books) {
  const titles = books.map((book) => book.title).join(", ");
  const message = `Namaste, I would like to reserve the "${bundle.title}" bundle featuring ${titles}. Please share pricing, availability, and shipping details.`;
  return getWhatsAppLinkWithMessage(message);
}

function getCollectionWhatsAppLink(collection, books) {
  const titles = books.map((book) => book.title).join(", ");
  const message = `Namaste, I am planning a program around the "${collection.title}" collection (${titles}). Could you provide the recommended flow and order process?`;
  return getWhatsAppLinkWithMessage(message);
}

const SORT_LABELS = {
  featured: "Curated order",
  "title-asc": "Title A–Z",
  "year-desc": "Newest first",
  "pages-desc": "Longest books"
};

function applySortOrder(list, sortKey) {
  const key = sortKey || "featured";
  const next = list.slice();

  switch (key) {
    case "title-asc":
      next.sort((a, b) => (a.title || "").localeCompare(b.title || "", undefined, { sensitivity: "base" }));
      break;
    case "year-desc":
      next.sort((a, b) => (Number(b.publicationYear) || 0) - (Number(a.publicationYear) || 0));
      break;
    case "pages-desc":
      next.sort((a, b) => (Number(b.pages) || 0) - (Number(a.pages) || 0));
      break;
    default:
      break;
  }

  return next;
}

function computeCatalogStats(books) {
  const topicSet = new Set();
  const languageSet = new Set();

  books.forEach((book) => {
    getTagsArray(book).forEach((tag) => {
      const normalized = normalizeTag(tag);
      if (normalized) {
        topicSet.add(normalized);
      }
    });

    const lang = String(book.language || "").trim().toLowerCase();
    if (lang) {
      languageSet.add(lang);
    }
  });

  return {
    totalBooks: books.length,
    topics: topicSet.size,
    languages: languageSet.size
  };
}

// ====== CATALOG FILTERS + SEARCH (books.html) ======

function normalizeTag(tag) {
  return String(tag || "")
    .trim()
    .toLowerCase();
}

function getAllTags(books) {
  const map = new Map(); // normalized -> display
  books.forEach((b) => {
    getTagsArray(b).forEach((t) => {
      const n = normalizeTag(t);
      if (!n) return;
      if (!map.has(n)) map.set(n, String(t).trim());
    });
  });
  return Array.from(map.entries())
    .map(([norm, display]) => ({ norm, display }))
    .sort((a, b) => a.display.localeCompare(b.display));
}

function matchesSearch(book, q) {
  if (!q) return true;
  const tags = getTagsArray(book);
  const hay = `${book.title || ""} ${book.subtitle || ""} ${book.description || ""} ${tags.join(" ")}`.toLowerCase();
  return hay.includes(q);
}

function matchesTag(book, activeTagNorm) {
  if (!activeTagNorm || activeTagNorm === "all") return true;
  return getTagsArray(book)
    .map(normalizeTag)
    .includes(activeTagNorm);
}

// Unified card renderer so we don’t duplicate HTML in two functions
function renderBookCard(book, { featured = false } = {}) {
  const hasPrice = !!book.price;
  const currency = book.currency || DEFAULT_CURRENCY;
  const subtitleHtml = book.subtitle
    ? `<p class="book-subtitle">${book.subtitle}</p>`
    : "";
  const priceHtml = hasPrice
    //? `<p class="book-price">${currency} ${book.price}</p>`
    ? `<p class="book-price">Book Price On Request</p>`
    : "";

  const metaHtml = `
    <p class="book-meta">
      <span>${book.format || "-"}</span> · 
      <span>${book.language || "-"}</span> · 
      <span>${book.pages || "-"} pages</span>
    </p>
  `;

  const detailsHtml = `
    <dl class="book-details">
      <div><dt>ISBN</dt><dd>${book.isbn || "-"}</dd></div>
      <div><dt>Publisher</dt><dd>${book.publisher || "-"}</dd></div>
      <div><dt>Year</dt><dd>${book.publicationYear || "-"}</dd></div>
      <div><dt>Format</dt><dd>${book.format || "-"}</dd></div>
      <div><dt>Pages</dt><dd>${book.pages || "-"}</dd></div>
      <div><dt>Language</dt><dd>${book.language || "-"}</dd></div>
      ${
        hasPrice
          ? `<div><dt>Price</dt><dd>${currency} ${book.price}</dd></div>`
          : ""
      }
    </dl>
  `;

  const titleTag = featured ? "h3" : "h2";
  const detailsBlock = featured ? metaHtml : detailsHtml;
  const idAttr = featured ? "" : `id="${book.slug}"`;

  return `
    <article class="book-card" ${idAttr}>
      <img src="${book.coverImage}" alt="${book.title} cover" class="book-cover" loading="lazy" />
      <div class="book-info">
        <${titleTag}>${book.title}</${titleTag}>
        ${subtitleHtml}
        <p class="book-desc">${book.description || ""}</p>
        ${detailsBlock}
        ${priceHtml}
        <div class="book-actions">
          <a href="${getWhatsAppLinkForBook(book)}" target="_blank" class="btn btn-primary">
            Order via WhatsApp
          </a>
          ${
            !featured
              ? `
          <a href="${getGlobalWhatsAppLink()}" target="_blank" class="btn btn-outline">
            General Enquiry
          </a>
          `
              : `
          <a href="books.html#${book.slug}" class="btn btn-secondary">
            View Details
          </a>
          `
          }
          ${
            book.externalPurchaseLink
              ? `
          <a href="${book.externalPurchaseLink}" target="_blank" class="btn btn-outline">
            Buy Online
          </a>
          `
              : ""
          }
        </div>
      </div>
    </article>
  `;
}

// ====== RENDERING FUNCTIONS ======

function renderCuratedBundles() {
  const container = document.getElementById("bundles-grid");
  if (!container || !Array.isArray(CURATED_BUNDLES) || CURATED_BUNDLES.length === 0) return;

  const cards = CURATED_BUNDLES.map((bundle) => {
    const books = getBooksByIds(bundle.bookIds);
    if (!books.length) return "";
    const titles = books.map((book) => book.title);
    const includesLabel = `${books.length} ${books.length === 1 ? "book" : "books"} — ${titles.join(", ")}`;
    const perksHtml = Array.isArray(bundle.perks) && bundle.perks.length
      ? `<ul class="bundle-perks">${bundle.perks.map((perk) => `<li>${perk}</li>`).join("")}</ul>`
      : "";

    return `
      <article class="bundle-card" id="${bundle.id}">
        <p class="eyebrow">Curated bundle</p>
        <h3>${bundle.title}</h3>
        <p>${bundle.description || ""}</p>
        <ul class="bundle-meta">
          <li><strong>Focus:</strong> ${bundle.focus || "-"}</li>
          <li><strong>Includes:</strong> ${includesLabel}</li>
          ${bundle.dispatchEstimate ? `<li><strong>Dispatch:</strong> ${bundle.dispatchEstimate}</li>` : ""}
          ${bundle.audience ? `<li><strong>Recommended for:</strong> ${bundle.audience}</li>` : ""}
        </ul>
        <div class="bundle-books">
          ${books.map((book) => `<span class="bundle-book-pill">${book.title}</span>`).join("")}
        </div>
        ${perksHtml}
        <div class="bundle-actions">
          <a href="${getBundleWhatsAppLink(bundle, books)}" target="_blank" rel="noopener" class="btn btn-primary">Reserve bundle</a>
          <a href="#" class="btn btn-outline" data-global-whatsapp-link="true">Customise bundle</a>
        </div>
      </article>
    `;
  }).filter(Boolean).join("");

  container.innerHTML = cards || `<div class="empty-state">Curated bundles will be announced soon.</div>`;
}

function renderFeaturedCollections() {
  const container = document.getElementById("collections-grid");
  if (!container || !Array.isArray(FEATURED_COLLECTIONS) || FEATURED_COLLECTIONS.length === 0) return;

  const cards = FEATURED_COLLECTIONS.map((collection) => {
    const books = getBooksByIds(collection.bookIds);
    if (!books.length) return "";

    return `
      <article class="collection-card" id="${collection.id}">
        ${collection.badge ? `<span class="collection-badge">${collection.badge}</span>` : ""}
        <h3>${collection.title}</h3>
        <p>${collection.description || ""}</p>
        ${collection.highlight ? `<p><strong>${collection.highlight}</strong></p>` : ""}
        <div class="collection-books">
          ${books.map((book) => `<span class="collection-book">${book.title}</span>`).join("")}
        </div>
        <div class="collection-actions">
          <a href="${getCollectionWhatsAppLink(collection, books)}" target="_blank" rel="noopener" class="btn btn-primary">Plan this collection</a>
          <a href="#" class="btn btn-outline" data-global-whatsapp-link="true">Quick query</a>
        </div>
      </article>
    `;
  }).filter(Boolean).join("");

  container.innerHTML = cards || `<div class="empty-state">Featured collections will be updated shortly.</div>`;
}

function renderFeaturedBooks() {
  const container = document.getElementById("featured-books");
  if (!container) return;

  const activeBooks = BOOKS.filter((b) => b.isActive).slice(0, 3);
  container.innerHTML = activeBooks
    .map((book) => renderBookCard(book, { featured: true }))
    .join("");
}

function renderAllBooks() {
  const container = document.getElementById("all-books");
  if (!container) return;

  const filtersEl = document.getElementById("book-filters");
  const searchEl = document.getElementById("book-search-input");
  const sortEl = document.getElementById("book-sort-select");
  const summaryEl = document.getElementById("book-results-summary");
  const metricsEls = {
    total: document.getElementById("metric-total-books"),
    topics: document.getElementById("metric-topics"),
    languages: document.getElementById("metric-languages")
  };

  const activeBooks = BOOKS.filter((b) => b.isActive);
  const stats = computeCatalogStats(activeBooks);

  if (metricsEls.total) metricsEls.total.textContent = stats.totalBooks;
  if (metricsEls.topics) metricsEls.topics.textContent = stats.topics || 0;
  if (metricsEls.languages) metricsEls.languages.textContent = stats.languages || 0;

  const hasDynamicControls = filtersEl || searchEl || sortEl || summaryEl;

  // If the page doesn't have filter/search controls, just render the list (backwards compatible)
  if (!hasDynamicControls) {
    container.innerHTML = activeBooks
      .map((book) => renderBookCard(book, { featured: false }))
      .join("");
    return;
  }

  // State
  let activeTag = "all"; // normalized tag or "all"
  let searchQ = "";
  let activeSort = sortEl ? sortEl.value || "featured" : "featured";

  // Build filter buttons: required quick filters + any tags present in data
  const quickFilters = [
    { norm: "all", display: "All" },
    { norm: normalizeTag("Coastline"), display: "Coastline" },
    { norm: normalizeTag("Forts & Heritage"), display: "Forts & Heritage" },
    { norm: normalizeTag("Cities"), display: "Cities" },
    { norm: normalizeTag("Islands"), display: "Islands" }
  ];

  const merged = new Map();
  quickFilters.forEach((t) => merged.set(t.norm, t.display));
  getAllTags(activeBooks).forEach((t) => merged.set(t.norm, t.display));

  const filterList = Array.from(merged.entries()).map(([norm, display]) => ({ norm, display }));
  const filterDisplayMap = new Map(filterList.map((item) => [item.norm, item.display]));

  function paintFilters() {
    if (!filtersEl) return;

    filtersEl.innerHTML = filterList
      .map((t) => {
        const isActive = t.norm === activeTag;
        return `<button type="button" class="filter-btn${isActive ? " is-active" : ""}" data-tag="${t.norm}" aria-pressed="${isActive}">${t.display}</button>`;
      })
      .join("");
  }

  function paintSummary(shownCount, qDisplay) {
    if (!summaryEl) return;
    const totalText = `Showing ${shownCount} of ${activeBooks.length} books`;
    const details = [];

    if (activeTag && activeTag !== "all") {
      details.push(`filter: ${filterDisplayMap.get(activeTag) || "Selection"}`);
    }

    if (qDisplay) {
      details.push(`search: "${qDisplay}"`);
    }

    if (activeSort && activeSort !== "featured") {
      details.push(`sort: ${SORT_LABELS[activeSort] || activeSort}`);
    }

    summaryEl.textContent = details.length ? `${totalText} - ${details.join(", ")}` : totalText;
  }

  function paintGrid() {
    const qRaw = (searchQ || "").trim();
    const qNormalized = qRaw.toLowerCase();
    const filtered = activeBooks.filter((b) => matchesTag(b, activeTag) && matchesSearch(b, qNormalized));
    const sorted = applySortOrder(filtered, activeSort);

    container.innerHTML = sorted
      .map((book) => renderBookCard(book, { featured: false }))
      .join("");

    if (sorted.length === 0) {
      container.innerHTML = `<div class="empty-state">No books match your filter/search.</div>`;
    }

    paintSummary(sorted.length, qRaw);
  }

  // Initial render
  paintFilters();
  paintGrid();

  // Events (bind once per page render)
  if (filtersEl) {
    // Prevent duplicate handlers if renderAllBooks is called more than once
    filtersEl.dataset.bound = filtersEl.dataset.bound || "";
    if (filtersEl.dataset.bound !== "true") {
      filtersEl.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-tag]");
        if (!btn) return;
        activeTag = btn.getAttribute("data-tag") || "all";
        paintFilters();
        paintGrid();
      });
      filtersEl.dataset.bound = "true";
    }
  }

  if (searchEl) {
    searchEl.dataset.bound = searchEl.dataset.bound || "";
    if (searchEl.dataset.bound !== "true") {
      searchEl.addEventListener("input", (e) => {
        searchQ = e.target.value || "";
        paintGrid();
      });
      searchEl.dataset.bound = "true";
    }
  }

  if (sortEl) {
    sortEl.dataset.bound = sortEl.dataset.bound || "";
    if (sortEl.dataset.bound !== "true") {
      sortEl.addEventListener("change", (e) => {
        activeSort = e.target.value || "featured";
        paintGrid();
      });
      sortEl.dataset.bound = "true";
    }
  }
}

// Floating WhatsApp button
// Floating social icons (WhatsApp, Instagram, Facebook)
function setupFloatingSocialIcons() {
  const whatsappBtn = document.getElementById("floating-whatsapp");
  const instagramBtn = document.getElementById("floating-instagram");
  const facebookBtn = document.getElementById("floating-facebook");
  const youtubeBtn = document.getElementById("floating-youtube");

  // WhatsApp
  if (whatsappBtn && typeof getGlobalWhatsAppLink === "function") {
    whatsappBtn.href = getGlobalWhatsAppLink();
  }

  // Instagram
  if (instagramBtn && SITE_CONFIG.instagramUrl) {
    instagramBtn.href = SITE_CONFIG.instagramUrl;
  }

  // Facebook
  if (facebookBtn && SITE_CONFIG.facebookUrl) {
    facebookBtn.href = SITE_CONFIG.facebookUrl;
  }

  // YouTube
  if (youtubeBtn && SITE_CONFIG.youtubeUrl) {
    youtubeBtn.href = SITE_CONFIG.youtubeUrl;
  }
}

// Backwards compatibility shim (older code may still call this)
function setupFloatingWhatsApp() {
  setupFloatingSocialIcons();
}


// Instagram links (header/footer)
function setupInstagramLinks() {
  if (!SITE_CONFIG.instagramUrl) return;
  const links = document.querySelectorAll('[data-instagram-link="true"]');
  links.forEach((el) => {
    el.href = SITE_CONFIG.instagramUrl;
  });
}

// Facebook links (header/footer)
function setupFacebookLinks() {
  if (!SITE_CONFIG.facebookUrl) return;
  const links = document.querySelectorAll('[data-facebook-link="true"]');
  links.forEach((el) => {
    el.href = SITE_CONFIG.facebookUrl;
  });
}

function setupGlobalWhatsAppButtons() {
  if (typeof getGlobalWhatsAppLink !== "function") return;
  const link = getGlobalWhatsAppLink();
  const buttons = document.querySelectorAll('[data-global-whatsapp-link="true"]');
  buttons.forEach((btn) => {
    btn.href = link;
  });
}

// SEO helpers
function injectAuthorStructuredData() {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR.name,
    description: AUTHOR.shortBio,
    jobTitle: "Author",
    email: AUTHOR.email,
    url: "https://sidhishakti.github.io/gopal-bodhe/",
    sameAs: [
      SITE_CONFIG.instagramUrl,
      SITE_CONFIG.facebookUrl,
      SITE_CONFIG.youtubeUrl
    ].filter(Boolean)
  });
  document.head.appendChild(script);
}

function injectBookStructuredData() {
  const activeBooks = BOOKS.filter((b) => b.isActive);
  if (!activeBooks.length) return;

  // Resolve a relative asset path to an absolute URL using the browser
  function abs(path) {
    if (!path) return undefined;
    const a = document.createElement("a");
    a.href = path;
    return a.href;
  }

  const items = activeBooks.map((book) => ({
    "@type": "Book",
    name: book.title,
    description: book.description || undefined,
    author: { "@type": "Person", name: AUTHOR.name },
    isbn: book.isbn || undefined,
    numberOfPages: book.pages || undefined,
    inLanguage: book.language || undefined,
    publisher: book.publisher ? { "@type": "Organization", name: book.publisher } : undefined,
    datePublished: book.publicationYear ? String(book.publicationYear) : undefined,
    image: abs(book.coverImage),
    bookFormat: book.format === "Paperback" ? "https://schema.org/Paperback" : undefined,
    offers: book.price
      ? {
          "@type": "Offer",
          price: book.price,
          priceCurrency: book.currency || DEFAULT_CURRENCY,
          availability: "https://schema.org/InStock"
        }
      : undefined
  }));

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify({ "@context": "https://schema.org", "@graph": items });
  document.head.appendChild(script);
}

// ====== BOOTSTRAP ======

document.addEventListener("DOMContentLoaded", () => {
  // --- Site content setup ---
  if (typeof renderFeaturedBooks === "function") {
    renderFeaturedBooks();
  }

  if (typeof renderAllBooks === "function") {
    renderAllBooks();
  }

  if (typeof renderCuratedBundles === "function") {
    renderCuratedBundles();
  }

  if (typeof renderFeaturedCollections === "function") {
    renderFeaturedCollections();
  }

  // Floating social icons
  if (typeof setupFloatingSocialIcons === "function") {
    setupFloatingSocialIcons();
  } else if (typeof setupFloatingWhatsApp === "function") {
    // fallback if only the old function exists
    setupFloatingWhatsApp();
  }

  // Header/footer Instagram links
  if (typeof setupInstagramLinks === "function") {
    setupInstagramLinks();
  }

  // Header/footer Facebook links (if used)
  if (typeof setupFacebookLinks === "function") {
    setupFacebookLinks();
  }

  if (typeof setupGlobalWhatsAppButtons === "function") {
    setupGlobalWhatsAppButtons();
  }

  if (typeof injectAuthorStructuredData === "function") {
    injectAuthorStructuredData();
  }

  if (typeof injectBookStructuredData === "function") {
    injectBookStructuredData();
  }

  // Wire main WhatsApp button (if present)
  const mainBtn = document.getElementById("whatsapp-contact-main");
  if (mainBtn && typeof getGlobalWhatsAppLink === "function") {
    mainBtn.href = getGlobalWhatsAppLink();
  }

  // Footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
