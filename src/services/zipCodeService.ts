import axios from "axios";

class zipCodeService {
  getCep(zipCodeClear: string) {
    return axios.get(`https://viacep.com.br/ws/${zipCodeClear}/json/`);
  }
}

export default new zipCodeService();
