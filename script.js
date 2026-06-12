const storage = {
  load(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      console.warn(
        `Unable to parse storage key ${key}. Falling back to defaults.`,
        error,
      );
      return fallback;
    }
  },
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

// --- 30 DUNGEON BOOK & PROGRAMMING FUN FACTS ---
const bookFunFacts = [
  "The first computer bug was a real moth found trapped in a relay by Grace Hopper in 1947.",
  "The world's oldest continuously operating library is at St. Catherine's Monastery in Sinai, Egypt.",
  "The term 'Algorithm' comes from the name of the Persian mathematician Al-Khwarizmi.",
  "The first book printed with movable type was the Gutenberg Bible in 1455.",
  "JavaScript was completely created and developed in just 10 days by Brendan Eich in 1995.",
  "The longest novel ever written is 'In Search of Lost Time' by Marcel Proust, spanning over 1.2 million words.",
  "The first commercial computer was the UNIVAC I, delivered to the US Census Bureau in 1951.",
  "Bibliosmia is the official term for the love of the smell of old, vintage books.",
  "The original name for Java was Oak, named after an oak tree outside James Gosling's office.",
  "The word 'robot' comes from the Czech word 'robota', which means forced labor or drudgery.",
  "The largest library in the world is the Library of Congress, with over 170 million items.",
  "The first page on the World Wide Web went live on August 6, 1991, created by Tim Berners-Lee.",
  "A book written by someone else about a person's life is a biography; if written by themselves, it's an autobiography.",
  "Python was named after the British comedy series 'Monty Python's Flying Circus', not the snake.",
  "The first computer mouse was constructed out of wood by Douglas Engelbart in 1964.",
  "The smallest book in the world is 'Teeny Ted from Turnip Town', measuring just 70 micrometers by 100 micrometers.",
  "Ada Lovelace is widely recognized as the world's very first computer programmer.",
  "Tsundoku is a Japanese term for buying books and leaving them unread in piles.",
  "The total code for the Apollo 11 guidance computer was smaller than a modern smartphone photo.",
  "The Domesday Book, commissioned in 1085, is one of medieval England's most complete public records.",
  "The first domain name ever registered on the internet was Symbolics.com on March 15, 1885.",
  "Ancients used to write on scrolls made from papyrus plants along the Nile river delta.",
  "The C programming language was created by Dennis Ritchie at Bell Labs to build the Unix operating system.",
  "The most expensive book ever purchased was the Codex Hammer by Leonardo da Vinci, bought by Bill Gates.",
  "Linux was created by Linus Torvalds in 1991 because he couldn't afford a commercial Unix system.",
  "The concept of 'hypertext' was first coined by Ted Nelson in 1965.",
  "The Gutenberg press drastically reduced the time it took to copy a book by hand.",
  "SQL was originally called SEQUEL (Structured English Query Language) in the early 1970s.",
  "The Diamond Sutra is recognized as the world's earliest dated complete printed book (868 AD).",
  "The binary number system, the foundation of all computer code, was refined by Gottfried Leibniz in 1679."
];

function startFunFactEngine() {
  const factElement = document.getElementById("dungeonFunFact");
  if (!factElement) return;

  function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * bookFunFacts.length);
    factElement.textContent = bookFunFacts[randomIndex];
  }

  displayRandomFact();

  setInterval(displayRandomFact, 10000);
}

document.addEventListener("DOMContentLoaded", () => {
  startFunFactEngine();
});

