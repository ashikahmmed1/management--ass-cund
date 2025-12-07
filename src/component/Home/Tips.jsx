import React from "react";



function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 flex-none"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function Tips({ title, body }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-md backdrop-blur-md transition-transform hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"> <div className="flex items-start gap-4"> <span className="mt-1 inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-orange-400 to-red-500 p-3 text-white shadow-md"> <CheckIcon className="w-5 h-5" /> </span> <div> <h3 className="font-bold text-lg text-slate-900 dark:text-white">{title}</h3> <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300"> {body} </p> </div> </div>

{/* Accent animated underline */}
<span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0.5" />

{/* Subtle hover glow */}

<div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-100 via-orange-50 to-white opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" /> </div>
  );
}

export default Tips;