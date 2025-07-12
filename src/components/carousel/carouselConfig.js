export const carouselSettings = {
  autoPlayInterval: 4000, // milliseconds
  transitionDuration: 500, // milliseconds
  swipeThreshold: 50, // pixels
  pauseOnHover: true,
  showArrows: true,
  showDots: true,
  showProgressBar: true,
  infiniteLoop: true,
  startSlide: 0,
  responsive: {
    breakpoints: {
      tablet: 768,
      mobile: 480
    },
    settings: {
      tablet: {
        height: 400,
        arrowSize: 40
      },
      mobile: {
        height: 300,
        arrowSize: 40
      }
    }
  }
};

// Sample slide data
export const sampleSlides = [
  {
    id: 1,
    title: 'Beautiful Mountain View',
    description: 'Experience the breathtaking beauty of mountain landscapes',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
    color: '#4F46E5',
    link: '/mountain-view',
    buttonText: 'Explore'
  },
  {
    id: 2,
    title: 'Ocean Paradise',
    description: 'Dive into the crystal clear waters of tropical paradise',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop',
    color: '#0891B2',
    link: '/ocean-paradise',
    buttonText: 'Discover'
  },
  {
    id: 3,
    title: 'Urban Adventure',
    description: 'Explore the vibrant city life and modern architecture',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop',
    color: '#DC2626',
    link: '/urban-adventure',
    buttonText: 'Learn More'
  },
  {
    id: 4,
    title: 'Forest Serenity',
    description: 'Find peace in the heart of ancient forest trails',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop',
    color: '#059669',
    link: '/forest-serenity',
    buttonText: 'Visit'
  },
  {
    id: 5,
    title: 'Desert Mystique',
    description: 'Discover the magic of endless golden sand dunes',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=400&fit=crop',
    color: '#D97706',
    link: '/desert-mystique',
    buttonText: 'Adventure'
  }
];

// Custom themes
export const carouselThemes = {
  default: {
    background: '#f8fafc',
    textColor: '#ffffff',
    arrowColor: 'rgba(255, 255, 255, 0.9)',
    dotColor: 'rgba(255, 255, 255, 0.5)',
    progressColor: 'rgba(255, 255, 255, 0.2)'
  },
  dark: {
    background: '#1a202c',
    textColor: '#ffffff',
    arrowColor: 'rgba(255, 255, 255, 0.8)',
    dotColor: 'rgba(255, 255, 255, 0.4)',
    progressColor: 'rgba(255, 255, 255, 0.1)'
  },
  light: {
    background: '#ffffff',
    textColor: '#2d3748',
    arrowColor: 'rgba(45, 55, 72, 0.9)',
    dotColor: 'rgba(45, 55, 72, 0.5)',
    progressColor: 'rgba(45, 55, 72, 0.2)'
  }
};

// Animation types
export const animationTypes = {
  slide: 'slide',
  fade: 'fade',
  cube: 'cube',
  coverflow: 'coverflow'
};

// Utility functions
export const carouselUtils = {
  // Preload images
  preloadImages: (slides) => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  },

  // Generate slide ID
  generateSlideId: (index) => `slide-${index}`,

  // Format slide data
  formatSlideData: (rawData) => {
    return rawData.map((item, index) => ({
      id: item.id || index + 1,
      title: item.title || 'Untitled',
      description: item.description || '',
      image: item.image || '',
      color: item.color || '#4F46E5',
      link: item.link || '#',
      buttonText: item.buttonText || 'Learn More'
    }));
  },

  // Calculate slide position
  calculateSlidePosition: (currentSlide, totalSlides) => {
    return (currentSlide / totalSlides) * 100;
  },

  // Get responsive settings
  getResponsiveSettings: (width) => {
    const { breakpoints, settings } = carouselSettings.responsive;
    
    if (width <= breakpoints.mobile) {
      return settings.mobile;
    } else if (width <= breakpoints.tablet) {
      return settings.tablet;
    }
    return null;
  }
};

// Event handlers
export const carouselEvents = {
  onSlideChange: (currentSlide, totalSlides) => {
    console.log(`Slide changed to: ${currentSlide + 1} of ${totalSlides}`);
  },

  onAutoPlayStart: () => {
    console.log('Auto-play started');
  },

  onAutoPlayStop: () => {
    console.log('Auto-play stopped');
  },

  onSlideClick: (slide) => {
    console.log('Slide clicked:', slide);
  },

  onCarouselInit: (slides) => {
    console.log('Carousel initialized with', slides.length, 'slides');
  }
};