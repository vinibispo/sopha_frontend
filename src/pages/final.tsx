import { Container, Box, Typography } from "@material-ui/core";
import Image from "next/image";

export default function Final() {
  return (
    <div style={{ background: "url(/assets/bg.png)", height: "100vh" }}>
      <Container maxWidth="md">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Box mt={30}>
            <Image src="/assets/logo.png" width={200} height={200} />
          </Box>

          <Typography variant="h6">Obrigado.</Typography>
        </Box>

        <Box maxWidth={300}>
          <Typography>
            Em breve um de nossos especialistas entrarão em contato para
            finalizar sua contratação e planejar a entrega do seu projeto!
          </Typography>
          <Typography>Qualquer dúvida, ficamos a disposição:</Typography>
          <Typography variant="h6">meuplaneado@sopha.com.br</Typography>
          <Typography color="primary" variant="h6">
            0800 44 444 4344
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
