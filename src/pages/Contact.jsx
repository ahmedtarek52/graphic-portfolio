export default function Contact() {
return (
<div className="pt-24 max-w-4xl mx-auto px-4">
<h1 className="text-4xl font-bold mb-6">Contact</h1>
<p className="text-gray-300 mb-6">Feel free to reach out for work or collaboration.</p>
<form className="grid grid-cols-1 gap-4 max-w-md">
<input className="p-3 bg-white/5 border border-white/10 rounded" placeholder="Your Name" />
<input className="p-3 bg-white/5 border border-white/10 rounded" placeholder="Your Email" />
<textarea className="p-3 bg-white/5 border border-white/10 rounded" placeholder="Message" rows="5" />
<button className="bg-white text-black py-3 rounded font-semibold">Send Message</button>
</form>
</div>
)
}