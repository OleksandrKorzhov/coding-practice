const ScopeWrapper = require('../ScopeWrapper');
const ScopeTarget = require('../ScopeTarget');

class SessionScope extends ScopeWrapper {
  constructor() {
    super();
    this._scopeDependencies = this.createSessionObject();
  }

  /**
   * @abstract
   */
  createSessionObject() {

  }
}

class SessionTarget extends ScopeTarget {
  constructor() {
    super();
    this.session = null;
  }

  setScopeDependencies(sessionObj) {
    this.session = sessionObj;
  }

  cleanScopeDependencies() {
    this.session = null;
  }
}

class Session {
  setData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

class Domain extends SessionTarget {}

class SessionCommand extends SessionScope {
  createSessionObject() {
    return new Session();
  }

  run() {
    const domainObj = new Domain();
    this.initializeScope(domainObj);
    domainObj.session.setData('Hello domain');
    console.log(domainObj.session.getData()); // Hello domain
    this.cleanScope(domainObj);
    console.log(domainObj.session); // null
  }
}

new SessionCommand().run();





