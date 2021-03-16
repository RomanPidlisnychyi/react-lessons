const categories = [
  {
    food: 350,
  },
  {
    car: 400,
  },
  {
    home: 200,
  },
  {
    food: 700,
  },
  {
    health: 300,
  },
  {
    food: 350,
  },
  {
    car: 200,
  },
  {
    food: 350,
  },
  {
    home: 100,
  },
  {
    health: 100,
  },
];

const filtredCategories = categories.reduce((acc, item) => {
  const category = Object.keys(item)[0];
  if (acc[category]) {
    return { ...acc, [category]: acc[category] + item[category] };
  } else {
    return { ...acc, [category]: item[category] };
  }
}, {});

const uniqCategories = [
  ...new Set(
    categories.map(item => {
      const category = Object.keys(item)[0];

      return category;
    })
  ),
];

console.log('filtredCategories', filtredCategories);
console.log('uniqCategories', uniqCategories);
