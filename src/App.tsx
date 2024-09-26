import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { X } from "lucide-react";
import { Divide } from "lucide-react";
import { Equal } from "lucide-react";

import "./App.css";

function App() {
  return (
    <div className="h-screen w-screen bg-zinc-800">
      <div className="bg-zinc-950 w-[430px] rounded-lg mx-auto my-0 top-44 relative">
        <div className="h-24 border-b border-zinc-500">
          <input
            className="w-full h-full bg-transparent text-white p-6 text-lg"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="flex">
          <div className="text-blue-200 grid grid-cols-3 gap-5 grid-rows-4 p-3">
            <div className="w-24 h-24 cursor-pointer flex items-center justify-center rounded-2xl hover:bg-zinc-900 hover:border border-zinc-600 text-5xl">
              <p className="-mt-3">z</p>
            </div>
            <div className="w-24 h-24 cursor-pointer flex items-center justify-center rounded-2xl hover:bg-zinc-900 hover:border border-zinc-600 text-5xl">
              <p className="-mt-3">y</p>
            </div>
            <div className="w-24 h-24 cursor-pointer flex items-center justify-center rounded-2xl hover:bg-zinc-900 hover:border border-zinc-600 text-5xl">
              <p className="-mt-3">x</p>
            </div>
            <div className="w-24 h-24 cursor-pointer flex items-center justify-center rounded-2xl hover:bg-zinc-900 hover:border border-zinc-600 text-5xl">
              <p className="-mt-1">9</p>
            </div>
            <div className="w-24 h-24 cursor-pointer flex items-center justify-center rounded-2xl hover:bg-zinc-900 hover:border border-zinc-600 text-5xl">
              <p className="-mt-1">8</p>
            </div>
            <div className="w-24 h-24 cursor-pointer flex items-center justify-center rounded-2xl hover:bg-zinc-900 hover:border border-zinc-600 text-5xl">
              <p className="-mt-1">7</p>
            </div>
            <div className="w-24 h-24 cursor-pointer flex items-center justify-center rounded-2xl hover:bg-zinc-900 hover:border border-zinc-600 text-5xl">
              <p className="-mt-1">6</p>
            </div>
            <div className="w-24 h-24 cursor-pointer flex items-center justify-center rounded-2xl hover:bg-zinc-900 hover:border border-zinc-600 text-5xl">
              <p className="-mt-1">5</p>
            </div>
            <div className="w-24 h-24 cursor-pointer flex items-center justify-center rounded-2xl hover:bg-zinc-900 hover:border border-zinc-600 text-5xl">
              <p className="-mt-1">4</p>
            </div>
            <div className="w-24 h-24 cursor-pointer flex items-center justify-center rounded-2xl hover:bg-zinc-900 hover:border border-zinc-600 text-5xl">
              <p className="-mt-1">3</p>
            </div>
            <div className="w-24 h-24 cursor-pointer flex items-center justify-center rounded-2xl hover:bg-zinc-900 hover:border border-zinc-600 text-5xl">
              <p className="-mt-1">2</p>
            </div>
            <div className="w-24 h-24 cursor-pointer flex items-center justify-center rounded-2xl hover:bg-zinc-900 hover:border border-zinc-600 text-5xl">
              <p className="-mt-1">1</p>
            </div>
          </div>
          <div className="border-l border-zinc-500 grid gap-5 p-3">
            <div className="p-5 flex items-baseline justify-center hover:bg-amber-100 transition-all rounded-2xl">
              <Plus className="text-orange-400" size={48} />
            </div>
            <div className="p-5 flex items-baseline justify-center hover:bg-amber-100 transition-all rounded-2xl">
              <Minus className="text-orange-400" size={48} />
            </div>
            <div className="p-5 flex items-baseline justify-center hover:bg-amber-100 transition-all rounded-2xl">
              <X className="text-orange-400" size={48} />
            </div>
            <div className="p-5 flex items-baseline justify-center hover:bg-amber-100 transition-all rounded-2xl">
              <Divide className="text-orange-400" size={48} />
            </div>
            <div className="p-5 flex items-baseline justify-center hover:bg-amber-100 text-zinc-100 hover:text-zinc-950 transition-all rounded-2xl">
              <Equal className="" size={48} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
