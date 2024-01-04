import { Suspense } from "react";
import Dogs from "@/components/Dogs";
import Fruits from "@/components/Fruits";
import PostFeed from "@/components/PostFeed";
import ThreatenedSpecies from "@/components/ThreatenedSpecies";
// import { ErrorBoundary } from "next/dist/client/components/error-boundary";
// import Error from "./error";
import Loading from "./loading";
import ErrorBoundary from "./errorBoundary";

export default function Page() {
    return (
        <div className="flex flex-col justify-center items-center space-y-3 px-4 mb-5">
            <h1 className="text-black text-4xl font-black p-10">Hello, Dashboard Page!</h1>
            <ErrorBoundary fallback={<p>Something went wrong</p>}>
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