// ======================== DATA (INCREASED POSTS) ========================
// HOME FEED (12+ posts)
const homeTemplates = [
  { name: "Elon Musk", username: "@elonmusk", time: "2h", text: "Starship Flight 5 soon. Mars, here we come! 🚀", media: "https://picsum.photos/id/116/600/400", likesBase: 45320, retweetsBase: 12300 },
  { name: "NASA", username: "@NASA", time: "4h", text: "Hubble captures a galaxy collision 200 million light-years away. ✨", media: "https://picsum.photos/id/24/600/400", likesBase: 28700, retweetsBase: 5600 },
  { name: "CryptoWhale", username: "@cryptowhale", time: "1h", text: "Bitcoin dominance hits 55% – altcoin season incoming? #BTC", media: null, likesBase: 8900, retweetsBase: 2100 },
  { name: "The Verge", username: "@verge", time: "3h", text: "Apple announces new M4 MacBooks with insane battery life. #WWDC", media: "https://picsum.photos/id/0/600/400", likesBase: 15200, retweetsBase: 3400 },
  { name: "SportsCenter", username: "@SportsCenter", time: "6h", text: "LeBron drops 40 points in playoff thriller! 🏀 #NBA", media: null, likesBase: 34500, retweetsBase: 8900 },
  { name: "Bill Gates", username: "@BillGates", time: "9h", text: "Investing in next-gen nuclear. The future of clean energy is bright.", media: null, likesBase: 18700, retweetsBase: 4200 },
  { name: "Marvel Studios", username: "@Marvel", time: "1d", text: "Deadpool & Wolverine first reactions: 'Absolute chaos! 🔥'", media: "https://picsum.photos/id/104/600/400", likesBase: 98700, retweetsBase: 24500 },
  { name: "Google", username: "@Google", time: "5h", text: "Gemini 1.5 Pro now available for all developers. Build the future.", media: null, likesBase: 23400, retweetsBase: 5600 },
  { name: "Tesla", username: "@Tesla", time: "8h", text: "Cybertruck off-road package revealed. Pre-orders open.", media: "https://picsum.photos/id/111/600/400", likesBase: 45600, retweetsBase: 10200 },
  { name: "World Cup", username: "@FIFAWorldCup", time: "12h", text: "2030 World Cup host cities announced! Three continents unite. ⚽", media: "https://picsum.photos/id/122/600/400", likesBase: 89200, retweetsBase: 21000 },
  { name: "AI Daily", username: "@ai_daily", time: "45m", text: "New open-source model beats GPT-4 on coding benchmarks. #AI", media: null, likesBase: 12500, retweetsBase: 3100 },
  { name: "SpaceX", username: "@SpaceX", time: "3h", text: "Starship IFT-5: Booster catch successful! 🚀", media: "https://picsum.photos/id/96/600/400", likesBase: 234500, retweetsBase: 54300 }
];

