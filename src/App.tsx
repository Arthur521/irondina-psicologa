import { Box, Flex, Grid, Image, Link, Text } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Reveal } from "./components/Reveal";
import { Faq } from "./components/Faq";
import { Seo } from "./components/Seo";
import { WA, WHATSAPP_PATH, wa } from "./links";

const btnUpper = {
  fontWeight: "500" as const,
  textTransform: "uppercase" as const,
  letterSpacing: "0.16em",
  textDecor: "none",
};

function WhatsAppIcon({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden width={size} height={size}>
      <path d={WHATSAPP_PATH} />
    </svg>
  );
}

export default function App() {
  return (
    <Box>
      <Seo />
      <Header />
      <Box as="main" pb={{ base: "16", md: "0" }}>
        <Hero />
        <Patterns />
        <Systemic />
        <Services />
        <About />
        <Questions />
        <Faq />
        <Steps />
        <Contact />
      </Box>
      <Footer />

      <Link
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar terapia familiar no WhatsApp"
        display={{ base: "none", md: "flex" }}
        position="fixed"
        bottom={{ md: "6" }}
        right={{ md: "6" }}
        zIndex="50"
        h="14"
        w="14"
        alignItems="center"
        justifyContent="center"
        borderRadius="full"
        bg="verdeEscuro"
        color="gelo"
        boxShadow="0 10px 25px rgba(58,139,136,0.25)"
        transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), background 0.4s, box-shadow 0.4s"
        _hover={{ transform: "scale(1.1) rotate(6deg)", bg: "turquesa", boxShadow: "0 16px 32px rgba(58,139,136,0.35)" }}
      >
        <WhatsAppIcon size={28} />
      </Link>

      <Box
        display={{ base: "block", md: "none" }}
        position="fixed"
        insetX="0"
        bottom="0"
        zIndex="50"
        borderTopWidth="1px"
        borderColor="rgba(247,239,239,0.2)"
        bg="verdeEscuro"
        px="4"
        py="3"
      >
        <Link
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          display="flex"
          h="11"
          w="full"
          alignItems="center"
          justifyContent="center"
          gap="2"
          borderRadius="full"
          bg="gelo"
          fontSize="sm"
          fontWeight="500"
          textTransform="uppercase"
          letterSpacing="0.12em"
          color="verdeEscuro"
          textDecor="none"
          transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), background 0.4s"
          _hover={{ bg: "verdeAgua", transform: "translateY(-2px)", textDecor: "none" }}
        >
          <WhatsAppIcon size={16} />
          Agendar terapia familiar
        </Link>
      </Box>
    </Box>
  );
}

