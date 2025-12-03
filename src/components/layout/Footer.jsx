export default function Footer() {
return (
<footer className="mt-16 border-t">
<div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-start gap-6">
<div>
<h3 className="font-semibold text-lg">YourCompany</h3>
<p className="text-sm text-neutral-600 mt-2">Market your skills, hire top freelancers, and grow your business.</p>
</div>


<div className="flex gap-8">
<div>
<h4 className="font-medium">Company</h4>
<ul className="text-sm text-neutral-600 mt-2">
<li>About</li>
<li>Careers</li>
<li>Press</li>
</ul>
</div>
<div>
<h4 className="font-medium">Support</h4>
<ul className="text-sm text-neutral-600 mt-2">
<li>Help center</li>
<li>Contact</li>
<li>Privacy</li>
</ul>
</div>
</div>
</div>
<div className="border-t py-4 text-center text-sm text-neutral-500">© {new Date().getFullYear()} YourCompany. All rights reserved.</div>
</footer>
)
}