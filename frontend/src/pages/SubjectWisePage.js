import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ChapterCard from "../components/Cards/ChapterCard";
import DynamicProgressBar from "../components/DynamicProgressBar";
import AddChapter from "../components/forms/AddChapter";
import classroomImage from "../images/Classroom.png";

const SubjectWisePage = () => {
  const { coursecode } = useParams();
  const [details, setDetails] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [reading, setReading] = useState({
    name: coursecode,
    value: 0,
    color: "#b53471",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/subjects/${coursecode}`)
      .then((res) => setDetails(res.data[0]))
      .catch((err) => console.log(err));
  }, []);

  const ArraySum = (Chapters) => {
    let sum = 0;
    for (const chapter of Chapters) {
      sum += chapter.isCompletedByTeacher;
    }

    return sum;
  };

  let percent;

  try {
    let done = ArraySum(details.chapters);
    let totalchapters = details.chapters.length;
  
    percent = Math.round((done / totalchapters) * 100);

    console.log(percent);
  } catch (error) {
    console.log(error);
  }

  console.log(details.chapters);

  useEffect(() => {
    setReading({ ...reading, value: percent });
  }, [details.chapters]);

  const OnshowForm = () => {
    setShowForm(!showForm);
  };



  return (
    <div>
      <div className="p-3 ">
        <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center items-center gap-4">
          <div>
            <h1 className="px-2 text-5xl">{details?.title}</h1>
            <h4 className="px-2 mt-5 text-3xl ">{details.courseTeacher}</h4>
          </div>
          <img
            src={classroomImage}
            className="md:h-full h-2/3"
            alt="classroom"
          ></img>
        </div>

        <div className=" justify-center flex ">
          <h4 className="text-center w-max text-white bg-gray-500 rounded-full py-3 px-6 font-bold">
            Course Content
          </h4>
        </div>
        <p className="text-center m-3 p-3">{details.description}</p>

        <div className="flex"> </div>

        <div></div>

        <div class="mt-4 mb-10">
          <p class="text-gray-600">Course {reading.value}% completed</p>
          <DynamicProgressBar reading={reading} />
        </div>

        <p className='py-3 font-bold'>credit:1.5</p>
      

        <div className=" justify-center flex ">
          <h4 className="text-center w-max text-white bg-gray-500 rounded-full py-3 px-6 font-bold">
            indivisual topics
          </h4>
        </div>
        <div>
          {details?.chapters?.map((topic) => {
            return (
              <ChapterCard
                key={topic.key}
                topic={topic}
                name={topic.name}
                date={topic.date}
              />
            );
          })}
          {showForm && (
            <div className="mx-12 my-6">
              <AddChapter />
            </div>
          )}
        </div>
        <div className=" justify-center flex ">
          <button
            onClick={OnshowForm}
            className="text-center hover:bg-gray-800  w-max text-white primary-bg-color rounded-full py-3 px-6 font-bold"
          >
            {showForm ? "Remove Form" : "Add Chapter"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubjectWisePage;
