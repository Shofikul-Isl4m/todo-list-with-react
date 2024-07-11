"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandeler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };
  let rendertask = "NO TASK AVAILAVAIL";
  const deletehandeler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setmainTask(copytask);
  };
  if (mainTask.length > 0) {
    rendertask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex justify-between items-center m-6 mb-5">
          <div className="flex justify-between items-center w-2/3">
            <h5 className="text-xl font-semibold ">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deletehandeler(i);
            }}
            className="bg-red-400 text-white px-4 py-3 text-2xl font-bold rounded"
          >
            DELETE
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <div className="bg-white">
        <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
          Riaz's Todo List
        </h1>
        <form onSubmit={submitHandeler}>
          <input
            type="text"
            className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2 "
            placeholder="enter the task here"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
          <input
            type="text"
            className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2 "
            placeholder="enter the desc here"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
          />
          <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded">
            ADD TASK
          </button>
        </form>
        <hr />
        <div className="bg-slate-200 p-8">
          <ul>{rendertask}</ul>
        </div>
      </div>
    </>
  );
};

export default page;
