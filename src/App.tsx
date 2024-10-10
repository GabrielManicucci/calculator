import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { X } from "lucide-react";
import { Divide } from "lucide-react";
import { Equal } from "lucide-react";
import { Diff } from "lucide-react";

import "./App.css";

function App() {
  return (
    <div className="h-screen w-screen bg-neutral-500">
      <div className="bg-zinc-950 rounded-lg mx-auto my-0 top-32 relative max-w-[31rem]">
        <input
          className="text-3xl h-28 border-b border-zinc-500 w-full px-12 my-0 bg-transparent text-white"
          type="text"
          name=""
          id=""
        />
        <div className="flex p-5 justify-around">
          <div className="text-blue-200 grid grid-cols-3 gap-4 grid-rows-4">
            <div className="w-24 h-24 cursor-pointer flex items-center justify-center rounded-2xl font-medium hover:bg-amber-100 hover:border border-zinc-600 text-5xl relative">
              <p className="-mt-0.5 text-orange-400 absolute top-1/2 -translate-y-1/2">
                C
              </p>
            </div>
            <div className="w-24 h-24 cursor-pointer font-medium flex items-center justify-center rounded-2xl hover:border border-zinc-600 text-5xl hover:bg-amber-100">
              <p className="-mt-3 text-orange-400">( )</p>
            </div>
            <div className="w-24 h-24 cursor-pointer font-medium flex items-center justify-center rounded-2xl hover:border border-zinc-600 text-5xl hover:bg-amber-100">
              <p className="-mt-3 text-orange-400">%</p>
            </div>
            <div className="w-24 h-24 cursor-pointer font-medium flex items-center justify-center rounded-2xl hover:bg-slate-700 hover:border border-slate-500 text-5xl">
              <p className="-mt-1">7</p>
            </div>
            <div className="w-24 h-24 cursor-pointer font-medium flex items-center justify-center rounded-2xl hover:bg-slate-700 hover:border border-slate-500 text-5xl">
              <p className="-mt-1">8</p>
            </div>
            <div className="w-24 h-24 cursor-pointer font-medium flex items-center justify-center rounded-2xl hover:bg-slate-700 hover:border border-slate-500 text-5xl">
              <p className="-mt-1">9</p>
            </div>
            <div className="w-24 h-24 cursor-pointer font-medium flex items-center justify-center rounded-2xl hover:bg-slate-700 hover:border border-slate-500 text-5xl">
              <p className="-mt-1">4</p>
            </div>
            <div className="w-24 h-24 cursor-pointer font-medium flex items-center justify-center rounded-2xl hover:bg-slate-700 hover:border border-slate-500 text-5xl">
              <p className="-mt-1">5</p>
            </div>
            <div className="w-24 h-24 cursor-pointer font-medium flex items-center justify-center rounded-2xl hover:bg-slate-700 hover:border border-slate-500 text-5xl">
              <p className="-mt-1">6</p>
            </div>
            <div className="w-24 h-24 cursor-pointer font-medium flex items-center justify-center rounded-2xl hover:bg-slate-700 hover:border border-slate-500 text-5xl">
              <p className="-mt-1">1</p>
            </div>
            <div className="w-24 h-24 cursor-pointer font-medium flex items-center justify-center rounded-2xl hover:bg-slate-700 hover:border border-slate-500 text-5xl">
              <p className="-mt-1">2</p>
            </div>
            <div className="w-24 h-24 cursor-pointer font-medium flex items-center justify-center rounded-2xl hover:bg-slate-700 hover:border border-slate-500 text-5xl">
              <p className="-mt-1">3</p>
            </div>
            <div className="w-24 h-24 cursor-pointer font-medium flex items-center justify-center rounded-2xl hover:bg-slate-700 hover:border border-slate-500 text-5xl">
              <Diff size={50} />
            </div>
            <div className="w-24 h-24 cursor-pointer font-medium flex items-center justify-center rounded-2xl hover:bg-slate-700 hover:border border-slate-500 text-5xl">
              <p className="-mt-1">0</p>
            </div>
            <div className="w-24 h-24 cursor-pointer font-medium flex items-center justify-center rounded-2xl hover:bg-slate-700 hover:border border-slate-500 text-5xl">
              <p className="-mt-1">.</p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="p-5 flex items-baseline justify-center hover:bg-amber-100 transition-all rounded-2xl">
              <Plus className="text-orange-400" size={48} />
            </div>
            <div className="p-5 flex items-baseline justify-center hover:bg-amber-100 transition-all rounded-2xl">
              <Minus className="text-orange-400" size={52} />
            </div>
            <div className="p-5 flex items-baseline justify-center hover:bg-amber-100 transition-all rounded-2xl">
              <X className="text-orange-400" size={52} />
            </div>
            <div className="p-5 flex items-baseline justify-center hover:bg-amber-100 transition-all rounded-2xl">
              <Divide className="text-orange-400" size={52} />
            </div>
            <div className="p-5 flex items-baseline justify-center hover:bg-amber-100 text-white hover:text-zinc-950 transition-all rounded-2xl">
              <Equal className="" size={52} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
