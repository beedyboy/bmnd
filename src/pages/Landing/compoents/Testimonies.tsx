import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: "/path/to/image1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam velit eu ultrices iaculis. Praesent congue erat vel nisl suscipit, ut suscipit dui iaculis.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "/path/to/image2.jpg",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 3,
    name: "Bob Johnson",
    image: "/path/to/image3.jpg",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
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
