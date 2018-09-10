import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = 'ca0f94686bc87a7f7670942e6f223c4d';

    try {
      const res = await axios(
        `${proxy}https://www.food2fork.com/api/search?key=${key}&q=${
          this.query
        }`,
      );
      this.result = res.data.recipes;
    } catch (err) {
      console.log(err);
    }
  }
}
