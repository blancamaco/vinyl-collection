# 🎧 Vinyl Explorer

A visual experience inspired by vinyl collections, built with **React** and the **Spotify Web API**.

---

## ✨ Description

This project was born from a personal question:  
> What would my vinyl collection look like if I could explore it inside Spotify?

As a music lover and vinyl collector, I wanted to recreate the ritual of picking a record, placing it on the turntable, and watching it spin.  
**Vinyl Explorer** transforms Spotify’s traditional album grid into an interactive, animated vinyl experience.

---

## 🧠 Design Concept

The app aims to capture the **tactile and visual sensation** of browsing through real vinyl records:

- Albums are displayed as vinyl sleeves that slide out and spin on hover.  
- The selected record is placed on a turntable and spins until another one is chosen.  
- The background dynamically adapts to the colors of the active album, creating an immersive atmosphere.

---

## ⚙️ Tech Stack

- **React + Vite**  
- **Spotify Web API** to fetch artist albums  
- **CSS Modules** for scoped styles  
- **React Hooks** (`useState`, `useEffect`) for state and data management  
- **Responsive design** using relative units (`vmin`, `vh`, `vw`)

---

## 🧩 Project Architecture

```
App.jsx
│
├── SearchForm.jsx
│ └── Handles user input and sends search queries back to App
│
├── AlbumList.jsx
│ ├── Manages selected album state
│ └── Renders a list of AlbumCard components
│
│ └── AlbumCard.jsx
│ └── Displays individual album info and hover/click animations
│
└── Player.jsx
└── Renders the turntable and animates the active vinyl
```

**Flow summary:**
- `SearchForm` → sends the search input up to `App`.
- `App` → fetches albums from the Spotify API and passes them to `AlbumList`.
- `AlbumList` → displays albums and manages which one is selected.
- `Player` → listens for changes in the selected album and updates the animated turntable.


---

## 🌀 Animations & Microinteractions

- Vinyl animations are built entirely with **pure CSS**, combining `transform`, `transition`, and `keyframes`.  
- **Wrapper elements** isolate transformations to prevent conflicts between animations.  
- Subtle 3D effects bring vinyls to life when selected or hovered.

---

## 📱 Responsiveness

The layout scales gracefully across screen sizes using relative CSS units (`vmin`, `vh`, `vw`), ensuring that the turntable, vinyls, and search bar maintain their proportions and hierarchy.

---

## 🚀 Run Locally

1. Clone this repository:  
   ```bash
   git clone https://github.com/yourusername/vinyl-explorer.git
   cd vinyl-explorer
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Create a `.env` file with your Spotify credentials:  
   ```bash
   VITE_SPOTIFY_CLIENT_ID=your_client_id
   VITE_SPOTIFY_CLIENT_SECRET=your_client_secret
   ```
4. Run the project:  
   ```bash
   npm run dev
   ```

---

## 💬 Key Learnings

Throughout this project I learned to:

- Handle authentication and async data fetching with `useEffect`.  
- Structure a React app using the **container/presentational** component pattern.  
- Solve CSS animation conflicts between `transform` and `animation`.  
- Design an experience that unites **logic and emotion** through interface behavior.

---

## 🪩 Case Study

📸 [Full Case Study](#)(https://blancamaco.github.io/vinylPlayer.html)

---

## 🧑‍🎨 Author

Design & development by **Blanca**, UX Engineer.  
💌 [https://blancamaco.github.io/index.html]
