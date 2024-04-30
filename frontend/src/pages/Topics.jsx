import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { ShowExtra } from "../components/ShowExtra";
import { LabelledInput } from "../components/LabelledInput";
import { CustomButton1 } from "../components/CustomButton1";

export const Topics = () => {
  const [allTopics, setAllTopics] = useState([]);
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  async function fetchTopics() {
    try {
      const response = await axios.get(`${BACKEND_URL}/extra/alltopics`);
      setAllTopics(response.data.topics);
    } catch (error) {
      console.error("Error fetching topics:", error);
    }
  }

  useEffect(() => {
    fetchTopics();
  }, []);

  async function createTopics() {
    try {
      await axios.post(`${BACKEND_URL}/extra/addtopics`, { topics: input });
      setInput("");
      fetchTopics();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container mx-auto mt-10 px-4 lg:w-3/4 xl:w-2/3">
      <div className="mb-4">
        <label className="block mb-2 text-sm text-black font-semibold pt-4">
          Enter the topics saperated by comma:
        </label>
        <input
          onChange={changeHandler}
          type="text"
          placeholder="topic1,topic2...."
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <div className="flex justify-center">
          <div className="w-1/4">
            <CustomButton1
              label={"Submit"}
              colour={"blue"}
              clickHandler={createTopics}
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="font-bold">Topics:</div>
        <div className="flex flex-wrap">
          {allTopics.map((topic) => (
            <ShowExtra key={topic._id} label={topic.topic} />
          ))}
        </div>
      </div>
    </div>
  );
};