// EXPLORE FOR YOU (12+ posts)
const exploreForYouTemplates = [
  { id: 1001, name: "NASA", username: "@NASA", time: "2h ago", text: "Astronauts completed a spacewalk outside the ISS today. VR controller made ops smoother. 🛰️", media: "https://picsum.photos/id/96/600/400", likesBase: 12450, retweetsBase: 3420 },
  { id: 1002, name: "Crypto Whales", username: "@whale_alert", time: "45m ago", text: "🚨 15,000 BTC ($975M) transferred to Binance. Market watching.", media: null, likesBase: 3450, retweetsBase: 890 },
  { id: 1003, name: "Bill Gates", username: "@BillGates", time: "5h ago", text: "Climate innovation is moving faster than ever. Fusion and green hydrogen. #ClimateAction", media: null, likesBase: 12500, retweetsBase: 3200 },
  { id: 1004, name: "ESPNcricinfo", username: "@ESPNcricinfo", time: "3h ago", text: "MS Dhoni turns back the clock! Vintage finish in IPL 2026. #Dhoni", media: "https://picsum.photos/id/26/600/400", likesBase: 28700, retweetsBase: 6100 },
  { id: 1005, name: "AAP", username: "@AamAadmiParty", time: "1h ago", text: "Statement regarding Shri Raghav Chadha's role as Deputy Leader.", media: null, likesBase: 8900, retweetsBase: 2100 },
  { id: 1006, name: "IPL", username: "@IPL", time: "7h ago", text: "Fair Play standings: CSK on top! Alphabetical order gives the edge. 👏", media: "https://picsum.photos/id/40/600/400", likesBase: 15600, retweetsBase: 3400 },
  { id: 1007, name: "TechCrunch", username: "@TechCrunch", time: "2h ago", text: "OpenAI announces GPT-5 coming next year with reasoning breakthroughs.", media: null, likesBase: 34500, retweetsBase: 8900 },
  { id: 1008, name: "Google DeepMind", username: "@DeepMind", time: "4h ago", text: "AlphaFold 3 predicts all of life's molecules. Huge leap for biology.", media: "https://picsum.photos/id/177/600/400", likesBase: 56700, retweetsBase: 12300 },
  { id: 1009, name: "Tesla AI", username: "@Tesla_AI", time: "6h ago", text: "FSD v12.5 rolls out – neural network end-to-end highway driving.", media: null, likesBase: 23400, retweetsBase: 5600 },
  { id: 1010, name: "NBA", username: "@NBA", time: "1h ago", text: "Wembanyama with a quadruple-double! Unbelievable rookie season.", media: "https://picsum.photos/id/20/600/400", likesBase: 78900, retweetsBase: 17800 },
  { id: 1011, name: "Netflix", username: "@Netflix", time: "8h ago", text: "Stranger Things final season teaser just dropped. It's epic.", media: "https://picsum.photos/id/106/600/400", likesBase: 234500, retweetsBase: 56700 },
  { id: 1012, name: "Apple", username: "@Apple", time: "5h ago", text: "Vision Pro spatial computing is here. The era of spatial computing begins.", media: "https://picsum.photos/id/169/600/400", likesBase: 123400, retweetsBase: 29800 }
];

// EXPLORE TRENDING (12+ posts)
const exploreTrendingTemplates = [
  { id: 2001, name: "Crypto Whales", username: "@whale_alert", time: "30m ago", text: "15,000 BTC moved again! Market volatility incoming. #Bitcoin", media: null, likesBase: 4100, retweetsBase: 980 },
  { id: 2002, name: "NASA", username: "@NASA", time: "4h ago", text: "Spacewalk recap: Astronauts upgraded power systems. VR training played key role.", media: "https://picsum.photos/id/96/600/400", likesBase: 13200, retweetsBase: 3800 },
  { id: 2003, name: "Bill Gates", username: "@BillGates", time: "6h ago", text: "Next 5 years will define climate tech. Full interview out now.", media: null, likesBase: 11800, retweetsBase: 2900 },
  { id: 2004, name: "ESPNcricinfo", username: "@ESPNcricinfo", time: "2h ago", text: "Dhoni's legacy: 15 years since THAT six. Fans trend #DhoniForever.", media: "https://picsum.photos/id/26/600/400", likesBase: 31200, retweetsBase: 7200 },
  { id: 2005, name: "IPL", username: "@IPL", time: "1h ago", text: "CSK tops Fair Play table due to alphabetical order? Fun stat!", media: null, likesBase: 16700, retweetsBase: 3900 },
  { id: 2006, name: "Elon Musk", username: "@elonmusk", time: "3h ago", text: "Starship IFT-5 target date: next month. Megabay ready.", media: "https://picsum.photos/id/116/600/400", likesBase: 245600, retweetsBase: 58900 },
  { id: 2007, name: "AI News", username: "@AI_News", time: "1h ago", text: "Google's Gemini Ultra scores 90% on MMLU. New SOTA.", media: null, likesBase: 23400, retweetsBase: 5400 },
  { id: 2008, name: "SportsCenter", username: "@SportsCenter", time: "5h ago", text: "LeBron James says he wants to play until 45. #NBA", media: "https://picsum.photos/id/20/600/400", likesBase: 56700, retweetsBase: 12300 },
  { id: 2009, name: "Bloomberg", username: "@Bloomberg", time: "2h ago", text: "Bitcoin ETF inflows hit record $2B in a single day.", media: null, likesBase: 18900, retweetsBase: 4200 },
  { id: 2010, name: "Marvel", username: "@Marvel", time: "7h ago", text: "Avengers: Secret Wars casting rumors explode online.", media: "https://picsum.photos/id/104/600/400", likesBase: 98700, retweetsBase: 22100 },
  { id: 2011, name: "Tesla", username: "@Tesla", time: "8h ago", text: "Cybertruck production hits 5k/week milestone.", media: "https://picsum.photos/id/111/600/400", likesBase: 45600, retweetsBase: 10200 },
  { id: 2012, name: "Netflix", username: "@Netflix", time: "4h ago", text: "Squid Game season 2 premieres in September. Final teaser.", media: "https://picsum.photos/id/106/600/400", likesBase: 234500, retweetsBase: 56700 }
];

