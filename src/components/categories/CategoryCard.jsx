import { Link } from "react-router-dom"

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="
        block w-[250px] h-[350px] rounded-2xl overflow-hidden  transition-all duration-300 relative group" >
      {/* Image with overlay - full card */}
      <img
        src={category.icon || "/placeholder.svg"}
        alt={category.name}
        className="
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-300
          group-hover:scale-105
        "
      />

      {/* Black overlay layer */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />

      {/* Title button overlay - positioned at bottom */}
      <div className="absolute inset-0 flex items-end justify-center p-4">
        <div
          className=" w-full text-white border border-gray-200py-3 p-4 rounded-lg font-bold text-lg transition-colors duration-300 truncate "
        >
          {category.name}
        </div>
      </div>
    </Link>
  )
}