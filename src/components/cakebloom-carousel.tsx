"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Props = {
  compact: boolean;
  previewHref?: string;
};

const screenshots = [
  {
    src: "/images/cakebloom-home.png",
    alt: "CakeBloom featured cake collection",
    label: "Featured cakes",
  },
  {
    src: "/images/cakebloom-3.png.png",
    alt: "CakeBloom homepage hero with a chocolate cake",
    label: "Homepage",
  },
  {
    src: "/images/cakebloom-4.png.png",
    alt: "CakeBloom story section",
    label: "Our story",
  },
  {
    src: "/images/cakebloom-2.png.png",
    alt: "CakeBloom gallery of cake photos",
    label: "Gallery",
  },
  {
    src: "/images/cakebloom-5.png.png",
    alt: "CakeBloom custom cake enquiry form",
    label: "Custom cake enquiry",
  },
  {
    src: "/images/cakebloom-6.png.png",
    alt: "CakeBloom contact details and contact options",
    label: "Contact",
  },
];

export function CakeBloomCarousel({ compact, previewHref }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visitedSlides, setVisitedSlides] = useState([0]);
  const [failedImages, setFailedImages] = useState<number[]>([]);
  const [hasEntered, setHasEntered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  function showSlide(index: number) {
    const nextIndex = (index + screenshots.length) % screenshots.length;
    setActiveIndex(nextIndex);
    setVisitedSlides((visited) =>
      visited.includes(nextIndex) ? visited : [...visited, nextIndex],
    );
  }

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || hasEntered) return;

    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(carousel);
    return () => observer.disconnect();
  }, [hasEntered]);

  function renderSlideImage(index: number) {
    const screenshot = screenshots[index];
    const imageFailed = failedImages.includes(index);

    if (!visitedSlides.includes(index)) return null;

    if (imageFailed) {
      return (
        <div className="cakebloom-carousel-fallback" role="img" aria-label={`${screenshot.alt} unavailable`}>
          Screenshot unavailable
        </div>
      );
    }

    return (
      <Image
        className="cakebloom-carousel-image"
        src={screenshot.src}
        alt={screenshot.alt}
        fill
        sizes={
          compact
            ? "(max-width: 620px) 100vw, (max-width: 900px) 48vw, 33vw"
            : "(max-width: 760px) 100vw, 90vw"
        }
        onError={() => {
          setFailedImages((failed) =>
            failed.includes(index) ? failed : [...failed, index],
          );
        }}
      />
    );
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showSlide(activeIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showSlide(activeIndex + 1);
    }
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;

    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) > 45) {
      showSlide(activeIndex + (distance < 0 ? 1 : -1));
    }
  }

  const screenshot = screenshots[activeIndex];

  return (
    <div
      ref={carouselRef}
      className={`project-visual visual-cake cakebloom-carousel${compact ? " is-compact" : " is-detail"}${hasEntered ? " has-entered" : ""}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="CakeBloom website screenshots"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
      }}
      onTouchEnd={handleTouchEnd}
    >
      <div className="cakebloom-carousel-frame" aria-live="polite">
        <div
          className="cakebloom-carousel-track"
          style={{ transform: `translate3d(-${activeIndex * (100 / screenshots.length)}%, 0, 0)` }}
        >
          {screenshots.map((item, index) => {
            const isActive = index === activeIndex;
            const image = (
              <div className="cakebloom-carousel-image-motion">
                {renderSlideImage(index)}
              </div>
            );

            return (
              <div
                key={item.src}
                className={`cakebloom-carousel-slide${isActive ? " is-active" : ""}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${screenshots.length}: ${item.label}`}
                aria-hidden={!isActive}
              >
                {previewHref && !failedImages.includes(index) ? (
                  <Link
                    className="cakebloom-carousel-image-link"
                    href={previewHref}
                    aria-label={`View CakeBloom project details — ${item.label}`}
                    tabIndex={isActive ? undefined : -1}
                  >
                    {image}
                  </Link>
                ) : (
                  image
                )}
              </div>
            );
          })}
        </div>
      </div>

      <button
        className="cakebloom-carousel-arrow cakebloom-carousel-prev"
        type="button"
        aria-label="Show previous CakeBloom screenshot"
        onClick={() => showSlide(activeIndex - 1)}
      >
        <span aria-hidden="true">←</span>
      </button>
      <button
        className="cakebloom-carousel-arrow cakebloom-carousel-next"
        type="button"
        aria-label="Show next CakeBloom screenshot"
        onClick={() => showSlide(activeIndex + 1)}
      >
        <span aria-hidden="true">→</span>
      </button>
      <div className="cakebloom-carousel-dots" aria-label="Choose a screenshot">
        {screenshots.map((item, index) => (
          <button
            key={item.src}
            className="cakebloom-carousel-dot"
            type="button"
            aria-label={`Show screenshot ${index + 1}: ${item.label}`}
            aria-pressed={index === activeIndex}
            onClick={() => showSlide(index)}
          />
        ))}
      </div>
      <span className="cakebloom-carousel-status" aria-live="polite" aria-atomic="true">
        {screenshot.label}, screenshot {activeIndex + 1} of {screenshots.length}
      </span>
    </div>
  );
}
