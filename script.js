"use strict";
const books = [
  {
    id: 1,
    title: "Wiedźmin: Ostatnie życzenie",
    author: "Andrzej Sapkowski",
    category: "Fantasy",
    cover: "https://m.media-amazon.com/images/I/41+GXBZwdlL._SY445_SX342_ML2_.jpg",
    available: true,
    description: "Klasyczny zbiór opowiadań o Geralcie z Rivii."
  },
  {
    id: 2,
    title: "Harry Potter i Kamień Filozoficzny",
    author: "J.K. Rowling",
    category: "Fantasy",
    cover: "https://m.media-amazon.com/images/I/81nstsLEyJL._SY466_.jpg",
    available: true,
    description: "Pierwsza część kultowej serii o młodym czarodzieju."
  },
  {
    id: 3,
    title: "Czysty kod",
    author: "Robert C. Martin",
    category: "IT",
    cover: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/czysty-kod-podrecznik-dobrego-programisty-b-iext194526990.jpg",
    available: false,
    description: "Przewodnik po sztuce pisania dobrego kodu."
  },
  {
    id: 4,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    category: "IT",
    cover: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/javascript-mocne-strony-b-iext180695414.jpg",
    available: true,
    description: "Najważniejsze elementy języka JavaScript omówione przez eksperta."
  },
  {
    id: 5,
    title: "Sapiens: Historia ludzkości",
    author: "Yuval Noah Harari",
    category: "Nauka",
    cover: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/sapiens-opowiesc-graficzna-narodziny-ludzkosci-czesc-1-b-iext202727535.jpg",
    available: true,
    description: "Fascynująca opowieść o historii gatunku homo sapiens."
  },
  {
    id: 6,
    title: "Krótka historia czasu",
    author: "Stephen Hawking",
    category: "Nauka",
    cover: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/krotka-historia-czasu-b-iext218866783.jpg",
    available: true,
    description: "Przystępne wprowadzenie do kosmologii i fizyki kwantowej."
  },
  {
    id: 7,
    title: "Zbrodnia i kara",
    author: "Fiodor Dostojewski",
    category: "Klasyka",
    cover: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/zbrodnia-i-kara-b-iext196982673.jpg",
    available: false,
    description: "Psychologiczna powieść o zbrodni, winie i odkupieniu."
  },
  {
    id: 8,
    title: "Mistrz i Małgorzata",
    author: "Michaił Bułhakow",
    category: "Klasyka",
    cover: "https://staticl.poczytaj.pl/310000/mistrz-i-malgorzata-seria-klasyka-michail-bulhakov,310509-s.jpg",
    description: "Satyryczna powieść o diable odwiedzającym Moskwę."
  },
  {
    id: 9,
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    cover: "https://bonito.pl/cache/9/2b52da2-diuna-powiesc-grafic_800.webp",
    available: true,
    description: "Epicka saga science-fiction rozgrywająca się na pustynej planecie Arrakis."
  },
  {
    id: 10,
    title: "1984",
    author: "George Orwell",
    category: "Sci-Fi",
    cover: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/1984-b-iext142459687.jpg",
    available: false,
    description: "Dystopijska wizja totalitarnego społeczeństwa pod rządami Wielkiego Brata."
  },
  {
    id: 11,
    title: "Władca Pierścieni",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    cover: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/wladca-pierscieni-druzyna-pierscienia-dwie-wieze-powrot-krola-b-iext195698986.jpg",
    available: true,
    description: "Monumentalna epopeja fantasy, fundament całego gatunku."
  },
  {
    id: 12,
    title: "Design Patterns",
    author: "Gang of Four",
    category: "IT",
    cover: "https://m.media-amazon.com/images/I/81IGFC6oFmL._SY425_.jpg",
    available: true,
    description: "Klasyczna pozycja o wzorcach projektowych w inżynierii oprogramowania."
  },
  {
    id: 13,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Rozwój",
    cover: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/atomowe-nawyki-drobne-zmiany-niezwykle-efekty-b-iext202430750.jpg",
    available: true,
    description: "Sprawdzone metody budowania dobrych nawyków i eliminowania złych."
  },
  {
    id: 14,
    title: "Inteligencja emocjonalna",
    author: "Daniel Goleman",
    category: "Rozwój",
    cover: "https://m.media-amazon.com/images/I/616K0amgvVL._SY425_.jpg",
    available: false,
    description: "Przełomowa książka o roli emocji w życiu człowieka i jego sukcesach."
  },
  {
    id: 15,
    title: "Pan Tadeusz",
    author: "Adam Mickiewicz",
    category: "Klasyka",
    cover: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/pan-tadeusz-wydanie-ekskluzywne-barwione-brzegi-b-iext202429419.jpg",
    available: true,
    description: "Polska epopeja narodowa — arcydzieło literatury romantycznej."
  },
  {
    id: 16,
    title: "Solaris",
    author: "Stanisław Lem",
    category: "Sci-Fi",
    cover: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/solaris-b-iext199506790.jpg",
    available: true,
    description: "Filozoficzna powieść SF o kontakcie z niezrozumiałą obcą inteligencją."
  }
];