function Hero() {
  return (
    <Box
      as="section"
      id="inicio"
      position="relative"
      display="flex"
      minH="100vh"
      alignItems="center"
      overflow="hidden"
      bg="verdeEscuro"
    >
      <Image
        src="/images/hero-familia.webp"
        alt="Família caminhando junta — terapia familiar e sistêmica em Goiânia"
        position="absolute"
        inset="0"
        w="full"
        h="full"
        objectFit="cover"
        objectPosition="center 30%"
      />
      <Box position="absolute" inset="0" bg="rgba(42, 98, 96, 0.55)" />
      <Box
        position="absolute"
        inset="0"
        bg="linear-gradient(to right, rgba(42,98,96,0.88) 0%, rgba(42,98,96,0.55) 48%, rgba(42,98,96,0.28) 100%)"
      />
      <Box
        position="absolute"
        inset="0"
        bg="linear-gradient(to top, #3a8b88, rgba(58,139,136,0.35), transparent 55%)"
      />
      <Box
        aria-hidden
        display={{ base: "none", md: "block" }}
        pointerEvents="none"
        position="absolute"
        right="-24"
        top="50%"
        h="560px"
        w="560px"
        transform="translateY(-50%)"
        borderRadius="full"
        borderWidth="1px"
        borderColor="rgba(207,230,229,0.2)"
      >
        <Box position="absolute" inset="12" borderRadius="full" borderWidth="1px" borderColor="rgba(207,230,229,0.15)" />
        <Box position="absolute" inset="28" borderRadius="full" borderWidth="1px" borderColor="rgba(207,230,229,0.1)" />
      </Box>

      <Box position="relative" mx="auto" w="full" maxW="6xl" px={{ base: "5", md: "8" }} pb={{ base: "28", md: "24" }} pt="32">
        <Box maxW="2xl">
          <Reveal>
            <Text mb="8" fontSize="xs" fontWeight="300" textTransform="uppercase" letterSpacing="0.3em" color="rgba(207,230,229,0.8)">
              Psicóloga sistêmica em Goiânia
            </Text>
          </Reveal>
          <Reveal delay={120}>
            <Text as="h1" fontFamily="serif" fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }} fontWeight="300" lineHeight={0.95} color="gelo">
              Talvez o problema não seja quem você é.
              <Text as="span" mt="1" display="block" color="verdeAgua">
                Talvez seja a história que você aprendeu a repetir.
              </Text>
            </Text>
          </Reveal>
          <Reveal delay={260}>
            <Text mt="8" maxW="lg" fontSize={{ base: "md", md: "lg" }} fontWeight="300" lineHeight="relaxed" color="rgba(247,239,239,0.85)">
              Terapia familiar, terapia de casal e família e cuidado a conflitos familiares — para compreender vínculos, padrões e relações que continuam se repetindo.
            </Text>
          </Reveal>
          <Reveal delay={380}>
            <Flex mt="10" direction="column" align="flex-start" gap="4">
              <Link
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar terapia familiar no WhatsApp"
                display="flex"
                h="14"
                alignItems="center"
                borderRadius="full"
                bg="gelo"
                px="9"
                fontSize="sm"
                color="verdeEscuro"
                transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), background 0.4s, box-shadow 0.4s, letter-spacing 0.4s"
                _hover={{ bg: "verdeAgua", textDecor: "none", transform: "translateY(-3px)", boxShadow: "0 14px 32px rgba(247,239,239,0.22)", letterSpacing: "0.2em" }}
                {...btnUpper}
              >
                Agendar no WhatsApp
              </Link>
              <Text fontSize="sm" fontWeight="300" letterSpacing="wide" color="rgba(247,239,239,0.7)">
                Psicólogo para terapia familiar · casal e individual em Goiânia
              </Text>
            </Flex>
          </Reveal>
        </Box>
      </Box>
    </Box>
  );
}

function Patterns() {
  const lines = [
    "Você muda de relacionamento, mas sente a mesma dor.",
    "Promete não repetir sua família, mas percebe velhos padrões aparecendo.",
    "Ama alguém, mas parece que vocês já não conseguem se encontrar na conversa.",
  ];

  return (
    <Box as="section" bg="gelo" py={{ base: "24", md: "36" }}>
      <Box mx="auto" maxW="6xl" px={{ base: "5", md: "8" }}>
        <Grid alignItems="center" gap={{ base: "10", md: "16" }} templateColumns={{ md: "0.95fr 1.05fr" }}>
          <Reveal>
            <Box className="img-zoom" overflow="hidden" borderRadius="2xl" aspectRatio={{ base: "4/3", md: "4/5" }}>
              <Image
                src="/images/padroes-geracoes.webp"
                alt="Três gerações reunidas — conflitos e vínculos familiares na terapia sistêmica"
                w="full"
                h="full"
                objectFit="cover"
              />
            </Box>
          </Reveal>
          <Box>
            <Reveal>
              <Text as="h2" maxW="3xl" fontFamily="serif" fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }} fontWeight="300" lineHeight={1.05} color="verdeEscuro">
                Tem coisas que não começam hoje.
              </Text>
            </Reveal>
            <Flex mt={{ base: "10", md: "14" }} direction="column" gap="px">
              {lines.map((line, i) => (
                <Reveal key={line} delay={i * 120}>
                  <Text
                    borderTopWidth="1px"
                    borderColor="rgba(58,139,136,0.15)"
                    py={{ base: "7", md: "8" }}
                    fontFamily="serif"
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="300"
                    lineHeight={1.15}
                    color="rgba(38,40,40,0.85)"
                    cursor="default"
                    transition="transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), color 0.45s, padding 0.45s, border-color 0.45s"
                    _hover={{ transform: "translateX(10px)", color: "verdeEscuro", borderColor: "turquesa" }}
                  >
                    {line}
                  </Text>
                </Reveal>
              ))}
            </Flex>
            <Reveal delay={200}>
              <Text mt="12" fontSize="sm" fontWeight="300" textTransform="uppercase" letterSpacing="0.18em" color="terracota">
                É sobre isso que podemos olhar juntos.
              </Text>
            </Reveal>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}