const defaultBooks = [
  {
    id: "ITEM-771",
    title: "Clean Code Manual",
    author: "Uncle Bob",
    status: "Available",
  },
  {
    id: "ITEM-442",
    title: "You Dont Know JS Scroll",
    author: "Kyle Simpson",
    status: "Available",
  },
  {
    id: "ITEM-903",
    title: "Design Pattern Tomes",
    author: "Gang of Four",
    status: "Reserved",
  },
  {
    id: "ITEM-101",
    title: "The Pragmatic Grimoire",
    author: "Andrew Hunt",
    status: "Available",
  },
  {
    id: "ITEM-102",
    title: "JavaScript Wizardry",
    author: "Marijn Haverbeke",
    status: "Available",
  },
  {
    id: "ITEM-103",
    title: "The Art of Command Line",
    author: "Joshua Levy",
    status: "Available",
  },
  {
    id: "ITEM-104",
    title: "Eloquent Enchantments",
    author: "Marijn Haverbeke",
    status: "Available",
  },
  {
    id: "ITEM-105",
    title: "Refactoring Runes",
    author: "Martin Fowler",
    status: "Available",
  },
  {
    id: "ITEM-106",
    title: "Secrets of SQL Sorcery",
    author: "Joe Celko",
    status: "Available",
  },
  {
    id: "ITEM-107",
    title: "Algorithm Alchemy",
    author: "Robert Sedgewick",
    status: "Available",
  },
  {
    id: "ITEM-108",
    title: "Data Structure Dungeon",
    author: "Mark Allen Weiss",
    status: "Available",
  },
  {
    id: "ITEM-109",
    title: "CSS Spellbook",
    author: "Rachel Andrew",
    status: "Available",
  },
  {
    id: "ITEM-110",
    title: "HTML Hexes",
    author: "Jon Duckett",
    status: "Available",
  },
  {
    id: "ITEM-111",
    title: "Node.js Necromancy",
    author: "Ryan Dahl",
    status: "Available",
  },
  {
    id: "ITEM-112",
    title: "React Relics",
    author: "Dan Abramov",
    status: "Available",
  },
  {
    id: "ITEM-113",
    title: "Typescript Tomes",
    author: "Anders Hejlsberg",
    status: "Available",
  },
  {
    id: "ITEM-114",
    title: "Pythonic Potions",
    author: "Luciano Ramalho",
    status: "Available",
  },
  {
    id: "ITEM-115",
    title: "Modern C++ Codex",
    author: "Bjarne Stroustrup",
    status: "Available",
  },
  {
    id: "ITEM-116",
    title: "Rust Runes",
    author: "Steve Klabnik",
    status: "Available",
  },
  {
    id: "ITEM-117",
    title: "Kotlin Kin",
    author: "Dmitry Jemerov",
    status: "Available",
  },
  {
    id: "ITEM-118",
    title: "Dark Patterns Grimoire",
    author: "Tristan Miller",
    status: "Available",
  },
  {
    id: "ITEM-119",
    title: "DevOps Divinations",
    author: "Gene Kim",
    status: "Available",
  },
  {
    id: "ITEM-120",
    title: "Testing Thaumaturgy",
    author: "Kent Beck",
    status: "Available",
  },
  {
    id: "ITEM-121",
    title: "Secure Socket Sorcery",
    author: "Nate Anderson",
    status: "Available",
  },
  {
    id: "ITEM-122",
    title: "Microservice Magic",
    author: "Sam Newman",
    status: "Available",
  },
  {
    id: "ITEM-123",
    title: "Agile Arcana",
    author: "Mike Cohn",
    status: "Available",
  },
  {
    id: "ITEM-124",
    title: "UX Undertones",
    author: "Steve Krug",
    status: "Available",
  },
  {
    id: "ITEM-125",
    title: "Cloud Keep Chronicles",
    author: "Adrian Cockcroft",
    status: "Available",
  },
  {
    id: "ITEM-126",
    title: "API Artifact Atlas",
    author: "Kin Lane",
    status: "Available",
  },
  {
    id: "ITEM-127",
    title: "GraphQL Grimoire",
    author: "Lee Byron",
    status: "Available",
  },
  {
    id: "ITEM-128",
    title: "Docker Dungeons",
    author: "Solomon Hykes",
    status: "Available",
  },
  {
    id: "ITEM-129",
    title: "Kubernetes Chronicles",
    author: "Brendan Burns",
    status: "Available",
  },
  {
    id: "ITEM-130",
    title: "Blockchain Bestiary",
    author: "Andreas Antonopoulos",
    status: "Available",
  },
  {
    id: "ITEM-131",
    title: "Machine Learning Manual",
    author: "Ian Goodfellow",
    status: "Available",
  },
  {
    id: "ITEM-132",
    title: "AI Alchemy",
    author: "Stuart Russell",
    status: "Available",
  },
  {
    id: "ITEM-133",
    title: "Game Engine Glyphs",
    author: "Mike Acton",
    status: "Available",
  },
  {
    id: "ITEM-134",
    title: "Human-Computer Hexes",
    author: "Don Norman",
    status: "Available",
  },
  {
    id: "ITEM-135",
    title: "Quantum Code Quests",
    author: "Michael Nielsen",
    status: "Available",
  },
  {
    id: "ITEM-136",
    title: "Animation Arcana",
    author: "Noah Buckley",
    status: "Available",
  },
  {
    id: "ITEM-137",
    title: "Cybersecurity Codex",
    author: "Bruce Schneier",
    status: "Available",
  },
  {
    id: "ITEM-138",
    title: "Performance Potion",
    author: "Ilya Grigorik",
    status: "Available",
  },
  {
    id: "ITEM-139",
    title: "Accessibility Alchemy",
    author: "Sharron Rush",
    status: "Available",
  },
  {
    id: "ITEM-140",
    title: "Quantum Query Guide",
    author: "Cassandra Liao",
    status: "Available"
  },
];
defaultBooks.sort((a, b) => a.title.localeCompare(b.title));

