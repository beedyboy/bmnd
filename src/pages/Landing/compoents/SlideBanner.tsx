import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "assets/landing-banner.jpg";
import slide2 from "assets/slide2.jpg";
import slide3 from "assets/slide3.jpeg";

const settings = {
  dots: true,
  infinite: true,
  speed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
};

type Slide = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
};

const slides: Slide[] = [
  {
    id: 1,
    imageUrl: slide1,
    title: "Find Your Match",
    description: "Sign up now to discover the perfect person for you.",
  },
  {
    id: 2,
    imageUrl: slide2,
    title: "Connect with Confidence",
    description: "Our platform provides a safe and secure way to connect with others.",
  },
  {
    id: 3,
    imageUrl: slide3,
    title: "Start Your Love Story",
    description: "Join our community and find the love you've been searching for.",
  },
];

const SlideBanner = () => {
  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <Box key={slide.id} height="700px" maxHeight={`600px`}>
          <Box height="100%" width="100%" position="relative">
            <Image src={slide.imageUrl} alt={slide.title} objectFit="cover" position="absolute" top="0" left="0" right="0" bottom="0" />
          </Box>
          <Box top="50%"  transform="translate(-50%, -50%)" textAlign="center" color="white" position="absolute" width="100%" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center" }}>
            <Heading as="h2" size="xl" mb="4">
              {slide.title}
            </Heading>
            <Text fontSize="lg">{slide.description}</Text>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default SlideBanner;
