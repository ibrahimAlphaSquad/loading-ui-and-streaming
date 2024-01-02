import { Suspense } from "react";
import Loading from "./loading";
import Dogs from "@/components/Dogs";
import Fruits from "@/components/Fruits";
import PostFeed from "@/components/PostFeed";
import ThreatenedSpecies from "@/components/ThreatenedSpecies";

export default function Page() {
    return (
        <div className="flex flex-col justify-center items-center space-y-3 px-4 mb-5">
            <h1 className="text-black text-6xl font-black p-10">Hello, Dashboard Page!</h1>
            <Suspense fallback={<Loading title="Loading Threatened Species..." />}>
                <ThreatenedSpecies />
            </Suspense>
            <Suspense fallback={<Loading title="Loading Dogs..." />}>
                <Dogs />
            </Suspense>
            <Suspense fallback={<Loading title="Loading Fruits..." />}>
                <Fruits />
            </Suspense>
            <Suspense fallback={<Loading title="Loading Post Feed..." />}>
                <PostFeed />
            </Suspense>
        </div>
    )
}