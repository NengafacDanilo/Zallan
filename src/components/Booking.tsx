import { useState } from "react";
import { motion } from "motion/react";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Car,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner@2.0.3";

export function Booking() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedInstructor, setSelectedInstructor] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [lessonType, setLessonType] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Booking confirmed!", {
        description: `Your lesson is scheduled for ${selectedDate?.toLocaleDateString()} at ${selectedTime}`,
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const instructors = [
    "Emmanuel Tabe",
    "Jane Njume",
    "Paul Ayuk",
    "Mary Asong",
    "David Fon",
    "Grace Tambe",
  ];

  const vehicles = [
    "Toyota Corolla 2022 (Automatic)",
    "Honda Civic 2023 (Manual)",
    "Nissan Sentra 2022 (Automatic)",
    "Yamaha MT-07 (Motorcycle)",
    "Mercedes-Benz Actros (Truck)",
  ];

  const lessonTypes = [
    "Practical Driving Lesson",
    "Theory Class",
    "Mock Test",
    "Highway Driving",
    "Night Driving",
    "Parking Practice",
  ];

  const timeSlots = [
    "07:00 AM - 08:00 AM",
    "08:00 AM - 09:00 AM",
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "01:00 PM - 02:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
    "05:00 PM - 06:00 PM",
    "06:00 PM - 07:00 PM",
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

  const previousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const isDateSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth.getMonth() &&
      selectedDate.getFullYear() === currentMonth.getFullYear()
    );
  };

  const isPastDate = (day: number) => {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
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
            Book Your{" "}
            <span className="bg-gradient-to-r from-[#0075FF] to-[#FFCC00] bg-clip-text text-transparent">
              Lesson
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Schedule your driving lesson at your convenience
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
              <CalendarIcon className="w-6 h-6 text-[#0075FF]" />
              Select Date
            </h2>

            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={previousMonth}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </motion.button>
              <div className="text-xl font-bold text-gray-900">
                {currentMonth.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextMonth}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </motion.button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="text-center font-semibold text-gray-600 text-sm py-2"
                >
                  {day}
                </div>
              ))}

              {/* Empty cells for days before month starts */}
              {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                <div key={`empty-${index}`} />
              ))}

              {/* Calendar days */}
              {Array.from({ length: daysInMonth }).map((_, index) => {
                const day = index + 1;
                const isSelected = isDateSelected(day);
                const isPast = isPastDate(day);

                return (
                  <motion.button
                    key={day}
                    whileHover={!isPast ? { scale: 1.1 } : {}}
                    whileTap={!isPast ? { scale: 0.95 } : {}}
                    onClick={() => {
                      if (!isPast) {
                        setSelectedDate(
                          new Date(
                            currentMonth.getFullYear(),
                            currentMonth.getMonth(),
                            day
                          )
                        );
                      }
                    }}
                    disabled={isPast}
                    className={`aspect-square rounded-lg flex items-center justify-center text-sm transition-all ${
                      isSelected
                        ? "bg-gradient-to-r from-[#0075FF] to-[#0055CC] text-white font-bold shadow-lg"
                        : isPast
                        ? "text-gray-300 cursor-not-allowed"
                        : "hover:bg-blue-50 text-gray-700"
                    }`}
                  >
                    {day}
                  </motion.button>
                );
              })}
            </div>

            {/* Selected Date Display */}
            {selectedDate && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-gradient-to-r from-[#0075FF]/10 to-[#FFCC00]/10 rounded-lg"
              >
                <p className="text-sm text-gray-600 mb-1">Selected Date:</p>
                <p className="text-lg font-bold text-[#0075FF]">
                  {selectedDate.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
              <Clock className="w-6 h-6 text-[#0075FF]" />
              Booking Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-700">Your Name *</label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Phone Number *</label>
                <Input
                  type="tel"
                  placeholder="+237 6XX XXX XXX"
                  value={studentPhone}
                  onChange={(e) => setStudentPhone(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Lesson Type *</label>
                <Select value={lessonType} onValueChange={setLessonType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose lesson type" />
                  </SelectTrigger>
                  <SelectContent>
                    {lessonTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Time Slot *</label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Instructor *</label>
                <Select
                  value={selectedInstructor}
                  onValueChange={setSelectedInstructor}
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
                <label className="block mb-2 text-gray-700">Vehicle *</label>
                <Select value={selectedVehicle} onValueChange={setSelectedVehicle}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    {vehicles.map((vehicle) => (
                      <SelectItem key={vehicle} value={vehicle}>
                        {vehicle}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Booking Summary */}
              {selectedDate && selectedTime && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-gradient-to-r from-[#0075FF]/10 to-[#FFCC00]/10 rounded-lg space-y-2"
                >
                  <p className="font-semibold text-gray-900 mb-2">
                    Booking Summary:
                  </p>
                  <p className="text-sm text-gray-700">
                    📅 {selectedDate.toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-700">🕐 {selectedTime}</p>
                  {selectedInstructor && (
                    <p className="text-sm text-gray-700">
                      👨‍🏫 {selectedInstructor}
                    </p>
                  )}
                  {selectedVehicle && (
                    <p className="text-sm text-gray-700">🚗 {selectedVehicle}</p>
                  )}
                </motion.div>
              )}

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting || !selectedDate || !selectedTime}
                  className="w-full bg-gradient-to-r from-[#0075FF] to-[#0055CC] hover:from-[#0055CC] hover:to-[#0075FF] text-white py-6 rounded-xl"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Booking...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Confirm Booking
                      <CheckCircle2 className="w-5 h-5" />
                    </span>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
