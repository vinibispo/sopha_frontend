import { Box, Container, Typography } from "@material-ui/core";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useState } from "react";
import HomeCard from "../../components/HomeCard";
import SearchBar from "../../components/SearchBar";
import { useEnterprise } from "../../hooks/useEnterprise";

export default function Enterprises(): JSX.Element {
  const [search, setSearch] = useState("");
  const { enterprises, isLoading, error } = useEnterprise(search);
  return (
    <Container maxWidth="md">
      <Box
        mt={5}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Image src="/assets/logo.png" width={100} height={100} />
        <Box mt={3} mb={3}>
          <Typography>Selecione o seu empreendimento</Typography>
        </Box>
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        <Box>
          {enterprises?.map((enterprise) => (
            <HomeCard enterprise={enterprise} key={enterprise.id} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
