'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: "Data Science Insights",
      description: "Dive into methodologies, tools, and real-world applications driving data science success.",
      slug: "data-science-insights",
      isFeatured: true,
    },
    {
      title: "Effective Data Analysis",
      description:
        "Essential techniques for interpreting trends and making data-driven decisions.",
      slug: "effective-data-analysis",
      isFeatured: true,
    },
    {
      title: 'User-Centric Product Design',
      description:
        'Craft intuitive interfaces and delight users with user-centric design strategies.',
      slug: 'user-centric-design',
      isFeatured: true,
    },
    {
      title: 'Innovative Generative AI',
      description:
        'Explore creative possibilities across art, music, design, and storytelling with generative AI.',
      slug: 'innovative-generative-ai',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Advanced Predictive Analytics',
      description:
        'Elevate skills with machine learning, predictive modeling, and optimization strategies for deeper insights.',
      slug: 'advanced-predictive-analytics',
      isFeatured: true,
    },
    {
      title: 'Data Visualization Mastery',
      description:
        'Master storytelling through compelling visual narratives, driving impactful action within your organization.',
      slug: 'data-visualization-mastery',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Technical Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars