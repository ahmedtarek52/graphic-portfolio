import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Button from "../ui/Button";

export default function ServiceDetails({ service }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showAllGallery, setShowAllGallery] = useState(false);

  // All images (cover + gallery)
  const allImages = [service.coverUrl, ...service.gallery];

  // Gallery display: show max 4, rest hidden until View More clicked
  const displayGallery = showAllGallery
    ? service.gallery
    : service.gallery.slice(0, 4);
  const hasMore = service.gallery.length > 4;

  const handleImageClick = (index) => {
    setSelectedImageIndex(index + 1); // +1 because cover is at index 0
    setShowModal(true);
  };

  const handleCoverClick = () => {
    setSelectedImageIndex(0);
    setShowModal(true);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <>
      <div className="mb-4">
        <a
          href={`/category/${service.category}`}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 
                    transition-colors text-sm font-medium"
          aria-label={`Back to ${service.category} category`}
        >
          {/* Small Back Arrow Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>

          Back
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full p-6 border border-slate-200 bg-slate-50 rounded-xl overflow-hidden">
        {/* Left: Cover Image */}
        <div className="flex flex-col gap-4">
          <button
            onClick={handleCoverClick}
            className="relative group overflow-hidden rounded-lg h-96 cursor-pointer"
          >
            <img
              src={service.coverUrl || "/placeholder.svg"}
              alt={service.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </button>
        </div>

        {/* Right: Gallery Grid */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            {displayGallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => handleImageClick(idx)}
                className="relative group overflow-hidden rounded-lg h-40 cursor-pointer"
              >
                <img
                  src={img || "/placeholder.svg"}
                  alt={`Gallery ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* View More Button */}
          {hasMore && !showAllGallery && (
            <Button
              onClick={() => setShowAllGallery(true)}
              className="w-full "
            >
              View More ({service.gallery.length - 4} more)
            </Button>
          )}

          {/* Hide button when showing all */}
          {showAllGallery && hasMore && (
            <button
              onClick={() => setShowAllGallery(false)}
              className="w-full py-3 bg-muted hover:bg-muted/80 text-foreground font-semibold rounded-lg transition-colors duration-300"
            >
              Show Less
            </button>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close image viewer"
            >
              <X size={32} />
            </button>

            {/* Main Image */}
            <div className="relative bg-black rounded-2xl overflow-hidden">
              <img
                src={allImages[selectedImageIndex] || "/placeholder.svg"}
                alt={`Image ${selectedImageIndex + 1}`}
                loading="lazy"
                className="w-full h-auto max-h-[70vh] object-contain"
              />

              {/* Left Arrow */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Right Arrow */}
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                {selectedImageIndex + 1} / {allImages.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    idx === selectedImageIndex
                      ? "border-white"
                      : "border-white/30 hover:border-white/60"
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`Thumb ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="p-6 border border-slate-200 bg-slate-50 rounded-xl overflow-hidden mt-10">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {service.title}
          </h1>
          <p className="text-muted-foreground mt-3 leading-relaxed w-[50%]">
            {service.description}
          </p>
        </div>
        {/* Demo Link */}
        {service.link && (
          <a
            href={service.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-5 py-2 rounded-lg
                 border border-[#9333ea] purple-text
      hover:purple-gradient hover:text-white"
            aria-label="View demo in new tab"
          >
            🔗 View Demo
          </a>
        )}
      </div>
    </>
  );
}
