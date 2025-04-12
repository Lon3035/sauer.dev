"use client";
import React, { useEffect, useState } from "react";

const START_DATE = new Date("2003-05-30T00:00:00");

const getUptime = () => {
  const now = new Date();
  const diff = now.getTime() - START_DATE.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60) % 60;
  const hours = Math.floor(seconds / 3600) % 24;
  const days = Math.floor(seconds / (3600 * 24));

  return `${days}d ${hours}h ${minutes}m ${seconds % 60}s`;
};
const Couter = () => {
  const [uptime, setUptime] = useState(getUptime());

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(getUptime());
    }, 1000); // Update every second
    return () => clearInterval(interval);
  }, []);

  return <span>{uptime}</span>;
};

export default Couter;
