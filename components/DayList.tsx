import React from "react";
import DayListItem from "./DayListItem";
type Props = {};
type Task = {
	title: String;
	tags: String[];
	// time range
	start: Date;
	end: Date;
	// location
	location: String | null;
	// description
	description: String | null;
	// is this a recurring event?
	recurring: Boolean;
	// is this a one-time event?
	oneTime: Boolean;
	// is this a deadline?
	deadline: Boolean;
};
const DayList = (props: Props) => {
	const taskList: Task[] = [
		{
			title: "Task 1",
			tags: ["tag1", "tag2"],
			start: new Date(),
			// till next hour
			end: new Date(new Date().setHours(new Date().getHours() + 1)),
			location: "location1",
			description: "description1",
			recurring: false,
			oneTime: true,
			deadline: false,
		},
		{
			title: "Task 2",
			tags: ["tag1", "tag2"],
			start: new Date(),
			// till next hour
			end: new Date(new Date().setHours(new Date().getHours() + 1)),
			location: "location1",
			description: "description1",
			recurring: false,
			oneTime: true,
			deadline: false,
		},
		{
			title: "Task 3",
			tags: ["tag1", "tag2"],
			start: new Date(),
			// till next hour
			end: new Date(new Date().setHours(new Date().getHours() + 1)),
			location: "location1",
			description: "description1",
			recurring: false,
			oneTime: true,
			deadline: false,
		},
		{
			title: "Task 4",
			tags: ["tag1", "tag2"],
			start: new Date(),
			// till next hour
			end: new Date(new Date().setHours(new Date().getHours() + 1)),
			location: "location1",
			description: "description1",
			recurring: false,
			oneTime: true,
			deadline: false,
		},
	];
	return (  
		<div className="grid grid-cols-1 gap-4">
			{taskList.map((task, index) => (
				<DayListItem
					key={index}
					{...task}
				/>
			))}
		</div>
	);
};

export default DayList;
