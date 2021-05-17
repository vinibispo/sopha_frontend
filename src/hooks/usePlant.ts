import { useQuery } from "react-query";
import api from "../services/api";

interface Plan {
  id: number;
  room: number;
  area: number;
  image: string;
  enterprise_id: number;
}
interface UsePlantProps {
  search: string;
  enterpriseId: string | number;
}
export function usePlant({ search, enterpriseId }: UsePlantProps) {
  const { data, error, isLoading } = useQuery<Plan[]>(
    `plans/${enterpriseId}?${search}`,
    async () => {
      const response = await api.get(
        `/enterprises/${enterpriseId}/plans.json`,
        {
          params: {
            q: search,
          },
        }
      );
      return response.data;
    }
  );
  return { plans: data, error, isLoading };
}
