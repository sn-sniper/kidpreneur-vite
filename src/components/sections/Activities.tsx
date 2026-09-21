import { Star, Compass, Map, Rocket, CheckCircle2, Heart } from 'lucide-react';

const activities = [
  {
    id: 1,
    title: 'Entrepreneurship',
    description: 'Empowering young minds with business fundamentals, leadership skills, financial literacy, and the confidence to turn ideas into reality.',
    icon: Compass,
    color: 'bg-kidpreneur-lightblue',
    textColor: 'text-kidpreneur-slate'
  },
  {
    id: 2,
    title: 'Artificial Intelligence',
    description: 'Demystifying modern technology by introducing kids to smart concepts and logical thinking through fun, age-appropriate tools.',
    icon: Rocket,
    color: 'bg-kidpreneur-yellow',
    textColor: 'text-yellow-800'
  },
  {
    id: 3,
    title: 'Robotics',
    description: 'Engaging children in hands-on building, coding, and problem-solving to bring interactive machines to life.',
    icon: Star,
    color: 'bg-kidpreneur-teal',
    textColor: 'text-white'
  },
  {
    id: 4,
    title: 'Healthy Habits',
    description: 'Cultivating physical and mental well-being by teaching mindful daily routines, nutrition, and personal growth strategies.',
    icon: Heart,
    color: 'bg-kidpreneur-blue',
    textColor: 'text-white'
  },
  {
    id: 5,
    title: 'Agriculture',
    description: 'Connecting kids with nature through sustainable gardening practices, environmental awareness, and seed-to-table experiences.',
    icon: Map,
    color: 'bg-white',
    textColor: 'text-kidpreneur-slate'
  },
  {
    id: 6,
    title: 'And More',
    description: "Continuously introducing fresh, innovative learning modules designed to inspire every child's unique passion.",
    icon: CheckCircle2,
    color: 'bg-kidpreneur-slate',
    textColor: 'text-white'
  }
];

export default function Activities() {
  return (
    <section id="activities" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-kidpreneur-teal font-bold tracking-widest uppercase text-sm mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-kidpreneur-slate mb-6">Our Activities</h2>
          <p className="text-gray-600 text-lg">
            We introduce children to essential, future-focused skills through interactive, experiential learning across key disciplines:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div 
                key={activity.id}
                id={`activity-${activity.id}`}
                className={`${activity.color} rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100/50`}
              >
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <Icon className={`w-7 h-7 ${activity.textColor}`} />
                </div>
                <h3 className={`text-2xl font-display font-bold mb-3 ${activity.textColor}`}>
                  {activity.title}
                </h3>
                <p className={`${activity.textColor} opacity-90 leading-relaxed`}>
                  {activity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