function loadBookCollection() {
  const stored = storage.load("rpg_books", null);
  if (!Array.isArray(stored)) {
    storage.save("rpg_books", defaultBooks);
    return [...defaultBooks];
  }

  const isLegacyDefault =
    stored.length === 3 &&
    stored.some((book) => book.id === "ITEM-771") &&
    stored.some((book) => book.id === "ITEM-442") &&
    stored.some((book) => book.id === "ITEM-903");

  if (isLegacyDefault) {
    storage.save("rpg_books", defaultBooks);
    return [...defaultBooks];
  }

  return stored;
}

let bookCollection = loadBookCollection();

let reservationCollection = storage.load("rpg_reservations", [
  {
    id: "LOCK-101",
    bookId: "ITEM-903",
    bookTitle: "Design Pattern Tomes",
    patron: "Thorin",
    date: "06/11/2026",
  },
]);

let auditLogs = storage.load("rpg_logs", [
  {
    text: "Dungeon seals broken. Vault online.",
    type: "create",
    time: "06/11/2026",
  },
]);

const UI = {
  authScreen: document.getElementById("authScreen"),
  appContainer: document.getElementById("appContainer"),
  loginContainer: document.getElementById("loginContainer"),
  loginForm: document.getElementById("loginForm"),
  loginError: document.getElementById("loginError"),
  signupPanel: document.getElementById("signupPanel"),
  signupForm: document.getElementById("signupForm"),
  signupError: document.getElementById("signupError"),
  signupToggleBtn: document.getElementById("signupToggleBtn"),
  backToLoginBtn: document.getElementById("backToLoginBtn"),
  logoutBtn: document.getElementById("logoutBtn"),
  tabs: document.querySelectorAll(".nav-item"),
  tabViews: document.querySelectorAll(".tab-content"),
  viewTitle: document.getElementById("view-title"),
  globalSearch: document.getElementById("globalSearch"),
  actionCluster: document.querySelector(".action-cluster"),
  metricTotal: document.getElementById("metric-total-books"),
  metricAvail: document.getElementById("metric-avail-books"),
  metricRes: document.getElementById("metric-total-res"),
  dashboardTable: document.getElementById("dashboardQuickView"),
  inventoryTable: document.getElementById("inventoryTableBody"),
  reservationsTable: document.getElementById("reservationsTableBody"),
  logsContainer: document.getElementById("logStreamContainer"),
  bookModal: document.getElementById("assetModal"),
  openBookBtn: document.getElementById("openBookModalBtn"),
  closeBookBtn: document.getElementById("closeAssetModal"),
  cancelBookBtn: document.getElementById("cancelAssetBtn"),
  bookForm: document.getElementById("assetForm"),
  bookingModal: document.getElementById("bookingModal"),
  closeBookingBtn: document.getElementById("closeBookingModal"),
  cancelBookingBtn: document.getElementById("cancelBookingBtn"),
  bookingForm: document.getElementById("bookingForm"),
  clearLogsBtn: document.getElementById("clearLogsBtn"),
  sidebarToggle: document.getElementById("sidebarToggle"),
  sidebarMenu: document.getElementById("sidebarMenu"),
};

