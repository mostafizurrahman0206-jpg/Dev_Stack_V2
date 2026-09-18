 
import { useState } from "react";
import toast from "react-hot-toast";

import technologies from "../../Data/technology.json";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

const TechnologySection = () => {
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAdd = (technology: Technology) => {
    const alreadyExists = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast(`${technology.name} is already in your stack!`, {
        icon: "⚠️",
      });
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id: string) => {
    setStack(
      stack.filter(
        (technology) => technology.id !== id
      )
    );
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <section
      id="technologies"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Explore the{" "}
            <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                onAdd={handleAdd}
                isAdded={stack.some(
                  (item) => item.id === technology.id
                )}
              />
            ))}
          </div>

          {/* Your Stack */}
          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />

        </div>
      </div>
    </section>
  );
};

export default TechnologySection;

