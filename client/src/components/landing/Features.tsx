import { motion } from "framer-motion";
import { TreePine, Flame, Ban, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: TreePine,
    title: "সরাসরি সংগ্রহ",
    desc: "খেজুর গাছ থেকে সরাসরি রস সংগ্রহ করে অভিজ্ঞ গাছিদের মাধ্যমে তৈরি।",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Flame,
    title: "ধীরে জ্বাল দেওয়া",
    desc: "ঐতিহ্যবাহী পদ্ধতিতে মাটির চুলায় দীর্ঘ সময় ধরে জ্বাল দিয়ে সঠিক ঘনত্ব আনা হয়।",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: Ban,
    title: "চিনি মুক্ত",
    desc: "কোনো প্রকার চিনি বা অন্য কিছু মেশানো হয় না, শুধুই খাঁটি খেজুরের রস।",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    icon: ShieldCheck,
    title: "প্রিজারভেটিভ নেই",
    desc: "কোনো কেমিক্যাল বা প্রিজারভেটিভ নেই, ১০০% প্রাকৃতিক ও নিরাপদ।",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-primary">কেন আমাদের খেজুরের গুড়?</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-primary/5 text-center group"
            >
              <div className={`w-16 h-16 mx-auto rounded-full ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
