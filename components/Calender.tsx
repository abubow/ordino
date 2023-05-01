"use client";
import { useEffect, useState } from "react";
import { Calendar } from "./ui/calendar";

type Props = {};

const Calender = (props: Props) => {
	const [date, setDate] = useState<Date | undefined>(new Date());
    useEffect(() => {
        console.log(date)
    }, [date])
	return (
		<Calendar
			mode="single"
			selected={date}
			onSelect={setDate}
			className="rounded-md border"
		/>
	);
};

export default Calender;
