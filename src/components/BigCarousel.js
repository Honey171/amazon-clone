import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function BigCarousel() {
  return (
    <div className="mx-auto relative shadow-2xl rounded-tr-[40px] rounded-tl-[40px] rounded-bl-2xl rounded-br-2xl shadow-gray-800 max-w-[1200px]">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            src="https://azzona.in/wp-content/uploads/2020/07/diamond-jewellery-collection-banner.jpg"
            alt=""
            className="h-[450px] rounded-tr-[40px] rounded-tl-[40px] rounded-bl-2xl rounded-br-2xl"
          />
        </div>
        <div>
          <img
            src="https://www.ishopping.pk/media/wysiwyg/CMS_Blocks/electronics/Electronic.jpg"
            alt=""
            className="h-[450px] rounded-tr-[40px] rounded-tl-[40px] rounded-bl-2xl rounded-br-2xl"
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0509/7979/9193/collections/Raja_Sahib_12-1-21-Men_s_Fashion-Category_Banner-930x320-1_f4873b54-1681-4bd1-8cfa-e0ac2e0fe8b8.jpg"
            alt=""
            className="h-[450px] rounded-tr-[40px] rounded-tl-[40px] rounded-bl-2xl rounded-br-2xl"
          />
        </div>
        <div>
          <img
            src="https://smartseekmall.com/ecdata/stores/HLZBG956/image/data/TeesPK-Women-Clothing-Banner-2-1920x700.jpg"
            alt=""
            className="h-[450px] rounded-tr-[40px] rounded-tl-[40px] rounded-bl-2xl rounded-br-2xl"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default BigCarousel;
