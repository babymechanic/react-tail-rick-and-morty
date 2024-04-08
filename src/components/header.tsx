export function Header() {
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start"></div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">Characters</a>
                <a className="btn btn-ghost text-xl">Locations</a>
                <a className="btn btn-ghost text-xl">Episodes</a>
            </div>
            <div className="navbar-end"></div>
        </div>
    );
}