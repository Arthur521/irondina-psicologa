import { Box, Link, Text } from "@chakra-ui/react";
import { wa } from "../links";
import { faqItems } from "../site";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <Box as="section" id="faq" bg="white" py={{ base: "24", md: "36" }}>
      <Box mx="auto" maxW="3xl" px={{ base: "5", md: "8" }}>
        <Reveal>
          <Text fontSize="sm" fontWeight="300" textTransform="uppercase" letterSpacing="0.2em" color="turquesa">
            Dúvidas frequentes
          </Text>
          <Text as="h2" mt="4" fontFamily="serif" fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }} fontWeight="300" lineHeight={1.05} color="verdeEscuro">
            Perguntas que costumam chegar antes da conversa.
          </Text>
        </Reveal>

        <Box mt={{ base: "10", md: "14" }}>
          {faqItems.map((item, i) => (
            <Reveal key={item.q} delay={i * 60}>
              <Box
                as="details"
                borderTopWidth="1px"
                borderColor="rgba(58,139,136,0.18)"
                py="5"
                _last={{ borderBottomWidth: "1px" }}
              >
                <Box
                  as="summary"
                  cursor="pointer"
                  fontFamily="serif"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="300"
                  color="verdeEscuro"
                  lineHeight={1.2}
                >
                  {item.q}
                </Box>
                <Text mt="3" fontSize="md" fontWeight="300" lineHeight="relaxed" color="rgba(38,40,40,0.78)">
                  {item.a}
                </Text>
              </Box>
            </Reveal>
          ))}
        </Box>

        <Reveal delay={200}>
          <Link
            href={wa("Olá, Irondina. Tenho uma dúvida sobre terapia familiar e gostaria de conversar.")}
            target="_blank"
            rel="noopener noreferrer"
            mt="10"
            display="inline-flex"
            h="12"
            alignItems="center"
            borderRadius="full"
            bg="verdeEscuro"
            px="8"
            fontSize="xs"
            fontWeight="500"
            textTransform="uppercase"
            letterSpacing="0.14em"
            color="gelo"
            textDecor="none"
            _hover={{ bg: "turquesa", textDecor: "none" }}
          >
            Falar no WhatsApp
          </Link>
        </Reveal>
      </Box>
    </Box>
  );
}
