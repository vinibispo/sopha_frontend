import { useQuery } from "react-query";
import api from "../services/api";

interface Enterprise {
  id: number;
  nome: string;
  endereco: string;
  image: string;
}
export function useEnterprise(search: string) {
  const { data, error, isLoading } = useQuery<Enterprise[]>(
    `enterprises?${search}`,
    async () => {
      const response = await api.get("/enterprises.json", {
        params: {
          q: search,
        },
      });
      return response.data;
    }
  );
  return { enterprises: data, error, isLoading };
}
