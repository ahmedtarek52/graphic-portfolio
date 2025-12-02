export default function Hero() {
return (
<section className="relative h-screen w-full flex justify-center items-center overflow-hidden">
<video
className="absolute inset-0 w-full h-full object-cover opacity-50"
autoPlay
muted
loop
src="/assets/hero/hero-video.mp4"
/>


<div className="relative z-10 text-center">
<h1 className="text-6xl md:text-7xl font-bold mb-4 underline">Graphic Designer</h1>
<p className="text-xl text-gray-300 max-w-xl mx-auto ">
Crafting bold visuals, brand identities, and stunning digital experiences.
</p>
</div>
</section>
)
}