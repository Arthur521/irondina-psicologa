import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { wa } from "../links";

const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#atendimentos", label: "Atendimentos" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <Box
      as="header"
      position="fixed"
      insetX="0"
      top="0"
      zIndex="50"
      borderBottomWidth="1px"
      borderColor="rgba(58,139,136,0.12)"
      bg="white"
    >
      <Flex
        mx="auto"
        h={{ base: "16", md: "20" }}
        maxW="6xl"
        align="center"
        justify="space-between"
        px={{ base: "5", md: "8" }}
      >
        <Link
          href="#inicio"
          display="flex"
          alignItems="center"
          gap="3"
          textDecor="none"
          transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"
          _hover={{ textDecor: "none", transform: "translateY(-1px)" }}
        >
          <Image
            src="/images/logo.png"
            alt="Irondina Assis — Psicologia Clínica Sistêmica"
            h={{ base: "11", md: "12" }}
            w={{ base: "11", md: "12" }}
            borderRadius="full"
            objectFit="cover"
            transition="transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)"
            _hover={{ transform: "scale(1.08) rotate(-4deg)" }}
          />
          <Text
            display={{ base: "none", sm: "inline" }}
            fontFamily="serif"
            fontSize={{ base: "lg", md: "xl" }}
            letterSpacing="wide"
            color="verdeEscuro"
          >
            Irondina Assis
          </Text>
        </Link>

        <Flex display={{ base: "none", md: "flex" }} align="center" gap={{ md: "5", lg: "8" }}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              fontSize="xs"
              fontWeight="300"
              textTransform="uppercase"
              letterSpacing="0.18em"
              color="rgba(38,40,40,0.7)"
              _hover={{ color: "verdeEscuro", textDecor: "none" }}
              textDecor="none"
            >
              {item.label}
            </Link>
          ))}
        </Flex>

        <Link
          href={wa("Olá, Irondina. Vim pelo seu site e gostaria de conversar.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar terapia familiar no WhatsApp"
          display="flex"
          h="10"
          alignItems="center"
          borderRadius="full"
          bg="verdeEscuro"
          px="5"
          fontSize="xs"
          fontWeight="500"
          textTransform="uppercase"
          letterSpacing="0.14em"
          color="gelo"
          textDecor="none"
          transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), background 0.4s, box-shadow 0.4s"
          _hover={{
            bg: "turquesa",
            textDecor: "none",
            transform: "translateY(-2px)",
            boxShadow: "0 10px 22px rgba(58,139,136,0.28)",
          }}
        >
          Agendar
        </Link>
      </Flex>
    </Box>
  );
}
