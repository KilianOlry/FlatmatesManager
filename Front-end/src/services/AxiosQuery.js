/* eslint-disable no-console */
import axios from 'axios';
import toastr from 'toastr';

const AxiosQuery = class {
  Get(url, data) {
    return axios.get(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          if (response.data.message) {
            toastr.success(response.data.message);
          }
          return response.data;
        }
        toastr.error('Erreur innatendu');
        throw new Error(`Erreur: Réponse inattendue, statut ${response.status}`);
      })
      .catch((error) => {
        toastr.error(error.response.data.message);
        return error;
      });
  }

  Post(url, data) {
    return axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          if (response.data.message) {
            toastr.success(response.data.message);
          }
          return response.data;
        }
        throw new Error(`Erreur: Réponse inattendue, statut ${response.status}`);
      })
      .catch((error) => {
        toastr.error(error.response.data.message);
        return error.response;
      });
  }

  Put(url, data) {
    return axios.put(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.status === 200) {
          if (response.data.message) {
            toastr.success(response.data.message);
          }
          return response.data;
        }
        throw new Error(`Erreur: Réponse inattendue, statut ${response.status}`);
      })
      .catch((error) => {
        toastr.error(error.response.data.message);
        return error.response;
      });
  }
};

export default AxiosQuery;
