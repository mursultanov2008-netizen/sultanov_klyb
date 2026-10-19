const nameInput = document.querySelector("#visitor-name");
const joinButton = document.querySelector("#join-button");
const message = document.querySelector("#message");

function showMessage() {
  const name = nameInput.value.trim();

  if (name === "") {
    message.textContent = "Введите имя.";
    nameInput.focus();
    return;
  }

  if (name.length < 2) {
    message.textContent = "Введите хотя бы два символа.";
    nameInput.focus();
    return;
  }

  message.textContent = name + ", рады видеть вас в клубе!";
}

joinButton.addEventListener("click", showMessage);

const topics = [
  {
    title: "HTML",
    description: "Создаём структуру страницы.",
    category: "layout"
  },
  {
    title: "CSS",
    description: "Настраиваем оформление.",
    category: "layout"
  },
  {
    title: "JavaScript",
    description: "Добавляем действия на странице.",
    category: "logic"
  },
  {
    title: "События",
    description: "Реагируем на действия пользователя.",
    category: "logic"
  }
];

const topicList = document.querySelector("#topic-list");
const topicCount = document.querySelector("#topic-count");
const categoryFilter = document.querySelector("#category-filter");

function addCard(topic) {
  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = topic.title;

  const description = document.createElement("p");
  description.textContent = topic.description;

  const category = document.createElement("span");
  category.className = "card-category";
  category.textContent = topic.category === "layout" ? "Вёрстка" : "Логика";

  card.append(title, description, category);
  topicList.append(card);
}

function renderTopics() {
  topicList.replaceChildren();

  const selectedCategory = categoryFilter.value;
  let shown = 0;

  for (const topic of topics) {
    if (selectedCategory === "all" || topic.category === selectedCategory) {
      addCard(topic);
      shown = shown + 1;
    }
  }

  if (shown === 0) {
    topicCount.textContent = "Тем пока нет.";
  } else {
    topicCount.textContent = "Тем на странице: " + shown;
  }
}

categoryFilter.addEventListener("change", renderTopics);
renderTopics();