document.addEventListener("DOMContentLoaded", () => {
  initializeAccounts();
  registerControlGateListeners();
  if (sessionStorage.getItem("dungeon_authenticated") === "true") {
    bypassGatekeeper();
  }
  refreshInterfaceTables();

  // --- RESPONSIVE MOBILE NAVIGATION ENGINE ---
  const sidebarMenu = document.getElementById("sidebarMenu");
  const sidebarToggle = document.getElementById("sidebarToggle");

  if (sidebarToggle && sidebarMenu) {
    sidebarToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      sidebarMenu.classList.toggle("show-sidebar");
    });

    document.addEventListener("click", (e) => {
   
      if (
        !sidebarMenu.contains(e.target) &&
        !sidebarToggle.contains(e.target)
      ) {
        sidebarMenu.classList.remove("show-sidebar");
      }
    });

    const tabs = document.querySelectorAll(".nav-item");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        if (window.innerWidth <= 900) {
          sidebarMenu.classList.remove("show-sidebar");
        }
      });
    });
  }
});

function initializeAccounts() {
  const existingAccounts = localStorage.getItem("dungeon_accounts");
  if (!existingAccounts) {
    const defaultAccounts = [{ username: "admin", password: "dungeon123" }];
    localStorage.setItem("dungeon_accounts", JSON.stringify(defaultAccounts));
  }
}