function Systemic() {
  return (
    <Box as="section" id="metodologia" bg="rgba(207,230,229,0.4)">
      <Grid mx="auto" maxW="7xl" alignItems="stretch" gap="0" templateColumns={{ md: "1fr 1fr" }}>
        <Box
          className="img-zoom"
          position="relative"
          display="flex"
          minH={{ base: "340px", md: "600px" }}
          alignItems="flex-end"
          overflow="hidden"
          bg="verdeEscuro"
          px={{ base: "8", md: "16" }}
          py="16"
        >
          <Image
            src="/images/sistemica-vinculos.webp"
            alt="Família em terapia de casal e família — vínculos e conversa"
            position="absolute"
            inset="0"
            w="full"
            h="full"
            objectFit="cover"
          />
          <Box position="absolute" inset="0" bg="linear-gradient(to top, rgba(42,98,96,0.88), rgba(42,98,96,0.25) 55%, rgba(42,98,96,0.12))" />
          <Reveal>
            <Text as="blockquote" position="relative" fontFamily="serif" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="300" fontStyle="italic" lineHeight={1.15} color="gelo">
              “Muitas vezes, não repetimos pessoas.
              <Text as="span" mt="2" display="block" color="verdeAgua">
                Repetimos dinâmicas.”
              </Text>
            </Text>
          </Reveal>
        </Box>
        <Flex align="center" px={{ base: "5", md: "16" }} py={{ base: "20", md: "28" }}>
          <Box maxW="md">
            <Reveal>
              <Text fontSize="sm" fontWeight="300" textTransform="uppercase" letterSpacing="0.2em" color="turquesa">
                Metodologia
              </Text>
              <Text as="h2" mt="3" fontFamily="serif" fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }} fontWeight="300" lineHeight={1.05} color="verdeEscuro">
                O que é terapia sistêmica familiar
              </Text>
            </Reveal>
            <Reveal delay={150}>
              <Text mt="7" fontSize="md" fontWeight="300" lineHeight="relaxed" color="rgba(38,40,40,0.8)">
                A terapia sistêmica familiar olha para você dentro da sua história, dos seus vínculos e das relações que ajudaram a formar quem você é. Não para encontrar culpados — mas para compreender o que se move entre as pessoas.
              </Text>
            </Reveal>
            <Reveal delay={250}>
              <Text mt="4" fontSize="md" fontWeight="300" lineHeight="relaxed" color="rgba(38,40,40,0.8)">
                Assim funciona a terapia familiar na prática: um espaço para ver padrões, abrir conversa e construir novas formas de se relacionar — em atendimento individual, de casal ou com a família.
              </Text>
            </Reveal>
            <Reveal delay={350}>
              <Link
                href={wa("Olá, Irondina. Estou vivendo um momento que gostaria de entender melhor. Podemos conversar?")}
                target="_blank"
                rel="noopener noreferrer"
                mt="10"
                display="inline-flex"
                h="12"
                alignItems="center"
                borderRadius="full"
                borderWidth="1px"
                borderColor="verdeEscuro"
                px="8"
                fontSize="xs"
                color="verdeEscuro"
                transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), background 0.4s, color 0.4s, box-shadow 0.4s"
                _hover={{ bg: "verdeEscuro", color: "gelo", textDecor: "none", transform: "translateY(-3px)", boxShadow: "0 12px 28px rgba(58,139,136,0.22)" }}
                {...btnUpper}
              >
                Entender a terapia familiar
              </Link>
            </Reveal>
          </Box>
        </Flex>
      </Grid>
    </Box>
  );
}

