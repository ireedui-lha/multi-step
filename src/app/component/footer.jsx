import { ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-[#121316] text-white h-[44px] w-[416px] rounded-[6px] mt-[90px] flex items-center justify-center ">
      <button className="ps-2.5 px-3 text-base font-bold">Contine 1/3</button>
      <ChevronRight className="w-[24px] h-[24px]" />
    </div>
  );
}
