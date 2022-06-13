export default class Model {
  constructor(table) {
    const Table = localStorage.getItem(table);
    !Table ? null : (this.table = Table);
  }
  get(columnName) {
    return !this.table[columnName] ? false : this.table[columnName];
  }
  set(ColumnName) {
      
  }
}
