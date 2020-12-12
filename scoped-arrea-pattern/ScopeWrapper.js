/**
 * Scope wrapper it's kind of dependency injection container
 * such container oriented for work with interface of target class
 */
class ScopeWrapper {
  constructor() {
    this._scopeDependencies = null;
  }
  /**
   * Provide scoped dependencies to target class
   * @param {Object} targetClass class for what will be provided scoped data 
   */
  initializeScope(targetClass) {
    targetClass.setScopeDependencies(this._scopeDependencies);
  }

  cleanScope(targetClass) {
    targetClass.cleanScopeDependencies();
  }
}

module.exports = ScopeWrapper;
