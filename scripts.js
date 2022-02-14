function fetchStore(storeName) {
  let store = JSON.parse(localStorage.getItem(storeName));
  if (!store) store = [];
  return store;
}

function addToStore(storeName) {
  let store = fetchStore(storeName);
  store.push({
    time: new Date().toISOString(),
  });
  localStorage.setItem(storeName, JSON.stringify(store));
  render();
}

function didntEat() {
  addToStore("eatStore");
}

function didntDrink() {
  addToStore("drinkStore");
}

function exercised() {
  addToStore("exerciseStore");
}

function gettingItDone() {
  addToStore("doneStore");
}

function render() {
  let eatStore = fetchStore("eatStore");
  let drinkStore = fetchStore("drinkStore");
  let exerciseStore = fetchStore("exerciseStore");
  let doneStore = fetchStore("doneStore");

  const eatCount = document.getElementById("eat-count");
  const drinkCount = document.getElementById("drink-count");
  const exerciseCount = document.getElementById("exercise-count");
  const doneCount = document.getElementById("done-count");

  eatCount.innerHTML = eatStore.length;
  drinkCount.innerHTML = drinkStore.length;
  exerciseCount.innerHTML = exerciseStore.length;
  doneCount.innerHTML = doneStore.length;
}

render();
