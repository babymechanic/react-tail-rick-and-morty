type Props = {
    id: number;
    name: string;
    image: string;
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
}

export function CharacterCard(props: Props) {
    return (
        <div className="card card-compact w-[200px] shadow-xl bg-neutral-800" key={ props.id }>
            <figure><img src={ props.image } alt={ `${ props.name }` }/></figure>
            <div className="card-body">
                <h2 className="card-title max-w-[160px] overflow-hidden whitespace-nowrap">{ props.name }</h2>
                <p>{ props.gender }</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
}