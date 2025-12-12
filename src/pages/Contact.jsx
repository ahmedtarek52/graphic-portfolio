import ContactForm from "../components/forms/ContactForm";

export default function Contact(){
return (
<div className="py-10">
        {/* Hero Section */}
        <section className="px-6 mb-16">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's create something amazing together. We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Title and Description */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Send us a message</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We're here to help and answer any question you might have about our services. Reach out to us anytime,
                and we'll get back to you as soon as possible.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you have a project in mind or just want to chat, our team is ready to collaborate with you.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-purple-600">Email</p>
                  <p className="text-muted-foreground">hello@agency.com</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-600">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </section>
 </div>
)
}