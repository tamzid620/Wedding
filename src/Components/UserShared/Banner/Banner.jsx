import "./Banner.css";
import { useEffect, useState } from "react";
import banner1 from "../../../../public/images/img01.jpg";
import banner2 from "../../../../public/images/img02.jpg";
import banner3 from "../../../../public/images/img03.jpg";
import banner4 from "../../../../public/images/img02.jpg";

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next banner index
      const nextBanner = (currentBanner % 4) + 1;
      setCurrentBanner(nextBanner);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentBanner]);

  return (
    <div className="relative">
      {/* bannerImages section  */}
      <div>
        <img
          className=" lg:w-full lg:h-screen sm: h-[700px] bg-[#720455]"
          src={banner1}
          alt=""
          style={{ display: currentBanner === 1 ? "block" : "none" }}
        />
        <img
          className="lg:w-full lg:h-screen  sm: h-[700px] bg-[#720455]"
          src={banner2}
          alt=""
          style={{ display: currentBanner === 2 ? "block" : "none" }}
        />
        <img
          className="lg:w-full lg:h-screen  sm: h-[700px] bg-[#720455]"
          src={banner3}
          alt=""
          style={{ display: currentBanner === 3 ? "block" : "none" }}
        />
        <img
          className="lg:w-full lg:h-screen  sm: h-[700px] bg-[#720455]"
          src={banner4}
          alt=""
          style={{ display: currentBanner === 4 ? "block" : "none" }}
        />
      </div>
    </div>
  );
};

export default Banner;
