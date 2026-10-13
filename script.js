/* =====================================================
   LEDGER — INTERVIEW PREPARATION PORTAL
   ===================================================== */


/* ================= DATA ================= */

const topics = [

  {
    id: "arrays",
    code: "01",
    label: "Arrays",
    total: 8
  },

  {
    id: "strings",
    code: "02",
    label: "Strings",
    total: 6
  },

  {
    id: "linked-list",
    code: "03",
    label: "Linked List",
    total: 6
  },

  {
    id: "stack",
    code: "04",
    label: "Stack & Queue",
    total: 6
  },

  {
    id: "trees",
    code: "05",
    label: "Trees",
    total: 7
  },

  {
    id: "graphs",
    code: "06",
    label: "Graphs",
    total: 7
  },

  {
    id: "sorting",
    code: "07",
    label: "Sorting",
    total: 5
  },

  {
    id: "searching",
    code: "08",
    label: "Searching",
    total: 5
  }
];


const questions = [

  {
    id: 1,
    topicId: "arrays",
    number: "01",
    title: "Find the largest element in an array",
    difficulty: "Easy",
    status: "unsolved",
    link: "#"
  },

  {
    id: 2,
    topicId: "arrays",
    number: "02",
    title: "Find the second largest element",
    difficulty: "Easy",
    status: "unsolved",
    link: "#"
  },

  {
    id: 3,
    topicId: "arrays",
    number: "03",
    title: "Remove duplicates from a sorted array",
    difficulty: "Easy",
    status: "unsolved",
    link: "#"
  },

  {
    id: 4,
    topicId: "arrays",
    number: "04",
    title: "Maximum subarray sum",
    difficulty: "Medium",
    status: "unsolved",
    link: "#"
  },

  {
    id: 5,
    topicId: "arrays",
    number: "05",
    title: "Rotate an array by K positions",
    difficulty: "Medium",
    status: "unsolved",
    link: "#"
  },

  {
    id: 6,
    topicId: "arrays",
    number: "06",
    title: "Find the missing number",
    difficulty: "Easy",
    status: "unsolved",
    link: "#"
  },

  {
    id: 7,
    topicId: "arrays",
    number: "07",
    title: "Merge overlapping intervals",
    difficulty: "Medium",
    status: "unsolved",
    link: "#"
  },

  {
    id: 8,
    topicId: "arrays",
    number: "08",
    title: "Trapping rain water",
    difficulty: "Hard",
    status: "unsolved",
    link: "#"
  },


  {
    id: 9,
    topicId: "strings",
    number: "09",
    title: "Reverse a string",
    difficulty: "Easy",
    status: "unsolved",
    link: "#"
  },

  {
    id: 10,
    topicId: "strings",
    number: "10",
    title: "Check whether a string is palindrome",
    difficulty: "Easy",
    status: "unsolved",
    link: "#"
  },

  {
    id: 11,
    topicId: "strings",
    number: "11",
    title: "Find the first non-repeating character",
    difficulty: "Medium",
    status: "unsolved",
    link: "#"
  },

  {
    id: 12,
    topicId: "strings",
    number: "12",
    title: "Longest substring without repeating characters",
    difficulty: "Medium",
    status: "unsolved",
    link: "#"
  },

  {
    id: 13,
    topicId: "strings",
    number: "13",
    title: "Valid anagram",
    difficulty: "Easy",
    status: "unsolved",
    link: "#"
  },

  {
    id: 14,
    topicId: "strings",
    number: "14",
    title: "Minimum window substring",
    difficulty: "Hard",
    status: "unsolved",
    link: "#"
  },


  {
    id: 15,
    topicId: "linked-list",
    number: "15",
    title: "Reverse a linked list",
    difficulty: "Easy",
    status: "unsolved",
    link: "#"
  },

  {
    id: 16,
    topicId: "linked-list",
    number: "16",
    title: "Detect cycle in linked list",
    difficulty: "Medium",
    status: "unsolved",
    link: "#"
  },

  {
    id: 17,
    topicId: "linked-list",
    number: "17",
    title: "Merge two sorted linked lists",
    difficulty: "Easy",
    status: "unsolved",
    link: "#"
  },

  {
    id: 18,
    topicId: "linked-list",
    number: "18",
    title: "Find middle of linked list",
    difficulty: "Easy",
    status: "unsolved",
    link: "#"
  },

  {
    id: 19,
    topicId: "linked-list",
    number: "19",
    title: "Remove Nth node from end",
    difficulty: "Medium",
    status: "unsolved",
    link: "#"
  },

  {
    id: 20,
    topicId: "linked-list",
    number: "20",
    title: "Reverse nodes in groups",
    difficulty: "Hard",
    status: "unsolved",
    link: "#"
  },


  {
    id: 21,
    topicId: "stack",
    number: "21",
    title: "Implement stack using array",
    difficulty: "Easy",
    status: "unsolved",
    link: "#"
  },

  {
    id: 22,
    topicId: "stack",
    number: "22",
    title: "Valid parentheses",
    difficulty: "Easy",
    status: "unsolved",
    link: "#"
  },

  {
    id: 23,
    topicId: "stack",
    number: "23",
    title: "Implement queue using stacks",
    difficulty: "Medium",
    status: "unsolved",
    link: "#"
  },

  {
    id: 24,
    topicId: "stack",
    number: "24",
    title: "Next greater element",
    difficulty: "Medium",
    status: "unsolved",
    link: "#"
  },

  {
    id: 25,
    topicId: "stack",
    number: "25",
    title: "Min stack",
    difficulty: "Medium",
    status: "unsolved",
    link: "#"
  },

  {
    id: 26,
    topicId: "stack",
    number: "26",
    title: "Largest rectangle in histogram",
    difficulty: "Hard",
    status: "unsolved",
    link: "#"
  },


  {
    id: 27,
    topicId: "trees",
    number: "27",
    title: "Inorder traversal of binary tree",
    difficulty: "Easy",
    status: "unsolved",
    link: "#"
  },

  {
    id: 28,
    topicId: "trees",
    number: "28",
    title: "Maximum depth of binary tree",
    difficulty: "Easy",
    status: "unsolved",
    link: "#"
  },

  {
    id: 29,
    topicId: "trees",
    number: "29",
    title: "Level order traversal",
    difficulty: "Medium",
    status: "unsolved",
    link: "#"
  },

  {
    id: 30,
    topicId: "trees",
    number: "30",
    title: "Validate binary search tree",
    difficulty: "Medium",
    status: "unsolved",
    link: "#"
  },

  {
    id: 31,
    topicId: "trees",
    number: "31",
    title: "Lowest common ancestor",
    difficulty: "Medium",
    status: "unsolved",
    link: "#"
  },

  {
    id: 32,
    topicId: "trees",
    number: "32",
    title: "Serialize and deserialize binary tree",
    difficulty: "Hard",
    status: "unsolved",
    link: "#"
  },

  {
    id: 33,
    topicId: "trees",
    number: "33",
    title: "Diameter of binary tree",
    difficulty: "Hard",
    status: "unsolved",
    link: "#"
  },


  {
    id: 34,
    topicId: "graphs",
    number: "34",
    title: "Breadth first search",
    difficulty: "Easy",
    status: "unsolved",
    link: "#"
  },

  {
    id: 35,
    topicId: "graphs",
    number: "35",
    title: "Depth first search",
    difficulty: "Easy",
    status: "unsolved",
    link: "#"
  },

  {
    id: 36,
    topicId: "graphs",
    number: "36",
    title: "Detect cycle in graph",
    difficulty: "Medium",
    status: "unsolved",
    link: "#"
  },

  {
    id: 37,
    topicId: "graphs",
    number: "37",
    title: "Number of islands",
    difficulty: "Medium",
    status: "unsolved",
    link: "#"
  },

  {
    id: 38,
    topicId: "graphs",
    number: "38",
    title: "Dijkstra shortest path",
    difficulty: "Medium",
    status: "unsolved",
    link: "#"
  },

  {
    id: 39,
    topicId: "graphs",
    number: "39",
    title: "Minimum spanning tree",
    difficulty: "Hard",
    status: "unsolved",
    link: "#"
  },

  {
    id: 40,
    topicId: "graphs",
    number: "40",
    title: "Course schedule",
    difficulty: "Hard",
    status: "unsolved",
    link: "#"
  },


  {
    id: 41,
    topicId: "sorting",
    number: "41",
    title: "Bubble sort",
    difficulty: "Easy",
    status: "unsolved",
    link: "#"
  },

  {
    id: 42,
    topicId: "sorting",
    number: "42",
    title: "Selection sort",
    difficulty: "Easy",
    status: "unsolved",
    link: "#"
  },

  {
    id: 43,
    topicId: "sorting",
    number: "43",
    title: "Insertion sort",
    difficulty: "Easy",
    status: "unsolved",
    link: "#"
  },

  {
    id: 44,
    topicId: "sorting",
    number: "44",
    title: "Merge sort",
    difficulty: "Medium",
    status: "unsolved",
    link: "#"
  },

  {
    id: 45,
    topicId: "sorting",
    number: "45",
    title: "Quick sort",
    difficulty: "Medium",
    status: "unsolved",
    link: "#"
  },


  {
    id: 46,
    topicId: "searching",
    number: "46",
    title: "Linear search",
    difficulty: "Easy",
    status: "unsolved",
    link: "#"
  },

  {
    id: 47,
    topicId: "searching",
    number: "47",
    title: "Binary search",
    difficulty: "Easy",
    status: "unsolved",
    link: "#"
  },

  {
    id: 48,
    topicId: "searching",
    number: "48",
    title: "Search in rotated sorted array",
    difficulty: "Medium",
    status: "unsolved",
    link: "#"
  },

  {
    id: 49,
    topicId: "searching",
    number: "49",
    title: "Find peak element",
    difficulty: "Medium",
    status: "unsolved",
    link: "#"
  },

  {
    id: 50,
    topicId: "searching",
    number: "50",
    title: "Median of two sorted arrays",
    difficulty: "Hard",
    status: "unsolved",
    link: "#"
  }

];