function Services() {
  const items = [
    {
      title: "Individual",
      text: "Terapia individual quando a relação que precisa de cuidado também é a relação consigo.",
      href: wa("Olá, Irondina. Tenho interesse em atendimento individual. Podemos conversar?"),
      image: "/images/atendimento-individual.webp",
      alt: "Mulher em terapia individual — cuidado consigo e com a própria história",
      cta: "Agendar individual",
    },
    {
      title: "Casais",
      text: "Terapia de casal e família para quando a briga não é pela louça — é por não se sentirem vistos.",
      href: wa("Olá, Irondina. Tenho interesse em terapia de casal e família. Podemos conversar?"),
      image: "/images/atendimento-casais.webp",
      alt: "Casal em terapia de casal — conversa e reconexão",
      cta: "Agendar casal",
    },
    {
      title: "Famílias",
      text: "Psicóloga especialista em conflitos familiares, quando o sofrimento de uma pessoa atravessa toda a casa.",
      href: wa("Olá, Irondina. Busco psicólogo para terapia familiar. Podemos conversar?"),
      image: "/images/atendimento-familias.webp",
      alt: "Família em terapia familiar — cuidado aos vínculos e conflitos",
      cta: "Agendar família",
    },
  ];

  return (
    <Box as="section" id="atendimentos" bg="gelo" py={{ base: "24", md: "36" }}>
      <Box mx="auto" maxW="6xl" px={{ base: "5", md: "8" }}>
        <Reveal>
          <Text fontSize="sm" fontWeight="300" textTransform="uppercase" letterSpacing="0.2em" color="turquesa">
            Atendimentos
          </Text>
          <Text as="h2" mt="4" maxW="2xl" fontFamily="serif" fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }} fontWeight="300" lineHeight={1.05} color="verdeEscuro">
            Terapia individual, de casal e familiar
          </Text>
        </Reveal>
        <Grid mt={{ base: "14", md: "20" }} gap={{ base: "5", md: "6" }} templateColumns={{ md: "repeat(3, 1fr)" }}>
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <Flex
                className="img-zoom"
                h="full"
                direction="column"
                overflow="hidden"
                borderRadius="2xl"
                bg="verdeEscuro"
                transition="transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s"
                _hover={{ transform: "translateY(-8px)", boxShadow: "0 22px 40px rgba(58,139,136,0.28)" }}
              >
                <Box h={{ base: "200px", md: "220px" }} overflow="hidden">
                  <Image src={item.image} alt={item.alt} w="full" h="full" objectFit="cover" />
                </Box>
                <Flex direction="column" flex="1" p={{ base: "8", md: "10" }}>
                  <Text as="h3" fontFamily="serif" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="300" color="gelo">
                    {item.title}
                  </Text>
                  <Text mt="3" fontSize="md" fontWeight="300" lineHeight="relaxed" color="rgba(247,239,239,0.8)">
                    {item.text}
                  </Text>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    mt="8"
                    display="inline-flex"
                    h="11"
                    alignItems="center"
                    alignSelf="flex-start"
                    borderRadius="full"
                    borderWidth="1px"
                    borderColor="rgba(247,239,239,0.4)"
                    px="6"
                    fontSize="xs"
                    fontWeight="500"
                    textTransform="uppercase"
                    letterSpacing="0.14em"
                    color="gelo"
                    textDecor="none"
                    transition="all 0.4s cubic-bezier(0.22, 1, 0.36, 1)"
                    _hover={{ borderColor: "verdeAgua", bg: "verdeAgua", color: "verdeEscuro", textDecor: "none", transform: "translateY(-2px)" }}
                  >
                    {item.cta}
                  </Link>
                </Flex>
              </Flex>
            </Reveal>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