const newsData = [
  { title: "15 Years Since Dhoni's Iconic Six Won India the 2011 World Cup", meta: "1 day ago · Sports · 54.6K posts", thumb: "https://picsum.photos/id/29/120/120" },
  { title: "AAP Removes Raghav Chadha as Rajya Sabha Deputy Leader", meta: "3 hours ago · Politics · 12.3K posts", thumb: "https://picsum.photos/id/91/120/120" },
  { title: "CSK Leads IPL 2026 Fair Play Table—Thanks to Alphabetical Order", meta: "5 hours ago · Cricket · 8.7K posts", thumb: "https://picsum.photos/id/127/120/120" }
];

let followSuggestions = [
  { id: 1, name: "Chennai Super Kings", handle: "@ChennaiIPL", avatar: "🦁", following: false },
  { id: 2, name: "Shikhar Dhawan", handle: "@SDhawan25", avatar: "🏏", following: false },
  { id: 3, name: "ICC", handle: "@ICC", avatar: "🌍", following: false },
  { id: 4, name: "Mumbai Indians", handle: "@mipaltan", avatar: "💙", following: false },
  { id: 5, name: "Virat Kohli", handle: "@imVkohli", avatar: "🐐", following: false }
];

// Helper functions
function randomizePost(t) {
  const factor = 0.7 + Math.random() * 0.8;
  return { ...t, id: t.id || Math.random(), likes: Math.floor((t.likesBase || 5000) * factor), retweets: Math.floor((t.retweetsBase || 1200) * factor), liked: false, retweeted: false };
}
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Initial data (refreshes on page load)
let homePosts = shuffle(homeTemplates.map(randomizePost));
let forYouPosts = shuffle(exploreForYouTemplates.map(randomizePost));
let trendingPostsArray = shuffle(exploreTrendingTemplates.map(randomizePost));

let currentNav = "home", currentTab = "forYou", filterText = "";
let signedInSections = { notifications: false, messages: false, grok: false, communities: false, premium: false, profile: false, bookmarks: false };

// DOM elements
const feedTitle = document.getElementById("feedTitle");
const exploreControls = document.getElementById("exploreControls");
const rightSidebar = document.getElementById("rightSidebar");
const contentArea = document.getElementById("contentArea");

