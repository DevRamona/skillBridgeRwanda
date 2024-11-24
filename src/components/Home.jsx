import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import { useSkillBridgeData } from "./hooks/useSkillBridgeData";

const Home = () => {
  const { courses, jobMatching, careerGuidance, progressTracking } = useSkillBridgeData();

  const renderCourses = () => {
    return courses.map((course) => (
      <div key={course.id} className="col-span-1 p-0 sm:p-4 md:p-2">
        <Card data={course} />
      </div>
    ));
  };

  const renderJobMatching = () => {
    return jobMatching.map((job) => (
      <div key={job.id} className="col-span-1 p-0 sm:p-4 md:p-2">
        <Card data={job} />
      </div>
    ));
  };

  const renderCareerGuidance = () => {
    return careerGuidance.map((guidance) => (
      <div key={guidance.id} className="col-span-1 p-0 sm:p-4 md:p-2">
        <Card data={guidance} />
      </div>
    ));
  };

  const renderProgressTracking = () => {
    return progressTracking.map((progress) => (
      <div key={progress.id} className="col-span-1 p-0 sm:p-4 md:p-2">
        <Card data={progress} />
      </div>
    ));
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className="xl:px-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-center">
          {renderCourses()}
          {renderJobMatching()}
          {renderCareerGuidance()}
          {renderProgressTracking()}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;