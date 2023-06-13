import { Dropdown, Space } from 'antd';
import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import allImageLinks from '../../utils/imageLinks';
import './gallery-page.css';
import Header from '../../components/header/Header';
import SubGallery1 from './sub-gallery/SubGallery1';
import SubGallery2 from './sub-gallery/SubGallery2';
import SubGallery3 from './sub-gallery/SubGallery3';
import Footer from '../../components/footer/Footer';
import { Helmet } from 'react-helmet';

const GalleryPage = () => {
  const [category, setCategory] = useState(0);
  const [mainImage, setMainImage] = useState(allImageLinks[0][0]);

  const categoriesList = ['chair', 'sofa', 'bed', 'table', 'wardrobe'];
  // demo

  const items = [
    { key: 0, label: categoriesList[0] },
    { key: 1, label: categoriesList[1] },
    { key: 2, label: categoriesList[2] },
    { key: 3, label: categoriesList[3] },
    { key: 4, label: categoriesList[4] },
  ];
  return (
    <div>
      <Header />
      <Helmet>

        <title>Interior Design Gallery | Explore Our Work | Interior Karwalo</title>
        <meta name="description" content="Browse through our interior design gallery and be inspired by our stunning work. Discover creative designs and ideas for your space. " />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="interior design gallery" />
        <link rel="canonical" href="https://interiorkarwalo.com/gallery" />

        {/* Open Graph Meta Data */}
        <meta property="og:title" content="Interior Design Gallery | Explore Our Work | Interior Karwalo" />
        <meta property="og:description" content="Browse through our interior design gallery and be inspired by our stunning work. Discover creative designs and ideas for your space. " />
        <meta property="og:image" content="/images/logo.svg" />
        <meta property="og:url" content="https://interiorkarwalo.com/gallery" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div style={{ height: '100px' }} />
      {/* <div>
        <Dropdown
          className="a-dropDown"
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ['chair'],
            onSelect: (e) => {
              setCategory(e.selectedKeys[0]);
              setMainImage(allImageLinks[e.selectedKeys[0]][0]);
            },
          }}
          trigger={'click'}
          arrow={'true'}
        >
          <div className="a-dropdown">
            <p>
              {categoriesList[category]}{' '}
              <DownOutlined style={{ fontSize: 25 }} />
            </p>
          </div>
        </Dropdown>
        <div>
          <div className="a-mainImage">
            <img src={mainImage} alt={category} />
          </div>
          <div className="a-row">
            <img
              src={allImageLinks[category][0]}
              alt={category}
              onMouseEnter={() => {
                setMainImage(allImageLinks[category][0]);
              }}
            />
            <img
              src={allImageLinks[category][1]}
              alt={category}
              onMouseEnter={() => {
                setMainImage(allImageLinks[category][1]);
              }}
            />
            <img
              src={allImageLinks[category][2]}
              alt={category}
              onMouseEnter={() => {
                setMainImage(allImageLinks[category][2]);
              }}
            />
            <img
              src={allImageLinks[category][3]}
              alt={category}
              onMouseEnter={() => {
                setMainImage(allImageLinks[category][3]);
              }}
            />
            <img
              src={allImageLinks[category][4]}
              alt={category}
              onMouseEnter={() => {
                setMainImage(allImageLinks[category][4]);
              }}
            />
            <img
              src={allImageLinks[category][5]}
              alt={category}
              onMouseEnter={() => {
                setMainImage(allImageLinks[category][5]);
              }}
            />
          </div>
        </div>
      </div> */}

      <SubGallery1 />
      <SubGallery2 />
      <SubGallery3 />
      <Footer />
    </div>
  );
};

export default GalleryPage;
