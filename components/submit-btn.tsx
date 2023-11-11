import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex justify-center gap-2 items-center h-[3rem] w-[8rem] bg-gray-800 transition-all rounded-full outline-none text-white focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-60"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 text-xs opacity-70 transition-all" />
        </>
      )}
    </button>
  );
}
