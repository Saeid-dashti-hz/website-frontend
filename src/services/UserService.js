// src/services/UserService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

class UserService {
    register(user) {
        return axios.post(`${API_URL}/register`, user);
    }
}

const userService = new UserService();
export default userService;