let cart = [];
let activeCat = "all";
let currentSearch = "";
let currentSort = "default";
const siatkaksiazkek    = document.getElementById("siatkaksiazkek");
const brakWynikow       = document.getElementById("brakWynikow");
const licznikKoszyka    = document.getElementById("licznikKoszyka");
const panelKoszyka      = document.getElementById("panelKoszyka");
const nakladkaKoszyka   = document.getElementById("nakladkaKoszyka");
const listaKoszyka      = document.getElementById("listaKoszyka");
const podsumowanieKoszyka = document.getElementById("podsumowanieKoszyka");
const przelacznikKoszyka  = document.getElementById("przelacznikKoszyka");
const zamknijKoszyk     = document.getElementById("zamknijKoszyk");
const inputWyszukiwarki = document.getElementById("inputWyszukiwarki");
const wybierzSortowanie = document.getElementById("wybierzSortowanie");
const filtrKategorii    = document.getElementById("filtrKategorii");
const hamburger         = document.getElementById("hamburger");
const nawigacjaMobilna  = document.getElementById("nawigacjaMobilna");
const formularzKontaktowy = document.getElementById("formularzKontaktowy");
function init() {
  buildCategoryButtons();
  renderBooks();
  bindEvents();
}

function buildCategoryButtons() {
  const cats = [...new Set(books.map(b => b.category))].sort();
  cats.forEach(function(cat) {
    const btn = document.createElement("button");
    btn.className = "przycisk-kategorii";
    btn.dataset.cat = cat;
    btn.textContent = cat;
    filtrKategorii.appendChild(btn);
  });
}
function renderBooks() {
  let filtered = [...books];
  if (activeCat !== "all") {
    filtered = filtered.filter(function(b) {
      return b.category === activeCat;
    });
  }
  if (currentSearch.trim() !== "") {
    const q = currentSearch.toLowerCase();
    filtered = filtered.filter(function(b) {
      return b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
    });
  }
  if (currentSort === "title-asc") {
    filtered.sort(function(a, b) { return a.title.localeCompare(b.title, "pl"); });
  } else if (currentSort === "title-desc") {
    filtered.sort(function(a, b) { return b.title.localeCompare(a.title, "pl"); });
  } else if (currentSort === "author") {
    filtered.sort(function(a, b) { return a.author.localeCompare(b.author, "pl"); });
  }
  siatkaksiazkek.innerHTML = "";
  if (filtered.length === 0) {
    brakWynikow.style.display = "block";
    return;
  }
  brakWynikow.style.display = "none";
  filtered.forEach(function(book, i) {
    const inCart = cart.some(function(c) { return c.id === book.id; });
    const isAvailable = book.available && !inCart;
    const card = document.createElement("article");
    card.className = "karta-ksiazki";
    card.style.animationDelay = i * 0.04 + "s";

    const statusLabel = isAvailable ? "Dostępna" : (book.available ? "W koszyku" : "Wypożyczona");
    const statusClass = isAvailable ? "status-dostepna" : "status-wypozyczona";
    const btnDisabled = !isAvailable ? "disabled" : "";
    const btnText     = inCart ? "W koszyku ✓" : (book.available ? "Wypożycz" : "Niedostępna");

    card.innerHTML = `
      <img
        src="${book.cover}"
        alt="Okładka książki: ${book.title}"
        class="okladka-ksiazki"
        loading="lazy"
        onerror="this.src='https://via.placeholder.com/200x300?text=Brak+ok%C5%82adki'"
      />
      <div class="info-ksiazki">
        <span class="kategoria-ksiazki">${book.category}</span>
        <h3 class="tytul-ksiazki">${book.title}</h3>
        <p class="autor-ksiazki">${book.author}</p>
      </div>
      <div class="stopka-ksiazki">
        <span class="etykieta-statusu ${statusClass}">${statusLabel}</span>
        <button
          class="przycisk-wypozycz"
          data-id="${book.id}"
          ${btnDisabled}
          aria-label="Wypożycz: ${book.title}"
        >${btnText}</button>
      </div>
    `;
    siatkaksiazkek.appendChild(card);
  });
  siatkaksiazkek.querySelectorAll(".przycisk-wypozycz:not([disabled])").forEach(function(btn) {
    btn.addEventListener("click", handleBorrow);
  });
}

function handleBorrow(e) {
  const id = parseInt(e.target.dataset.id);

  const book = books.find(function(b) { return b.id === id; });
  if (!book) return;

  const alreadyInCart = cart.some(function(c) { return c.id === id; });
  if (!alreadyInCart) {
    cart.push(book);
  }

  renderBooks();
  renderCart();
  updateCartCount();

  openCart();
}

