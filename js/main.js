const values = [
  { name: 'Wiśnie', calories: 67, fat: 0.4, carbs: 14.6 },
  { name: 'Jabłko', calories: 57, fat: 0.7, carbs: 12.1 },
  { name: 'Pomarańcza', calories: 51, fat: 0.2, carbs: 11.3 },
  { name: 'Ananas', calories: 33, fat: 0, carbs: 11.8 },
];

const valuesContainer = document.querySelector('.main--container');

const desktopView = window.matchMedia('screen and (min-width: 500px)');

const drawValues = (isDesktop) => {
  if (isDesktop) {
    drawDesktop();
  } else {
    drawMobile();
  }
}

const drawDesktop = () => {
  valuesContainer.innerHTML = '';

  let table = document.createElement('table');
  let thead = document.createElement('thead');
  thead.innerHTML = '<tr><th>Nazwa</th><th>Kalorie</th><th>Tłuszcz</th><th>Węglowodany</th></tr>';
  let tbody = document.createElement('tbody');
  values.forEach(value => {
    let row = document.createElement('tr');
    row.innerHTML = `<td>${value.name}</td><td>${value.calories}</td><td>${value.fat}</td><td>${value.carbs}</td>`;
    tbody.appendChild(row);
  })

  table.appendChild(tbody);
  table.appendChild(thead);
  valuesContainer.appendChild(table);
}

const drawMobile = () => {
  valuesContainer.innerHTML = '';

  let list = document.createElement('ul');

  values.forEach(value => {
    let item = document.createElement('li');
    let name = document.createElement('div');
    let calories = document.createElement('div');
    let fat = document.createElement('div');
    let carbs = document.createElement('div');

    name.innerHTML = `<strong>Nazwa: </strong>${value.name}`;
    calories.innerHTML = `<strong>Kalorie: </strong>${value.calories}`;
    fat.innerHTML = `<strong>Tłuszcz: </strong>${value.fat}`;
    carbs.innerHTML = `<strong>Węglowodany: </strong>${value.carbs}`;

    item.appendChild(name);
    item.appendChild(calories);
    item.appendChild(fat);
    item.appendChild(carbs);

    list.appendChild(item);
  })

  valuesContainer.appendChild(list);
}

//drawDesktop();

//drawMobile();

drawValues(desktopView.matches);

desktopView.addListener(isDesktop => {
  drawValues(isDesktop.matches);
})