/* ================= STATE ================= */

let selectedTopicId = null;

let difficultyFilter = "All";

let searchTerm = "";

let savedQuestions = [];

let streak = [];

const weeklyGoal = 20;


/* ================= DOM ================= */

const topicGrid =
  document.getElementById("topicGrid");

const questionList =
  document.getElementById("questionList");

const savedQuestionList =
  document.getElementById("savedQuestionList");

const emptyState =
  document.getElementById("emptyState");

const savedEmptyState =
  document.getElementById("savedEmptyState");

const clearTopicFilter =
  document.getElementById("clearTopicFilter");

const clearAllFilters =
  document.getElementById("clearAllFilters");

const searchInput =
  document.getElementById("searchInput");

const difficultyButtons =
  document.querySelectorAll(".pill");

const sidebarNav =
  document.getElementById("sidebarNav");

const mobileNavSelect =
  document.getElementById("mobileNavSelect");

const resetProgress =
  document.getElementById("resetProgress");


/* ================= LOCAL STORAGE ================= */

function saveData() {

  localStorage.setItem(
    "ledgerQuestions",
    JSON.stringify(questions)
  );

  localStorage.setItem(
    "ledgerSavedQuestions",
    JSON.stringify(savedQuestions)
  );

  localStorage.setItem(
    "ledgerStreak",
    JSON.stringify(streak)
  );

}


