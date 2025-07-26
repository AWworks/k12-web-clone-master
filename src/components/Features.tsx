import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Clock, 
  Users, 
  Award, 
  BookOpen, 
  Video, 
  Calendar,
  HeadphonesIcon,
  TrendingUp 
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Learn at your own pace with 24/7 access to coursework and materials."
  },
  {
    icon: Users,
    title: "Certified Teachers",
    description: "Experienced, state-certified educators provide personalized support."
  },
  {
    icon: Award,
    title: "Accredited Curriculum",
    description: "Fully accredited programs accepted by colleges and universities nationwide."
  },
  {
    icon: BookOpen,
    title: "Interactive Lessons",
    description: "Engaging multimedia content that makes learning fun and effective."
  },
  {
    icon: Video,
    title: "Live Classes",
    description: "Virtual classrooms with real-time interaction and collaboration."
  },
  {
    icon: Calendar,
    title: "Year-Round Enrollment",
    description: "Start anytime throughout the year with rolling enrollment options."
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Technical and academic support available whenever you need it."
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Real-time analytics and reporting on student progress and performance."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose K12 Online Schools?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our innovative approach to online education provides everything your child needs to succeed,
            with the flexibility modern families require.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/20">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};