// services/api.ts
import axios from 'axios';

export const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    console.error('Axios fetch error: ', error);
    throw error;
  }
};
