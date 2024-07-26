import React from "react";
import Img2 from "../../assets/burger/burger2.png";
import Img3 from "../../assets/burger/burger3.png";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Classic Burger",
    description:
      "A timeless favorite with a juicy patty, melted cheese, crisp lettuce, and ripe tomatoes, all nestled in a toasted bun.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img3,
    name: "Chiken Burger",
    description:
      "Tender, grilled chicken breast topped with fresh vegetables and your choice of sauces, served on a perfectly toasted bun.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Veg Burger",
    description:
      "A hearty and flavorful option featuring a savory vegetable patty, fresh greens, and a variety of crisp veggies, all on a soft bun.",
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <div className="bg-gray-100">
      <div className="py-12 lg:py-20">
        <div className="container">
          <HeaderTitle
            title="Services"
            subtitle="Our Services"
            description={
              "Every day, we strive to bring you not just a meal, but an experience. "
            }
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-16
                   group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
