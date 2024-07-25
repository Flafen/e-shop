import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode, Navigation, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import "./StoriesSlider.css"

const slides = [
    {img: "/stories/story1.jpg",
    name: "story1"
    },
    {img: "/stories/story2.jpg",
    name: "story2"
    },
    {img: "/stories/story3.jpg",
    name: "story3"
    },
    {img: "/stories/story4.jpg",
    name: "story4"
    },
    {img: "/stories/story5.jpg",
    name: "story5"
    },
    {img: "/stories/story6.jpg",
    name: "story6"
    },
    {img: "/stories/story7.jpg",
    name: "story7"
    },
    {img: "/stories/story8.jpg",
    name: "story8"
    },
    {img: "/stories/story9.jpg",
    name: "story9"
    },
]


export function StoriesSlider() {

    return (
        <Swiper
            modules={[FreeMode, A11y, Autoplay]}
            spaceBetween={30}
            
            pagination={{
                clickable: true,
              }}
            
            slidesPerView={6}
        >
            {slides.map(slide => <SwiperSlide key={slide.name}><img className='story-photo'  src={slide.img} alt={slide.name}></img></SwiperSlide>)}
        </Swiper>
    )
}