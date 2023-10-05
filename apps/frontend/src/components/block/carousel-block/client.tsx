'use client'
import { useState, useEffect, useId, type FunctionComponent, type ReactElement } from "react"
import { ChevronLeftIcon, ChevronRightIcon,  } from '@heroicons/react/24/outline'

import './carousel.css'

export type CarouselProps = 
{
    durationMilliseconds?: number
    showArrows?: boolean
    showDots?: boolean
    slides: ReactElement[]
}

function nextSlideNumber(currentSlide: number, totalSlides: number) : number {
    const nextSlide = currentSlide + 1
    if (nextSlide >= totalSlides) return 0
    return nextSlide
}
function previousSlideNumber(currentSlide: number, totalSlides: number) : number {
    const nextSlide = currentSlide - 1
    if (nextSlide < 0) return totalSlides - 1
    return nextSlide
}

export const Carousel : FunctionComponent<CarouselProps> = ({ slides, durationMilliseconds, showArrows, showDots }) => 
{
    const id = useId()
    const slideCount = slides.length
    const [ currentSlide, setCurrentSlide ] = useState<number>(0)

    useEffect(() => {
        // Only slide if a slide is at least 500ms on screen
        if (!durationMilliseconds || durationMilliseconds <= 500)
            return

        // Set the interval to move to the next slide
        const interval = setInterval(() => setCurrentSlide(x => nextSlideNumber(x, slideCount)), durationMilliseconds)
        return () => {
            clearInterval(interval)
        }
    }, [ durationMilliseconds, slideCount ])

    const dots : ReactElement[] = []
    for (let i = 0; i < slideCount; i++) {
        dots.push(<li className="dot" key={`${ id }-slide-dot-${ i }`} onClick={() => setCurrentSlide(i) } onTouchEnd={() => setCurrentSlide(i) }></li>)
    }

    return <div className="carousel">
        { slides.map(( slide, idx) => {
            const slideId = (slide.props?.contentLink?.guidValue ?? "00000000-0000-0000-0000-000000000000")+"::"+idx
            return <div id={ slideId } key={ slideId } className={`carousel-slide ${ currentSlide == idx ? 'active' : 'inactive' }`}>{ slide }</div>
        })}
        { showArrows && <>
            <div className="arr larr" onClick={ () => setCurrentSlide(x => nextSlideNumber(x, slideCount)) } onTouchEnd={ () => setCurrentSlide(x => nextSlideNumber(x, slideCount)) }>
                <ChevronLeftIcon className="w-32 h-32" />
            </div>
            <div className="arr rarr" onClick={ () => setCurrentSlide(x => previousSlideNumber(x, slideCount)) } onTouchEnd={ () => setCurrentSlide(x => previousSlideNumber(x, slideCount)) }>
                <ChevronRightIcon className="w-32 h-32" />
            </div>
        </>}
        { showDots && <ul className="dots">{ dots }</ul> }
    </div>
}
Carousel.displayName = "Carousel"

export default Carousel