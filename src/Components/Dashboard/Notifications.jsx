import React from "react";
import { useSelector } from "react-redux";

const getTimeDifference = (time) => {
  const currentTime = new Date();
  const postedTime = new Date(time);
  const timeDiffInMilliseconds = currentTime - postedTime;
  const seconds = Math.floor(timeDiffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours > 0) {
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else {
    return `${seconds} second${seconds === 1 ? "" : "s"} ago`;
  }
};

const Notifications = () => {
  const data = useSelector((state) => state.projects.projects);
  const len = data.length;
  const Project = len > 0 ? data[len - 1] : null;

  if (!Project || !Project.project) {
    return <div>No Notification available</div>;
  }
  const TimeDifference = getTimeDifference(Project.project.createTime);

  return (
    <div>
      <div>{Project.project.title}</div>
      <div>
        {Project.project.email} posted {TimeDifference}
      </div>
    </div>
  );
};

export default Notifications;
