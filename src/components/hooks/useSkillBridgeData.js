import { useState, useEffect } from 'react';

export const useSkillBridgeData = () => {
  const [courses, setCourses] = useState([]);
  const [jobMatching, setJobMatching] = useState([]);
  const [careerGuidance, setCareerGuidance] = useState([]);
  const [progressTracking, setProgressTracking] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const coursesResponse = await fetch('/api/courses'); // Replace with your API endpoint
        const jobMatchingResponse = await fetch('/api/job-matching'); // Replace with your API endpoint
        const careerGuidanceResponse = await fetch('/api/career-guidance'); // Replace with your API endpoint
        const progressTrackingResponse = await fetch('/api/progress-tracking'); // Replace with your API endpoint

        if (!coursesResponse.ok || !jobMatchingResponse.ok || !careerGuidanceResponse.ok || !progressTrackingResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const coursesData = await coursesResponse.json();
        const jobMatchingData = await jobMatchingResponse.json();
        const careerGuidanceData = await careerGuidanceResponse.json();
        const progressTrackingData = await progressTrackingResponse.json();

        setCourses(coursesData);
        setJobMatching(jobMatchingData);
        setCareerGuidance(careerGuidanceData);
        setProgressTracking(progressTrackingData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { courses, jobMatching, careerGuidance, progressTracking, loading, error };
};

export default useSkillBridgeData;