// js/storage.js

const Storage = {
  KEY: 'redeDoBem:volunteers',

  getAll() {
    const raw = localStorage.getItem(this.KEY);
    return raw ? JSON.parse(raw) : [];
  },

  save(entry) {
    const data = this.getAll();
    data.push(entry);
    localStorage.setItem(this.KEY, JSON.stringify(data));
  }
};
