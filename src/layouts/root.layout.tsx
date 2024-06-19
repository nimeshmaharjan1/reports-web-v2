import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { NAV_FILTER } from "@/lib/constants/root.constants";
import { cn } from "@/lib/utils";
import type { LabelProps } from "@radix-ui/react-label";
import { Printer } from "lucide-react";
import React, { type FC, type ReactNode } from "react";
import { Link, Outlet, useNavigate, useSearchParams } from "react-router-dom";

const RootLayout = () => {
  return (
    <main className="h-screen w-full overflow-hidden">
      <header className="border-b">
        <nav className="container py-3 flex justify-between gap-3 items-center">
          <LogoSection></LogoSection>
          <section className="hidden lg:block">
            <FilterNav></FilterNav>
          </section>
          <CreateButton></CreateButton>
        </nav>
      </header>
      <section className="flex container lg:hidden mt-2">
        <FilterNav></FilterNav>
      </section>
      <main>
        <Outlet></Outlet>
      </main>
    </main>
  );
};

export default RootLayout;

const CreateButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/create`);
  };
  return (
    <>
      <div className="block md:hidden">
        <Button onClick={handleClick} size={"icon"}>
          <Printer></Printer>
        </Button>
      </div>
      <div className="hidden md:block">
        <Button onClick={handleClick} className="gap-2">
          <Printer></Printer>
          Create Report
        </Button>
      </div>
    </>
  );
};

const FilterNav = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  return (
    <nav className="flex items-center gap-6">
      <FilterLabel
        onClick={() => {
          console.log("hello");
          setSearchParams({
            filter: NAV_FILTER.PREVIOUS,
          });
        }}
        title="Previously Generated Reports"
        isActive={filter === NAV_FILTER.PREVIOUS}
      ></FilterLabel>
      <FilterLabel
        onClick={() => {
          setSearchParams({
            filter: NAV_FILTER.SCHEDULED,
          });
        }}
        title="Scheduled Reports"
        isActive={filter === NAV_FILTER.SCHEDULED}
      ></FilterLabel>
    </nav>
  );
};
const FilterLabel: FC<{ title: string; isActive: boolean } & LabelProps> = ({
  title,
  isActive,
  ...props
}) => {
  return (
    <Label
      {...props}
      className={cn(
        "text-primary py-3 cursor-pointer text-center leading-relaxed",
        isActive && "border-b-2 border-b-primary font-bold",
        props.className
      )}
    >
      {title}
    </Label>
  );
};

const LogoSection = () => {
  return (
    <section className="logo-section">
      <Link to="/">
        <div className="flex items-center flex-wrap gap-3">
          <img
            src="dentira-logo.svg"
            width={140}
            alt="image"
            className="cursor-pointer"
          />
          <Separator className="h-8 mr-1" orientation="vertical"></Separator>
          <span className="text-xl mt-0.5">Reports</span>
        </div>
      </Link>
    </section>
  );
};