function About() {
  return (
    <Box as="section" id="sobre" bg="white" py={{ base: "24", md: "36" }}>
      <Grid
        mx="auto"
        maxW="6xl"
        alignItems="center"
        gap={{ base: "12", md: "16" }}
        px={{ base: "5", md: "8" }}
        templateColumns={{ md: "0.85fr 1fr" }}
      >
        <Box order={{ base: 2, md: 1 }}>
          <Reveal>
            <Flex
              position="relative"
              aspectRatio="4/5"
              direction="column"
              align="center"
              justify="flex-end"
              overflow="hidden"
              borderRadius="2xl"
              bg="verdeEscuro"
              transition="transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s"
              _hover={{ transform: "translateY(-6px)", boxShadow: "0 22px 40px rgba(58,139,136,0.22)" }}
            >
              <Box className="img-zoom" position="absolute" inset="0">
                <Image
                  src="/images/sobre-casa.jpg"
                  alt="Casa iluminada, com uma família caminhando pelo corredor"
                  w="full"
                  h="full"
                  objectFit="cover"
                />
              </Box>
              <Box position="absolute" inset="0" bg="linear-gradient(to top, rgba(42,98,96,0.75), transparent 50%)" />
              <Image
                src="/images/logo.png"
                alt="Logo Irondina Assis — Psicologia Clínica Sistêmica"
                position="relative"
                mb="6"
                h="20"
                w="20"
                borderRadius="full"
                objectFit="cover"
                boxShadow="0 10px 25px rgba(58,139,136,0.45)"
                borderWidth="2px"
                borderColor="gelo"
                transition="transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)"
                _hover={{ transform: "scale(1.08)" }}
              />
            </Flex>
          </Reveal>
        </Box>
        <Box order={{ base: 1, md: 2 }}>
          <Reveal>
            <Text as="h2" fontFamily="serif" fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }} fontWeight="300" lineHeight={1.05} color="verdeEscuro">
              Antes da Psicologia, eu já observava histórias.
            </Text>
          </Reveal>
          <Reveal delay={150}>
            <Text mt="8" maxW="md" fontSize="md" fontWeight="300" lineHeight="relaxed" color="rgba(38,40,40,0.8)">
              A arquitetura me ensinou a perceber espaços, identidade e pertencimento.
            </Text>
          </Reveal>
          <Reveal delay={250}>
            <Text mt="4" maxW="md" fontSize="md" fontWeight="300" lineHeight="relaxed" color="rgba(38,40,40,0.8)">
              A Psicologia me ensinou a olhar para os vínculos. A diferença entre terapia individual e familiar está no foco: uma cuida da relação consigo; a outra, do que acontece entre as pessoas.
            </Text>
          </Reveal>
          <Reveal delay={350}>
            <Text mt="10" maxW="md" fontFamily="serif" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="300" fontStyle="italic" lineHeight={1.15} color="terracota">
              Toda casa conta uma história. Toda família também.
            </Text>
          </Reveal>
          <Reveal delay={450}>
            <Box mt="10" borderTopWidth="1px" borderColor="rgba(58,139,136,0.15)" pt="6">
              <Text fontFamily="serif" fontSize="xl" color="verdeEscuro">
                Irondina Assis
              </Text>
              <Text mt="1" fontSize="sm" fontWeight="300" textTransform="uppercase" letterSpacing="0.16em" color="rgba(38,40,40,0.6)">
                Psicóloga sistêmica em Goiânia
              </Text>
            </Box>
          </Reveal>
        </Box>
      </Grid>
    </Box>
  );
}

function Questions() {
  const qs = [
    "Por que eu sempre acabo vivendo a mesma coisa?",
    "Por que falar com quem eu amo ficou tão difícil?",
    "Por que minha família ainda consegue me fazer sentir criança?",
    "Por que eu digo que não quero repetir meus pais e acabo repetindo?",
  ];

  return (
    <Box as="section" position="relative" overflow="hidden" bg="verdeEscuro" py={{ base: "28", md: "40" }}>
      <Image
        src="/images/contato-conversa.webp"
        alt="Casal caminhando e conversando ao entardecer"
        position="absolute"
        inset="0"
        w="full"
        h="full"
        objectFit="cover"
        objectPosition="center"
      />
      <Box position="absolute" inset="0" bg="rgba(42, 98, 96, 0.78)" />
      <Box position="absolute" inset="0" bg="radial-gradient(100% 80% at 100% 0%, rgba(184,216,216,0.18), transparent 55%)" />
      <Box position="relative" mx="auto" maxW="4xl" px={{ base: "5", md: "8" }}>
        <Flex direction="column" gap={{ base: "12", md: "16" }}>
          {qs.map((q, i) => (
            <Reveal key={q} delay={i * 80}>
              <Text
                fontFamily="serif"
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                fontWeight="300"
                lineHeight={1.15}
                color="rgba(247,239,239,0.9)"
                cursor="default"
                transition="transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), color 0.45s"
                _hover={{ transform: "translateX(12px)", color: "gelo" }}
              >
                {q}
              </Text>
            </Reveal>
          ))}
        </Flex>
        <Reveal delay={200}>
          <Text mt={{ base: "20", md: "28" }} maxW="2xl" fontFamily="serif" fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} fontWeight="300" lineHeight={1.15} color="verdeAgua">
            Talvez você não precise apenas entender o que sente. Talvez precise compreender onde isso começou.
          </Text>
        </Reveal>
      </Box>
    </Box>
  );
}

