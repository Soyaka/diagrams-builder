import React from "react";

export default function Hero() {
  return (
    <section className=" bg-gradient-to-t from-sky-950 to-black">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl text-sky-500 font-extrabold sm:text-5xl">
            Documents & diagrams
            <strong className="font-extrabold text-red-700 sm:block">
              {" "}
              for engineering teams.{" "}
            </strong>
          </h1>

          <p className="mt-4  text-slate-200 sm:text-xl/relaxed">
            All-in-one markdown editor, collaborative canvas, and
            diagram-as-code builder
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:bg-red-700  transition-all duration-800  focus:outline-none focus:ring active:bg-rose-600 sm:w-auto"
              href="#"
            >
              Try Eraser
            </a>

    
          </div>
        </div>
      </div>
    </section>
  );
}
