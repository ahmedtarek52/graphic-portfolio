export default function Banner({ bg, title, description }) {
  return (
    <section
      className="
        relative h-[30vh] md:h-[40vh] rounded-2xl max-w-7xl mx-auto px-4 
        my-5 md:my-10 w-full flex justify-center items-center 
        overflow-hidden shadow-xl
      "
    >
      {/* Background */}
      <img
        src={bg}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-3">
          {title}
        </h1>

        {description && (
          <p className="text-sm md:text-lg text-gray-200 max-w-xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
