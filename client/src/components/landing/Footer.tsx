import { Phone, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-secondary">খাঁটি গুড়</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              আমরা গ্রামবাংলার ঐতিহ্যবাহী পদ্ধতিতে তৈরি শতভাগ খাঁটি খেজুরের গুড় আপনাদের কাছে পৌঁছে দিতে প্রতিজ্ঞাবদ্ধ।
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-bold">যোগাযোগ</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-5 h-5 text-secondary" />
                <span>+880 1700-000000</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>ঢাকা, বাংলাদেশ</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold">সোশ্যাল মিডিয়া</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>© ২০২৫ খাঁটি খেজুরের গুড়। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
}
