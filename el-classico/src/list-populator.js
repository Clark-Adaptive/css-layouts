const cesspool = [
  "dead serious",
  "stopwatch ⏱️ on fleek",
  "Node is a runtime environment don't @ me",
  "The browser is asynchronous no 🧢",
  "useState is Big Yikes 🤮",
  "useCallback🔥",
  "Adaptive has the coldest drip 🥶🥶",
  "chicken nuggets",
  "conditional rendering is BUSSIN 💯",
];

const listContainer = document.querySelector(".list-container");

function createListItem() {
  const listItem = document.createElement("div");
  const B = document.createElement("p");
  const msg = document.createElement("p");

  listItem.classList.add("list-item-container");
  B.classList.add("P-emoji");
  B.innerHTML = "P";
  msg.classList.add("list-message");
  msg.innerHTML = cesspool[Math.floor(Math.random() * cesspool.length)];
  listItem.appendChild(B);
  listItem.appendChild(msg);

  return listItem;
}

function createList() {
  for (let a = 0; a < 20; a++) {
    listContainer.appendChild(createListItem());
  }
}

createList();
