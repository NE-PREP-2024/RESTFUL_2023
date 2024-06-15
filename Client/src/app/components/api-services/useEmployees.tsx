import useSWR from "swr";
import axios from "./axios.config";

export const useAllEmployees = () => {
  const { data, mutate } = useSWR(`/employees`, async (url) => {
    try {
      const response = await axios.get(url);
      console.log(response.data.employeesData);
      return response.data.employeesData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  });
  return {
    employeeData: data,
    mutate,
  };
};
