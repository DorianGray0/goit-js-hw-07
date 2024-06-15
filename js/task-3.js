class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    const lngValue = this.#value.length;
    const lngStr = str.length;
    this.#value = this.#value.padEnd(lngValue + lngStr, str);
  }

  padStart(str) {
    const lngValue = this.#value.length;
    const lngStr = str.length;
    this.#value = this.#value.padStart(lngValue + lngStr, str);
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