// Signup page render
function renderSignUpPage(sectionName, sectionKey) {
  contentArea.innerHTML = `
    <div class="signup-card">
      <h3>Join X today</h3>
      <p>Sign up to see ${sectionName} and connect with the world.</p>
      <div class="input-group"><input type="text" id="signupName" placeholder=" "><label>Name</label></div>
      <div class="input-group"><input type="email" id="signupEmail" placeholder=" "><label>Email</label></div>
      <div class="input-group"><input type="password" id="signupPassword" placeholder=" "><label>Password</label></div>
      <button id="doSignupBtn">Sign up for free →</button>
    </div>
  `;
  document.getElementById("doSignupBtn")?.addEventListener("click", () => {
    signedInSections[sectionKey] = true;
    contentArea.innerHTML = `<div class="demo-message">✅ Signed up successfully! Welcome to ${sectionName}.<br><br>🎉 You now have access (demo content).</div>`;
  });
}

// Home feed rendering
function renderHomeFeed() {
  if (!homePosts.length) { contentArea.innerHTML = `<div class="demo-message">No posts yet.</div>`; return; }
  contentArea.innerHTML = homePosts.map(p => `
    <div class="tweet"><div class="tweet-avatar">${p.name.charAt(0)}</div><div class="tweet-content"><div class="tweet-header"><span class="tweet-name">${p.name}</span><span class="tweet-username">${p.username}</span><span class="tweet-time">· ${p.time}</span></div><div class="tweet-text">${p.text}</div>${p.media ? `<div class="tweet-media"><img src="${p.media}"></div>` : ''}<div class="action-icons"><div class="action"><i class="far fa-comment"></i><span>${Math.floor(Math.random() * 80)}</span></div><div class="action retweet-btn" data-id="${p.id}"><i class="fas fa-retweet"></i><span>${p.retweets}</span></div><div class="action like-btn ${p.liked ? 'liked' : ''}" data-id="${p.id}"><i class="far fa-heart"></i><span>${p.likes}</span></div><div class="action"><i class="far fa-share-square"></i></div></div></div></div>
  `).join('');
  attachHomeEvents();
}
function attachHomeEvents() {
  document.querySelectorAll('.like-btn').forEach(btn => btn.onclick = (e) => { e.stopPropagation(); const id = parseInt(btn.dataset.id); const post = homePosts.find(p => p.id === id); if(post){ post.liked = !post.liked; post.likes += post.liked ? 1 : -1; renderHomeFeed(); } });
  document.querySelectorAll('.retweet-btn').forEach(btn => btn.onclick = (e) => { e.stopPropagation(); const id = parseInt(btn.dataset.id); const post = homePosts.find(p => p.id === id); if(post){ post.retweeted = !post.retweeted; post.retweets += post.retweeted ? 1 : -1; renderHomeFeed(); } });
}

// Explore feed rendering
function renderExploreTweets() {
  let posts = currentTab === "forYou" ? [...forYouPosts] : [...trendingPostsArray];
  if (filterText.trim()) posts = posts.filter(p => p.text.toLowerCase().includes(filterText.toLowerCase()));
  if (!posts.length) { contentArea.innerHTML = `<div class="demo-message">No posts match.</div>`; return; }
  contentArea.innerHTML = posts.map(t => `
    <div class="tweet"><div class="tweet-avatar">${t.name.charAt(0)}</div><div class="tweet-content"><div class="tweet-header"><span class="tweet-name">${t.name}</span><span class="tweet-username">${t.username}</span><span class="tweet-time">· ${t.time}</span></div><div class="tweet-text">${t.text}</div>${t.media ? `<div class="tweet-media"><img src="${t.media}"></div>` : ''}<div class="action-icons"><div class="action"><i class="far fa-comment"></i><span>${Math.floor(Math.random() * 100)}</span></div><div class="action retweet-btn" data-id="${t.id}"><i class="fas fa-retweet"></i><span>${t.retweets}</span></div><div class="action like-btn ${t.liked ? 'liked' : ''}" data-id="${t.id}"><i class="far fa-heart"></i><span>${t.likes}</span></div><div class="action"><i class="far fa-share-square"></i></div></div></div></div>
  `).join('');
  attachExploreEvents();
}
function attachExploreEvents() {
  document.querySelectorAll('.like-btn').forEach(btn => btn.onclick = (e) => { e.stopPropagation(); const id = parseInt(btn.dataset.id); const arr = currentTab === "forYou" ? forYouPosts : trendingPostsArray; const post = arr.find(p => p.id === id); if(post){ post.liked = !post.liked; post.likes += post.liked ? 1 : -1; renderExploreTweets(); } });
  document.querySelectorAll('.retweet-btn').forEach(btn => btn.onclick = (e) => { e.stopPropagation(); const id = parseInt(btn.dataset.id); const arr = currentTab === "forYou" ? forYouPosts : trendingPostsArray; const post = arr.find(p => p.id === id); if(post){ post.retweeted = !post.retweeted; post.retweets += post.retweeted ? 1 : -1; renderExploreTweets(); } });
}

