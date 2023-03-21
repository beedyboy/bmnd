import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mercy from "assets/testimony/mercy.jpeg";
import undisclosed1 from "assets/testimony/undisclosed1.jpeg";
import olajide from "assets/testimony/olajide.jpeg";
import chinedu from "assets/testimony/chinedu.jpeg";

// sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Mercy",
    image: mercy,
    text: "I found my soulmate through this platform after seeing their Facebook ad. I was skeptical at first but decided to give it a try. To my surprise, it worked! We got married on October 31, 2020. Thank you for helping me find the love of my life!",
  },
  {
    id: 2,
    name: "Undisclosed",
    image: undisclosed1,
    text: "I found my wife in July 2021 after leaving the platform for someone else in 2020. But in just 2 weeks of coming back, I got connected to my wife. Married on October 30, 2021, and our marriage is a huge success. Forever grateful to this platform!",
  },
  {
    id: 3,
    name: "Mr Olajide",
    image: olajide,
    text: "'At 64yrs old, I contacted Mrs Fatima for a match to find a new wife after losing mine. I requested a young beautiful lady who can have a child for me. Funke, 34yrs old at the time, was connected with me and we got married in October 2021. I appreciate Mrs Fatima's passion for connecting people and wish her continued success",
  },
  {
    id: 4,
    name: "Chinedu Nwaike",
    image: chinedu,
    text: "Married Chioma Emelugo on 23rd April 2022 in Anambra state. Contacted Mrs Fatima in June 2021 for matchmaking as I was working in Dubai and needed to settle down. She connected me with my wife in Nigeria, and we got married after 10 months of courtship. We've since relocated to Canada. Grateful to Mrs Fatima for her great work and always willing to refer people to her",
  },
];

// settings for react-slick slider
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

const Testimonial = ({ name, image, text }: { name:string; image:string; text: string }) => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center" py={4}>
      <Image src={image} borderRadius="full" boxSize="80px" objectFit="cover" alt={name} />
      <Text fontWeight="bold" fontSize="lg" mt={4}>
        {name}
      </Text>
      <Text fontSize="lg" textAlign="center" px={8} mt={4}>
        {text}
      </Text>
    </Flex>
  );
};

const TestimonialPage = () => {
  return (
    <Box my={8}>
      <Heading as="h2" size="2xl" mb="2rem" textAlign="center">
        Success Stories
      </Heading>
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id} name={testimonial.name} image={testimonial.image} text={testimonial.text} />
        ))}
      </Slider>
    </Box>
  );
};

export default TestimonialPage;
