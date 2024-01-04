import { Suspense } from "react";
import Dogs from "@/components/Dogs";
import Fruits from "@/components/Fruits";
import PostFeed from "@/components/PostFeed";
import ThreatenedSpecies from "@/components/ThreatenedSpecies";
import Loading from "./loading";
import ErrorBoundary from "./errorBoundary";

export default function Page() {
    return (
        <div className="flex flex-col justify-center items-center gap-6 px-4 mb-5">
            <h1 className="text-black text-4xl font-black p-10">Hello, Dashboard Page!</h1>
            <ErrorBoundary fallback={
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-center p-4">
                    <div className="px-6 py-4">
                        <p className="font-bold text-xl mb-2 text-red-600">Something went wrong while fetching dogs data</p>
                    </div>
                </div>
            }>
                <Suspense fallback={<Loading title="Loading Dogs..." />}>
                    <Dogs />
                </Suspense>
            </ErrorBoundary>
            <Suspense fallback={<Loading title="Loading Threatened Species..." />}>
                <ThreatenedSpecies />
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