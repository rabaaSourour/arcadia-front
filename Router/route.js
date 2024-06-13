class Route {
  constructor(path, title, htmlFile, roles = [], jsFile = null) {
      this.path = path;
      this.title = title;
      this.htmlFile = htmlFile;
      this.roles = roles;
      this.jsFile = jsFile;
  }
}

export default Route;
