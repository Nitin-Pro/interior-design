import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/header/Header";
import "../service.css";
import Footer from "../../../components/footer/Footer";
import {
  compareImagesCorporate,
  OfficefurnitureImage,
  compareImagesGypsumFalse,
} from "../../../utils/compareImages";
import { imgStyle } from "../../../utils/imageStyle";
import { Helmet } from "react-helmet";


const randomImages = [
  {
    url: "https://www.cherryhill.in/img/reckitt/rb15.jpg",
  },
  {
    url: "https://www.cherryhill.in/img/reckitt/rb11.jpg",
  },
  {
    url: "https://www.cherryhill.in/img/reckitt/rb26.jpg",
  },
  {
    url: "https://www.cherryhill.in/img/reckitt/rb10.jpg",
  },
  {
    url: "https://www.cherryhill.in/img/reckitt/rb23.jpg",
  },
];

const TurnkeyInterior = () => {
  const [imageUrl, setImageUrl] = useState(randomImages[0].url);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageUrl = (url) => {
    setImageUrl(url);
  };

  return (
    <>
      <div className="container">
        <Header />
        {/* <hr /> */}
        <div
          style={{
            height: "100px",
            borderBottom: "1px solid gray",
            width: "100%",
          }}
        />
        <Helmet>

          <title>Turnkey Interiors Contractor in India | Interior Karwalo</title>
          <meta name="description" content="Experience hassle-free turnkey interior solutions for your space. From design to execution, we handle it all. Your trusted turnkey interiors contractor in India." />
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content="turnkey interior contractor in india, turnkey interior contractor" />
          <link rel="canonical" href="https://interiorkarwalo.com/services/gypsum-false" />

          {/* Open Graph Meta Data */}
          <meta property="og:title" content="Turnkey Interiors Contractor in India | Interior Karwalo" />
          <meta property="og:description" content="Experience hassle-free turnkey interior solutions for your space. From design to execution, we handle it all. Your trusted turnkey interiors contractor in India." />
          <meta property="og:image" content="/images/logo.svg" />
          <meta property="og:url" content="https://interiorkarwalo.com/services/gypsum-false" />
          <meta property="og:type" content="website" />
        </Helmet>
        
        <div className="service-image-container">
          <div className="service-image-container-left">
            <h2 className="service-main-title-d">
              Turnkey Interiors Contractor in India
            </h2>
            <p>
              We, the team of Interior Karwalo, are the biggest turnkey interior
              contractor in India. We specialise in the concept of the creation
              of interiors in a seamless way.
            </p>
            <button className="btn">
              <Link to="/contact">Contact Us</Link>
            </button>
          </div>
          <div className="service-image-container-right">
            <img src={imageUrl} alt="" />
            <div>
              {randomImages.map((item) => (
                <img
                  key={item.url}
                  src={item.url}
                  onMouseEnter={() => handleImageUrl(item.url)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="category--all-container">
          <div>
            <h2>Turnkey Interiors Contractor in India</h2>
            <p>
              We, the team of Interior Karwalo, are the biggest turnkey interior
              contractor in India. We specialise in the concept of the creation
              of interiors in a seamless way. We are counted as one of the
              biggest award-winning designer teams in India. Each property has
              different needs, and that's why we take an approach to our clients
              to deliver excellence.
              <br />
              With the help of our experience & expertise, we'll guide you to
              make the best space. A qualified team with vast knowledge backs
              the company. We have already performed a bunch of construction
              projects seamlessly. In a very short time, we have quickly become
              one of India's high-end turnkey interior contractors. In the
              industry of refurbishment & renovation, we have built a strong
              presence.
              <br />
              <p>
                Discover the range of portfolios by consulting with our team
                members. We have gained much experience, from residential
                properties to commercial ones. As a modern contractor, we have
                created a reputation in the market by offering the highest
                quality standards. We are dedicated to developing a unique
                living experience which appeals to the residents. We understand
                the necessity of timely project delivery, customer service and
                budget-conscious projects. Without quality compromising, we
                ensure to offer exceptional customer service.
              </p>
            </p>
          </div>
          <div style={{ display: "flex" }} className="c-container">
            <div style={{ position: "relative", flex: 1 }}>
              <img
                style={imgStyle}
                src={`${OfficefurnitureImage[2].before}`}
                alt="interior design"
              />
              <button className="c-btn" style={{ position: "absolute" }}>
                Before
              </button>
            </div>

            <div style={{ position: "relative", flex: 1, marginLeft: "10px" }}>
              <img
                style={imgStyle}
                src={`${OfficefurnitureImage[2].after}`}
                alt="interior design"
              />
              <button className="c-btn" style={{ position: "absolute" }}>
                After
              </button>
            </div>
          </div>
          <div>
            <h3>Why Gypsum?</h3>
            <p>
              Gypsum is a lightweight internal wall technology with superior
              performance compared to traditional brick walls. In various
              residential, commercial, and industrial building applications,
              gypsum is quickly replacing other materials as the material of
              choice.
              <br />
              Four to five times less time is required for gypsum installation
              than for masonry work. Brick walls use 95% more water than drywall
              construction. Gypsum plasterboard, the main component of drywall,
              makes it 100% recyclable. These characteristics result in a
              decrease in material, energy, and labour, which lowers prices.
            </p>
          </div>
          <div>
            <h3>Grab a comprehensive array of turnkey interiors</h3>
            <p>
              Interior Karwalo is recognized as a prominent interior company
              that is engaged to offer an extensive range of options for turnkey
              interiors. We can offer several services under this category,
              including tile floorings, civil works, aluminium works, and many
              more! This is the one-stop solution to grab all the
              interior-related requirements under one roof!
              <br />
              Our organisation holds specialisation in performing various
              interior finishes. Every solution catered to by the organisation
              is widely used for multiple needs & demands. We work for colleges,
              coaching centres, banks, colleges and offices, business venues,
              and startup & multi-national companies. Our organisation has a
              special team of interiors capable of giving you elegant
              furnishings that aids the beauty of all types of furnishing.
              <br />
              Our organisation can offer all kinds of home finishing & business
              furnishing tools in a given timeline. We have experience working
              for both domestic and international clients. We know how to
              comprehend your needs professionally. We further work to offer you
              an efficient range of solutions to meet the requirements for
              residential & commercial furnishing.
              <br />
              We aim to fulfil your dreams based on your needs. We are known for
              offering the best finishing services regarding client needs. In
              this era, most people are seeking the right turnkey interior
              experts. We have completed 100 successful projects and are looking
              for more challenging and complex ones. We love to challenge
              ourselves & deliver them to you at a very affordable price. We
              give our clients the greatest value of service based on their
              parameters.
              <br />
              The company has a range of professionals & employees in the
              organisation. All the manpower we have are well-trained and
              upgrade their skills based on the current market trends. We also
              make our team aware of the latest technologies & concepts so that
              they can deliver you the best array of services. So, are you
              excited to meet our team of contractors? If yes, it's time to deal
              with the Interior Karwalo team.
            </p>
          </div>
          <div style={{ display: "flex" }} className="c-container">
            <div style={{ position: "relative", flex: 1 }}>
              <img
                style={imgStyle}
                src={`${OfficefurnitureImage[1].before}`}
                alt="interior design"
              />
              <button className="c-btn" style={{ position: "absolute" }}>
                Before
              </button>
            </div>

            <div style={{ position: "relative", flex: 1, marginLeft: "10px" }}>
              <img
                style={imgStyle}
                src={`${OfficefurnitureImage[1].after}`}
                alt="interior design"
              />
              <button className="c-btn" style={{ position: "absolute" }}>
                After
              </button>
            </div>
          </div>
          <div>
            <h3>Simple solutions to difficult issues</h3>
            <p>
              With over 50 completed projects, we have made a name for ourselves
              as India's top drywall contracting consultants. We have
              constructed Gypsum drywall for leading manufacturers.
            </p>
          </div>
          <div>
            <h3>Superior technical ability</h3>
            <p>
              We have a solid knowledge of every important facet of building
              gypsum walls. We take pleasure in being among the best issue
              solvers in our field. Team Interior Karwalo provides a full range
              of Gypsum wall design-build services, including conception,
              design, erection, and everything in between.
            </p>
          </div>
          <div>
            <h3>Highest standards</h3>
            <p>
              For security, installation, and execution, we constantly adhere to
              worldwide best standards. Our field personnel adheres to the best
              safety procedures since the workplace is our top priority. For the
              installation of Gypsum walls, we exclusively utilise wireless,
              high-quality equipment.
            </p>
          </div>
          <div>
            <h3>
              Benefits of appointing turnkey Contractors & interior designers
            </h3>
            <div>
              <h4>• Speed</h4>
              <p>
                You can successfully complete the task by hiring the expert
                profession & expertise of Interior Karwalo. You will receive
                productive work in a limited period when you hire us. We will
                take care of your responsibilities.
              </p>
            </div>
            <div>
              <h4>• The design needs</h4>
              <p>
                The turnkey contractors understand your needs & fulfil the
                project based on your parameters. We have a team of sharp
                contractors who have thousands of ideas. They would execute the
                design based on the requirement of clients.
              </p>
            </div>
            <div>
              <h4>• Cost reduction</h4>
              <p>
                The best thing about consulting with our team is we can handle
                all the processes in the given time & on an affordable budget.
                The turnkey interior designer will complete taking care of your
                project.
              </p>
            </div>

            <div style={{ display: "flex" }} className="c-container">
              <div style={{ position: "relative", flex: 1 }}>
                <img
                  style={imgStyle}
                  src={`${compareImagesGypsumFalse[2].before}`}
                  alt="interior design"
                />
                <button className="c-btn" style={{ position: "absolute" }}>
                  Before
                </button>
              </div>

              <div
                style={{ position: "relative", flex: 1, marginLeft: "10px" }}
              >
                <img
                  style={imgStyle}
                  src={`${compareImagesGypsumFalse[2].after}`}
                  alt="interior design"
                />
                <button className="c-btn" style={{ position: "absolute" }}>
                  After
                </button>
              </div>
            </div>
            <div>
              <h4>• Single invoice & easy payment</h4>
              <p>
                Get rid of multiple payments & invoices because we made the
                invoice procedure super easy. When you are with us, you don't
                think about the hefty amount of quotes & hassles of
                negotiations.
              </p>
            </div>
            <div>
              <h4>• Quality</h4>
              <p>
                When you can directly connect with the consultants, the chances
                of receiving quality outcomes will be higher. The contractors
                tend to set the quality level from every step, including the
                designing, installing & manufacturing.
              </p>
            </div>
            <p>
              An engineered partition wall enclosure may be used in
              administrative buildings, workshops, and offices. Since Interior
              Karwalo manages everything from design requirements through
              project execution, these pre-engineered structures are promised to
              be water-free, mess-free, and headache-free. Consultants from
              different parties, such as architects and other relevant
              individuals like PMC.
              <br />
              Get a flexible partition wall with several applications. You may
              personalise our glass and partition walls to meet your needs. Any
              finish, including paint, wallpaper, laminates, etc., can be used
              on partitions. They can survive longer since they are a
              low-maintenance alternative to brick walls that are not unstable.
            </p>
          </div>
          <div>
            <p>
              Apart from all these things, you will receive many more benefits
              like on-time delivery, contact with the professional team and so
              on. For more inquiries, you can explore the website and take a
              look at the other services which we offer. So, are you excited to
              get all these facilities under one roof? If yes, you can contact
              our Turnkey Interiors Contractor in India directly by call or by
              mail.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TurnkeyInterior;