function registerControlGateListeners() {
  UI.loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = document.getElementById("loginUser").value.trim();
    const pass = document.getElementById("loginPass").value.trim();

    const accounts = JSON.parse(
      localStorage.getItem("dungeon_accounts") || "[]",
    );
    const accountExists = accounts.some(
      (acc) => acc.username === user && acc.password === pass,
    );

    if (accountExists) {
      sessionStorage.setItem("dungeon_authenticated", "true");
      sessionStorage.setItem("current_user", user);
      UI.loginError.classList.add("hidden");
      bypassGatekeeper();
      UI.actionCluster.classList.add("hidden");
      logEvent("Breached the dungeon gates and logged in.", "create");
      refreshInterfaceTables();
    } else {
      UI.loginError.classList.remove("hidden");
    }
  });

  UI.loginForm.addEventListener("input", () => {
    UI.loginError.classList.add("hidden");
  });

  UI.signupToggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    UI.loginForm.reset();
    UI.loginError.classList.add("hidden");
    UI.loginContainer.classList.add("inactive");
    UI.signupPanel.classList.remove("inactive");
  });

  UI.backToLoginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    UI.signupForm.reset();
    UI.signupError.classList.add("hidden");
    UI.signupPanel.classList.add("inactive");
    UI.loginContainer.classList.remove("inactive");
  });

  UI.signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = document.getElementById("signupUser").value.trim();
    const pass = document.getElementById("signupPass").value.trim();
    const confirm = document.getElementById("signupConfirm").value.trim();

    UI.signupError.classList.add("hidden");
    UI.signupError.innerText = "[ ERROR ]";

    if (!user || !pass || !confirm) {
      UI.signupError.innerText = "[ ERROR: ALL FIELDS REQUIRED ]";
      UI.signupError.classList.remove("hidden");
      return;
    }

    if (user.length < 3) {
      UI.signupError.innerText = "[ ERROR: USERNAME MUST BE 3+ CHARACTERS ]";
      UI.signupError.classList.remove("hidden");
      return;
    }

    if (pass.length < 6) {
      UI.signupError.innerText = "[ ERROR: PASSWORD MUST BE 6+ CHARACTERS ]";
      UI.signupError.classList.remove("hidden");
      return;
    }

    if (pass !== confirm) {
      UI.signupError.innerText = "[ ERROR: PASSWORDS DO NOT MATCH ]";
      UI.signupError.classList.remove("hidden");
      return;
    }

    const accounts = JSON.parse(
      localStorage.getItem("dungeon_accounts") || "[]",
    );

    if (accounts.some((acc) => acc.username === user)) {
      UI.signupError.innerText = "[ ERROR: USERNAME ALREADY EXISTS ]";
      UI.signupError.classList.remove("hidden");
      return;
    }

    accounts.push({ username: user, password: pass });
    localStorage.setItem("dungeon_accounts", JSON.stringify(accounts));

    UI.signupError.innerText = "[ SUCCESS: ACCOUNT CREATED - RETURN TO LOGIN ]";
    UI.signupError.classList.remove("hidden");
    UI.signupError.classList.add("pixel-success");

    setTimeout(() => {
      UI.signupForm.reset();
      UI.signupError.classList.remove("hidden");
      UI.signupError.classList.remove("pixel-success");
      UI.signupPanel.classList.add("inactive");
      UI.loginContainer.classList.remove("inactive");
    }, 2000);
  });

  UI.logoutBtn.addEventListener("click", () => {
    logEvent("Abandoned the party and logged out.", "cancel");
    sessionStorage.removeItem("dungeon_authenticated");
    sessionStorage.removeItem("current_user");
    UI.authScreen.classList.remove("hidden");
    UI.appContainer.classList.add("hidden");
    if (UI.actionCluster) UI.actionCluster.classList.remove("hidden");
    UI.loginForm.reset();
    UI.signupForm.reset();
    UI.loginContainer.classList.remove("inactive");
    UI.signupPanel.classList.add("inactive");

    if (UI.sidebarToggle) {
      UI.sidebarToggle.classList.add("hidden");
    }
  });

  UI.tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      UI.tabs.forEach((item) => item.classList.remove("active"));
      UI.tabViews.forEach((view) => view.classList.remove("active"));
      tab.classList.add("active");
      const targetId = tab.getAttribute("data-target");
      document.getElementById(targetId).classList.add("active");
      UI.viewTitle.innerText = tab.textContent.trim();
      UI.actionCluster.classList.toggle(
        "hidden",
        targetId === "overview-tab" ||
          targetId === "history-tab" ||
          targetId === "reservations-tab",
      );
    });
  });

  UI.openBookBtn.addEventListener("click", () => openModal(UI.bookModal));
  UI.closeBookBtn.addEventListener("click", () => closeModal(UI.bookModal));
  UI.cancelBookBtn.addEventListener("click", () => closeModal(UI.bookModal));
  UI.closeBookingBtn.addEventListener("click", () =>
    closeModal(UI.bookingModal),
  );
  UI.cancelBookingBtn.addEventListener("click", () =>
    closeModal(UI.bookingModal),
  );

  UI.bookModal.addEventListener("click", (event) => {
    if (event.target === UI.bookModal) closeModal(UI.bookModal);
  });

  UI.bookingModal.addEventListener("click", (event) => {
    if (event.target === UI.bookingModal) closeModal(UI.bookingModal);
  });

 UI.bookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("bookTitle").value.trim();
    const author = document.getElementById("bookAuthor").value.trim();

    if (!title || !author) {
      logEvent(
        "Failed forge attempt: missing title or creator signature.",
        "cancel",
      );
      return;
    }

    const isDuplicateTitle = bookCollection.some(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );

    if (isDuplicateTitle) {
      logEvent(
        `Forge blocked: '${title}' title already exists in the archive.`,
        "cancel",
      );
rt
      showDungeonAlert(
        "DUPLICATE ARTIFACT TITLE",
        `The book title "${title}" already exists in your inventory!`,
      );
      return;
    }
    // -------------------------------------------------

    const randId = `ITEM-${Math.floor(100 + Math.random() * 900)}`;
    bookCollection.push({ id: randId, title, author, status: "Available" });

    storage.save("rpg_books", bookCollection);

    closeModal(UI.bookModal);
    UI.bookForm.reset();
    logEvent(`Forged new asset artifact ${randId} (${title}).`, "create");
    refreshInterfaceTables();
  });

  UI.bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const bookId = document.getElementById("bookingTargetId").value;
    const bookTitle = document.getElementById("bookingTargetTitle").value;
    const patron = document.getElementById("patronName").value.trim();
    const address = document.getElementById("patronAddress").value.trim();
    const mobile = document.getElementById("patronMobile").value.trim();

    const mobileRegex = /^[0-9]{11}$/;
    if (!mobileRegex.test(mobile)) {
      logEvent(
        "Lock spell denied: Mobile number must be exactly 11 digits.",
        "cancel",
      );
      showDungeonAlert(
        "INVALID MOBILE",
        "Ang mobile number ay dapat binubuo ng eksaktong 11 na numero! (Halimbawa: 09123456789)",
      );
      return;
    }

    const id = "LOCK-" + Math.floor(100 + Math.random() * 900);
    const now = new Date();
    const dateStr = now.toLocaleDateString();

    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 7);

    const targetBook = bookCollection.find((book) => book.id === bookId);
    if (targetBook) {
      targetBook.status = "Reserved";
    }

    reservationCollection.push({
      id,
      bookId,
      bookTitle,
      patron,
      address,
      mobile,
      date: dateStr,
      expiresAt: expireDate.getTime(),
    });

    logEvent(`Placed binding seal on asset ${bookId} for ${patron}.`, "update");
    closeModal(UI.bookingModal);
    UI.bookingForm.reset();
    refreshInterfaceTables();
  });

  UI.globalSearch.addEventListener("input", () => {
    renderInventoryView(UI.globalSearch.value);
  });


  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal(UI.bookModal);
      closeModal(UI.bookingModal);
      const customModal = document.getElementById("dungeonAlertModal");
      if (customModal) customModal.classList.remove("active");
    }
  });
}

