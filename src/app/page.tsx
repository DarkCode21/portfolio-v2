import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Footer from "@/sections/Footer";
// Cuando migremos: About, Projects, Experiences, Testimonial, Contact
// import About from '@/sections/About'
// import Projects from '@/sections/Projects'
// import Experiences from '@/sections/Experiences'
// import Testimonial from '@/sections/Testimonial'
// import Contact from '@/sections/Contact'

export default function HomePage() {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Experiences /> */}
      {/* <Testimonial /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
