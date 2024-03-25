'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const techSchoolTestimonials = [
    {
      quote:
        'Data Science Fundamentals course transformed my understanding of data. Engaging, insightful, and highly practical. Highly recommended!',
      name: 'Alex Johnson',
      title: 'Data Science Student',
    },
    {
      quote:
        "Advanced Data Analysis Techniques course exceeded my expectations. In-depth content, clear explanations, and valuable real-world applications. A game-changer for my career!",
      name: 'Samantha Lee',
      title: 'Data Analysis Student',
    },
    {
      quote:
        "Product Design Mastery course revolutionized my approach to design. Practical insights, expert guidance, and hands-on projects. Truly invaluable learning experience!",
      name: 'Michael Chen',
      title: 'Product Design Student',
    },
    {
      quote:
        'Exploring Generative AI course opened my eyes to endless creative possibilities. Inspiring content, clear explanations, and stimulating projects. A must for aspiring creatives!',
      name: 'Emily Taylor',
      title: 'Generative AI Student',
    },
    {
      quote:
        'Predictive Analytics Workshop was a game-changer for me. Practical, hands-on learning, expert instructors, and real-world applications. Highly recommend for data enthusiasts!',
      name: 'Chris Morales',
      title: 'Data Science Student',
    },
  ];

function TechSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Stories: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={techSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default TechSchoolTestimonials