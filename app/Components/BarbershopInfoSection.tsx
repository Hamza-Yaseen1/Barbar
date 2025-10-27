"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, ChevronDown, ChevronUp, Info } from "lucide-react";

// Types
export type IFeature = {
  title: string;
  description?: string;
};

// Data (can be moved to CMS)
const features: IFeature[] = [
  { title: "Always welcoming environment", description: "Cozy lounge, complimentary drinks, and friendly staff." },
  { title: "Our masters focus on the quality", description: "Senior barbers with 8+ years of experience on average." },
  { title: "We value both the time and the money of our clients", description: "On-time appointments and transparent pricing—no surprises." },
  { title: "We work only with high-quality, hypoallergenic premium products", description: "Top-shelf brands carefully chosen for sensitive skin." },
  { title: "All surfaces and tools are cleaned, disinfected before and after using", description: "Hospital‑grade sanitation protocols, every single service." },
];

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

const BarbershopInfoSection: React.FC = () => {
  const [expanded, setExpanded] = React.useState(false);

  const visible = expanded ? features : features.slice(0, 3);

  return (
    <section
      aria-labelledby="why-choose-us-heading"
      className="relative mt-28 overflow-hidden text-gray-900"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/image 9.png')" }}
        role="img"
        aria-label="Barbershop interior background"
      />

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            id="why-choose-us-heading"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Why Choose Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mt-3 text-lg text-gray-700"
          >
            In addition, here are 5 more reasons why men prefer <span className="font-semibold">Manhattan Barbershop N.Y.C</span>:
          </motion.p>
        </div>

        {/* Feature list & Hours card layout */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Features */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            {visible.map((item, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                className="group relative list-none rounded-2xl border border-gray-200 bg-white/70 p-4 shadow-sm backdrop-blur hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-none" aria-hidden="true" />
                  <div>
                    <p className="font-medium leading-relaxed">{item.title}</p>
                    {item.description && (
                      <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                    )}
                  </div>
                </div>
              </motion.li>
            ))}

            {/* Show/Hide toggle (uses user's preferred pattern) */}
            <div className="pt-2">
              <Button
                variant="outline"
                className="mx-auto flex items-center gap-2 rounded-xl"
                aria-expanded={expanded}
                aria-controls="features-list"
                onClick={() => setExpanded((s) => !s)}
              >
                {expanded ? (
                  <>
                    Show fewer
                    <ChevronUp className="h-4 w-4" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    Show all reasons
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </Button>
            </div>
          </motion.ul>

          {/* Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            className=""
          >
            <Card className="shadow-lg rounded-2xl border border-gray-200/80 bg-white/80 backdrop-blur">
              <CardHeader className="text-center space-y-1">
                <CardTitle className="text-xl font-semibold tracking-wide flex items-center justify-center gap-2">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                  Working Hours
                </CardTitle>
                <CardDescription className="text-gray-500 text-sm flex items-center justify-center gap-1">
                  <Info className="h-4 w-4" aria-hidden="true" />
                  Manage and view your work time easily
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-center">
                <p className="text-gray-800 font-medium">Total Hours: <span className="font-semibold">8h</span></p>
                <p className="text-gray-600 text-sm">Last Updated: Today at 5:00 PM</p>
                <div className="mt-2 rounded-xl bg-gray-100 p-3 text-sm text-gray-700">
                  <p className="font-medium">Today’s Schedule</p>
                  <ul className="mt-1 space-y-1">
                    <li>09:00 AM – 01:00 PM</li>
                    <li>02:00 PM – 06:00 PM</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button className="rounded-xl">View Details</Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <AnimatePresence initial={false}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.35 }}
            className="mt-10 flex justify-center"
          >
            <Button size="lg" className="rounded-2xl px-6 py-5 text-base">
              Book an Appointment
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Soft vignette edge */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/70" />
    </section>
  );
};

export default BarbershopInfoSection;