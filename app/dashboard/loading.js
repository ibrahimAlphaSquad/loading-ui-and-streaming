export default function Loading({ title }) {
    return (
        <div className="w-full h-80 bg-slate-600 animate-pulse rounded-lg flex justify-center items-center">
            <p className="text-white text-3xl text-center font-bold place-content-center">{title ?? "Loading..."}</p>
        </div>
    )
}