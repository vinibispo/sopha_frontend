import { Box, Container, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect } from "react";

export default function Home(): JSX.Element {
  const history = useRouter();
  useEffect(() => {
    setTimeout(() => {
      history.push("/enterprises");
    }, 2000);
  }, []);
  return (
    <div style={{ background: "url(/assets/bg.png)", height: "100vh" }}>
      <Container maxWidth="md">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Box mt={40}>
            <Image src="/assets/logo.png" width={200} height={200} />
          </Box>
          <Typography
            variant="body1"
            component="p"
            style={{ textAlign: "center" }}
          >
            Sua{" "}
            <Typography variant="h6" component="span">
              melhor
            </Typography>{" "}
            opção de{" "}
            <Typography variant="h6" component="span">
              móveis planejados
            </Typography>
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
