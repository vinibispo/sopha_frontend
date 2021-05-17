import { Box, Button, Card, CardActions, CardHeader } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";

interface Plan {
  id: number;
  room: number;
  area: number;
  image: string;
  enterprise_id: number;
}
interface PlanCardProps {
  plan: Plan;
}

export default function PlanCard({ plan }: PlanCardProps) {
  const history = useRouter();
  const handleGoToSignUpPage = useCallback(() => {
    history.push(`/signup/${plan.id}`);
  }, [history, plan]);
  return (
    <Box mt={2.5} mb={2.5}>
      <Card elevation={4}>
        <CardHeader
          title={`${plan.room} quartos - ${plan.area} m {Unidades finais 1 e 2}`}
        />
        <Box display="flex" alignItems="center" justifyContent="center">
          <Image src={plan.image} width={150} height={200} />
        </Box>
        <CardActions
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={handleGoToSignUpPage}
            variant="contained"
            color="primary"
          >
            Selecionar
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
