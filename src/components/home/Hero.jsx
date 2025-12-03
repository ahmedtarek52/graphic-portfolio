// import { useNavigate } from 'react-router-dom'
// import ServicesCarousel from './ServicesCarousel'

import SearchBar from "./SearchBar";


export default function Hero() {
// const navigate = useNavigate()
return (
<section className="relative md:h-screen h-[60vh] w-full flex justify-center items-center overflow-hidden">
<video
className="absolute inset-0 w-full h-full object-cover"
autoPlay
muted
loop
src="/assets/hero/hero-video.mp4"
/>


<div className="relative z-10 text-center">
<h1 className="text-6xl md:text-7xl text-gray-300 font-bold mb-4 underline">Graphic Designer</h1>
<p className="text-xl text-gray-300 max-w-xl mx-auto ">
Crafting bold visuals, brand identities, and stunning digital experiences.
</p>
<div className="p-5">

<SearchBar />
</div>
</div>
</section>
)
}