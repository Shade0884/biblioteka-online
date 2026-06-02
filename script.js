"use strict";

const BOOKS = [
  { id: 1,  title: "Wiedźmin: Ostatnie życzenie",       author: "Andrzej Sapkowski", category: "Fantasy",  available: true,  cover: "https://m.media-amazon.com/images/I/41+GXBZwdlL._SY445_SX342_ML2_.jpg",                                                                          description: "Klasyczny zbiór opowiadań o Geralcie z Rivii — wiedźminie polującym na potwory." },
  { id: 2,  title: "Harry Potter i Kamień Filozoficzny", author: "J.K. Rowling",       category: "Fantasy",  available: true,  cover: "https://m.media-amazon.com/images/I/81nstsLEyJL._SY466_.jpg",                                                                                  description: "Pierwsza część kultowej serii o młodym czarodzieju." },
  { id: 3,  title: "Czysty kod",                         author: "Robert C. Martin",   category: "IT",       available: false, cover: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/czysty-kod-podrecznik-dobrego-programisty-b-iext194526990.jpg",           description: "Przewodnik po sztuce pisania dobrego kodu." },
  { id: 4,  title: "JavaScript: The Good Parts",         author: "Douglas Crockford",  category: "IT",       available: true,  cover: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/javascript-mocne-strony-b-iext180695414.jpg",                            description: "Najważniejsze elementy języka JavaScript omówione przez eksperta." },
  { id: 5,  title: "Sapiens: Historia ludzkości",        author: "Yuval Noah Harari",  category: "Nauka",    available: true,  cover: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/sapiens-opowiesc-graficzna-narodziny-ludzkosci-czesc-1-b-iext202727535.jpg", description: "Fascynująca opowieść o historii gatunku homo sapiens." },
  { id: 6,  title: "Krótka historia czasu",              author: "Stephen Hawking",    category: "Nauka",    available: true,  cover: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/krotka-historia-czasu-b-iext218866783.jpg",                              description: "Przystępne wprowadzenie do kosmologii i fizyki kwantowej." },
  { id: 7,  title: "Zbrodnia i kara",                    author: "Fiodor Dostojewski", category: "Klasyka",  available: false, cover: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/zbrodnia-i-kara-b-iext196982673.jpg",                                    description: "Psychologiczna powieść o zbrodni, winie i odkupieniu." },
  { id: 8,  title: "Mistrz i Małgorzata",                author: "Michaił Bułhakow",   category: "Klasyka",  available: true,  cover: "https://staticl.poczytaj.pl/310000/mistrz-i-malgorzata-seria-klasyka-michail-bulhakov,310509-s.jpg",                                          description: "Satyryczna powieść o diable odwiedzającym Moskwę." },
  { id: 9,  title: "Dune",                               author: "Frank Herbert",      category: "Sci-Fi",   available: true,  cover: "https://bonito.pl/cache/9/2b52da2-diuna-powiesc-grafic_800.webp",                                                                             description: "Epicka saga science-fiction rozgrywająca się na pustynnej planecie Arrakis." },
  { id: 10, title: "1984",                               author: "George Orwell",      category: "Sci-Fi",   available: false, cover: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/1984-b-iext142459687.jpg",                                              description: "Dystopijska wizja totalitarnego społeczeństwa pod rządami Wielkiego Brata." },
  { id: 11, title: "Władca Pierścieni",                  author: "J.R.R. Tolkien",     category: "Fantasy",  available: true,  cover: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/wladca-pierscieni-druzyna-pierscienia-dwie-wieze-powrot-krola-b-iext195698986.jpg", description: "Monumentalna epopeja fantasy, fundament całego gatunku." },
  { id: 12, title: "Design Patterns",                    author: "Gang of Four",       category: "IT",       available: true,  cover: "https://m.media-amazon.com/images/I/81IGFC6oFmL._SY425_.jpg",                                                                                  description: "Klasyczna pozycja o wzorcach projektowych w inżynierii oprogramowania." },
  { id: 13, title: "Atomic Habits",                      author: "James Clear",        category: "Rozwój",   available: true,  cover: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/atomowe-nawyki-drobne-zmiany-niezwykle-efekty-b-iext202430750.jpg",    description: "Sprawdzone metody budowania dobrych nawyków i eliminowania złych." },
  { id: 14, title: "Inteligencja emocjonalna",           author: "Daniel Goleman",     category: "Rozwój",   available: false, cover: "https://m.media-amazon.com/images/I/616K0amgvVL._SY425_.jpg",                                                                                  description: "Przełomowa książka o roli emocji w życiu człowieka i jego sukcesach." },
  { id: 15, title: "Pan Tadeusz",                        author: "Adam Mickiewicz",    category: "Klasyka",  available: true,  cover: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/pan-tadeusz-wydanie-ekskluzywne-barwione-brzegi-b-iext202429419.jpg",  description: "Polska epopeja narodowa — arcydzieło literatury romantycznej." },
  { id: 16, title: "Solaris",                            author: "Stanisław Lem",      category: "Sci-Fi",   available: true,  cover: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/solaris-b-iext199506790.jpg",                                            description: "Filozoficzna powieść SF o kontakcie z niezrozumiałą obcą inteligencją." },
];

const state = {
  cart:        [],
  favourites:  JSON.parse(localStorage.getItem("lib_favourites") || "[]"),
  ratings:     JSON.parse(localStorage.getItem("lib_ratings")    || "{}"),
  history:     JSON.parse(localStorage.getItem("lib_history")    || "[]"),
  activeCat:   "all",
  search:      "",
  sort:        "default",
  activeTab:   "cart",
};

function saveStorage() {
  localStorage.setItem("lib_favourites", JSON.stringify(state.favourites));
  localStorage.setItem("lib_ratings",    JSON.stringify(state.ratings));
  localStorage.setItem("lib_history",    JSON.stringify(state.history));
}


const $ = id => document.getElementById(id);

const dom = {
  grid:          $("siatkaksiazkek"),
  noResults:     $("brakWynikow"),
  cartCount:     $("licznikKoszyka"),
  cartPanel:     $("panelKoszyka"),
  overlay:       $("nakladkaKoszyka"),
  cartList:      $("listaKoszyka"),
  cartSummary:   $("podsumowanieKoszyka"),
  cartToggle:    $("przelacznikKoszyka"),
  cartClose:     $("zamknijKoszyk"),
  searchInput:   $("inputWyszukiwarki"),
  sortSelect:    $("wybierzSortowanie"),
  catFilter:     $("filtrKategorii"),
  hamburger:     $("hamburger"),
  mobileNav:     $("nawigacjaMobilna"),
  form:          $("formularzKontaktowy"),
  modalOverlay:  $("modalNakladka"),
  modalClose:    $("modalZamknij"),
  modalImg:      $("modalOkladka"),
  modalCat:      $("modalKategoria"),
  modalTitle:    $("modalTytul"),
  modalAuthor:   $("modalAutor"),
  modalDesc:     $("modalOpis"),
  modalStatus:   $("modalStatus"),
  modalBtn:      $("modalPrzyciskWypozycz"),
  tabBtns:       document.querySelectorAll(".tab-btn"),
  tabCart:       $("tabCart"),
  tabHistory:    $("tabHistory"),
  tabFavs:       $("tabFavourites"),
};


const PLACEHOLDER = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='300'%3E%3Crect width='200' height='300' fill='%23e8e0d0'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='13' fill='%23aaa' text-anchor='middle' dy='.3em'%3EBrak+ok%C5%82adki%3C/text%3E%3C/svg%3E`;

function pluralBooks(n) {
  if (n === 1) return "książka";
  if (n >= 2 && n <= 4) return "książki";
  return "książek";
}

function starsHTML(id, interactive = false) {
  const rating = state.ratings[id] || 0;
  let html = `<div class="gwiazdki${interactive ? " gwiazdki-interaktywne" : ""}" data-id="${id}">`;
  for (let i = 1; i <= 5; i++) {
    html += `<span class="gwiazdka${i <= rating ? " aktywna" : ""}" data-val="${i}" aria-label="${i} gwiazdek">★</span>`;
  }
  html += "</div>";
  return html;
}

function heartHTML(id) {
  const fav = state.favourites.includes(id);
  return `<button class="przycisk-serce${fav ? " aktywne" : ""}" data-id="${id}" aria-label="${fav ? "Usuń z ulubionych" : "Dodaj do ulubionych"}" title="${fav ? "Usuń z ulubionych" : "Dodaj do ulubionych"}">♥</button>`;
}


function getFiltered() {
  let list = [...BOOKS];
  if (state.activeCat !== "all") list = list.filter(b => b.category === state.activeCat);
  if (state.search.trim()) {
    const q = state.search.toLowerCase();
    list = list.filter(b => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q));
  }
  if (state.sort === "title-asc")  list.sort((a, b) => a.title.localeCompare(b.title, "pl"));
  if (state.sort === "title-desc") list.sort((a, b) => b.title.localeCompare(a.title, "pl"));
  if (state.sort === "author")     list.sort((a, b) => a.author.localeCompare(b.author, "pl"));
  if (state.sort === "rating")     list.sort((a, b) => (state.ratings[b.id] || 0) - (state.ratings[a.id] || 0));
  return list;
}

function renderBooks() {
  const filtered = getFiltered();
  dom.grid.innerHTML = "";

  let counter = document.getElementById("licznikWynikow");
  if (!counter) {
    counter = document.createElement("p");
    counter.id = "licznikWynikow";
    counter.className = "licznik-wynikow";
    dom.grid.parentNode.insertBefore(counter, dom.grid);
  }

  if (filtered.length === 0) {
    dom.noResults.style.display = "block";
    counter.textContent = "";
    return;
  }
  dom.noResults.style.display = "none";
  counter.textContent = filtered.length === BOOKS.length
    ? `Wszystkie książki: ${BOOKS.length}`
    : `Pokazuje ${filtered.length} z ${BOOKS.length} książek`;

  filtered.forEach((book, i) => {
    const inCart = state.cart.some(c => c.id === book.id);
    const isAvailable = book.available && !inCart;
    const isFav = state.favourites.includes(book.id);

    const statusLabel = isAvailable ? "Dostępna" : (book.available ? "W koszyku" : "Wypożyczona");
    const statusClass = isAvailable ? "status-dostepna" : "status-wypozyczona";
    const btnDisabled = !isAvailable ? "disabled" : "";
    const btnText     = inCart ? "W koszyku ✓" : (book.available ? "Wypożycz" : "Niedostępna");

    const card = document.createElement("article");
    card.className = "karta-ksiazki";
    card.style.animationDelay = i * 0.04 + "s";

    card.innerHTML = `
      <div class="okladka-wrapper" data-id="${book.id}">
        <img src="${book.cover}" alt="Okładka: ${book.title}" class="okladka-ksiazki" loading="lazy"
          onerror="this.onerror=null;this.src='${PLACEHOLDER}'"/>
        <div class="okladka-overlay"><span>Podgląd</span></div>
      </div>
      ${heartHTML(book.id)}
      <div class="info-ksiazki" data-id="${book.id}">
        <span class="kategoria-ksiazki">${book.category}</span>
        <h3 class="tytul-ksiazki">${book.title}</h3>
        <p class="autor-ksiazki">${book.author}</p>
        ${starsHTML(book.id)}
      </div>
      <div class="stopka-ksiazki">
        <span class="etykieta-statusu ${statusClass}">${statusLabel}</span>
        <button class="przycisk-wypozycz" data-id="${book.id}" ${btnDisabled}
          aria-label="Wypożycz: ${book.title}">${btnText}</button>
      </div>`;

    dom.grid.appendChild(card);
  });

  dom.grid.querySelectorAll(".przycisk-wypozycz:not([disabled])").forEach(btn =>
    btn.addEventListener("click", e => handleBorrow(parseInt(e.currentTarget.dataset.id)))
  );
  dom.grid.querySelectorAll(".okladka-wrapper, .info-ksiazki").forEach(el =>
    el.addEventListener("click", e => openModal(parseInt(el.dataset.id)))
  );
  dom.grid.querySelectorAll(".przycisk-serce").forEach(btn =>
    btn.addEventListener("click", e => { e.stopPropagation(); toggleFavourite(parseInt(btn.dataset.id)); })
  );
  dom.grid.querySelectorAll(".gwiazdki").forEach(div =>
    div.addEventListener("click", e => {
      const star = e.target.closest(".gwiazdka");
      if (!star) return;
      setRating(parseInt(div.dataset.id), parseInt(star.dataset.val));
    })
  );
}

function handleBorrow(id) {
  const book = BOOKS.find(b => b.id === id);
  if (!book || state.cart.some(c => c.id === id)) return;
  state.cart.push(book);
  const already = state.history.find(h => h.id === id);
  if (!already) {
    state.history.unshift({ id, title: book.title, author: book.author, date: new Date().toLocaleDateString("pl") });
    if (state.history.length > 20) state.history.pop();
    saveStorage();
  }
  renderBooks();
  renderSidePanel();
  updateCartCount();
  openCart();
}

function handleRemove(id) {
  state.cart = state.cart.filter(c => c.id !== id);
  renderBooks();
  renderSidePanel();
  updateCartCount();
}

function handleBorrowAll() {
  const available = BOOKS.filter(b => b.available && !state.cart.some(c => c.id === b.id));
  if (!available.length) return;
  available.forEach(b => {
    state.cart.push(b);
    if (!state.history.find(h => h.id === b.id)) {
      state.history.unshift({ id: b.id, title: b.title, author: b.author, date: new Date().toLocaleDateString("pl") });
    }
  });
  if (state.history.length > 20) state.history.length = 20;
  saveStorage();
  renderBooks();
  renderSidePanel();
  updateCartCount();
}

function updateCartCount() {
  dom.cartCount.textContent = state.cart.length;
  dom.cartCount.classList.remove("ping");
  void dom.cartCount.offsetWidth;
  dom.cartCount.classList.add("ping");
}

function renderSidePanel() {
  renderCartTab();
  renderHistoryTab();
  renderFavsTab();
}

function renderCartTab() {
  dom.cartList.innerHTML = "";
  if (state.cart.length === 0) {
    dom.cartSummary.innerHTML = "<p>Brak książek w koszyku.</p>";
    return;
  }
  state.cart.forEach(book => {
    const li = document.createElement("li");
    li.className = "element-koszyka";
    li.innerHTML = `
      <div>
        <div class="tytul-elementu">${book.title}</div>
        <div class="autor-elementu">${book.author}</div>
      </div>
      <button class="usun-element" data-id="${book.id}" aria-label="Usuń ${book.title}">✕</button>`;
    dom.cartList.appendChild(li);
  });
  dom.cartList.querySelectorAll(".usun-element").forEach(btn =>
    btn.addEventListener("click", () => handleRemove(parseInt(btn.dataset.id)))
  );
  dom.cartSummary.innerHTML = `
    <p class="liczba-podsumowania">Łącznie: ${state.cart.length} ${pluralBooks(state.cart.length)}</p>
    <button class="przycisk-glowny przycisk-wyczysc" id="btnWypozyczWszystkie">Wypożycz wszystkie ✓</button>`;
  document.getElementById("btnWypozyczWszystkie")?.addEventListener("click", () => {
    state.cart = [];
    renderBooks();
    renderSidePanel();
    updateCartCount();
    closeCart();
    showToast("✅ Wypożyczono! Miłej lektury.");
  });
}

function renderHistoryTab() {
  if (!dom.tabHistory) return;
  dom.tabHistory.innerHTML = "";
  if (state.history.length === 0) {
    dom.tabHistory.innerHTML = "<p class='brak-tab'>Brak historii.</p>";
    return;
  }
  state.history.forEach(item => {
    const li = document.createElement("li");
    li.className = "element-koszyka";
    li.innerHTML = `
      <div>
        <div class="tytul-elementu">${item.title}</div>
        <div class="autor-elementu">${item.author} · ${item.date}</div>
      </div>`;
    dom.tabHistory.appendChild(li);
  });
}

function renderFavsTab() {
  if (!dom.tabFavs) return;
  dom.tabFavs.innerHTML = "";
  const favBooks = BOOKS.filter(b => state.favourites.includes(b.id));
  if (favBooks.length === 0) {
    dom.tabFavs.innerHTML = "<p class='brak-tab'>Brak ulubionych — kliknij ♥ na karcie.</p>";
    return;
  }
  favBooks.forEach(book => {
    const li = document.createElement("li");
    li.className = "element-koszyka";
    li.innerHTML = `
      <div>
        <div class="tytul-elementu">${book.title}</div>
        <div class="autor-elementu">${book.author}</div>
      </div>
      <button class="usun-element" data-id="${book.id}" aria-label="Usuń z ulubionych">♥</button>`;
    dom.tabFavs.appendChild(li);
  });
  dom.tabFavs.querySelectorAll(".usun-element").forEach(btn =>
    btn.addEventListener("click", () => toggleFavourite(parseInt(btn.dataset.id)))
  );
}

function toggleFavourite(id) {
  const idx = state.favourites.indexOf(id);
  if (idx === -1) { state.favourites.push(id); showToast("♥ Dodano do ulubionych"); }
  else            { state.favourites.splice(idx, 1); }
  saveStorage();
  renderBooks();
  renderFavsTab();
}

function setRating(id, val) {
  state.ratings[id] = state.ratings[id] === val ? 0 : val;
  saveStorage();
  renderBooks();
  const modalStars = document.getElementById("modalGwiazdki");
  if (modalStars && parseInt(modalStars.dataset.id) === id) {
    modalStars.outerHTML = starsHTML(id, true).replace('class="gwiazdki', 'id="modalGwiazdki" class="gwiazdki');
    bindModalStars();
  }
}


function openModal(id) {
  const book = BOOKS.find(b => b.id === id);
  if (!book) return;
  const inCart = state.cart.some(c => c.id === id);
  const isAvailable = book.available && !inCart;

  dom.modalImg.src = book.cover;
  dom.modalImg.alt = "Okładka: " + book.title;
  dom.modalImg.onerror = function() { this.onerror = null; this.src = PLACEHOLDER; };
  dom.modalCat.textContent    = book.category;
  dom.modalTitle.textContent  = book.title;
  dom.modalAuthor.textContent = book.author;
  dom.modalDesc.textContent   = book.description || "";

  dom.modalStatus.textContent = isAvailable ? "Dostępna" : (book.available ? "W koszyku" : "Wypożyczona");
  dom.modalStatus.className   = "etykieta-statusu " + (isAvailable ? "status-dostepna" : "status-wypozyczona");

  const starsContainer = document.getElementById("modalGwiazdkiWrapper");
  if (starsContainer) {
    starsContainer.innerHTML = starsHTML(id, true).replace('class="gwiazdki', 'id="modalGwiazdki" class="gwiazdki');
    bindModalStars();
  }

  if (isAvailable) {
    dom.modalBtn.style.display = "";
    dom.modalBtn.textContent = "Wypożycz";
    dom.modalBtn.onclick = () => { handleBorrow(id); closeModal(); };
  } else {
    dom.modalBtn.style.display = "none";
  }

  dom.modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function bindModalStars() {
  const div = document.getElementById("modalGwiazdki");
  if (!div) return;
  div.addEventListener("click", e => {
    const star = e.target.closest(".gwiazdka");
    if (!star) return;
    setRating(parseInt(div.dataset.id), parseInt(star.dataset.val));
  });
  div.querySelectorAll(".gwiazdka").forEach(s => {
    s.addEventListener("mouseenter", () => {
      const val = parseInt(s.dataset.val);
      div.querySelectorAll(".gwiazdka").forEach((g, i) => g.classList.toggle("hover", i < val));
    });
  });
  div.addEventListener("mouseleave", () =>
    div.querySelectorAll(".gwiazdka").forEach(g => g.classList.remove("hover"))
  );
}

function closeModal() {
  dom.modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
}


function showToast(msg) {
  let toast = document.getElementById("globalToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "globalToast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove("show"), 3000);
}


function openCart() {
  dom.cartPanel.classList.add("open");
  dom.overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  switchTab("cart");
}

function closeCart() {
  dom.cartPanel.classList.remove("open");
  dom.overlay.classList.remove("open");
  document.body.style.overflow = "";
}

function switchTab(tab) {
  state.activeTab = tab;
  dom.tabBtns.forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
  ["tabCart", "tabHistory", "tabFavourites"].forEach(id => {
    const el = $(id);
    if (el) el.style.display = "none";
  });
  const map = { cart: "tabCart", history: "tabHistory", favourites: "tabFavourites" };
  const show = $(map[tab]);
  if (show) show.style.display = "";
  if (tab === "cart") renderCartTab();
  if (tab === "history") renderHistoryTab();
  if (tab === "favourites") renderFavsTab();
}


function validateForm() {
  const name  = $("imieKontakt"),  email = $("emailKontakt"),  msg = $("wiadomoscKontakt");
  const nameErr = $("bladImienia"), emailErr = $("bladEmaila"), msgErr = $("bladWiadomosci");
  let valid = true;
  [name, email, msg].forEach(el => el.classList.remove("invalid"));
  [nameErr, emailErr, msgErr].forEach(el => el.textContent = "");
  if (name.value.trim().length < 2)  { nameErr.textContent  = "Imię musi mieć co najmniej 2 znaki."; name.classList.add("invalid");  valid = false; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { emailErr.textContent = "Podaj poprawny adres e-mail."; email.classList.add("invalid"); valid = false; }
  if (msg.value.trim().length < 10)  { msgErr.textContent   = "Wiadomość musi mieć co najmniej 10 znaków."; msg.classList.add("invalid"); valid = false; }
  return valid;
}


function buildCategoryButtons() {
  const cats = [...new Set(BOOKS.map(b => b.category))].sort();
  cats.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "przycisk-kategorii";
    btn.dataset.cat = cat;
    btn.textContent = cat;
    dom.catFilter.appendChild(btn);
  });
}

function bindEvents() {
  dom.searchInput.addEventListener("input", function() { state.search = this.value; renderBooks(); });

  const opt = document.createElement("option");
  opt.value = "rating"; opt.textContent = "Ocena ★";
  dom.sortSelect.appendChild(opt);
  dom.sortSelect.addEventListener("change", function() { state.sort = this.value; renderBooks(); });

  dom.catFilter.addEventListener("click", e => {
    if (!e.target.classList.contains("przycisk-kategorii")) return;
    dom.catFilter.querySelectorAll(".przycisk-kategorii").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    state.activeCat = e.target.dataset.cat;
    renderBooks();
  });

  dom.cartToggle.addEventListener("click", () => dom.cartPanel.classList.contains("open") ? closeCart() : openCart());
  dom.cartClose.addEventListener("click", closeCart);
  dom.overlay.addEventListener("click", closeCart);

  dom.tabBtns.forEach(btn => btn.addEventListener("click", () => switchTab(btn.dataset.tab)));

  dom.hamburger.addEventListener("click", () => dom.mobileNav.classList.toggle("open"));
  dom.mobileNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => dom.mobileNav.classList.remove("open")));

  dom.modalClose.addEventListener("click", closeModal);
  dom.modalOverlay.addEventListener("click", e => { if (e.target === dom.modalOverlay) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") { closeModal(); closeCart(); } });

  dom.form.addEventListener("submit", e => {
    e.preventDefault();
    $("sukcesFormularza").style.display = "none";
    if (validateForm()) {
      $("sukcesFormularza").style.display = "block";
      dom.form.reset();
      dom.form.querySelectorAll("input, textarea").forEach(el => el.classList.remove("invalid"));
    }
  });
  ["imieKontakt","emailKontakt","wiadomoscKontakt"].forEach(id => {
    const el = $(id);
    const errId = id === "imieKontakt" ? "bladImienia" : id === "emailKontakt" ? "bladEmaila" : "bladWiadomosci";
    el.addEventListener("input", function() {
      this.classList.remove("invalid");
      const err = $(errId); if (err) err.textContent = "";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildCategoryButtons();
  renderBooks();
  renderSidePanel();
  bindEvents();
});