function loadData() {

  const savedQuestionsData =
    localStorage.getItem("ledgerQuestions");

  const savedItemsData =
    localStorage.getItem("ledgerSavedQuestions");

  const streakData =
    localStorage.getItem("ledgerStreak");


  if (savedQuestionsData) {

    const parsed =
      JSON.parse(savedQuestionsData);

    parsed.forEach(savedQuestion => {

      const question =
        questions.find(
          q => q.id === savedQuestion.id
        );

      if (question) {

        question.status =
          savedQuestion.status;

      }

    });

  }


  if (savedItemsData) {

    savedQuestions =
      JSON.parse(savedItemsData);

  }


  if (streakData) {

    streak =
      JSON.parse(streakData);

  } else {

    streak =
      Array(7).fill(false);

  }

}


/* ================= STATISTICS ================= */

function getSolvedCount() {

  return questions.filter(
    q => q.status === "solved"
  ).length;

}


function updateStatistics() {

  const total =
    questions.length;

  const solved =
    getSolvedCount();

  const remaining =
    total - solved;

  const percentage =
    total === 0
      ? 0
      : Math.round(
          (solved / total) * 100
        );


  document.getElementById(
    "totalQuestions"
  ).textContent = total;


  document.getElementById(
    "solvedQuestions"
  ).textContent = solved;


  document.getElementById(
    "remainingQuestions"
  ).textContent = remaining;


  document.getElementById(
    "completionPercent"
  ).textContent =
    `${percentage}%`;

}


