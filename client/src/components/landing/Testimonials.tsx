import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "অনেকদিন পর আসল খেজুরের গুড় পেলাম। স্বাদ এক কথায় অসাধারণ। বাজারের ভেজাল গুড়ের ভিড়ে এমন খাঁটি জিনিস পাওয়া সত্যিই ভাগ্যের।",
    name: "রহিম উদ্দিন",
    location: "ঢাকা",
    rating: 5,
  },
  {
    text: "ভেজাল নেই, গন্ধেই বোঝা যায় খাঁটি। প্যাকেজিংও খুব সুন্দর ছিল। ডেলিভারি ম্যান খুব ভদ্র। ধন্যবাদ!",
    name: "সালমা বেগম",
    location: "চট্টগ্রাম",
    rating: 5,
  },
  {
    text: "পরিবারের সবাই খুব পছন্দ করেছে। বিশেষ করে পিঠা খাওয়ার জন্য এই গুড়ের কোনো তুলনা হয় না। আবারও অর্ডার করবো।",
    name: "আরিফ হোসেন",
    location: "রাজশাহী",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-primary">ক্রেতাদের মতামত</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-primary/5 relative"
            >
              <div className="absolute -top-4 left-8 bg-secondary text-primary-foreground p-2 rounded-lg">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-6 pt-4 italic">"{review.text}"</p>
              <div>
                <h4 className="font-bold text-primary">{review.name}</h4>
                <span className="text-sm text-muted-foreground">{review.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