function renderCart() {
  listaKoszyka.innerHTML = "";

  if (cart.length === 0) {
    podsumowanieKoszyka.innerHTML = "<p>Brak książek w koszyku.</p>";
    return;
  }

  cart.forEach(function(book) {
    const li = document.createElement("li");
    li.className = "element-koszyka";
    li.innerHTML = `
      <div>
        <div class="tytul-elementu">${book.title}</div>
        <div class="autor-elementu">${book.author}</div>
      </div>
      <button class="usun-element" data-id="${book.id}" aria-label="Usuń ${book.title} z koszyka">✕</button>
    `;
    listaKoszyka.appendChild(li);
  });

  podsumowanieKoszyka.innerHTML = `
    <p class="liczba-podsumowania">Łącznie: ${cart.length} ${pluralBooks(cart.length)}</p>
  `;

  listaKoszyka.querySelectorAll(".usun-element").forEach(function(btn) {
    btn.addEventListener("click", handleRemoveFromCart);
  });
}

function handleRemoveFromCart(e) {
  const id = parseInt(e.currentTarget.dataset.id);
  cart = cart.filter(function(c) { return c.id !== id; });

  renderCart();
  renderBooks();
  updateCartCount();
}

function updateCartCount() {
  licznikKoszyka.textContent = cart.length;
}

function pluralBooks(n) {
  if (n === 1) return "książka";
  if (n >= 2 && n <= 4) return "książki";
  return "książek";
}

function openCart() {
  panelKoszyka.classList.add("open");
  nakladkaKoszyka.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  panelKoszyka.classList.remove("open");
  nakladkaKoszyka.classList.remove("open");
  document.body.style.overflow = "";
}

function validateForm() {
  const name  = document.getElementById("imieKontakt");
  const email = document.getElementById("emailKontakt");
  const msg   = document.getElementById("wiadomoscKontakt");

  const nameErr  = document.getElementById("bladImienia");
  const emailErr = document.getElementById("bladEmaila");
  const msgErr   = document.getElementById("bladWiadomosci");

  let valid = true;

  [name, email, msg].forEach(function(el) { el.classList.remove("invalid"); });
  [nameErr, emailErr, msgErr].forEach(function(el) { el.textContent = ""; });

  if (name.value.trim().length < 2) {
    nameErr.textContent = "Imię musi mieć co najmniej 2 znaki.";
    name.classList.add("invalid");
    valid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    emailErr.textContent = "Podaj poprawny adres e-mail.";
    email.classList.add("invalid");
    valid = false;
  }

  if (msg.value.trim().length < 10) {
    msgErr.textContent = "Wiadomość musi mieć co najmniej 10 znaków.";
    msg.classList.add("invalid");
    valid = false;
  }

  return valid;
}

function bindEvents() {

  inputWyszukiwarki.addEventListener("input", function() {
    currentSearch = this.value;
    renderBooks();
  });

  wybierzSortowanie.addEventListener("change", function() {
    currentSort = this.value;
    renderBooks();
  });

  filtrKategorii.addEventListener("click", function(e) {
    if (!e.target.classList.contains("przycisk-kategorii")) return;

    filtrKategorii.querySelectorAll(".przycisk-kategorii").forEach(function(b) {
      b.classList.remove("active");
    });
    e.target.classList.add("active");

    activeCat = e.target.dataset.cat;
    renderBooks();
  });

  przelacznikKoszyka.addEventListener("click", function() {
    if (panelKoszyka.classList.contains("open")) {
      closeCart();
    } else {
      openCart();
    }
  });

  zamknijKoszyk.addEventListener("click", closeCart);

  nakladkaKoszyka.addEventListener("click", closeCart);

  hamburger.addEventListener("click", function() {
    nawigacjaMobilna.classList.toggle("open");
  });

  nawigacjaMobilna.querySelectorAll("a").forEach(function(a) {
    a.addEventListener("click", function() {
      nawigacjaMobilna.classList.remove("open");
    });
  });

  formularzKontaktowy.addEventListener("submit", function(e) {
    e.preventDefault();

    const sukcesFormularza = document.getElementById("sukcesFormularza");
    sukcesFormularza.style.display = "none";

    if (validateForm()) {
      sukcesFormularza.style.display = "block";
      formularzKontaktowy.reset();
      formularzKontaktowy.querySelectorAll("input, textarea").forEach(function(el) {
        el.classList.remove("invalid");
      });
    }
  });

  ["imieKontakt", "emailKontakt", "wiadomoscKontakt"].forEach(function(id) {
    const el = document.getElementById(id);
    el.addEventListener("input", function() {
      this.classList.remove("invalid");

      const errId = id === "imieKontakt" ? "bladImienia"
                  : id === "emailKontakt" ? "bladEmaila"
                  : "bladWiadomosci";
      const errEl = document.getElementById(errId);
      if (errEl) errEl.textContent = "";
    });
  });
}

document.addEventListener("DOMContentLoaded", init);