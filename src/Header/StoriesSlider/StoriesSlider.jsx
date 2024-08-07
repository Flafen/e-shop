import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode, A11y, Autoplay} from 'swiper/modules';
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

let screenWidth = window.screen.width
function handleResize() {
    screenWidth = window.screen.width;
}
window.addEventListener('resize', handleResize);
const spaceBetweenSlides = screenWidth > 992 ? 30 : 10;

let slidesPerView;
if (screenWidth > 1500) {
    slidesPerView = 6.3
} else if (screenWidth > 1400) {
    slidesPerView = 6
} else if (screenWidth > 1200) {
    slidesPerView = 5.49
} else if (screenWidth > 1100) {
    slidesPerView = 5.12
} else if (screenWidth > 992) {
    slidesPerView = 4.7
} else if (screenWidth > 768) {
    slidesPerView = 4.45
} else if (screenWidth > 580 ) {
    slidesPerView = 3.5
} else if (screenWidth > 480 ) {
    slidesPerView = 2.92
} else if (screenWidth > 440 ) {
    slidesPerView = 2.62
} else {
    slidesPerView = 2.27
}


export function StoriesSlider() {

    return (
        <Swiper
            modules={[FreeMode, A11y, Autoplay]}
            spaceBetween={spaceBetweenSlides}
            
            pagination={{
                clickable: true,
              }}
            
            slidesPerView={slidesPerView}
        >
            {slides.map(slide => <SwiperSlide key={slide.name}><img className='story-photo'  src={slide.img} alt={slide.name} /></SwiperSlide>)}
        </Swiper>
    )
}