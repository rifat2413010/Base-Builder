import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ShieldCheck, Leaf } from "lucide-react";
import heroImage from "@assets/unnamed_(8)_1766573220793.jpg";

export default function Hero() {
  const scrollToOrder = () => {
    document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 lg:pt-0 lg:pb-0">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10 -z-10" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium border border-secondary/20">
            <Leaf className="w-4 h-4" />
            <span>১০০% প্রাকৃতিক ও খাঁটি</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary">
            খাঁটি খেজুরের গুড় <br />
            <span className="text-secondary-foreground/80">শীতের আসল স্বাদ</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
            গ্রামবাংলার ঐতিহ্যবাহী পদ্ধতিতে তৈরি, শতভাগ খাঁটি ও প্রাকৃতিক। কোনো কৃত্রিম উপাদান বা প্রিজারভেটিভ নেই।
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium text-primary/80">
            <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-lg border border-primary/5">
              <CheckCircle className="w-4 h-4 text-green-600" /> কেমিক্যাল মুক্ত
            </div>
            <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-lg border border-primary/5">
              <ShieldCheck className="w-4 h-4 text-green-600" /> ভেজালহীন
            </div>
            <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-lg border border-primary/5">
              <Leaf className="w-4 h-4 text-green-600" /> ঐতিহ্যবাহী প্রক্রিয়ায়
            </div>
          </div>

          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToOrder}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center gap-3 mx-auto lg:mx-0 cursor-pointer"
            >
              👉 এখনই অর্ডার করুন <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-secondary/20 rounded-[2rem] blur-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-700" />
          <img
            src={heroImage}
            alt="Pure Khejur Gur"
            className="relative w-full max-w-md mx-auto rounded-[2rem] shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-[1.02]"
          />
          
          {/* Floating Price Tag */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white p-4 rounded-2xl shadow-xl border border-secondary/20 flex flex-col items-center gap-1 animate-bounce-slow"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">মাত্র</span>
            <span className="text-3xl font-bold text-primary">৳৩৫০</span>
            <span className="text-xs text-muted-foreground">প্রতি কেজি</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
