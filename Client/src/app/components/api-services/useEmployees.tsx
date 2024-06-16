import useSWR from "swr";
import axios, { AuthApi } from "./axios.config";

export const useAllEmployees = (page: number, limit: number) => {
  const { data, mutate, error } = useSWR(
    `/employees?page=${page}&limit=${limit}`,
    async (url) => {
      try {
        const response = await AuthApi.get(url);
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  );
  return {
    employeeData: data?.employeesData,
    totalPage: data?.totalPage || 0,
    totalCount: data?.totalCount || 0,
    currentPage: page,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
