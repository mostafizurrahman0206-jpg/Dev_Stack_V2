 
type Technology = {
  id: string;
  name: string;
  category: string;
  icon: string;
};

type YourStackProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const YourStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="h-fit rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

      {/* Heading */}
      <h2 className="text-lg font-bold text-gray-900">
        Your Stack
      </h2>

      <p className="mt-1 text-xs text-gray-400">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology${
              stack.length > 1 ? "ies" : ""
            } Selected`}
      </p>

      {/* Empty Stack */}
      {stack.length === 0 ? (
        <div className="mt-5 flex h-20 items-center justify-center rounded-lg border border-dashed border-gray-200 text-xs text-gray-400">
          Your stack is empty.
        </div>
      ) : (
        <>
          {/* Selected Technologies */}
          <div className="mt-5 space-y-2">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-lg border border-gray-200 p-3"
              >

                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-8 w-8 object-contain"
                />

                <div className="flex-1">
                  <h4 className="text-xs font-semibold text-gray-800">
                    {technology.name}
                  </h4>

                  <p className="text-[9px] text-gray-400">
                    {technology.category}
                  </p>
                </div>

                {/* Remove */}
                <button
                  onClick={() => onRemove(technology.id)}
                  className="text-xl text-gray-400 hover:text-red-500"
                >
                  ×
                </button>

              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            onClick={onRemoveAll}
            className="mt-6 w-full rounded-lg border border-red-300 py-2 text-sm font-semibold text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default YourStack;

