export class Lenses {
  private color: string;

  constructor(color: string) {
    this.color = color;
  }

  public wear(): string {
    return `wearing ${this.color} lenses`;
  }
}
