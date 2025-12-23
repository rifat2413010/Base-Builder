import { motion } from "framer-motion";
import processImage from "@assets/generated_images/traditional_molasses_making_process.png";

export default function Process() {
  return (
    <section className="py-20 bg-secondary/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] transform -rotate-3 z-0" />
            <img 
              src={processImage} 
              alt="Making Process" 
              className="relative w-full rounded-[2rem] shadow-2xl z-10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary">যেভাবে তৈরি হয় আমাদের গুড়</h2>
            <div className="w-20 h-1 bg-secondary rounded-full" />
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              শীতের কুয়াশাভেজা ভোরে খেজুরের রস সংগ্রহ করে, অভিজ্ঞ কারিগরদের হাতে পরম যত্নে তৈরি হয় আমাদের খাঁটি খেজুরের গুড়। মাটির চুলায় কাঠের আগুনে ঘণ্টার পর ঘণ্টা জ্বাল দিয়ে যখন রস ঘন হয়ে সোনালী বর্ণ ধারণ করে, তখনই পাওয়া যায় সেই আসল ঘ্রাণ ও স্বাদ।
            </p>

            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">১</span>
                <div>
                  <h4 className="font-bold text-primary text-lg">রস সংগ্রহ</h4>
                  <p className="text-muted-foreground text-sm">গাছিরা ভোরবেলা গাছ থেকে তাজা রস সংগ্রহ করে।</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">২</span>
                <div>
                  <h4 className="font-bold text-primary text-lg">ধীর আগুনে জ্বাল</h4>
                  <p className="text-muted-foreground text-sm">বড় কড়াইয়ে মৃদু আঁচে রস জ্বাল দেওয়া হয়।</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">৩</span>
                <div>
                  <h4 className="font-bold text-primary text-lg">প্রাকৃতিক ঘনীভবন</h4>
                  <p className="text-muted-foreground text-sm">কোনো কৃত্রিম উপাদান ছাড়াই প্রাকৃতিকভাবে গুড় তৈরি হয়।</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
