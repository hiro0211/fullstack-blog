"use client";

import { title } from "process";
import React, { useRef } from "react";

const PostBlog = () => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(titleRef.current?.value);
    console.log(descriptionRef.current?.value);
  }

  return (
    <div>
      <div className="w-full m-auto flex my-4">
        <div className="flex flex-col justify-center items-center m-auto">
          <p className="text-2xl text-slate-200 font-bold p-3">
            ブログ新規作成 🚀
          </p>
          <form onSubmit={handleSubmit}>
            <input
              ref={titleRef}
              placeholder="タイトルを入力"
              type="text"
              className="rounded-md px-4 w-full py-2 my-2"
            />
            <textarea
              placeholder="記事詳細を入力"
              className="rounded-md px-4 py-2 w-full my-2"
              ref={descriptionRef}
            ></textarea>
            <button className="font-semibold px-4 py-2 shadow-xl bg-slate-200 rounded-lg m-auto hover:bg-slate-100">
              投稿
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostBlog;
