import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Depois do curso da Eliene, entendi minhas feridas e consegui me libertar delas.",
    author: "Ana Paula",
    age: 36
  },
  {
    text: "Sofri por anos repetindo padrões. Hoje me sinto segura e livre.",
    author: "Mariana",
    age: 42
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-neutral/30 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16 animate-fade-in-up">
          Depoimentos
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-neutral transition-all duration-300 hover:scale-110"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-neutral transition-all duration-300 hover:scale-110"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <Quote className="w-12 h-12 text-primary/20 mb-6" />
            <p className="text-xl md:text-2xl text-foreground font-body italic leading-relaxed mb-8">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-heading font-semibold text-lg text-foreground">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].age} anos
                </p>
              </div>
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-primary w-8" : "bg-neutral"
                    }`}
                    aria-label={`Ver depoimento ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
