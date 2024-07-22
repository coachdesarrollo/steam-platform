interface ProfileProps {
    name: string
    profileImg: string
}

export function Profile({name, profileImg}: ProfileProps) {
    return (
        <article className="flex flex-col gap-3 bg-white/10 min-w-max items-center px-3 py-2 rounded-sm justify-center hover:bg-white/20 transition-all duration-500">
            <img src={profileImg} alt={name} className="rounded-sm w-full flex-1"/>

            <h4 className="text-center font-semibold text-lg text-nowrap">{name}</h4>
        </article>
    )
}