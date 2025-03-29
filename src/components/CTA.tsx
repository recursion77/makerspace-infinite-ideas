
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-recursion-blue text-white rounded-xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Ready to Simplify Your Reading?
        </h2>
        <p className="text-center mb-8 opacity-90">
          Install recursion now and transform how you interact with text online. Free to start, no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-recursion-blue hover:bg-gray-100 py-6 px-8 text-lg font-semibold">
            Install Free Extension <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 py-6 px-8 text-lg">
            Read Documentation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