// Right sidebar components
function renderNews() {
  document.getElementById("newsList").innerHTML = newsData.map(item => `<div class="news-item" onclick="alert('News: ${item.title}')"><div class="news-thumb"><img src="${item.thumb}"></div><div><div class="news-title">${item.title}</div><div class="news-meta">${item.meta}</div></div></div>`).join('');
}
function renderFollow() {
  const container = document.getElementById("followSuggestionsList");
  container.innerHTML = followSuggestions.map(u => `<div class="follow-suggestion"><div class="follow-user"><div class="follow-avatar">${u.avatar}</div><div><div class="follow-name">${u.name}</div><div class="follow-handle">${u.handle}</div></div></div><button class="follow-btn ${u.following ? 'following' : ''}" data-id="${u.id}">${u.following ? 'Following' : 'Follow'}</button></div>`).join('');
  document.querySelectorAll('.follow-btn').forEach(btn => btn.onclick = (e) => { e.stopPropagation(); const id = parseInt(btn.dataset.id); const u = followSuggestions.find(f => f.id === id); if(u){ u.following = !u.following; renderFollow(); } });
}

// Main navigation logic
function setActiveNav(navId) {
  currentNav = navId;
  document.querySelectorAll('.nav-item').forEach(item => {
    if(item.dataset.nav === navId) item.classList.add('active');
    else item.classList.remove('active');
  });
  if (navId === 'explore') {
    feedTitle.innerText = 'Explore';
    exploreControls.style.display = 'block';
    rightSidebar.style.display = 'block';
    renderExploreTweets();
  } else {
    feedTitle.innerText = navId.charAt(0).toUpperCase() + navId.slice(1);
    exploreControls.style.display = 'none';
    rightSidebar.style.display = 'none';
    if (navId === 'home') renderHomeFeed();
    else {
      const key = navId;
      if (signedInSections[key]) contentArea.innerHTML = `<div class="demo-message">✨ Welcome to ${feedTitle.innerText}! You are signed in.<br>✨ Demo content.</div>`;
      else renderSignUpPage(feedTitle.innerText, key);
    }
  }
}

// Event listeners
document.querySelectorAll('.nav-item').forEach(item => item.addEventListener('click', () => setActiveNav(item.dataset.nav)));
document.querySelector('.x-logo')?.addEventListener('click', () => setActiveNav('home'));
document.getElementById('topPostBtn')?.addEventListener('click', () => alert('✍️ Compose new post'));
document.getElementById('sidebarPostBtn')?.addEventListener('click', () => alert('✍️ Compose new post'));
document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => {
  if(currentNav === 'explore') {
    currentTab = tab.dataset.tab;
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    renderExploreTweets();
  }
}));
document.getElementById('searchInput')?.addEventListener('input', (e) => {
  if(currentNav === 'explore') {
    filterText = e.target.value;
    renderExploreTweets();
  }
});

// Initial render
renderNews();
renderFollow();
setActiveNav('home');