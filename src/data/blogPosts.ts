export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  audience: string;
  readTime: string;
  excerpt: string;
  author: string;
  publishedDate: string;
  icon: string;
  color: string;
  sections: {
    heading?: string;
    paragraphs: string[];
    listItems?: string[];
    note?: string;
  }[];
  ctaText?: string;
  ctaHref?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-mindset",
    slug: "5-signs-entrepreneurial-mindset",
    title: "5 signs your child has an entrepreneurial mindset",
    audience: "For parents",
    readTime: "4 min read",
    excerpt: "Curious, persistent, and always asking “what if?” Here is what to look for and how to nurture it at home.",
    author: "Dr. Sarah Sidani",
    publishedDate: "2026",
    icon: "🧠",
    color: "from-amber-400 to-amber-500",
    sections: [
      {
        paragraphs: [
          "When we hear “entrepreneur,” we picture a founder with a startup. But the entrepreneurial mindset begins much earlier, in the child who rearranges the living room into a shop or asks why something works the way it does.",
          "You don't need a business idea to have it. You need curiosity, courage, and the habit of acting on ideas."
        ]
      },
      {
        heading: "1. They ask “why?” and “what if?”",
        paragraphs: [
          "Questions are the raw material of innovation. A child who keeps asking why a product is designed a certain way, or what if it were different, is already thinking like a creator.",
          "Try answering with another question: “What do you think would make it better?”"
        ]
      },
      {
        heading: "2. They turn problems into projects",
        paragraphs: [
          "Some children complain about a problem. Others start fixing it.",
          "A child who builds a sign to remind siblings to close the gate, or invents a game because the old one was boring, is practicing problem solving."
        ]
      },
      {
        heading: "3. They love making, trading, or organizing",
        paragraphs: [
          "Selling handmade bracelets, swapping cards, or organizing a neighborhood game are early lessons in value, negotiation, and planning.",
          "These small activities matter more than they look."
        ]
      },
      {
        heading: "4. They bounce back from setbacks",
        paragraphs: [
          "Entrepreneurs fail often and keep going. If your child tries again after a plan flops, or changes the approach instead of quitting, that persistence is a strong sign."
        ]
      },
      {
        heading: "5. They bring others along",
        paragraphs: [
          "Many young entrepreneurs naturally assign roles, rally friends, and explain their ideas with energy. Leadership and teamwork usually appear before a child has the words for them."
        ],
        note: "How to nurture it: Say yes to small experiments, ask questions instead of giving answers, and praise effort and learning rather than only results. If a child’s idea doesn’t work, ask “what did we learn?”"
      },
      {
        paragraphs: [
          "Not every child shows all five signs, and that is fine. These skills can all be taught and practiced, which is exactly what we do in our workshops and courses."
        ]
      }
    ],
    ctaText: "Explore our pathways",
    ctaHref: "#pathways"
  },
  {
    id: "blog-problems",
    slug: "how-to-help-your-child-spot-problems",
    title: "How to help your child spot problems worth solving",
    audience: "For parents and teachers",
    readTime: "4 min read",
    excerpt: "Great ideas start with noticing. Six simple everyday habits that train kids to see opportunities around them.",
    author: "Dr. Sarah Sidani",
    publishedDate: "2026",
    icon: "🔎",
    color: "from-sky-400 to-sky-500",
    sections: [
      {
        paragraphs: [
          "Every business starts with a problem someone noticed. Opportunity identification, the skill of seeing what could be better, is one of the most valuable things a child can learn, and it grows with practice."
        ]
      },
      {
        heading: "Ask “what bugged you today?”",
        paragraphs: [
          "Make it a dinner-table habit. Small annoyances (a heavy backpack, a messy shared room, a long line at the canteen) are the seeds of ideas. There are no wrong answers."
        ]
      },
      {
        heading: "Take a problem walk",
        paragraphs: [
          "Walk through your home, school, or neighborhood and look for things that are hard, slow, wasteful, or unfair. Challenge your child to find five.",
          "Looking with “problem eyes” changes how they see everyday life."
        ]
      },
      {
        heading: "Start an “I wish there was…” notebook",
        paragraphs: [
          "Encourage your child to write or draw each wish. Over time the notebook becomes an idea bank they can return to."
        ]
      },
      {
        heading: "Talk to the people who have the problem",
        paragraphs: [
          "A problem only matters if it matters to someone. Have your child ask a grandparent, a teacher, or a friend: “What is hard about this for you?” This is the first step of market research."
        ]
      },
      {
        heading: "Choose small, solvable problems",
        paragraphs: [
          "“Fix the environment” is too big. “Help our class remember to switch off the lights” is a start. Smaller problems lead to quicker wins and more confidence."
        ]
      },
      {
        heading: "Turn it into a question",
        paragraphs: [
          "Designers phrase problems as “How might we…?” For example, “How might we make morning routines calmer?” This invites creative answers instead of complaints."
        ],
        note: "Remember: Your role isn’t to hand over ideas. It is to ask good questions and show curiosity about theirs."
      }
    ],
    ctaText: "See the skills we teach",
    ctaHref: "#skills"
  },
  {
    id: "blog-speaking",
    slug: "why-public-speaking-is-a-superpower-for-kids",
    title: "Why public speaking is a superpower for kids",
    audience: "For parents and teachers",
    readTime: "4 min read",
    excerpt: "Speaking up builds confidence far beyond the stage. Start small at home with these practical, stress-free steps.",
    author: "Dr. Sarah Sidani",
    publishedDate: "2026",
    icon: "🎤",
    color: "from-purple-500 to-indigo-600",
    sections: [
      {
        paragraphs: [
          "A great idea that nobody hears goes nowhere. That is why public speaking sits at the heart of our programs.",
          "It is not only about performing on a stage. It is about being able to share your thinking clearly and with confidence, in class, in teams, and later at work."
        ]
      },
      {
        heading: "What children gain",
        paragraphs: [],
        listItems: [
          "Confidence: Every time they speak and survive, the next time feels easier.",
          "Clear thinking: To explain something clearly, you first have to understand it deeply.",
          "Listening skills: Good speakers learn to read and respect their audience.",
          "A stronger voice: Kids learn their opinions and unique ideas are truly worth sharing."
        ]
      },
      {
        heading: "Start small at home",
        paragraphs: [],
        listItems: [
          "Show and tell: Ask your child to present a favorite object to the family for one minute.",
          "Dinner-table stories: Take turns telling the best or funniest moment of the day.",
          "Teach us something: Let them teach you a game, a recipe, or a drawing trick."
        ]
      },
      {
        heading: "Simple tips to share with your child",
        paragraphs: [],
        listItems: [
          "Use three parts: A beginning, a middle, and an end.",
          "Practice out loud: Rehearsing in the mirror or for a pet builds muscle memory.",
          "Breathe and pause: A pause sounds confident, never awkward.",
          "Look at friendly faces and speak a little slower than feels natural."
        ],
        note: "For parents: Praise courage and effort first (“I loved that you kept going”) before giving any feedback. Nervousness is normal and never means a child is “bad” at speaking."
      }
    ],
    ctaText: "Find a workshop or course",
    ctaHref: "#pathways"
  },
  {
    id: "blog-design",
    slug: "design-thinking-at-home-3-activities",
    title: "Design thinking at home: 3 simple activities",
    audience: "Family activities",
    readTime: "5 min read",
    excerpt: "No special tools needed. Turn everyday cardboard, paper, and family moments into creative problem-solving practice.",
    author: "Dr. Sarah Sidani",
    publishedDate: "2026",
    icon: "✏️",
    color: "from-teal-400 to-emerald-500",
    sections: [
      {
        paragraphs: [
          "Design thinking is a way of solving problems by starting with people. Designers follow five steps: understand people’s needs, define the problem, brainstorm ideas, build a quick prototype, and test it.",
          "The good news is that you can practice all of it at your kitchen table with cardboard, tape, and curiosity."
        ]
      },
      {
        heading: "Activity 1: Redesign a family routine",
        paragraphs: [
          "Choose something like breakfast time or getting ready for school. Have your child interview each family member: “What is the hardest part? What would make it easier?”",
          "Then brainstorm at least ten ideas together, pick one, and test it for a week."
        ]
      },
      {
        heading: "Activity 2: Design a gift for someone",
        paragraphs: [
          "Instead of buying a present, your child studies the person. What do they enjoy? What annoys them? What do they use every day?",
          "Then they sketch and make a gift to fit those needs. This builds empathy, one of the most important design skills."
        ]
      },
      {
        heading: "Activity 3: Build a better backpack (or lunchbox)",
        paragraphs: [
          "Ask your child what is wrong with an everyday object. Using cardboard, tape, and paper, they build a rough model of a better one.",
          "Then they ask a friend to try it and tell them what to improve. Prototypes should be quick and imperfect."
        ],
        note: "Keep in mind: The goal is the thinking process, not a beautiful result. Ask “what did you learn from the test?” and celebrate version two."
      }
    ],
    ctaText: "Explore design thinking and more",
    ctaHref: "#skills"
  },
  {
    id: "blog-lemonade",
    slug: "lemonade-stand-to-real-pitch",
    title: "From lemonade stand to real pitch: what kids learn early",
    audience: "For parents",
    readTime: "4 min read",
    excerpt: "A small stand teaches big lessons. Here is how to take the next step and turn simple fun into lasting reflection.",
    author: "Dr. Sarah Sidani",
    publishedDate: "2026",
    icon: "🍋",
    color: "from-yellow-400 to-amber-500",
    sections: [
      {
        paragraphs: [
          "The lemonade stand is a classic for a reason. In a single afternoon, a child meets customers, sets prices, handles money, and learns what happens when nobody walks by.",
          "But the stand is only the beginning. The real growth happens when we help children reflect and share their ideas."
        ]
      },
      {
        heading: "What a small stand teaches",
        paragraphs: [],
        listItems: [
          "Costs and value: Lemons and cups cost money, so the price matters.",
          "Customers: What do people actually want, and where are they?",
          "Resilience: A slow afternoon is a lesson, not a failure.",
          "Responsibility: Someone has to set up, serve, and clean up."
        ]
      },
      {
        heading: "The next step: ask and reflect",
        paragraphs: [
          "After the stand, sit down and ask: Who bought from us? What did people say? What would we change? This simple reflection is market research, and it turns an activity into a real learning experience."
        ]
      },
      {
        heading: "Add the pitch",
        paragraphs: [
          "A pitch is a short, clear explanation of an idea. Help your child answer four questions in under a minute:",
        ],
        listItems: [
          "1. Who has the problem?",
          "2. What is our solution?",
          "3. Why is it better or different?",
          "4. What do we need to make it happen?"
        ]
      },
      {
        paragraphs: [
          "Let them pitch to the family, and invite a few questions afterwards. Answering questions builds thinking skills as well as speaking skills."
        ],
        note: "Tip: Any idea can be pitched, not only businesses. A new class rule, a school garden, or a charity bake sale are all great practice."
      }
    ],
    ctaText: "See where kids practice pitching",
    ctaHref: "#pathways"
  },
  {
    id: "blog-schools",
    slug: "schools-sports-academies-entrepreneurship",
    title: "How schools and sports academies can bring entrepreneurship to kids",
    audience: "For schools and clubs",
    readTime: "4 min read",
    excerpt: "Formats that work, what to look for in a program, and how young people gain resilience, teamwork, and initiative.",
    author: "Dr. Sarah Sidani",
    publishedDate: "2026",
    icon: "🏫",
    color: "from-blue-500 to-cyan-600",
    sections: [
      {
        paragraphs: [
          "Schools, scouts, sports academies, and camps already build character in children. Entrepreneurship fits naturally into that mission.",
          "It adds creativity, initiative, and communication to what young people are already learning, and it doesn’t require anyone on your staff to be a business expert."
        ]
      },
      {
        heading: "Why it fits",
        paragraphs: [],
        listItems: [
          "Schools: Real-world projects that connect subjects like math, language, and art.",
          "Scouts: Team challenges that build leadership and resourcefulness.",
          "Sports academies: Resilience, goal-setting, and communication that carry over to the field.",
          "Camps: A memorable, hands-on theme children will talk about for months."
        ]
      },
      {
        heading: "Formats that work",
        paragraphs: [],
        listItems: [
          "One-day challenge: Teams spot a problem, build an idea, and pitch it by the end of the day.",
          "Short series: Weekly sessions that build skills step by step and end with a showcase.",
          "Camp or holiday week: An immersive experience from idea to pitch."
        ]
      },
      {
        heading: "What to look for in a program",
        paragraphs: [],
        listItems: [
          "Hands-on activities rather than lectures.",
          "Content adapted to the age and interests of your group.",
          "A clear outcome, such as a pitch or showcase, that families can see.",
          "Focus on skills like teamwork, creativity, and speaking, not only on making money."
        ]
      },
      {
        heading: "What children take away",
        paragraphs: [
          "A stronger voice, the habit of noticing problems, and confidence to try, test, and improve. These are skills that help in every subject and every career."
        ],
        note: "Our collabs are designed around your group’s age, goals, and schedule. Tell us about your community and we will shape a program that fits."
      }
    ],
    ctaText: "Request a collaboration",
    ctaHref: "#contact"
  }
];

