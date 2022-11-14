import React, { useState, useEffect } from "react";
// Services Img
import ImgService1 from "../../assets/images/services/1.jpg";
import ImgService2 from "../../assets/images/services/2.jpg";
import ImgService3 from "../../assets/images/services/3.jpg";

// Testimonials Img
import ImgTestimonial1 from "../../assets/images/testimonials/1.jpg";
import ImgTestimonial2 from "../../assets/images/testimonials/2.jpg";
import ImgTestimonial3 from "../../assets/images/testimonials/3.jpg";

// Benefits Img
import ImgBenefits1 from "../../assets/images/icons/building.png";
import ImgBenefits2 from "../../assets/images/icons/bank.png";
import ImgBenefits3 from "../../assets/images/icons/drawer.png";
import ImgBenefits4 from "../../assets/images/icons/paper-money.png";
import ImgBenefits5 from "../../assets/images/icons/traffic-cone.png";
import ImgBenefits6 from "../../assets/images/icons/paint-brush.png";

function Home() {
  const [dataSlider, setDataSlider] = useState([]);

  const setData = () => {
    const ApiUrl = "https://my-json-server.typicode.com/mpg-sebastian/open-json-placeholder/sliders";
    fetch(ApiUrl)
      .then((response) => response.json())
      .then((data) => {
        //const onlySlider = data.slice(0, 5);
        //console.log(onlySlider);
        setDataSlider(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <>
      {/* Carousel */}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner carousel-fixed">
          {
            dataSlider && dataSlider.map((item) => {
              return (
                <div key={item.id} className="carousel-item active">
                  <img src={item.imgurl} className="d-block w-100" alt={item.title} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="">{item.title}</h5>
                    <p className="">{item.text}</p>
                  </div>
                </div>
              );
            })
          }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Short Action */}
      <div className="fluid bg-gray-200 text-black">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="py-4 ">
            <h2 className="text-uppercase fs-4 p-0 m-0">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h2>
            <p className="text-uppercase p-0 m-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              laborum?
            </p>
          </div>
          <div className="">
            <button className="btn btn-dark rounded py-2 px-4 text-uppercase text-white">
              Comenzar Ahora
            </button>
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="container clearfix">
        <div className="row justify-content-center col-mb-50">
          <div className="col-sm-6 col-lg-4">
            <div className="feature-box media-box">
              <div className="fbox-media">
                <img
                  className="rounded"
                  src={ImgService1}
                  alt="Why choose Us?"
                />
              </div>
              <div className="fbox-content px-0">
                <h3>
                  Skilled Professionals.
                  <span className="subtitle">Your Property in Good Hands.</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eligendi rem, facilis nobis voluptatum est voluptatem
                  accusamus molestiae eaque perspiciatis mollitia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="feature-box media-box">
              <div className="fbox-media">
                <img
                  className="rounded"
                  src={ImgService2}
                  alt="Effective Planning"
                />
              </div>
              <div className="fbox-content px-0">
                <h3>
                  Effective Planning.
                  <span className="subtitle">
                    Construction Process Organized.
                  </span>
                </h3>
                <p>
                  Porro repellat vero sapiente amet vitae quibusdam
                  necessitatibus consectetur, labore totam. Accusamus
                  perspiciatis asperiores labore esse.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="feature-box media-box">
              <div className="fbox-media">
                <img
                  className="rounded"
                  src={ImgService3}
                  alt="Why choose Us?"
                />
              </div>
              <div className="fbox-content px-0">
                <h3>
                  Risk Management.
                  <span className="subtitle">We have got you Covered.</span>
                </h3>
                <p>
                  Quos, non, esse eligendi ab accusantium voluptatem. Maxime
                  eligendi beatae, atque tempora ullam. Vitae delectus quia,
                  consequuntur rerum quo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div
        className="section parallax dark skrollable skrollable-between"
        data-bottom-top="background-position:0px 300px;"
        data-top-bottom="background-position:0px -300px;"
      >
        <div
          className="fslider testimonial testimonial-full"
          data-arrows="false"
          style={{ zIndex: 2 }}
        >
          <div className="flexslider">
            <div
              className="flex-viewport"
              style={{
                overflow: "hidden",
                position: "relative",
                height: "317.934px",
              }}
            >
              <div
                className="slider-wrap"
                style={{
                  width: "1000%",
                  transitionDuration: "0.6s",
                  transform: "translate3d(-1600px, 0px, 0px)",
                }}
              >
                <div
                  className="slide clone"
                  aria-hidden="true"
                  style={{
                    width: "800px",
                    marginRight: "0px",
                    float: "left",
                    display: "block",
                  }}
                >
                  <div className="testi-image">
                    <a href="/">
                      <img
                        src={ImgTestimonial1}
                        alt="Customer Testimonails"
                        draggable="false"
                      />
                    </a>
                  </div>
                  <div className="testi-content">
                    <p>
                      Incidunt deleniti blanditiis quas aperiam recusandae
                      consequatur ullam quibusdam cum libero illo rerum!
                    </p>
                    <div className="testi-meta">
                      John Doe
                      <span>XYZ Inc.</span>
                    </div>
                  </div>
                </div>
                <div
                  className="slide"
                  style={{
                    width: "800px",
                    marginRight: "0px",
                    float: "left",
                    display: "block",
                  }}
                  data-thumb-alt=""
                >
                  <div className="testi-image">
                    <a href="/">
                      <img
                        src={ImgTestimonial2}
                        alt="Customer Testimonails"
                        draggable="false"
                      />
                    </a>
                  </div>
                  <div className="testi-content">
                    <p>
                      Similique fugit repellendus expedita excepturi iure
                      provident quia eaque. Repellendus, vero numquam?
                    </p>
                    <div className="testi-meta">
                      Steve Jobs
                      <span>Apple Inc.</span>
                    </div>
                  </div>
                </div>
                <div
                  className="slide flex-active-slide"
                  data-thumb-alt=""
                  style={{
                    width: "800px",
                    marginRight: "0px",
                    float: "left",
                    display: "block",
                  }}
                >
                  <div className="testi-image">
                    <a href="/">
                      <img
                        src={ImgTestimonial3}
                        alt="Customer Testimonails"
                        draggable="false"
                      />
                    </a>
                  </div>
                  <div className="testi-content">
                    <p>
                      Natus voluptatum enim quod necessitatibus quis expedita
                      harum provident eos obcaecati id culpa corporis molestias.
                    </p>
                    <div className="testi-meta">
                      Collis Ta'eed
                      <span>Envato Inc.</span>
                    </div>
                  </div>
                </div>
                <div
                  className="slide"
                  data-thumb-alt=""
                  style={{
                    width: "800px",
                    marginRight: "0px",
                    float: "left",
                    display: "block",
                  }}
                >
                  <div className="testi-image">
                    <a href="/">
                      <img
                        src={ImgTestimonial1}
                        alt="Customer Testimonails"
                        draggable="false"
                      />
                    </a>
                  </div>
                  <div className="testi-content">
                    <p>
                      Incidunt deleniti blanditiis quas aperiam recusandae
                      consequatur ullam quibusdam cum libero illo rerum!
                    </p>
                    <div className="testi-meta">
                      John Doe
                      <span>XYZ Inc.</span>
                    </div>
                  </div>
                </div>
                <div
                  className="slide clone"
                  style={{
                    width: "800px",
                    marginRight: "0px",
                    float: "left",
                    display: "block",
                  }}
                  aria-hidden="true"
                >
                  <div className="testi-image">
                    <a href="/">
                      <img
                        src={ImgTestimonial3}
                        alt="Customer Testimonails"
                        draggable="false"
                      />
                    </a>
                  </div>
                  <div className="testi-content">
                    <p>
                      Similique fugit repellendus expedita excepturi iure
                      provident quia eaque. Repellendus, vero numquam?
                    </p>
                    <div className="testi-meta">
                      Steve Jobs
                      <span>Apple Inc.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol className="flex-control-nav flex-control-paging">
              <li>
                <a href="/" className="">
                  1
                </a>
              </li>
              <li>
                <a href="/" className="flex-active">
                  2
                </a>
              </li>
              <li>
                <a href="/" className="">
                  3
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* Benefits */}
      <div className="container">
        <div className="row align-items-stretch col-mb-50">
          <div className="col-lg-4 col-md-6">
            <div className="feature-box fbox-plain">
              <div className="fbox-icon">
                <a href="/">
                  <img src={ImgBenefits1} alt="Concrete Developments" />
                </a>
              </div>
              <div className="fbox-content">
                <h3>Concrete Developments</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Autem minima, facere distinctio placeat.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-box fbox-plain">
              <div className="fbox-icon">
                <a href="/">
                  <img src={ImgBenefits2} alt="Finance Assistance" />
                </a>
              </div>
              <div className="fbox-content">
                <h3>Finance Assistance</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Autem minima, facere distinctio placeat.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-box fbox-plain">
              <div className="fbox-icon">
                <a href="/">
                  <img src={ImgBenefits3} alt="Interiorly Designed" />
                </a>
              </div>
              <div className="fbox-content">
                <h3>Interiorly Designed</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Autem minima, facere distinctio placeat.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-box fbox-plain">
              <div className="fbox-icon">
                <a href="/">
                  <img src={ImgBenefits4} alt="Cost Effective Solutions" />
                </a>
              </div>
              <div className="fbox-content">
                <h3>Cost Effective Solutions</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Autem minima, facere distinctio placeat.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-box fbox-plain">
              <div className="fbox-icon">
                <a href="/">
                  <img src={ImgBenefits5} alt="Smart Builders" />
                </a>
              </div>
              <div className="fbox-content">
                <h3>Smart Builders</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Autem minima, facere distinctio placeat.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-box fbox-plain">
              <div className="fbox-icon">
                <a href="/">
                  <img src={ImgBenefits6} alt="Quality Infrastructure" />
                </a>
              </div>
              <div className="fbox-content">
                <h3>Quality Infrastructure</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Autem minima, facere distinctio placeat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ... */}
    </>
  );
}

export default Home;
