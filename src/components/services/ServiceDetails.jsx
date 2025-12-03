export default function ServiceDetails({ service }){
return (
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<img src={service.cover} alt={service.title} className="w-full h-80 object-cover rounded" />
<h1 className="text-2xl font-bold mt-4">{service.title}</h1>
<p className="text-neutral-600 mt-2">{service.description}</p>


<section className="mt-6">
<h4 className="font-semibold">Features</h4>
<ul className="mt-2 list-disc pl-5 text-neutral-600">
{service.features.map((f,i)=>(<li key={i}>{f}</li>))}
</ul>
</section>


</div>
{/* <aside className="p-4 bg-white rounded shadow">
<div className="text-2xl font-bold">${service.price}</div>
<div className="text-sm text-neutral-500 mt-2">Delivery time: 3 days</div>
<button className="w-full mt-6 bg-indigo-600 text-white py-3 rounded">Order Now</button>
</aside> */}
</div>
)
}