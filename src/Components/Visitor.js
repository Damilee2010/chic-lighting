import React, { useState, useEffect } from "react";

const Visitor = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const now = Date.now();
    const lastVisit = localStorage.getItem('lastVisitTime');
    const timeThreshold = 30 * 60 * 1000; // 30 minutes
    
    // Only count as new visit if last visit was more than 30 minutes ago
    if (!lastVisit || (now - parseInt(lastVisit)) > timeThreshold) {
      const storedCount = localStorage.getItem("visitorCount");
      const currentCount = storedCount ? parseInt(storedCount) : 0;
      const newCount = currentCount + 1;

      setVisitorCount(newCount);
      localStorage.setItem("visitorCount", newCount.toString());
      localStorage.setItem('lastVisitTime', now.toString());
    } else {
      const storedCount = localStorage.getItem("visitorCount");
      setVisitorCount(storedCount ? parseInt(storedCount) : 0);
    }
  }, []);

  return (
    <div className="visitor-count">
      <i className="fa-solid fa-users" aria-hidden="true"></i>
      <span>Visitors: {visitorCount}</span>
    </div>
  );
};

export default Visitor;