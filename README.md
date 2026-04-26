Biblioteka Miejska - Wypożyczalnia Online
Projekt: strona internetowa wypożyczalni książek stworzona w HTML, CSS i JavaScript (bez frameworków).

Instrukcja Uruchomienia

```
• Pobierz lub sklonuj repozytorium:
   git clone https://github.com/Shade0884/biblioteka-online.git
• Otwórz plik index.html w przeglądarce.
• Nie jest wymagany żaden serwer - strona działa lokalnie.
```

Pełnione funkcje:

```
| Funkcja | Opis |
| 📖 Lista książek | 16 książek z okładką, tytułem, autorem, kategorią i statusem |
| 🔍 Wyszukiwarka | Filtrowanie po tytule i autorze w czasie rzeczywistym |
| 🏷️ Filtry kategorii | Fantasy, IT, Nauka, Klasyka, Sci-Fi, Rozwój |
| ↕️ Sortowanie | Tytuł A-Z / Z-A, Autor A-Z |
| 🛒 Koszyk | Dodawanie / usuwanie książek, licznik, panel boczny |
| 📋 Formularz kontaktowy | Walidacja: imię, email, wiadomość + komunikaty błędów |
| 📱 RWD | Działa na telefonie (360px), tablecie (768px) i komputerze |
```

Technologie uzyte:

```
• HTML5 - semantyczna struktura (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
• CSS3 - Flexbox, Grid, animacje, `@media` queries, zmienne CSS
• JavaScript (ES6+) - manipulacja DOM, tablice, eventy, walidacja
```

Podział zadan

```
| Uczeń | Zakres prac |
| Piotr Szymański : Struktura HTML, semantyka, dostępność, formularz kontaktowy |
| Fabian Szulda : CSS (układ, RWD, animacje), JavaScript (filtry, koszyk, walidacja) |
```

Struktura plików

```
biblioteka-online/
├── index.html     • Główna strona
├── style.css      • Arkusz stylów
├── script.js      • Logika JavaScript
└── README.md      • Dokumentacja
```

📌 Wymagania 📌

```
• [✅] Minimum 15 książek z tytułem, autorem, kategorią, okładką i statusem
• [✅] Filtrowanie po kategorii (przyciski)
• [✅] Wyszukiwarka po tytule i autorze
• [✅] Sortowanie (3 opcje)
• [✅] Symulacja wypożyczania (zmiana statusu, dezaktywacja przycisku)
• [✅] Koszyk z możliwością dodawania i usuwania
• [✅] Formularz kontaktowy z walidacją JS
• [✅] Semantyczny HTML (header, nav, main, section, footer)
• [✅] Dokładnie 1× `<h1>`, poprawna hierarchia nagłówków
• [✅] Każdy `<img>` ma atrybut `alt`
• [✅] Każde pole formularza ma `<label>`
• [✅] Osobny plik CSS, brak inline stylów
• [✅] Flexbox + Grid
• [✅] Efekty `:hover`
• [✅] RWD: telefon (~360px), tablet (~768px), komputer
• [✅] `@media (min-width: 768px)` oraz reguły mobile
• [✅] Manipulacja DOM w JS
• [✅] Eventy: `click`, `input`, `submit`, `change`
• [✅] Warunki `if` w JS
• [✅] Tablica książek (`books[]`)
```