import axios from "axios";

class zipCodeService {
  getCep(zipCodeClear: string) {
    return axios.get(`https://brasilapi.com.br/api/cep/v2/${zipCodeClear}`);
  }
}

export default new zipCodeService();
