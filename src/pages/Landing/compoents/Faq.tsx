import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Heading, useBreakpointValue } from "@chakra-ui/react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is BMNDConnect?",
      answer: "BMNDConnect is a platform for connecting single men and women from different parts of the world together for a serious relationship that will proceed to marriage.",
    },
    {
      question: "How does BMNDConnect work?",
      answer: "We match people based on their preferences, values, and goals in life. We use advanced algorithms and human curation to ensure compatibility and authenticity of our users.",
    },
    {
      question: "Is BMNDConnect free to use?",
      answer: "Signing up and creating a profile is free, but some features require a premium subscription.",
    },
  ];

  const shouldCenter = useBreakpointValue({ base: false, md: true });

  return (
    <Box w="full" maxW="container.lg" py={8} px={4} mx={shouldCenter ? "auto" : 0}>
      <Heading as="h2" size="lg" mb={4} textAlign={shouldCenter ? "center" : "left"}>
        Frequently Asked Questions
      </Heading>
      <Accordion allowToggle>
        {faqs.map((faq, index) => (
          <AccordionItem key={index}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {faq.question}
              </Box>
            </AccordionButton>
            <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default FAQ;
