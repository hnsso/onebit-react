const add = (a, b, callback) => {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
};

add(1, 2, (value) => {
  console.log(value);
});

// 음식을 주문하는 상황

const orderFood = (callback) => {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
};

const cooldownFood = () => {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
};

const freezeFood = (food, callback) => {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
};

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);
  });
});
