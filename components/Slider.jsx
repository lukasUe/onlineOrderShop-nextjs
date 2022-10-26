import { Carousel, CarouselItem } from "react-bootstrap"
import Image from "next/image"

export default function Slider() {
  return (
    <div>
        <Carousel controls={false} fade={true} interval={3000} touch={true}>
            <Carousel.Item>
                <Image className="d-block w-100 rounded-3" src="/pics/food/burger.jpg" alt="burger" width={3000} height={1000}/>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="d-block w-100 rounded-3" src="/pics/food/burrito.jpg" alt="burrito" width={3000} height={1000}/>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="d-block w-100 rounded-3" src="/pics/food/pizza.jpg" alt="pizza" width={3000} height={1000}/>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="d-block w-100 rounded-3" src="/pics/food/steak.jpg" alt="steak" width={3000} height={1000}/>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}
