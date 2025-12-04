import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <div className="mt-21">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div
            className="w-full h-[400px] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url(https://cdn.pixabay.com/photo/2019/01/27/08/05/guitar-3957586_1280.jpg)",
            }}
          >
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full h-[400px] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url(https://cdn.pixabay.com/photo/2017/07/31/11/30/people-2557460_1280.jpg)",
            }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[400px] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url(https://cdn.pixabay.com/photo/2022/04/03/07/49/man-7108274_1280.jpg)",
            }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[400px] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url(https://cdn.pixabay.com/photo/2014/11/22/00/51/camera-541213_1280.jpg)",
            }}
          >
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full h-[400px] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url(https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg)",
            }}
          >
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
