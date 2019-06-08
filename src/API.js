import axios from 'axios';

class API {
  get () {
    axios.get('https://api.myjson.com/bins/125clh')
         .then(response => {
           this.setState({
              terms: response.data.terms
           })
         })
         .catch(error => {
           console.log('Error fetching and parsing data', error);
         })
  }

  create () {
    axios.post('https://api.myjson.com/bins',
          {

          })
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log('Error posting data', error);
          })
  }

  add (terms) {
    axios.put('https://api.myjson.com/bins/125clh',
          { "terms": terms })
         .then(response => {
           this.setState({
             terms: response.data.terms
           })
         })
         .catch(error => {
           console.log('Error putting and fetching data', error);
         })
  }

  edit (terms) {
    axios.put('https://api.myjson.com/bins/125clh',
          { "terms": terms })
         .then(response => {
           this.setState({
             terms: response.data.terms
           })
         })
         .catch(error => {
           console.log('Error putting and fetching data', error);
         })
  }

  delete (terms) {
    axios.put('https://api.myjson.com/bins/125clh',
          { "terms": terms })
         .then(response => {
           this.setState({
             terms: response.data.terms
           })
         })
         .catch(error => {
           console.log('Error putting and fetching data', error);
         })
  }
}

export default API;
