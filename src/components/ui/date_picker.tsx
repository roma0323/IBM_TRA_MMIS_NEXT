"use client";

import { format, parse } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get the date from the URL if it exists
  const dateFromURL = searchParams?.get("date");
  const initialDate = dateFromURL
    ? parse(dateFromURL, "yyyy-MM-dd", new Date())
    : undefined;

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    initialDate
  );

  useEffect(() => {
    // Update the state if the date in the URL changes
    if (dateFromURL && !selectedDate) {
      setSelectedDate(parse(dateFromURL, "yyyy-MM-dd", new Date()));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateFromURL]); // Only re-run the effect when `dateFromURL` changes

  const handleDateChange = (date?: Date) => {
    if (date) {
      setSelectedDate(date);
      const formattedDate = format(date, "yyyy-MM-dd");

      const currentParams = new URLSearchParams(searchParams?.toString() || "");
      currentParams.set("date", formattedDate);

      // router.replace(`${window.location.pathname}?${currentParams.toString()}`);
      // router.refresh();

      const newUrl = `${window.location.origin}${
        window.location.pathname
      }?${currentParams.toString()}`;

      window.location.href = newUrl;
    }
  };

  return (
    <div className="space-y-8">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[240px] pl-3 text-left font-normal",
              !selectedDate && "text-muted-foreground"
            )}
          >
            {selectedDate ? format(selectedDate, "PPP") : <span></span>}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateChange}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
