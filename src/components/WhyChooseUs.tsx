
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const techSchoolContent = [
    {
      title: 'Expert Instructors, Tailored Curriculum',
      description:
        'Benefit from industry experts and personalized learning paths tailored to your goals and aspirations.',
    },
    {
      title: 'Hands-On Projects, Real-World Applications',
      description:
        'Gain practical experience through hands-on projects and apply your skills to real-world scenarios.',
    },
    {
      title: 'Flexible Learning Options, Anytime Access',
      description:
        'Choose from flexible learning formats and access course materials anytime, anywhere, to fit your schedule.',
    },
    {
      title: 'Supportive Community, Networking Opportunities',
      description:
        'Join a supportive community of learners and leverage networking opportunities with like-minded professionals.',
    },
    {
      title: 'Cutting-Edge Curriculum, Latest Technologies',
      description:
        'Stay ahead with a cutting-edge curriculum designed to incorporate the latest technologies and industry trends.',
    },
    {
      title: 'Proven Track Record, Career Advancement',
      description:
        'Benefit from our proven track record of success and accelerate your career advancement with our programs.',
    },
  ];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={techSchoolContent} />
    </div>
  )
}

export default WhyChooseUs