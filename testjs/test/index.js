class Cookies {
  constructor(name, ingredients) {
    this.name = name;
    // dll
  }
}

class ChocolateCookies extends Cookies {}

class ChocolateCookiesCrumbled extends ChocolateCookies {
  constructor(name, ingredients) {
    super(name, ingredients);
    this.shape = "crumbled";
  }
}
