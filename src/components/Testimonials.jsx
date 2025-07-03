import React from "react";
import Slider from "react-slick";

const slides = [
  {
    id: 1,
    content:
      "For the first time, we have real-time updates on projects. The transparency has helped resolve long-standing conflicts..",
    name: "Stanley Ovunda",
    position: "Community member",
  },
  {
    id: 2,
    content:
      "Reporting issues and providing feedback has never been this easy. I-HCDT has bridged the gap between communities and project stakeholders..",
    name: "Ibinabo Atu",
    position: "Community member",
  },
  {
    id: 3,
    content:
      "I-HCDT has given us a voice in the development of our community. We can now track projects and hold stakeholders accountable.",
    name: "Emmanuel",
    position: "Community leader",
  },
  {
    id: 4,
    content:
      "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    name: "Jayce",
    position: "Community member",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl">
      <Slider {...settings}>
        {slides.map((item) => (
          <article key={item.id} className="bg-blue-1 h-80 text-white ">
            <p>{item.content}</p>
            <h3>{item.name}</h3>
          </article>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
