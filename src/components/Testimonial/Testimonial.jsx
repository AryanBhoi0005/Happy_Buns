import React from "react";
import Slider from "react-slick";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

const settings = {
  dots: false,
  arrows: false,
  loop: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  mobileFirst: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
};
const TestimonialData = [
  {
    id: 1,
    name: "Chetan",
    testimonial:
      "our burgers are absolutely fantastic—juicy, flavorful, and perfectly customizable! The quality ingredients and friendly service make every visit a delight.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Kirtan",
    testimonial:
      "The flavor and freshness of your burgers are unmatched! Each bite is a delicious experience, and the variety of toppings is amazing.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Harsh",
    testimonial:
      "I’m impressed by the quality and taste of your burgers! The customization options are fantastic, making each visit a unique and satisfying experience.",
    img: "https://picsum.photos/103/103",
  },
];
const Testimonial = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* Header  */}
          <HeaderTitle
            title="Testimonial"
            subtitle="Feedback Time "
            description={
             "Burgers Beyond Ordinary, Taste the Extraordinary!"
            }
          />
          {/* testimonial */}
          <div className="max-w-[600px] mx-auto">
            <Slider {...settings}>
              {TestimonialData.map((data) => (
                <div data-aos="fade-up" key={data.id}>
                  <div className="text-center shadow-lg p-4 rounded-xl space-y-3 my-8 mx-5">
                    <img
                      className="rounded-full block mx-auto"
                      src={data.img}
                      alt=""
                    />
                    <p className="text-gray-500 text-sm">{data.testimonial}</p>
                    <h1 className="text-xl font-bold">{data.name}</h1>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
