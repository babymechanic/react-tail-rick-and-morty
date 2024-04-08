export function Header() {
    return (
        <div className="flex flex-row m-1">
            <div className="basis-2/6"></div>
            <div className="basis-4/6 flex flex-row">
                <div className="basis-1/3">
                    <button
                        className="px-4 py-2 font-bold text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white">Characters
                    </button>
                </div>
                <div className="basis-1/3">
                    <button
                        className="px-4 py-2 font-bold text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white">Locations
                    </button>
                </div>
                <div className="basis-1/3">
                    <button
                        className="px-4 py-2 font-bold text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white">Episodes
                    </button>
                </div>
            </div>
            <div className="basis-2/6"></div>
        </div>
    );
}