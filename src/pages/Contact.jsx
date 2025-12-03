export default function Contact(){
return (
<div className="max-w-7xl mx-auto px-4 py-10">
<h1 className="text-3xl font-bold mb-4">Contact</h1>
<p className="text-neutral-600 mb-6">Get in touch for partnerships or support.</p>
<form className="grid grid-cols-1 gap-4 max-w-lg">
<input placeholder="Name" className="p-3 border rounded" />
<input placeholder="Email" className="p-3 border rounded" />
<textarea placeholder="Message" rows={6} className="p-3 border rounded" />
<button className="py-3 px-4 bg-indigo-600 text-white rounded">Send</button>
</form>
</div>
)
}