/* ================= TOPIC PROGRESS ================= */

function getTopicProgress(topic) {

  const solved =
    questions.filter(
      q =>
        q.topicId === topic.id &&
        q.status === "solved"
    ).length;


  const percent =
    topic.total === 0
      ? 0
      : Math.round(
          (solved / topic.total) * 100
        );


  return {
    solved,
    total: topic.total,
    percent
  };

}


/* ================= RENDER TOPICS ================= */

function renderTopics() {

  topicGrid.innerHTML = "";


  topics.forEach(topic => {

    const progress =
      getTopicProgress(topic);


    const selected =
      selectedTopicId === topic.id;


    const card =
      document.createElement("button");


    card.className =
      "topic-card" +
      (selected ? " selected" : "");


    card.innerHTML = `

      <div class="topic-meta">

        <span class="topic-code">
          ${topic.code}
        </span>

        <span class="topic-count">
          ${progress.solved}/${progress.total}
        </span>

      </div>


      <h3 class="topic-title">
        ${topic.label}
      </h3>


      <div class="progress-bar">

        <div
          class="progress-fill"
          style="--target-width: ${progress.percent}%"
        ></div>

      </div>

    `;


    card.addEventListener(
      "click",
      () => toggleTopicFilter(topic.id)
    );


    topicGrid.appendChild(card);

  });

}


/* ================= DIFFICULTY ================= */

function getDifficultyClass(
  difficulty,
  status
) {

  if (status === "solved") {

    return "solved";

  }

  return difficulty.toLowerCase();

}


/* ================= QUESTION FILTER ================= */

function getFilteredQuestions() {

  let filtered = [...questions];


  if (selectedTopicId) {

    filtered =
      filtered.filter(
        q =>
          q.topicId ===
          selectedTopicId
      );

  }


  if (difficultyFilter !== "All") {

    filtered =
      filtered.filter(
        q =>
          q.difficulty ===
          difficultyFilter
      );

  }


  if (searchTerm.trim()) {

    const term =
      searchTerm
        .toLowerCase()
        .trim();


    filtered =
      filtered.filter(q =>
        q.title
          .toLowerCase()
          .includes(term)
      );

  }


  return filtered;

}


/* ================= QUESTION HTML ================= */

function createQuestionRow(question) {

  const row =
    document.createElement("div");


  row.className =
    "question-row" +
    (
      question.status === "solved"
        ? " solved-row"
        : ""
    );


  const isSaved =
    savedQuestions.includes(
      question.id
    );


  row.innerHTML = `

    <div
      class="status-circle
      ${question.status === "solved"
        ? "solved"
        : ""}"
    >

      ${
        question.status === "solved"
          ? '<div class="status-dot"></div>'
          : ""
      }

    </div>


    <span class="question-number">
      ${question.number}
    </span>


    <span class="question-title">
      ${question.title}
    </span>


    <span
      class="difficulty-badge
      ${getDifficultyClass(
        question.difficulty,
        question.status
      )}"
    >

      ${
        question.status === "solved"
          ? "Solved"
          : question.difficulty
      }

    </span>


    <button
      class="save-btn
      ${isSaved ? "saved" : ""}"
      aria-label="Save question"
      title="Save question"
    >

      ${isSaved ? "★" : "☆"}

    </button>


    <button
      class="open-btn"
      title="Open question"
    >
      Open →
    </button>

  `;


  /* Solve */

  row
    .querySelector(".status-circle")
    .addEventListener(
      "click",
      () =>
        toggleQuestionStatus(
          question.id
        )
    );


  /* Save */

  row
    .querySelector(".save-btn")
    .addEventListener(
      "click",
      event => {

        event.stopPropagation();

        toggleSavedQuestion(
          question.id
        );

      }
    );


  /* Open */

  row
    .querySelector(".open-btn")
    .addEventListener(
      "click",
      event => {

        event.stopPropagation();

        openQuestion(question);

      }
    );


  return row;

}


