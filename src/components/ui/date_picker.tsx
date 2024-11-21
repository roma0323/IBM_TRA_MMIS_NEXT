"use client";
import { format, parse } from "date-fns";
import { CalendarIcon } from "lucide-react";
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
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [initialDate, setInitialDate] = useState<Date | undefined>();

  useEffect(() => {
    // Ensure this runs only in the browser
    const searchParams = new URLSearchParams(window.location.search);
    const dateFromURL = searchParams.get("date");
    const parsedDate = dateFromURL
      ? parse(dateFromURL, "yyyy-MM-dd", new Date())
      : new Date();

    setSelectedDate(parsedDate);
    setInitialDate(parsedDate);
  }, []); // Runs once after the component mounts

  const handleDateChange = (date?: Date) => {
    if (date) {
      setSelectedDate(date);
      const formattedDate = format(date, "yyyy-MM-dd");

      const currentParams = new URLSearchParams(window.location.search);
      currentParams.set("date", formattedDate);

      const newUrl = `${window.location.origin}${window.location.pathname}?${currentParams.toString()}`;

      // Update the URL and reload the page
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
            {selectedDate ? format(selectedDate, "PPP") : <span>Select Date</span>}

            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            captionLayout="dropdown-buttons"
            selected={selectedDate}
            onSelect={handleDateChange}
            fromYear={1950}
            toYear={2200}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}