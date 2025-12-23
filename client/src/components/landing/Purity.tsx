import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import purityBg from "@assets/generated_images/date_palm_trees_winter_morning.png";

export default function Purity() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y, backgroundImage: `url(${purityBg})` }}
        className="absolute inset-0 bg-cover bg-center z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/20"
        >
          <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
             {/* Simple Bee/Flower Icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">প্রকৃতির কাছ থেকে, <br/> সরাসরি আপনার পরিবারের জন্য</h2>
          <p className="text-lg md:text-xl text-white/90">
            শহরের যান্ত্রিকতা ভুলে, প্রকৃতির খাঁটি স্বাদ পৌঁছে দিচ্ছি আপনার খাবার টেবিলে। আমাদের গুড় মানেই বিশুদ্ধতার নিশ্চয়তা।
          </p>
        </motion.div>
      </div>
    </section>
  );
}
