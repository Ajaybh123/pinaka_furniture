import { Clock3, Percent, ShieldCheck, Truck } from "lucide-react";

const Delivery = () => {
    return (
       <div className="mx-4 sm:mx-auto max-w-[1440px] bg-white shadow-md p-4 sm:p-6 md:p-7 rounded-2xl">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="flex items-start gap-4">
      <Percent size={36} className="text-[#272343] shrink-0" />
      <div>
        <h4 className="text-base sm:text-lg text-[#272343] font-inter font-medium mb-1.5 capitalize">Discount</h4>
        <p className="text-sm sm:text-base text-[#9a9caa] font-inter">every week new sales</p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <Truck size={36} className="text-[#272343] shrink-0" />
      <div>
        <h4 className="text-base sm:text-lg text-[#272343] font-inter font-medium mb-1.5 capitalize">Free Delivery</h4>
        <p className="text-sm sm:text-base text-[#9a9caa] font-inter">100% Free for all orders</p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <Clock3 size={36} className="text-[#272343] shrink-0" />
      <div>
        <h4 className="text-base sm:text-lg text-[#272343] font-inter font-medium mb-1.5 capitalize">Great Support 24/7</h4>
        <p className="text-sm sm:text-base text-[#9a9caa] font-inter">We care your experiences</p>
      </div>
    </div>

    {/* Item 4 */}
    <div className="flex items-start gap-4">
      <ShieldCheck size={36} className="text-[#272343] shrink-0" />
      <div>
        <h4 className="text-base sm:text-lg text-[#272343] font-inter font-medium mb-1.5 capitalize">Secure Payment</h4>
        <p className="text-sm sm:text-base text-[#9a9caa] font-inter">100% Secure Payment Method</p>
      </div>
    </div>
  </div>
</div>

    );
};

export default Delivery;