import Image from "next/image";
import Link from "next/link";
import { Stethoscope, Heart, Baby, Smile, Brain, Bone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-teal-600 tracking-tight">MediCare+</span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="#home" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">Home</Link>
              <Link href="#services" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">Services</Link>
              <Link href="#about" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">About</Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">Testimonials</Link>
              <Link href="#contact" className="bg-teal-600 text-white px-5 py-2.5 rounded-full hover:bg-teal-700 transition-all shadow-md hover:shadow-lg font-medium">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-teal-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
                Welcome to MediCare+ Clinic
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Your Health, Our <span className="text-teal-600">Priority</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Experience world-class healthcare with a personal touch. Our dedicated team of specialists is here to ensure your well-being with advanced medical treatments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#contact" className="bg-teal-600 text-white px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Get Started
                </Link>
                <Link href="#services" className="bg-white text-teal-600 border-2 border-teal-100 px-8 py-3.5 rounded-full text-lg font-semibold hover:border-teal-600 hover:bg-teal-50 transition-all">
                  Learn More
                </Link>
              </div>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                  <span>Expert Doctors</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 mt-16 lg:mt-0 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/hero-image.webp"
                  alt="Modern Medical Clinic Reception"
                  width={1024}
                  height={1024}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -z-10 bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Services</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Comprehensive Care for You</h3>
            <p className="text-gray-600 text-lg">We provide a wide range of medical services to cater to all your health needs under one roof.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "General Consultation", icon: <Stethoscope className="w-8 h-8" />, desc: "Expert medical advice for all your general health concerns." },
              { title: "Cardiology", icon: <Heart className="w-8 h-8" />, desc: "Advanced heart care and diagnostics by top specialists." },
              { title: "Pediatrics", icon: <Baby className="w-8 h-8" />, desc: "Compassionate care for your little ones from birth to adolescence." },
              { title: "Dental Care", icon: <Smile className="w-8 h-8" />, desc: "Complete dental services including cleaning, whitening, and surgery." },
              { title: "Neurology", icon: <Brain className="w-8 h-8" />, desc: "Diagnosis and treatment of disorders of the nervous system." },
              { title: "Orthopedics", icon: <Bone className="w-8 h-8" />, desc: "Treatment for bones, joints, ligaments, tendons, and muscles." },
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-teal-100 group">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                <a href="#" className="inline-block mt-4 text-teal-600 font-semibold hover:text-teal-700">Learn more &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-teal-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
          <div className="absolute w-96 h-96 bg-teal-400 rounded-full blur-3xl top-0 left-0"></div>
          <div className="absolute w-96 h-96 bg-blue-400 rounded-full blur-3xl bottom-0 right-0"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div className="mb-10 lg:mb-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-teal-700/50">
                <Image
                  src="/about-image.webp"
                  alt="Medical Team"
                  width={1024}
                  height={1024}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-teal-300 font-semibold tracking-wide uppercase text-sm mb-3">About Us</h2>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">Dedicated to Your Health & Happiness</h3>
              <p className="text-teal-100 text-lg mb-6 leading-relaxed">
                At MediCare+, we believe that healthcare should be accessible, affordable, and compassionate. Founded in 2010, our clinic has grown from a small practice to a multi-specialty center.
              </p>
              <p className="text-teal-100 text-lg mb-8 leading-relaxed">
                Our team of board-certified doctors and nurses are committed to providing the highest standard of care. We use state-of-the-art technology to ensure accurate diagnoses and effective treatments.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-white mb-1">15+</div>
                  <div className="text-teal-300">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-1">50k+</div>
                  <div className="text-teal-300">Happy Patients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-1">20+</div>
                  <div className="text-teal-300">Specialist Doctors</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-1">100%</div>
                  <div className="text-teal-300">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "Patient", quote: "The staff at MediCare+ is incredibly friendly and professional. I felt completely at ease during my visit.", image: "/testimonial-1.webp" },
              { name: "Michael Chen", role: "Patient", quote: "Dr. Smith is amazing! He took the time to explain everything to me and answered all my questions.", image: "/testimonial-2.webp" },
              { name: "Emily Davis", role: "Patient", quote: "Clean facility, modern equipment, and caring doctors. Highly recommend this clinic to everyone.", image: "/testimonial-3.webp" },
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex text-teal-400 mb-4">
                  {"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}
                </div>
                <p className="text-gray-600 italic mb-6">"{t.quote}"</p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-3">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <span className="text-2xl font-bold text-white tracking-tight mb-4 block">MediCare+</span>
              <p className="text-gray-400 text-sm leading-relaxed">
                Providing quality healthcare with a personal touch. Your health is our priority.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#home" className="hover:text-teal-400 transition-colors">Home</Link></li>
                <li><Link href="#services" className="hover:text-teal-400 transition-colors">Services</Link></li>
                <li><Link href="#about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
                <li><Link href="#contact" className="hover:text-teal-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Cardiology</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Neurology</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Pediatrics</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Dental Care</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start"><span className="mr-2">📍</span> 123 Medical Center Dr, City, State</li>
                <li className="flex items-center"><span className="mr-2">📞</span> (555) 123-4567</li>
                <li className="flex items-center"><span className="mr-2">✉️</span> info@medicareplus.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} MediCare+ Clinic. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

