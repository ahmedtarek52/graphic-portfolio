import { useRef } from "react";
import { useServicesContext } from "../../context/ServicesContext";
import CategoryCard from "../categories/CategoryCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CategoriesGrid() {
  const { categories } = useServicesContext();
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto md:px-0 px-4 py-10 relative">

      {/* Title */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-4xl font-heading font-semibold">Explore Categories</h2>

        {/* Arrows */}
        <div className="flex gap-3">
          <button
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={scrollRight}
            aria-label="Scroll right"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="
          flex gap-5 overflow-x-auto scroll-smooth no-scrollbar pb-2
        "
      >
        {categories.map((c) => (
          <div
            key={c.slug}
            className="min-w-[180px] flex-shrink-0"
          >
            <CategoryCard category={c} />
          </div>
        ))}
      </div>

    </div>
  );
}