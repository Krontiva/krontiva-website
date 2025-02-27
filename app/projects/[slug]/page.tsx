"use client";

import React from 'react';
import { motion } from "framer-motion";
import Header from "../../components/layout/Header";
import Image from "next/image";
import { ArrowLeft, Target, Check, AlertTriangle, AlertCircle } from "lucide-react";
import Link from "next/link";

// Project case study data
const projectData = {
  'tbc': {
    title: "Event Registration for Trinity Baptist Church",
    category: "Event Registration",
    image: "/projects/tbc.jpg",
    description: "To streamline attendee registration, eliminate long queues, and enhance data collection for post-event engagement.",
    objective: [
      "Streamline attendee registration process",
      "Eliminate long queues at event check-in",
      "Enhance data collection for post-event engagement",
      "Improve overall event experience"
    ],
    challenges: [
      "Manual registration process causing delays",
      "Limited attendee data collection",
      "Inefficient check-in system",
      "Difficulty in post-event communication"
    ],
    implementation: [
      {
        title: "Digital Registration System",
        description: "Implemented EngageEase platform for seamless registration and check-in process"
      },
      {
        title: "Data Collection Strategy",
        description: "Developed comprehensive data collection system while maintaining user privacy"
      },
      {
        title: "Integration & Training",
        description: "Provided staff training and technical support for smooth system adoption"
      }
    ],
    results: [
      {
        metric: "Attendee Registration",
        value: "200+",
        description: "Successfully registered attendees at each event"
      },
      {
        metric: "Wait Time Reduction",
        value: "95%",
        description: "Significant decrease in check-in queue times"
      },
      {
        metric: "Data Collection",
        value: "100%",
        description: "Complete attendee profiles for future engagement"
      }
    ],
    impact: [
      "Streamlined registration process reduced staff workload by 75%",
      "Enhanced attendee experience with quick digital check-ins",
      "Improved post-event communication through collected data",
      "Enabled targeted promotion of future events",
      "Increased overall event attendance through better engagement"
    ],
    testimonial: {
      quote: "Krontiva Africa's solution transformed our event registration process. We've seen remarkable improvements in attendance and engagement.",
      author: "Event Coordinator",
      role: "Trinity Baptist Church"
    }
  },
  'kingworldtour': {
    title: "Event Registration for King World Tour (Maverick City)",
    category: "Event Registration",
    image: "/projects/kingworldtour.jpg",
    description: "To streamline attendee registration, eliminate long queues, and enhance data collection for post-event engagement.",
    objective: [
      "Streamline attendee registration process",
      "Eliminate long queues at event check-in",
      "Enhance data collection for post-event engagement",
      "Improve overall event experience"
    ],
    challenges: [
      "Manual registration process causing delays",
      "Limited attendee data collection",
      "Inefficient check-in system",
      "Difficulty in post-event communication"
    ],
    implementation: [
      {
        title: "Digital Registration System",
        description: "Implemented EngageEase platform for seamless registration and check-in process"
      },
      {
        title: "Data Collection Strategy",
        description: "Developed comprehensive data collection system while maintaining user privacy"
      },
      {
        title: "Integration & Training",
        description: "Provided staff training and technical support for smooth system adoption"
      }
    ],
    results: [
      {
        metric: "Attendee Registration",
        value: "200+",
        description: "Successfully registered attendees at each event"
      },
      {
        metric: "Wait Time Reduction",
        value: "95%",
        description: "Significant decrease in check-in queue times"
      },
      {
        metric: "Data Collection",
        value: "100%",
        description: "Complete attendee profiles for future engagement"
      }
    ],
    impact: [
      "Streamlined registration process reduced staff workload by 75%",
      "Enhanced attendee experience with quick digital check-ins",
      "Improved post-event communication through collected data",
      "Enabled targeted promotion of future events",
      "Increased overall event attendance through better engagement"
    ],
    testimonial: {
      quote: "The registration process was incredibly smooth. Our attendees were very impressed with the quick check-in system.",
      author: "Event Manager",
      role: "King World Tour"
    }
  },
  'praisereload': {
    title: "Event Registration for Praise Reloaded (Joe Mettle Concert)",
    category: "Event Registration",
    image: "/projects/praisereload.jpg",
    description: "To streamline attendee registration, eliminate long queues, and enhance data collection for post-event engagement.",
    objective: [
      "Streamline attendee registration process",
      "Eliminate long queues at event check-in",
      "Enhance data collection for post-event engagement",
      "Improve overall event experience"
    ],
    challenges: [
      "Manual registration process causing delays",
      "Limited attendee data collection",
      "Inefficient check-in system",
      "Difficulty in post-event communication"
    ],
    implementation: [
      {
        title: "Digital Registration System",
        description: "Implemented EngageEase platform for seamless registration and check-in process"
      },
      {
        title: "Data Collection Strategy",
        description: "Developed comprehensive data collection system while maintaining user privacy"
      },
      {
        title: "Integration & Training",
        description: "Provided staff training and technical support for smooth system adoption"
      }
    ],
    results: [
      {
        metric: "Attendee Registration",
        value: "200+",
        description: "Successfully registered attendees at each event"
      },
      {
        metric: "Wait Time Reduction",
        value: "95%",
        description: "Significant decrease in check-in queue times"
      },
      {
        metric: "Data Collection",
        value: "100%",
        description: "Complete attendee profiles for future engagement"
      }
    ],
    impact: [
      "Streamlined registration process reduced staff workload by 75%",
      "Enhanced attendee experience with quick digital check-ins",
      "Improved post-event communication through collected data",
      "Enabled targeted promotion of future events",
      "Increased overall event attendance through better engagement"
    ],
    testimonial: {
      quote: "Krontiva's solution made our event registration process seamless. The data collection helped us better understand our audience.",
      author: "Production Manager",
      role: "Praise Reloaded"
    }
  }
};

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const project = projectData[resolvedParams.slug as keyof typeof projectData];

  if (!project) {
    return (
      <main className="bg-white min-h-screen">
        <Header />
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The project you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link 
            href="/projects"
            className="inline-flex items-center text-green-600 hover:text-green-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Back Button */}
        <Link 
          href="/projects"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="mb-16">
          <span className="text-green-600 text-lg font-medium mb-4 block">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-8">
            {project.title}
          </h1>
        </div>

        {/* Main Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden mb-16"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* Content Layout */}
        <div className="space-y-16">
          {/* Objectives and Challenges - Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Objective */}
            <div className="bg-green-50 rounded-xl p-8 border border-green-100 h-full">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <Target className="w-5 h-5 text-green-600" />
                </div>
                Project Objectives
              </h3>
              <ul className="space-y-4">
                {project.objective.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="bg-amber-50 rounded-xl p-8 border border-amber-100 h-full">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                Challenges
              </h3>
              <ul className="space-y-4">
                {project.challenges.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlertCircle className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Implementation and Impact - Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Implementation */}
            <div>
              <h2 className="text-2xl font-display font-bold mb-8">Implementation</h2>
              <div className="space-y-8">
                {project.implementation.map((item, i) => (
                  <div key={i} className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-display font-bold text-green-600">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div>
              <h2 className="text-2xl font-display font-bold mb-8">Impact</h2>
              <ul className="space-y-4">
                {project.impact.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium text-green-600">{i + 1}</span>
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results - Full Width */}
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-8">Results</h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {project.results.map((result, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <div className="text-3xl font-display font-bold text-green-500 mb-2">
                    {result.value}
                  </div>
                  <div className="font-medium text-gray-900 mb-2">{result.metric}</div>
                  <p className="text-gray-600">{result.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="bg-gray-50 p-8 rounded-xl">
              <blockquote className="text-xl text-gray-600 italic mb-6">
                &quot;{project.testimonial.quote}&quot;
              </blockquote>
              <div>
                <div className="font-medium text-gray-900">{project.testimonial.author}</div>
                <div className="text-gray-600">{project.testimonial.role}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 