function openModal(modal) {
  modal.classList.add("active");
}

function closeModal(modal) {
  modal.classList.remove("active");
}

function bypassGatekeeper() {
  UI.authScreen.classList.add("hidden");
  UI.appContainer.classList.remove("hidden");

  const toggleBtn = document.getElementById("sidebarToggle");
  if (toggleBtn) {
    toggleBtn.classList.remove("hidden");
  }
}

function logEvent(text, type) {
  const now = new Date();
  const timestamp = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
  const currentUser =
    sessionStorage.getItem("current_user") || "UNKNOWN CREATURE";
  const formatText = `[${currentUser}] ${text}`;

  auditLogs.unshift({ text: formatText, type, time: timestamp });
  refreshInterfaceTables();
}

function refreshInterfaceTables() {
  bookCollection.sort((a, b) => a.title.localeCompare(b.title));
  storage.save("rpg_books", bookCollection);
  storage.save("rpg_reservations", reservationCollection);
  storage.save("rpg_logs", auditLogs);

  UI.metricTotal.innerText = bookCollection.length;
  UI.metricAvail.innerText = bookCollection.filter(
    (book) => book.status === "Available",
  ).length;
  UI.metricRes.innerText = reservationCollection.length;

  renderDashboardView();
  renderInventoryView(UI.globalSearch.value);
  renderReservationsView();
  renderChroniclesLogView();
}

