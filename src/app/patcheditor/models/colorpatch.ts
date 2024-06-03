export class Colorpatch {
  constructor(
    private _r: number,
    private _g: number,
    private _b: number,
    private _a: number,
    private _name: string,
    private _id: number = -1
  ) {}
  get r(): number {
    return this._r;
  }
  get g(): number {
    return this._g;
  }
  get b(): number {
    return this._b;
  }
  get a(): number {
    return this._a;
  }
  get name(): string {
    return this._name;
  }
  get id(): number {
    return this._id;
  }
  get rgba(): string {
    return `rgba(${this._r},${this._g},${this._b},${this._a})`;
  }

  set r(r: number) {
    this._r = r;
  }
  set g(g: number) {
    this._g = g;
  }
  set b(b: number) {
    this._b = b;
  }
    set a(a: number) {
        if (a > 1) {
          this._a = a / 100
      } else this._a = a;
  }
  set name(name:string) {
    this._name = name;
  }
}
