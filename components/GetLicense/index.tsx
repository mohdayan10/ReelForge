import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const GetLicense = ({ className }: { className: string }) => {
  return (
    <Link href="mailto:Affan@reelforge.com">
      <Button
        size="sm"
        className={cn(className, "cursor-pointer font-instrument-serif w-full text-xl")}
        style={{ backgroundColor: '#f195ac' }}
      >
        {"Contact"}
      </Button>
    </Link>
  );
};

export default GetLicense;
