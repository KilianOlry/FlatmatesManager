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
          console.log(response);
          return response.data;
        }
        toastr.error('Erreur innatendu');
        throw new Error(`Erreur: Réponse inattendue, statut ${response.status}`);
      })
      .catch((response) => {
        console.log(response);
        toastr.error('Erreur lors de la création de la tâche');
      });
  }

  Post(url, data) {
    return axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.status === 200) {
          toastr.success(response.data);
          return response.data;
        }
        throw new Error(`Erreur: Réponse inattendue, statut ${response.status}`);
      })
      .catch((response) => {
        console.log(response);
        toastr.error(response.response.data);
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
          return toastr.success(response.data);
        }
        throw new Error(`Erreur: Réponse inattendue, statut ${response.status}`);
      })
      .catch((response) => {
        toastr.error(response.response.data);
      });
  }
};

export default AxiosQuery;
