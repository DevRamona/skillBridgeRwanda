import { useState } from "react";
import FormInput from "./FormInput";
import Navbar from "./Navbar";
import Spinner from "./Spinner";
import useSkillBridgeData from "./hooks/useSkillBridgeData"; // Import the new hook
import { toast } from "react-toastify";

const SkillBridgeHome = () => {
  const { courses, jobMatching, careerGuidance, progressTracking, loading, error } = useSkillBridgeData();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");


  const nameInputChangeHandler = (e) => {
    setName(e.target.value);
  };

  const descriptionInputChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle the submission logic for creating a new course or job matching
    // This is a placeholder for your submission logic
    toast.success("Submission Successful", { autoClose: 5000 });
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 h-screen justify-center items-center gap-8 p-4">
        <div className="mt-24 text-black p-4 max-w-5xl shadow-md flex h-[75%] bg-grey rounded justify-center items-center">
          <h1 className="font-extrabold text-2xl">Courses</h1>
          {loading ? (
            <Spinner />
          ) : error ? (
            <h1 className="text-center">{error}</h1>
          ) : (
            <div className="flex flex-col gap-4">
              {courses.length > 0 ? (
                courses.map((course) => (
                  <div key={course.id} className="bg-blue-300 rounded p-4">
                    <h2>
                      <span className="font-bold">Name:</span> {course.name}
                    </h2>
                    <p>
                      <span className="font-bold">Description:</span> {course.description}
                    </p>
                  </div>
                ))
              ) : (
                <h1 className="text-center">No courses available</h1>
              )}
            </div>
          )}
        </div>

        <div className="mt-8 md:mt-24 text-black p-4 max-w-5xl shadow-md h-auto md:h-[75%] bg-grey rounded flex flex-col justify-center items-center">
          <h1 className="font-extrabold text-2xl">Job Matching</h1>
          {loading ? (
            <Spinner />
          ) : error ? (
            <h1 className="text-center">{error}</h1>
          ) : (
            <div className="flex flex-col gap-4">
              {jobMatching.length > 0 ? (
                jobMatching.map((job) => (
                  <div key={job.id} className="bg-blue-300 rounded p-4">
                    <h2>
                      <span className="font-bold">Job Title:</span> {job.title}
                    </h2>
                    <p>
                      <span className="font-bold">Description:</span> {job.description}
                    </p>
                  </div>
                ))
              ) : (
                <h1 className="text-center">No job matches available</h1>
              )}
            </div>
          )}
        </div>

        <div className="mt-8 md:mt-24 text-black p-4 max-w-5xl shadow-md h-auto md:h-[75%] bg-grey rounded flex flex-col justify-center items-center">
          <h1 className="font-extrabold text-2xl">Career Guidance</h1>
          {loading ? (
            <Spinner />
          ) : error ? (
            <h1 className="text-center">{error}</h1>
          ) : (
            <div className="flex flex-col gap-4">
              {careerGuidance.length > 0 ? (
                careerGuidance.map((guidance) => (
                  <div key={guidance.id} className="bg-blue-300 rounded p-4">
                    <h2>
                      <span className="font-bold">Guidance:</span> {guidance.title}
                    </h2>
                    <p>
                      <span className="font-bold">Details:</span> {guidance.details}
                    </p>
                  </div>
                ))
              ) : (
                <h1 className="text-center">No career guidance available</h1>
              )}
            </div>
          )}
        </div>

        <div className="mt-8 md:mt-24 text-black p-4 max-w-5xl shadow-md h-auto md:h-[75%] bg-grey rounded flex flex-col justify-center items-center">
          <h1 className="font-extrabold text-2xl">Progress Tracking</h1>
          {loading ? (
            <Spinner />
          ) : error ? (
            <h1 className="text-center">{error}</h1>
          ) : (
            <div className="flex flex-col gap-4">
              {progressTracking.length > 0 ? (
                progressTracking.map((progress) => (
                  <div key={progress.id} className="bg-blue-300 rounded p-4">
                    <h2>
                      <span className="font-bold">Progress:</span> {progress.title}
                    </h2>
                    <p>
                      <span className="font-bold">Status:</span> {progress.status}
                    </p>
                  </div>
                ))
              ) : (
                <h1 className="text-center">No progress tracking available</h1>
              )}
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <h1 className="p-4 text-2xl font-bold text-center">Create a New Entry</h1>
            <label htmlFor="name">Enter Name</label>
            <FormInput
              type="text"
              placeholder="Enter the name here..."
              value={name}
              onChange={nameInputChangeHandler}
              required
            />
            <label htmlFor="description">Description</label>
            <textarea
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              rows="4"
              placeholder="Enter your description"
              value={description}
              onChange={descriptionInputChangeHandler}
              required
            />
            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded text-[#F7E987]"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SkillBridgeHome;