// Carousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "../../styles/_carousel.scss"; // Import SCSS file

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const intervalRef = useRef(null);
    const carouselRef = useRef(null);

    // Sample data - replace with your own
    const slides = [
        {
            id: 1,
            title: 'React & Typescript',
            description: 'Memperdalam Pemahaman React Hooks dengan TypeScript',
            image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*3dTWlMHKBcrcUFm7gjYyTw.jpeg',
            link: 'https://medium.com/@zaki.ziwar/memperdalam-pemahaman-react-hooks-dengan-typescript-f0738d507210',
            color: '#4F46E5'
        },
        {
            id: 2,
            title: 'CSS',
            description: 'CSS: Dari Dasar Hingga Teknik Modern',
            image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*oIK-NfBi8FZStlVQ6kf2og.jpeg',
            link: 'https://medium.com/@zaki.ziwar/github-actions-automating-your-development-workflow-from-code-to-deployment-bf12db4a3bd7',
            color: '#0891B2'
        },
        {
            id: 3,
            title: 'Github Actions',
            description: 'GitHub Actions: Automating Your Development Workflow from Code to Deployment',
            image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*AsvzMT7QrIw_Z1dk.png',
            link: 'https://medium.com/@zaki.ziwar/github-actions-automating-your-development-workflow-from-code-to-deployment-bf12db4a3bd7',
            color: '#DC2626'
        },
        {
            id: 4,
            title: 'Javascript & Typescript',
            description: 'JavaScript & TypeScript in Programming Paradigms: The Evolution of Web Development',
            image: 'http://miro.medium.com/v2/resize:fit:1100/format:webp/1*7aEHxVFA7enC1qvYtekxRQ.jpeg',
            link: 'https://medium.com/@zaki.ziwar/javascript-typescript-in-programming-paradigms-the-evolution-of-web-development-db3cd3dc1941',
            color: '#D97706'
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (isAutoPlaying) {
            intervalRef.current = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }, 4000);
        }
        return () => clearInterval(intervalRef.current);
    }, [isAutoPlaying, slides.length]);

    // Navigation functions
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Touch handlers for mobile swipe
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    // Pause auto-play on hover
    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    return (
        <div className="carousel-container">
            <div
                className="carousel"
                ref={carouselRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Main carousel wrapper */}
                <div
                    className="carousel-wrapper"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                        >
                            <div className="slide-image">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    loading="lazy"
                                />
                                <div
                                    className="slide-overlay"
                                    style={{ backgroundColor: `${slide.color}20` }}
                                />
                            </div>
                            <div className="slide-content">
                                <h2 className="slide-title">{slide.title}</h2>
                                <p className="slide-description">{slide.description}</p>
                                <a
                                    href={slide.link}
                                    target='_blank'
                                    className="slide-button"
                                    style={{ backgroundColor: slide.color }}
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation arrows */}
                <button
                    className="carousel-arrow carousel-arrow--left"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    className="carousel-arrow carousel-arrow--right"
                    onClick={nextSlide}
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Dots indicator */}
                <div className="carousel-dots">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === currentSlide ? 'carousel-dot--active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Progress bar */}
                <div className="carousel-progress">
                    <div
                        className="carousel-progress__fill"
                        style={{
                            width: `${((currentSlide + 1) / slides.length) * 100}%`,
                            backgroundColor: slides[currentSlide].color
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Carousel;