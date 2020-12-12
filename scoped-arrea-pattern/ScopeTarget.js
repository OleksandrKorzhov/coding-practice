/**
 * Class oriented for work with setter based dependency injection
 * @abstract
 */
class ScopeTarget {
  /**
   * Setter for dependencies
   * @abstract
   */
  setScopeDependencies() {

  }

  /**
   * Method for removing scoped dependencies
   * could be used if class travel between scopes
   * @abstract
   */
  cleanScopeDependencies() {

  }
}

module.exports = ScopeTarget;
