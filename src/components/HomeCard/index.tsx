import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";

interface Enterprise {
  id: number;
  nome: string;
  endereco: string;
  image: string;
}
interface HomeCardProps {
  enterprise: Enterprise;
}

export default function HomeCard({ enterprise }: HomeCardProps) {
  const history = useRouter();
  const handleGoToPlantPage = useCallback(() => {
    history.push(`/enterprises/${enterprise.id}`);
  }, [history, enterprise]);
  return (
    <Box mt={2.5} mb={2.5}>
      <Card elevation={4}>
        <CardHeader title={enterprise.nome} />
        <Box display="flex" alignItems="center" justifyContent="center">
          <Image src={enterprise.image} width={150} height={200} />
        </Box>
        <CardContent style={{ maxWidth: 200 }}>
          <Typography>{enterprise.endereco}</Typography>
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={handleGoToPlantPage}
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
