import { useState, useEffect } from "react";
import "animate.css";

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(0);

  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  function currentSlide(n) {
    showSlides(n);
  }

  function showSlides(n) {
    let newSlideIndex = n;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n >= slides.length) {
      newSlideIndex = 0; // Reset to the first slide
    } else if (n < 0) {
      newSlideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[newSlideIndex].style.display = "block";
    dots[newSlideIndex].className += " active";

    setSlideIndex(newSlideIndex);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 2000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div>
      <div className="slideshow-container max-w-full h-[70%] mb-28  mx-auto relative max-h-[500px] overflow-hidden flex justify-center items-center rounded-lg">
        <div className="sub-container border-white  ">
          <div
            className="mySlides fade mx-auto animate__animated animate__fadeIn"
            key={1}
          >
            <img
              src="college-1.svg"
              className=" object-cover h-[400px] shadow-md"
              alt="Slide 1"
            />
          </div>

          <div
            className="mySlides fade mx-auto animate__animated animate__fadeIn"
            key={2}
          >
            <img
              src="college-2.svg"
              className="object-cover h-[400px] brightness-125 shadow-md"
              alt="Slide 2"
            />
          </div>

          <div
            className="mySlides fade mx-auto animate__animated animate__fadeIn"
            key={3}
          >
            <img
              src="college-3.svg"
              className="object-cover h-[400px] brightness-125 shadow-md"
              alt="Slide 3"
            />
          </div>

          <div
            className="mySlides fade mx-auto animate__animated animate__fadeIn"
            key={4}
          >
            <img
              src="college-4.svg"
              className="object-cover h-[400px]   brightness-125 shadow-md"
              alt="Slide 4"
            />
          </div>
        </div>
      </div>
      <br />

      <div className="text-center">
        <span
          className="dot bg-gray-500 h-3 w-3 rounded-full inline-block mx-1"
          onClick={() => currentSlide(0)}
        ></span>
        <span
          className="dot bg-gray-500 h-3 w-3 rounded-full inline-block mx-1"
          onClick={() => currentSlide(1)}
        ></span>
        <span
          className="dot bg-gray-500 h-3 w-3 rounded-full inline-block mx-1"
          onClick={() => currentSlide(2)}
        ></span>
        <span
          className="dot bg-gray-500 h-3 w-3 rounded-full inline-block mx-1"
          onClick={() => currentSlide(3)}
        ></span>
      </div>
    </div>
  );
}

export default Slideshow;

// animate__fadeIn;
