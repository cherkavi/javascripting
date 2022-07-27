  public static exists<T>(x: T): boolean {
    // check for type undefinded
    // check for null
    return typeof (x) !== 'undefined' && x !== null;
  }