/* ================= RENDER QUESTIONS ================= */

function renderQuestions() {

  const filtered =
    getFilteredQuestions();


  questionList.innerHTML = "";


  if (filtered.length === 0) {

    questionList.classList.add(
      "hidden"
    );

    emptyState.classList.remove(
      "hidden"
    );

    return;

  }


  questionList.classList.remove(
    "hidden"
  );

  emptyState.classList.add(
    "hidden"
  );


  filtered.forEach(question => {

    questionList.appendChild(
      createQuestionRow(question)
    );

  });

}


/* ================= SAVED QUESTIONS ================= */

function renderSavedQuestions() {

  savedQuestionList.innerHTML = "";


  const saved =
    questions.filter(
      q =>
        savedQuestions.includes(q.id)
    );


  if (saved.length === 0) {

    savedEmptyState.classList.remove(
      "hidden"
    );

    savedQuestionList.classList.add(
      "hidden"
    );

    return;

  }


  savedEmptyState.classList.add(
    "hidden"
  );

  savedQuestionList.classList.remove(
    "hidden"
  );


  saved.forEach(question => {

    savedQuestionList.appendChild(
      createQuestionRow(question)
    );

  });

}


/* ================= SOLVE QUESTION ================= */

function toggleQuestionStatus(
  questionId
) {

  const question =
    questions.find(
      q => q.id === questionId
    );


  if (!question) return;


  const wasSolved =
    question.status === "solved";


  question.status =
    wasSolved
      ? "unsolved"
      : "solved";


  if (!wasSolved) {

    updateStreak();

  }


  saveData();

  updateAll();

}


/* ================= SAVE QUESTION ================= */

function toggleSavedQuestion(
  questionId
) {

  if (
    savedQuestions.includes(
      questionId
    )
  ) {

    savedQuestions =
      savedQuestions.filter(
        id => id !== questionId
      );

  } else {

    savedQuestions.push(
      questionId
    );

  }


  saveData();

  renderQuestions();

  renderSavedQuestions();

}


/* ================= STREAK ================= */

function updateStreak() {

  const firstInactive =
    streak.findIndex(
      day => !day
    );


  if (
    firstInactive !== -1
  ) {

    streak[firstInactive] = true;

  }

}


function renderStreak() {

  const streakDots =
    document.getElementById(
      "streakDots"
    );


  streakDots.innerHTML = "";


  streak.forEach(active => {

    const dot =
      document.createElement("span");


    dot.className =
      "streak-dot" +
      (active ? " active" : "");


    streakDots.appendChild(dot);

  });


  const count =
    streak.filter(Boolean).length;


  document.getElementById(
    "streakCount"
  ).textContent =
    `${count} day${count === 1 ? "" : "s"}`;

}


/* ================= WEEKLY GOAL ================= */

function updateGoalText() {

  const solved =
    getSolvedCount();


  const remaining =
    Math.max(
      0,
      weeklyGoal - solved
    );


  if (remaining === 0) {

    document.getElementById(
      "goalText"
    ).textContent =
      "🎉 You've reached your Weekly Goal!";

    return;

  }


  document.getElementById(
    "goalText"
  ).textContent =
    `You're ${remaining} question${
      remaining === 1 ? "" : "s"
    } away from your Weekly Goal.`;

}


/* ================= FILTERS ================= */

function toggleTopicFilter(
  topicId
) {

  selectedTopicId =
    selectedTopicId === topicId
      ? null
      : topicId;


  updateAll();

}


function setDifficultyFilter(
  filter
) {

  difficultyFilter =
    filter;


  difficultyButtons.forEach(
    button => {

      button.classList.toggle(
        "active",
        button.dataset.filter ===
        filter
      );

    }
  );


  renderQuestions();

}


function clearFilters() {

  selectedTopicId = null;

  difficultyFilter = "All";

  searchTerm = "";


  searchInput.value = "";


  difficultyButtons.forEach(
    button => {

      button.classList.toggle(
        "active",
        button.dataset.filter ===
        "All"
      );

    }
  );


  updateAll();

}


