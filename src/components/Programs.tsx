import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import elementaryIcon from "@/assets/elementary-icon.jpg";
import middleIcon from "@/assets/middle-icon.jpg";
import highSchoolIcon from "@/assets/high-school-icon.jpg";

const programs = [
  {
    title: "Elementary School",
    grades: "Grades K-5",
    description: "Build strong foundations in reading, math, and science with interactive lessons designed for young learners.",
    icon: elementaryIcon,
    features: ["Interactive Learning Games", "Phonics & Reading", "Basic Math Concepts", "Science Exploration"]
  },
  {
    title: "Middle School", 
    grades: "Grades 6-8",
    description: "Navigate the middle school years with comprehensive courses that prepare students for high school success.",
    icon: middleIcon,
    features: ["Advanced Mathematics", "Literature & Writing", "Social Studies", "STEM Projects"]
  },
  {
    title: "High School",
    grades: "Grades 9-12", 
    description: "Graduate with a fully accredited diploma through rigorous coursework and college prep programs.",
    icon: highSchoolIcon,
    features: ["College Prep Courses", "AP Classes Available", "Career Pathways", "College Counseling"]
  }
];

export const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Programs for Every Grade Level
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From kindergarten through high school graduation, we provide comprehensive online education 
            tailored to each developmental stage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-20 h-20 rounded-full overflow-hidden">
                  <img 
                    src={program.icon} 
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl font-bold">{program.title}</CardTitle>
                <CardDescription className="text-primary font-semibold">{program.grades}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-4">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};