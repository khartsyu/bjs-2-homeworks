function parseCount(quantity) {
  let quantityProduct = Number.parseFloat(quantity);
  if (Number.isNaN(quantityProduct)) {
    throw new Error("Невалидное значение");
  }
  return quantityProduct;
}

function validateCount(quantity) {
  try {
    return parseCount(quantity);
  } catch (error) {
    console.error("Невалидное значение")
    return error;
  }
}


class Triangle {
  constructor(a, b, c) {
    if (((a + b) <= c) || ((a + c) <= b) || ((b + c) <= a)) {
      throw new Error("Треугольник с такими сторонами не существует");
    }

    this.a = a;
    this.b = b;
    this.c = c;
    this.p = 0.5 * (a + b + c);
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    return parseFloat(Math.sqrt(this.p * (this.p - this.a) * (this.p - this.b) * (this.p - this.c)).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      }
    };
  }
}
