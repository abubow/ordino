import React from "react";
//daily schedule item
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

const DayListItem = ({
	title,
	tags,
	start,
	end,
	location,
	description,
	recurring,
	oneTime,
	deadline,
}: Task) => {
	return (
		<div className="grid grid-cols-3 gap-4 border-2 border-secondary p-2 rounded-md">
			<div className="col-span-2">
				<h1 className="text-2xl font-bold">{title}</h1>
				<p className="text-sm">{tags.join(", ")}</p>
			</div>
			<div className="col-span-1">
				<p className="text-sm">
					{start.toLocaleTimeString()} - {end.toLocaleTimeString()}
				</p>
				<p className="text-sm">{location}</p>
			</div>
      <div className="col-span-3">
        <p className="text-sm">{description}</p>
      </div>
		</div>
	);
};

export default DayListItem;
