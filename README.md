
# 📘 README – ETHER ARTS Website (Version avec Font Awesome)

---

# 🧱 1️⃣ Structure du projet

```plaintext
ether-arts/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── images/
```

---

# 🔌 2️⃣ Ajouter Font Awesome

Dans le `<head>` de ton `index.html` :

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
```

Ça te permet d’utiliser :

* flèches slider
* réseaux sociaux
* icônes formulaire
* icône menu burger plus tard

---

# 🏗 3️⃣ Structure HTML globale

```html
<body>
  <header></header>

  <main>
    <section id="hero"></section>
    <section id="about"></section>
    <section id="team"></section>
    <section id="contact"></section>
  </main>

  <footer></footer>

  <script src="js/main.js"></script>
</body>
```

---

# 🎯 4️⃣ Section Our Team (avec Font Awesome)

### Structure :

```html
<div class="slider-wrapper">

  <button class="arrow left">
    <i class="fa-solid fa-chevron-left"></i>
  </button>

  <div class="slider">
    <div class="card">
      <img src="assets/images/member.jpg" alt="">
      <h3>Nom</h3>
      <p>Rôle</p>

      <div class="socials">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
        {<i class="fa-brands fa-x-twitter"></i>}
      </div>
    </div>
  </div>

  <button class="arrow right">
    <i class="fa-solid fa-chevron-right"></i>
  </button>

</div>
```

---

### CSS flèches

```css
.arrow {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.arrow i {
  font-size: 20px;
  color: var(--color-text-secondary);
}
```

---

# 📩 5️⃣ Section Contact (avec icônes)

Tu peux ajouter des icônes dans les champs :

```html
<div class="input-group">
  <i class="fa-solid fa-user"></i>
  <input type="text" placeholder="Nom">
</div>
```

---

### CSS Input avec icône

```css
.input-group {
  position: relative;
}

.input-group i {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-muted);
}

.input-group input {
  padding-left: 48px;
}
```

---

# 🎨 6️⃣ Variables CSS (Design System)

```css
:root {

  --color-bg-main: #0F172A;
  --color-bg-section: #1A1D24;
  --color-bg-card: #1F2937;
  --color-bg-input: #111827;

  --color-primary: #2563EB;
  --color-primary-hover: #1D4ED8;

  --color-text-main: #F9FAFB;
  --color-text-secondary: #E5E7EB;
  --color-text-muted: #6B7280;

  --color-border: #334155;

  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 48px;

  --radius-md: 16px;
  --radius-lg: 24px;

  --shadow-soft: 0 8px 24px rgba(0,0,0,0.25);
}
```

---

# 🚀 7️⃣ Ordre de développement recommandé

1. HTML complet
2. Ajouter Font Awesome
3. Variables CSS
4. Layout global
5. Hero
6. Team (cartes + flèches)
7. Contact
8. Responsive
9. JS slider

---

EmailJS Service ID: service_e4lc7uv
Template ID: template_nip0sb9
Public Key: ix7F6xpWFl6K89YCK