function Steps() {
  const steps = [
    { n: "01", text: "Você me chama no WhatsApp." },
    { n: "02", text: "Conversamos sobre o que está acontecendo." },
    { n: "03", text: "Definimos o formato de atendimento mais adequado." },
  ];

  return (
    <Box as="section" bg="gelo" py={{ base: "24", md: "36" }}>
      <Box mx="auto" maxW="6xl" px={{ base: "5", md: "8" }}>
        <Grid alignItems="center" gap={{ base: "12", md: "16" }} templateColumns={{ md: "1fr 1fr" }}>
          <Box>
            <Reveal>
              <Text as="h2" maxW="2xl" fontFamily="serif" fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }} fontWeight="300" lineHeight={1.05} color="verdeEscuro">
                Começar pode ser mais simples do que parece.
              </Text>
            </Reveal>
            <Grid mt={{ base: "14", md: "16" }} gap={{ base: "10", md: "8" }}>
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 120}>
                  <Flex
                    align="center"
                    gap={{ base: "5", md: "6" }}
                    borderTopWidth="1px"
                    borderColor="rgba(58,139,136,0.2)"
                    pt="6"
                    cursor="default"
                    transition="transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.45s"
                    _hover={{ transform: "translateX(10px)", borderColor: "turquesa" }}
                  >
                    <Text as="span" flexShrink="0" fontFamily="serif" fontSize={{ base: "4xl", md: "5xl" }} fontWeight="300" lineHeight="1" color="turquesa">
                      {s.n}
                    </Text>
                    <Text fontSize={{ base: "md", md: "lg" }} fontWeight="300" lineHeight="relaxed" color="rgba(38,40,40,0.8)">
                      {s.text}
                    </Text>
                  </Flex>
                </Reveal>
              ))}
            </Grid>
            <Reveal delay={200}>
              <Link
                href={wa("Olá, Irondina. Gostaria de começar. Como funciona?")}
                target="_blank"
                rel="noopener noreferrer"
                mt="16"
                display="inline-flex"
                h="14"
                alignItems="center"
                borderRadius="full"
                bg="verdeEscuro"
                px="9"
                fontSize="sm"
                color="gelo"
                transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), background 0.4s, box-shadow 0.4s"
                _hover={{ bg: "turquesa", textDecor: "none", transform: "translateY(-3px)", boxShadow: "0 14px 32px rgba(58,139,136,0.28)" }}
                {...btnUpper}
              >
                Falar com Irondina
              </Link>
            </Reveal>
          </Box>
          <Reveal delay={120}>
            <Box className="img-zoom" overflow="hidden" borderRadius="2xl" aspectRatio="4/3">
              <Image
                src="/images/passos-conversa.webp"
                alt="Pai e filha conversando com leveza em um parque"
                w="full"
                h="full"
                objectFit="cover"
              />
            </Box>
          </Reveal>
        </Grid>
      </Box>
    </Box>
  );
}

