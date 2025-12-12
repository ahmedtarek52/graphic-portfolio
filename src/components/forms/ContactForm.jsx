import { useState } from "react"
import Button from "../ui/Button"
import Input from "../ui/Input"
import Textarea from "../ui/Textarea"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { saveContactSubmission } from "../../firebase/contact"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("idle") // "idle" | "success" | "error"
  const [submitMessage, setSubmitMessage] = useState("")

  // Validation
  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    // Enhanced phone validation - only allow digits, spaces, dashes, parentheses and plus sign
    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Phone number can only contain digits, spaces, dashes, parentheses and plus sign"
    } else if (formData.phone && formData.phone.replace(/\D/g, '').length < 7) {
      newErrors.phone = "Phone number must be at least 7 digits"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)
    setSubmitStatus("idle")

    try {
      // Save to Firestore
      await saveContactSubmission(formData)
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
      
      setSubmitStatus("success")
      setSubmitMessage("Thank you! Your message has been sent successfully.")
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
      setSubmitMessage("Oops! Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto" noValidate>
      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3" role="alert">
          <CheckCircle2 className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
          <p className="text-green-800">{submitMessage}</p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3" role="alert">
          <AlertCircle className="text-red-600 mt-0.5 flex-shrink-0" size={20} />
          <p className="text-red-800">{submitMessage}</p>
        </div>
      )}

      {/* Name Field */}
      <div>
        <Input
          id="name"
          name="name"
          type="text"
          label="Full Name *"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          ariaRequired="true"
          ariaInvalid={!!errors.name}
          ariaDescribedby={errors.name ? "name-error" : undefined}
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <Input
          id="email"
          name="email"
          type="email"
          label="Email Address *"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          ariaRequired="true"
          ariaInvalid={!!errors.email}
          ariaDescribedby={errors.email ? "email-error" : undefined}
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <Input
          id="phone"
          name="phone"
          type="tel"
          label="Phone Number (Optional)"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 123-4567"
          ariaInvalid={!!errors.phone}
          ariaDescribedby={errors.phone ? "phone-error" : undefined}
          className={errors.phone ? "border-red-500" : ""}
        />
        {errors.phone && (
          <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.phone}
          </p>
        )}
      </div>


      {/* Message Field */}
      <div>
        <Textarea
          id="message"
          name="message"
          label="Message *"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us more about your project..."
          rows={5}
          ariaRequired="true"
          ariaInvalid={!!errors.message}
          ariaDescribedby={errors.message ? "message-error" : undefined}
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center items-center"
        aria-label="Submit"
        aria-busy={isLoading}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-r-transparent"></span>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </Button>

      {/* Accessibility Info */}
      <p className="text-xs text-muted-foreground">
        <span className="sr-only">This form requires the following fields:</span>
        Fields marked with{" "}
        <span className="text-red-500" aria-label="required">
          *
        </span>{" "}
        are required.
      </p>
    </form>
  )
}