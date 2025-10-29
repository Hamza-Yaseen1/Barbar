"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import {
  Scissors,
  Sparkles,
  Brush,
  Clock,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

/* ---------------------------------- Types --------------------------------- */
type IPrice = {
  service: string;
  price: string;
  description?: string;
  duration?: string;
  popular?: boolean;
  icon?: React.ReactNode;
};

type PricingProps = {
  title?: string;
  subtitle?: string;
  items?: IPrice[];
  defaultShowDetails?: boolean;
  className?: string;
};

/* ---------------------------------- Data ---------------------------------- */
const defaultPrices: IPrice[] = [
  {
    service: "Regular Haircut",
    price: "$34+",
    description: "Classic clipper & scissor cut with clean finish.",
    duration: "30–40 min",
    popular: true,
    icon: <Scissors className="w-5 h-5" aria-hidden />,
  },
  {
    service: "Skin Fade",
    price: "$42+",
    description: "High/low skin fade with detailed blending.",
    duration: "45–55 min",
    icon: <Brush className="w-5 h-5" aria-hidden />,
  },
  {
    service: "Beard Trim & Shape",
    price: "$18+",
    description: "Line-up, shape, and conditioning finish.",
    duration: "15–20 min",
    icon: <Sparkles className="w-5 h-5" aria-hidden />,
  },
  {
    service: "Kids Cut (Under 12)",
    price: "$28+",
    description: "Gentle, patient cut for little legends.",
    duration: "25–35 min",
    icon: <Star className="w-5 h-5" aria-hidden />,
  },
  {
    service: "Wash & Style",
    price: "$16+",
    description: "Shampoo, scalp refresh, and blow-dry style.",
    duration: "10–15 min",
    icon: <Sparkles className="w-5 h-5" aria-hidden />,
  },
  {
    service: "Express Line-Up",
    price: "$12+",
    description: "Neck, edges, and quick tidy-up.",
    duration: "10–12 min",
    icon: <Clock className="w-5 h-5" aria-hidden />,
  },
];

/* --------------------------- Animation Variants ---------------------------- */
const container: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const spring: Transition = { type: "spring", stiffness: 280, damping: 22 };

const item: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: spring,
  },
};

/* --------------------------------- Helpers -------------------------------- */
function splitInTwo<T>(arr: T[]): [T[], T[]] {
  const mid = Math.ceil(arr.length / 2);
  return [arr.slice(0, mid), arr.slice(mid)];
}

/* -------------------------------- Component -------------------------------- */
const Pricing: React.FC<PricingProps> = ({
  title = "Our Pricing",
  subtitle = "Transparent rates. Premium service. No surprises.",
  items = defaultPrices,
  defaultShowDetails = true,
  className = "",
}) => {
  const [left, right] = splitInTwo(items);
  const [showDetails, setShowDetails] = React.useState(defaultShowDetails);

  return (
    <section
      className={`mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 ${className}`}
      aria-labelledby="pricing-heading"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 id="pricing-heading" className="text-4xl md:text-5xl font-bold tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-sm md:text-base text-muted-foreground/80">{subtitle}</p>
        )}

        {/* Toggle details */}
        <button
          type="button"
          onClick={() => setShowDetails((s) => !s)}
          className="group inline-flex items-center gap-2 mt-6 rounded-2xl border px-4 py-2 text-sm font-medium hover:shadow-lg transition-all"
          aria-expanded={showDetails}
          aria-controls="pricing-grid"
        >
          {showDetails ? (
            <>
              <ChevronUp className="w-4 h-4" aria-hidden /> Hide details
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" aria-hidden /> Show details
            </>
          )}
        </button>
      </motion.div>

      {/* Grid */}
      <motion.div
        id="pricing-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
      >
        {[left, right].map((col, colIndex) => (
          <div key={colIndex} className="space-y-4">
            {col.map((row, i) => (
              <motion.article
                key={`${row.service}-${i}`}
                variants={item}
                className="relative overflow-hidden rounded-2xl border bg-white/60 dark:bg-zinc-900/40 backdrop-blur p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow"
                aria-label={`${row.service} card`}
              >
                {/* Row top */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex items-center justify-center rounded-xl border p-2"
                      aria-hidden
                    >
                      {row.icon}
                    </span>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold flex items-center gap-2">
                        {row.service}
                        {row.popular && (
                          <span className="text-amber-500 text-xs font-medium px-2 py-0.5 rounded-full border border-amber-300/60 bg-amber-50 dark:bg-amber-500/10">
                            Popular
                          </span>
                        )}
                      </h3>

                      <AnimatePresence initial={false} mode="wait">
                        {showDetails && row.description && (
                          <motion.p
                            key="desc"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="text-sm text-muted-foreground mt-1"
                          >
                            {row.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-xl md:text-2xl font-bold tabular-nums">{row.price}</div>
                    {showDetails && row.duration && (
                      <div className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
                        <Clock className="w-3.5 h-3.5" aria-hidden />
                        {row.duration}
                      </div>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <div className="mt-3 border-t border-dashed" />

                {/* Microcopy */}
                {showDetails && (
                  <p className="mt-3 text-xs text-muted-foreground/80">
                    Prices may vary by hair length & stylist experience.
                  </p>
                )}
              </motion.article>
            ))}
          </div>
        ))}
      </motion.div>

      {/* Footnote */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-10 text-center text-sm text-muted-foreground/80"
      >
        Need something custom? Get in touch and we’ll tailor a package for you.
      </motion.p>
    </section>
  );
};

export default Pricing;