/* ================= FILTER BUTTON ================= */

function updateClearFilterButton() {

  clearTopicFilter.classList.toggle(
    "hidden",
    !selectedTopicId
  );

}


/* ================= NAVIGATION ================= */

function setActiveNav(label) {

  document
    .querySelectorAll(".nav-link")
    .forEach(link => {

      link.classList.toggle(
        "active",
        link.dataset.nav === label
      );

    });


  const topicsSection =
    document.getElementById(
      "topicsSection"
    );

  const practiceSection =
    document.getElementById(
      "practiceSection"
    );

  const savedSection =
    document.getElementById(
      "savedSection"
    );


  topicsSection.classList.remove(
    "hidden"
  );

  practiceSection.classList.remove(
    "hidden"
  );

  savedSection.classList.add(
    "hidden"
  );


  if (label === "Topics") {

    topicsSection.scrollIntoView({
      behavior: "smooth"
    });

  }


  if (label === "Practice Kit") {

    practiceSection.scrollIntoView({
      behavior: "smooth"
    });

  }


  if (label === "Saved Items") {

    topicsSection.classList.add(
      "hidden"
    );

    practiceSection.classList.add(
      "hidden"
    );

    savedSection.classList.remove(
      "hidden"
    );

    renderSavedQuestions();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }


  if (label === "Dashboard") {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }

}


/* ================= OPEN QUESTION ================= */

function openQuestion(question) {

  if (
    question.link &&
    question.link !== "#"
  ) {

    window.open(
      question.link,
      "_blank"
    );

    return;

  }


  alert(
    `Question ${question.number}: ${question.title}\n\n` +
    `Difficulty: ${question.difficulty}\n\n` +
    `Add a problem URL in the question data to open the problem.`
  );

}


/* ================= GREETING ================= */

function updateGreeting() {

  const hour =
    new Date().getHours();


  let greeting;


  if (hour < 12) {

    greeting =
      "Good morning";

  } else if (hour < 18) {

    greeting =
      "Good afternoon";

  } else {

    greeting =
      "Good evening";

  }


  document.getElementById(
    "greeting"
  ).textContent =
    `${greeting}, Tanuja.`;

}


/* ================= DATE ================= */

function updateDate() {

  const date =
    new Date();


  document.getElementById(
    "currentDate"
  ).textContent =
    date.toLocaleDateString(
      "en-IN",
      {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      }
    );

}


/* ================= UPDATE EVERYTHING ================= */

function updateAll() {

  renderTopics();

  renderQuestions();

  renderSavedQuestions();

  renderStreak();

  updateStatistics();

  updateGoalText();

  updateClearFilterButton();

}


/* ================= EVENT LISTENERS ================= */


/* Difficulty */

difficultyButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () =>
        setDifficultyFilter(
          button.dataset.filter
        )
    );

  }
);


/* Search */

searchInput.addEventListener(
  "input",
  event => {

    searchTerm =
      event.target.value;

    renderQuestions();

  }
);


/* Clear topic */

clearTopicFilter.addEventListener(
  "click",
  clearFilters
);


/* Clear all */

clearAllFilters.addEventListener(
  "click",
  clearFilters
);


/* Sidebar */

sidebarNav.addEventListener(
  "click",
  event => {

    const link =
      event.target.closest(
        ".nav-link"
      );


    if (!link) return;


    event.preventDefault();


    const label =
      link.dataset.nav;


    setActiveNav(label);

    mobileNavSelect.value =
      label;

  }
);


/* Mobile navigation */

mobileNavSelect.addEventListener(
  "change",
  event => {

    setActiveNav(
      event.target.value
    );

  }
);


/* Reset */

resetProgress.addEventListener(
  "click",
  () => {

    const confirmReset =
      confirm(
        "Are you sure you want to reset all progress?"
      );


    if (!confirmReset) return;


    questions.forEach(
      question => {

        question.status =
          "unsolved";

      }
    );


    savedQuestions = [];

    streak =
      Array(7).fill(false);


    saveData();

    clearFilters();

    updateAll();

    alert(
      "Your progress has been reset."
    );

  }
);


/* ================= INITIALIZATION ================= */

loadData();

updateGreeting();

updateDate();

updateAll();