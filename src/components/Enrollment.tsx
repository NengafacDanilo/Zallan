import { useState } from "react";
import { motion } from "motion/react";
import { Upload, CheckCircle2, User, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";

export function Enrollment() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    dateOfBirth: "",
    course: "",
    location: "",
    instructor: "",
    schedule: "",
    emergencyContact: "",
    emergencyPhone: "",
    paymentMethod: "",
    comments: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Enrollment successful!", {
        description: "We'll contact you within 24 hours to confirm your enrollment.",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const courses = [
    "Beginner Driver Training",
    "Road Test Preparation",
    "Defensive Driving",
    "Highway & Night Driving",
    "Category A License (Motorcycle)",
    "Category B License (Private Car)",
    "Category C License (Heavy Vehicle)",
    "Category D License (Bus/Passenger)",
  ];

  const locations = ["Buea", ];
  
  const instructors = [
    "Mr Zallan",
    
    "No Preference",
  ];

  const schedules = [
    "Weekday Mornings (8AM-12PM)",
    "Weekday Afternoons (12PM-5PM)",
    "Weekday Evenings (5PM-7PM)",
    "Weekend Only",
    "Flexible (Any time)",
  ];

  const paymentMethods = [
    "Mobile Money - MTN",
    "Cash Payment",
    "Installment Plan",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Student{" "}
            <span className="bg-gradient-to-r from-[#0075FF] to-[#FFCC00] bg-clip-text text-transparent">
              Enrollment
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Start your driving journey with Zallan Driving School
          </motion.p>
        </motion.div>

        {/* Enrollment Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                <User className="w-6 h-6 text-[#0075FF]" />
                Personal Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-gray-700">Full Name *</label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">Date of Birth *</label>
                  <Input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) =>
                      setFormData({ ...formData, dateOfBirth: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">Phone Number *</label>
                  <Input
                    type="tel"
                    placeholder="+237 6XX XXX XXX"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block mb-2 text-gray-700">Address *</label>
                  <Input
                    type="text"
                    placeholder="Your full address"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
            </div>

            {/* Course Details */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-[#0075FF]" />
                Course Details
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-gray-700">Select Course *</label>
                  <Select
                    value={formData.course}
                    onValueChange={(value: string) =>
                      setFormData({ ...formData, course: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">Training Location *</label>
                  <Select
                    value={formData.location}
                    onValueChange={(value: string) =>
                      setFormData({ ...formData, location: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">Preferred Instructor</label>
                  <Select
                    value={formData.instructor}
                    onValueChange={(value: string) =>
                      setFormData({ ...formData, instructor: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose instructor" />
                    </SelectTrigger>
                    <SelectContent>
                      {instructors.map((instructor) => (
                        <SelectItem key={instructor} value={instructor}>
                          {instructor}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">Preferred Schedule *</label>
                  <Select
                    value={formData.schedule}
                    onValueChange={(value: string) =>
                      setFormData({ ...formData, schedule: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose schedule" />
                    </SelectTrigger>
                    <SelectContent>
                      {schedules.map((schedule) => (
                        <SelectItem key={schedule} value={schedule}>
                          {schedule}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                <Phone className="w-6 h-6 text-[#0075FF]" />
                Emergency Contact
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-gray-700">Contact Name *</label>
                  <Input
                    type="text"
                    placeholder="Emergency contact name"
                    value={formData.emergencyContact}
                    onChange={(e) =>
                      setFormData({ ...formData, emergencyContact: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">Contact Phone *</label>
                  <Input
                    type="tel"
                    placeholder="+237 6XX XXX XXX"
                    value={formData.emergencyPhone}
                    onChange={(e) =>
                      setFormData({ ...formData, emergencyPhone: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment & Documents */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-[#0075FF]" />
                Payment & Documents
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-700">Payment Method *</label>
                  <Select
                    value={formData.paymentMethod}
                    onValueChange={(value: string) =>
                      setFormData({ ...formData, paymentMethod: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      {paymentMethods.map((method) => (
                        <SelectItem key={method} value={method}>
                          {method}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">Upload ID Card</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#0075FF] transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 mb-1">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-400">PNG, JPG or PDF (max. 5MB)</p>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">Additional Comments</label>
                  <Textarea
                    placeholder="Any additional information or special requests..."
                    value={formData.comments}
                    onChange={(e) =>
                      setFormData({ ...formData, comments: e.target.value })
                    }
                    rows={4}
                    className="resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#0075FF] to-[#0055CC] hover:from-[#0055CC] hover:to-[#0075FF] text-white py-6 rounded-xl text-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Complete Enrollment
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                )}
              </Button>
            </motion.div>

            <p className="text-sm text-gray-500 text-center">
              By submitting this form, you agree to our terms and conditions. We'll
              contact you within 24 hours to confirm your enrollment.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
