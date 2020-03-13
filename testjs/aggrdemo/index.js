class Blender {
  constructor(color) {
    this.color = color;
  }
}

class Tv {
  constructor(color, size, technology) {
    this.color = color;
    this.size = size;
    this.technology = technology;
  }
}

class ElectronicFactory {
  static sell() {}

  static create(type, qty, size, color, spec) {
    let results = [];

    for (let i = 0; i < qty; i++) {
      switch (type) {
        case "laptop":
          if (spec === "high") {
            if (!size) {
              results.push(new Laptop(13, color, size));
            } else {
              results.push(new Laptop(16, color, size));
            }
          }
          if (spec === "med") {
            results.push(new Laptop(8, color, size));
          }
          break;
        case "tv":
          if (spec === "high") {
            results.push(new Tv(color, size, "OLED"));
          }
          if (spec === "med") {
            results.push(new Tv(color, size, "IPS"));
          }
          if (spec === "low") {
            results.push(new Tv(color, size, "TN"));
          }
          break;
        case "blender":
          results.push(new Blender(color));
          break;
      }
    }

    return results;
  }
}

let laptop = ElectronicFactory.create("blender", 10, 100, "black");

new ElectronicFactory();

class Laptop {
  constructor(ram, screen) {
    this.ram = ram;
    this.screen = screen;
  }
  static create(spec, qty) {
    if (spec === "high") {
      return new Laptop(32, 18);
    } else {
      return new Laptop(16, 13);
    }
  }
}

let laptopAsus = Laptop.create("high");

console.log(laptopAsus);