function renderDashboardView() {
  UI.dashboardTable.innerHTML = "";
  const recentBooks = [...bookCollection].slice(-3).reverse();

  if (recentBooks.length === 0) {
    UI.dashboardTable.innerHTML =
      '<tr><td colspan="3" style="text-align:center; color:var(--pixel-gray);">[ VAULT EMPTY ]</td></tr>';
    return;
  }

  recentBooks.forEach((book) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td><strong>${book.title}</strong></td>
            <td>${book.author}</td>
            <td><span class="badge ${book.status === "Available" ? "badge-available" : "badge-reserved"}">${book.status}</span></td>
        `;
    UI.dashboardTable.appendChild(tr);
  });
}

function createButton(label, classes, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `pixel-btn ${classes}`;
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function renderInventoryView(query = "") {
  UI.inventoryTable.innerHTML = "";
  const cleanQuery = query.toLowerCase().trim();
  const matches = bookCollection.filter((book) => {
    return (
      book.title.toLowerCase().includes(cleanQuery) ||
      book.author.toLowerCase().includes(cleanQuery) ||
      book.id.toLowerCase().includes(cleanQuery) ||
      book.status.toLowerCase().includes(cleanQuery)
    );
  });

  if (matches.length === 0) {
    UI.inventoryTable.innerHTML =
      '<tr><td colspan="5" style="text-align:center; color:var(--pixel-gray);">[ NO ITEM CACHE DETECTED ]</td></tr>';
    return;
  }

  matches.forEach((book) => {
    const tr = document.createElement("tr");
    const statusBadge = document.createElement("span");

    statusBadge.className = `badge ${book.status === "Available" ? "badge-available" : "badge-reserved"}`;
    statusBadge.textContent = book.status;

    tr.innerHTML = `
            <td data-label="Index ID"><code>${book.id}</code></td>
            <td data-label="Artifact Title">${book.title}</td>
            <td data-label="Creator Signature">${book.author}</td>
        `;

    const statusTd = document.createElement("td");
    statusTd.dataset.label = "Status";
    statusTd.appendChild(statusBadge);
    tr.appendChild(statusTd);

    const actionTd = document.createElement("td");
    actionTd.dataset.label = "Actions";
    if (book.status === "Available") {
      actionTd.appendChild(
        createButton("LOCK", "btn-green", () =>
          openSpellbook(book.id, book.title),
        ),
      );
    } else {
      const sealedButton = createButton("SEALED", "btn-gray", () => {});
      sealedButton.disabled = true;
      actionTd.appendChild(sealedButton);
    }

    actionTd.appendChild(
      createButton("PURGE", "btn-danger", () => destroyObject(book.id)),
    );
    tr.appendChild(actionTd);

    UI.inventoryTable.appendChild(tr);
  });
}

function renderReservationsView() {
  UI.reservationsTable.innerHTML = "";

  if (reservationCollection.length === 0) {
    UI.reservationsTable.innerHTML =
      '<tr><td colspan="7" style="text-align:center; color:var(--pixel-gray);">[ NO ACTIVE LOCK ALLOCATIONS ]</td></tr>';
    return;
  }

  reservationCollection.forEach((reservation) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td data-label="Claim Token"><code>${reservation.id}</code></td>
            <td data-label="Artifact Title">${reservation.bookTitle}</td>
            <td data-label="Claimant Adventurer">${reservation.patron}</td>
            <td data-label="Address">${reservation.address || "N/A"}</td>
            <td data-label="Mobile">${reservation.mobile || "N/A"}</td>
            <td data-label="Time Remaining"><span class="reservation-timer" data-expire="${reservation.expiresAt || 0}">Calculating...</span></td>
        `;

    const actionTd = document.createElement("td");
    actionTd.dataset.label = "Actions";
    actionTd.appendChild(
      createButton("BREAK LOCK", "btn-gray", () =>
        breakSeal(reservation.id, reservation.bookId),
      ),
    );
    tr.appendChild(actionTd);
    UI.reservationsTable.appendChild(tr);
  });

  updateAllTimers();
}

function updateAllTimers() {
  const timerElements = document.querySelectorAll(".reservation-timer");
  const now = new Date().getTime();

  timerElements.forEach((el) => {
    const expireTime = parseInt(el.getAttribute("data-expire"));
    if (!expireTime) {
      el.textContent = "No Limit";
      return;
    }

    const distance = expireTime - now;

    if (distance <= 0) {
      el.textContent = "[ EXPIRED ]";
      el.style.color = "var(--pixel-red)";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );

    el.textContent = `${days}d ${hours}h`;
  });
}

setInterval(updateAllTimers, 60000);

