import SectionHeader from "../SectionHeader";
import AboutFeatures from "./AboutFeatures";
import AboutStory from "./AboutStory";


const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-20">
        <SectionHeader translationNamespace="about" highlight="Fitzone?"/>
        <AboutFeatures />
        <AboutStory />
      </div>
    </section>
  )
}
export default AboutSection;