function Contact() {
  const href = wa(
    "Olá, Irondina. Conheci seu trabalho pelo site e gostaria de saber mais sobre os atendimentos."
  );

  return (
    <Box as="section" id="contato" position="relative" overflow="hidden" bg="verdeEscuro" py={{ base: "28", md: "40" }}>
      <Image
        src="/images/atendimento-familias.webp"
        alt="Família feliz reunida em um abraço"
        position="absolute"
        inset="0"
        w="full"
        h="full"
        objectFit="cover"
      />
      <Box position="absolute" inset="0" bg="rgba(42, 98, 96, 0.82)" />
      <Box position="relative" mx="auto" maxW="4xl" px={{ base: "5", md: "8" }} textAlign="center">
        <Reveal>
          <Text as="h2" fontFamily="serif" fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }} fontWeight="300" lineHeight={1.05} color="gelo">
            Você não precisa continuar repetindo uma história apenas porque aprendeu a vivê-la assim.
          </Text>
        </Reveal>
        <Reveal delay={150}>
          <Text mx="auto" mt="8" maxW="xl" fontSize={{ base: "md", md: "lg" }} fontWeight="300" lineHeight="relaxed" color="rgba(247,239,239,0.75)">
            Se algo aqui fez sentido para você, podemos começar por uma conversa.
          </Text>
        </Reveal>
        <Reveal delay={300}>
          <Flex mt="12" direction="column" align="center" gap="6">
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar terapia familiar no WhatsApp"
              display="flex"
              h="16"
              alignItems="center"
              borderRadius="full"
              bg="gelo"
              px="12"
              fontSize="sm"
              color="verdeEscuro"
              transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), background 0.4s, box-shadow 0.4s, letter-spacing 0.4s"
              _hover={{ bg: "verdeAgua", textDecor: "none", transform: "translateY(-3px)", boxShadow: "0 16px 36px rgba(247,239,239,0.2)", letterSpacing: "0.2em" }}
              {...btnUpper}
            >
              Quero falar com Irondina
            </Link>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              fontFamily="serif"
              fontSize="2xl"
              fontWeight="300"
              color="verdeAgua"
              textDecor="none"
              transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), color 0.4s"
              _hover={{ color: "gelo", textDecor: "none", transform: "translateY(-2px)" }}
            >
              (62) 98428-6565
            </Link>
          </Flex>
        </Reveal>
      </Box>
    </Box>
  );
}

function Footer() {
  const links = [
    { href: "#inicio", label: "Início" },
    { href: "#atendimentos", label: "Atendimentos" },
    { href: "#metodologia", label: "Metodologia" },
    { href: "#sobre", label: "Sobre" },
    { href: "#faq", label: "Dúvidas" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <Box as="footer" bg="grafite" py={{ base: "14", md: "16" }}>
      <Flex
        mx="auto"
        maxW="6xl"
        direction={{ base: "column", md: "row" }}
        gap="8"
        px={{ base: "5", md: "8" }}
        align={{ md: "center" }}
        justify={{ md: "space-between" }}
      >
        <Flex align="center" gap="4">
          <Image
            src="/images/logo.png"
            alt="Irondina Assis — Psicologia Clínica Sistêmica"
            h="14"
            w="14"
            borderRadius="full"
            objectFit="cover"
            transition="transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)"
            _hover={{ transform: "scale(1.08) rotate(-4deg)" }}
          />
          <Box>
            <Text fontFamily="serif" fontSize="xl" color="gelo">
              Irondina Assis
            </Text>
            <Text mt="1" fontSize="sm" fontWeight="300" textTransform="uppercase" letterSpacing="0.16em" color="rgba(247,239,239,0.5)">
              Psicóloga sistêmica em Goiânia
            </Text>
          </Box>
        </Flex>
        <Flex flexWrap="wrap" columnGap="7" rowGap="3">
          {links.map((l) => (
            <Link
              key={l.href}
              className="nav-link nav-link-light"
              href={l.href}
              fontSize="xs"
              fontWeight="300"
              textTransform="uppercase"
              letterSpacing="0.16em"
              color="rgba(247,239,239,0.6)"
              textDecor="none"
              _hover={{ color: "verdeAgua", textDecor: "none" }}
            >
              {l.label}
            </Link>
          ))}
        </Flex>
        <Link
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          fontSize="sm"
          fontWeight="300"
          color="rgba(247,239,239,0.7)"
          textDecor="none"
          transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), color 0.4s"
          _hover={{ color: "verdeAgua", textDecor: "none", transform: "translateY(-2px)" }}
        >
          (62) 98428-6565
        </Link>
      </Flex>
      <Box mx="auto" mt="10" maxW="6xl" px={{ base: "5", md: "8" }}>
        <Text borderTopWidth="1px" borderColor="rgba(247,239,239,0.1)" pt="6" fontSize="xs" fontWeight="300" color="rgba(247,239,239,0.4)">
          © {new Date().getFullYear()} Irondina Assis · Psicologia Sistêmica
        </Text>
      </Box>
    </Box>
  );
}
