import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

  export const fetchApi = async (url) => {
      const {data} = await axios.get((url), {
           headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '39ca11a64cmsh9539efc8e3fef17p196e3djsnd9a61527afde'
  }
      });

      return data;
  }