import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Loader2, ShoppingCart } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "আপনার নাম লিখুন"),
  mobile: z.string().min(11, "সঠিক মোবাইল নাম্বার দিন (১১ ডিজিট)"),
  address: z.string().min(5, "পূর্ণ ঠিকানা লিখুন"),
  delivery: z.enum(["inside", "outside"], {
    required_error: "ডেলিভারি অপশন সিলেক্ট করুন",
  }),
});

export default function OrderForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      delivery: "inside",
    },
  });

  const deliveryCharge = form.watch("delivery") === "inside" ? 50 : 100;
  const productPrice = 350;
  const total = productPrice + deliveryCharge;

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "অর্ডার কনফার্ম হয়েছে!",
        description: "শিগগিরই আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে।",
        duration: 5000,
      });
      form.reset();
    }, 2000);
  }

  return (
    <section id="order" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-primary/10">
          <div className="grid md:grid-cols-2">
            
            {/* Form Side */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-primary mb-6">অর্ডার করতে ফর্মটি পূরণ করুন</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>আপনার নাম</FormLabel>
                        <FormControl>
                          <Input placeholder="এখানে নাম লিখুন" {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>মোবাইল নাম্বার</FormLabel>
                        <FormControl>
                          <Input placeholder="017xxxxxxxx" {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>পূর্ণ ঠিকানা</FormLabel>
                        <FormControl>
                          <Textarea placeholder="বাসা নং, রোড নং, এলাকা..." {...field} className="bg-background resize-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="delivery"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>ডেলিভারি এরিয়া</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0 rounded-xl border p-4 cursor-pointer data-[state=checked]:border-primary data-[state=checked]:bg-primary/5">
                              <FormControl>
                                <RadioGroupItem value="inside" />
                              </FormControl>
                              <FormLabel className="font-normal flex-1 cursor-pointer">
                                ঢাকার ভিতরে ডেলিভারি
                              </FormLabel>
                              <span className="font-bold text-primary">৳৫০</span>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0 rounded-xl border p-4 cursor-pointer data-[state=checked]:border-primary data-[state=checked]:bg-primary/5">
                              <FormControl>
                                <RadioGroupItem value="outside" />
                              </FormControl>
                              <FormLabel className="font-normal flex-1 cursor-pointer">
                                ঢাকার বাইরে ডেলিভারি
                              </FormLabel>
                              <span className="font-bold text-primary">৳১০০</span>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-14 text-lg font-bold bg-green-600 hover:bg-green-700 shadow-lg shadow-green-600/20 rounded-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" /> অর্ডার কনফার্ম হচ্ছে...
                      </>
                    ) : (
                      "কনফার্ম অর্ডার করুন"
                    )}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Summary Side */}
            <div className="bg-primary p-8 md:p-12 text-primary-foreground flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
               <div className="absolute bottom-0 left-0 p-32 bg-secondary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
               
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                   <ShoppingCart className="w-6 h-6" /> অর্ডার সামারি
                 </h3>
                 
                 <div className="space-y-4">
                   <div className="flex justify-between items-center py-4 border-b border-white/10">
                     <span>খাঁটি খেজুরের গুড় (১ কেজি)</span>
                     <span className="font-bold text-xl">৳{productPrice}</span>
                   </div>
                   <div className="flex justify-between items-center py-4 border-b border-white/10">
                     <span>ডেলিভারি চার্জ</span>
                     <span className="font-bold text-xl">৳{deliveryCharge}</span>
                   </div>
                   <div className="flex justify-between items-center py-6 text-2xl font-bold">
                     <span>সর্বমোট</span>
                     <span className="text-secondary">৳{total}</span>
                   </div>
                 </div>
               </div>

               <div className="relative z-10 mt-8 bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                 <h4 className="font-bold mb-2 text-secondary">নির্দেশনা:</h4>
                 <ul className="text-sm space-y-2 text-white/80 list-disc pl-4">
                   <li>অর্ডার কনফার্ম করার পর আমাদের প্রতিনিধি কল করবেন।</li>
                   <li>পণ্য হাতে পেয়ে পেমেন্ট করার সুবিধা আছে।</li>
                   <li>কোনো সমস্যা হলে সাথে সাথে রিটার্ন করতে পারবেন।</li>
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
