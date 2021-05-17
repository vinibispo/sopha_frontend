import {
  Container,
  Box,
  Typography,
  IconButton,
  Grid,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import SearchBar from "../../components/SearchBar";
import Image from "next/image";
import { useState, useCallback } from "react";
import { usePlant } from "../../hooks/usePlant";
import { useRouter } from "next/router";
import PlanCard from "../../components/PlanCard";
import { ArrowBack } from "@material-ui/icons";
export default function Plant(): JSX.Element {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const enterpriseId = router.query.id as string;
  const { plans, error, isLoading } = usePlant({ search, enterpriseId });
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <Container maxWidth="md">
      <Grid container style={{ marginTop: 40 }}>
        <Grid item xs={4}>
          <IconButton color="primary" onClick={handleBack}>
            <ArrowBack />
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <Image src="/assets/logo.png" width={100} height={100} />
        </Grid>
        <Grid item xs={4} />
      </Grid>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box mt={3} mb={3}>
          <Typography>Selecione a planta da sua unidade</Typography>
        </Box>
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        <Box>
          {isLoading ? (
            <Skeleton variant="rect" width={200} height={200} />
          ) : (
            <>
              {plans?.map((plan) => (
                <PlanCard plan={plan} key={plan.id} />
              ))}
            </>
          )}
        </Box>
      </Box>
    </Container>
  );
}
