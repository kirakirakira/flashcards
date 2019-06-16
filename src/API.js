import axios from 'axios';
import defaultCards from './data/cards';

export default class API {
  print() {
    console.log("it worked");
  }

  get (uri) {
    axios.get(uri)
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
            defaultCards
          })
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log('Error posting data', error);
          })
  }

  add (uri, terms) {
    axios.put(uri,
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

  edit (uri, terms) {
    axios.put(uri,
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

  delete (uri, terms) {
    axios.put(uri,
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
