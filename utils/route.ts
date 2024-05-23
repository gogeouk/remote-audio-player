export class Route {
  private url: URL;

  constructor(url: string) {
    this.url = new URL(url);
  }

  startsWith(str: string) {
    return this.url.pathname.substring(0, str.length) === str;
  }

  parts() {
    let trimmedPath = this.url.pathname.trim();
    if (trimmedPath.substring(0, 1) === "/") trimmedPath = trimmedPath.substring(1);
    return trimmedPath.split("/");
  }

  part(index: number) {
    return this.parts()[index];
  }
}