function renderChroniclesLogView() {
  UI.logsContainer.innerHTML = "";

  if (auditLogs.length === 0) {
    UI.logsContainer.innerHTML =
      '<div class="log-item" style="justify-content:center; color:var(--pixel-gray);">[ NO CHRONICLE RECORDS ]</div>';
    return;
  }

  auditLogs.forEach((log) => {
    const div = document.createElement("div");
    div.className = `log-item log-${log.type}`;
    div.innerHTML = `<span>>> ${log.text}</span> <span>${log.time}</span>`;
    UI.logsContainer.appendChild(div);
  });
}

window.destroyObject = function (bookId) {
  const book = bookCollection.find((b) => b.id === bookId);

  if (book && book.status === "Reserved") {
    logEvent(
      `Purge denied: ${bookId} (${book.title}) is currently locked under a reservation spell.`,
      "cancel",
    );
    showDungeonAlert(
      "PURGE DENIED",
      `Artifact <strong>${bookId}</strong> cannot be purged because it is currently locked under a reservation spell!`,
    );
    return;
  }

  const title = book ? book.title : "this asset";

  showDungeonAlert(
    "PURGE ARTIFACT AUTH",
    `Are you sure you want to permanently purge <strong>${title}</strong> (${bookId}) from the vault?`,
    () => {
      bookCollection = bookCollection.filter((b) => b.id !== bookId);
      reservationCollection = reservationCollection.filter(
        (reservation) => reservation.bookId !== bookId,
      );
      logEvent(`Purged item ${bookId} from the vault.`, "cancel");
      refreshInterfaceTables();
    },
  );
};

window.openSpellbook = function (bookId, bookTitle) {
  document.getElementById("bookingTargetId").value = bookId;
  document.getElementById("bookingTargetTitle").value = bookTitle;
  openModal(UI.bookingModal);
};

window.breakSeal = function (reservationId, bookId) {
  const reservation = reservationCollection.find((r) => r.id === reservationId);
  const title = reservation ? reservation.bookTitle : "this asset";

  showDungeonAlert(
    "BREAK SEAL AUTH",
    `Are you sure you want to break the lock seal for <strong>${title}</strong>?`,
    () => {
      reservationCollection = reservationCollection.filter(
        (res) => res.id !== reservationId,
      );
      const book = bookCollection.find((candidate) => candidate.id === bookId);
      if (book) {
        book.status = "Available";
      }
      logEvent(
        `Broke seal ${reservationId}. Item returned to available inventory.`,
        "create",
      );
      refreshInterfaceTables();
    },
  );
};

function showDungeonAlert(title, message, onConfirm = null) {
  let alertModal = document.getElementById("dungeonAlertModal");

  if (!alertModal) {
    alertModal = document.createElement("div");
    alertModal.id = "dungeonAlertModal";
    alertModal.className = "modal-overlay";
    document.body.appendChild(alertModal);
  }

  const footerActions = onConfirm
    ? `<button type="button" class="pixel-btn btn-danger" id="confirmDungeonBtn">YES</button>
       <button type="button" class="pixel-btn btn-gray" onclick="document.getElementById('dungeonAlertModal').classList.remove('active')">NO</button>`
    : `<button type="button" class="pixel-btn btn-gray" onclick="document.getElementById('dungeonAlertModal').classList.remove('active')">ACKNOWLEDGE</button>`;

  alertModal.innerHTML = `
    <div class="pixel-panel modal-surface">
        <div class="modal-header">
            <h2 style="color: var(--pixel-red);"><i class="fa-solid fa-triangle-exclamation"></i> ${title}</h2>
            <button class="close-modal-btn" onclick="document.getElementById('dungeonAlertModal').classList.remove('active')">&times;</button>
        </div>
        <div class="pixel-form-group">
            <p style="font-size: 9px; line-height: 1.8; color: var(--text-pixel); margin-bottom: 1.5rem;">${message}</p>
        </div>
        <div class="modal-footer-actions" style="display: flex; justify-content: flex-end; gap: 0.5rem;">
            ${footerActions}
        </div>
    </div>
  `;

  if (onConfirm) {
    document
      .getElementById("confirmDungeonBtn")
      .addEventListener("click", () => {
        onConfirm();
        alertModal.classList.remove("active");
      });
  }

  alertModal.classList.add("active");
}
