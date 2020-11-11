import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    const rows = [];
    for(let i = 1; i <= 500; i++) {
      rows.push({ id: i });
    }
    return rows;
  }
}
