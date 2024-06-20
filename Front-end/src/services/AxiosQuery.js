/* eslint-disable no-console */

// import axios from "axios';

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
        if (response.status === 200) {
          return response.data;
        }
        toastr.error('Erreur innatendu');
        throw new Error(`Erreur: Réponse inattendue, statut ${response.status}`);
      })
      .catch((error) => {
        toastr.error('Erreur lors de la création de la tâche');
        throw error;
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
          return response.data;
        }
        throw new Error(`Erreur: Réponse inattendue, statut ${response.status}`);
      })
      .catch((error) => {
        toastr.error('Erreur lors de la création de la tâche');
        throw error;
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
          return response.data;
        }
        throw new Error(`Erreur: Réponse inattendue, statut ${response.status}`);
      })
      .catch((error) => {
        toastr.error('Erreur lors de la création de la tâche');
        throw error;
      });
  }
};

export default AxiosQuery;
