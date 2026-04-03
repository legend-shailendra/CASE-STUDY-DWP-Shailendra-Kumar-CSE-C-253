# CASE-STUDY-DWP-Shailendra-Kumar-CSE-C-253

👤 Student Information

Name: Shailendra Kumar

Roll No: C-253

Branch: Computer Science & Engineering (CSE)

Registration No.: 24070050

# X (Twitter) Clone – Explore & Home Feed

A fully functional, responsive clone of the **X (formerly Twitter) Explore page** built with **HTML, CSS, and JavaScript**. It replicates the modern X interface with a left sidebar, main feed, right sidebar (trending news & who to follow), interactive posts (like/retweet), and sign-up pages for protected sections.

> 🔄 **Posts refresh on every page load** – like/retweet counts and post order change each time you reload.

---

## 📸 Features

### ✅ Core UI
- **Exact X logo** (current 𝕏 logo)
- **Three-column layout** (left nav, center feed, right sidebar)
- **Dark theme** with glassmorphism, blur effects, and gradient borders
- **Fully responsive** – collapses gracefully on smaller screens

### ✅ Navigation (All buttons work)
- Home, Explore, Notifications, Messages, Grok, Communities, Premium, Profile, Bookmarks
- Active state highlighting
- X logo returns to Home

### ✅ Main Feed (Home)
- 12+ dynamic posts with user avatars, names, handles, timestamps
- Like & retweet buttons (toggle state, count updates)
- Images/videos placeholders
- Posts shuffle and like/retweet counts vary on each refresh

### ✅ Explore Feed
- **Two tabs**: "For You" & "Trending" (each with 12+ posts)
- **Search bar** – filters posts in real time
- Like & retweet interactions

### ✅ Right Sidebar (Explore only)
- **Today's News** – clickable news items with thumbnails & metadata
- **Who to Follow** – follow/unfollow suggestions (5 accounts)

### ✅ Protected Sections (Sign‑up Pages)
- Notifications, Messages, Grok, Communities, Premium, Profile, Bookmarks
- Show a modern **sign-up card** with floating labels and gradient button
- After sign-up, a welcome message is displayed (demo)

### ✅ Post Button
- Two locations: top of center feed + left sidebar (both trigger demo alert)

---

## 🚀 Live Demo (Preview)

Open `index.html` in any modern browser (Chrome, Firefox, Safari, Edge).  
No build tools, no dependencies – just static files.

---

## 📂 Project Structure

---

## 🛠️ Technologies Used

- **HTML5** – semantic layout
- **CSS3** – Flexbox, Grid, backdrop‑filter, gradients, keyframe animations
- **JavaScript (ES6)** – dynamic content rendering, event handling, state management
- **Font Awesome 6** – icons
- **Lorem Picsum** – placeholder images

---

## 🧩 How It Works

1. **Data Arrays** – Posts, news, and follow suggestions are stored in `script.js`.
2. **Randomization** – On page load, posts are shuffled and like/retweet counts are multiplied by a random factor (0.7–1.5x).
3. **Navigation** – Clicking a nav item changes the main content area:
   - `Home` → shows the main feed.
   - `Explore` → shows tabs, search, and right sidebar.
   - Other items → show sign‑up card (unless already signed in).
4. **Interactions** – Like/retweet buttons toggle visual state and update counters without a backend.
5. **Responsiveness** – Sidebars hide or shrink using media queries.

---

## 📝 Customization

### Add more posts
Edit the arrays in `script.js`:
- `homeTemplates`
- `exploreForYouTemplates`
- `exploreTrendingTemplates`

Each object requires: `name`, `username`, `time`, `text`, `media` (or `null`), `likesBase`, `retweetsBase`.

### Change trending news
Modify the `newsData` array.

### Add follow suggestions
Edit the `followSuggestions` array.

### Modify sign‑up logic
The `signedInSections` object stores which sections have been signed in. After sign‑up, you can replace the welcome message with real content.

---

## 🎨 Styling Notes

- The design mimics **X (Twitter)** but adds modern touches: glass panels, gradient text, subtle shadows.
- Font stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...`
- Scrollbar is custom‑styled for dark mode.
- All interactive elements have smooth hover transitions.

---

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

Requires `backdrop-filter` support (all modern browsers).

---

## 🔧 Local Development

1. Download or clone the repository.
2. Make sure `index.html`, `style.css`, and `script.js` are in the same folder.
3. Open `index.html` with **Live Server** (or directly in your browser).

No build step or server required.

---

## 🤝 Contributing

Feel free to fork this project and:
- Add a real backend (Firebase, Node.js)
- Implement tweet composition
- Add user authentication
- Connect to the X API (Twitter API v2)

---

## 📄 License

MIT License – free to use, modify, and distribute.

---

## 👨‍💻 Author

Created as a front‑end demonstration of modern UI/UX patterns and vanilla JavaScript interactivity.

---

## 🙌 Acknowledgements

- Font Awesome for icons
- Lorem Picsum for placeholder images
- X (Twitter) for design inspiration

---

> **Note:** This is a static clone for educational/portfolio purposes. It does not connect to the real X API or store any user data.
