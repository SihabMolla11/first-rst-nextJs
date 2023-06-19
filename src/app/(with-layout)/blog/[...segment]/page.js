'use client'

import { useParams, useRouter, useSearchParams } from "next/navigation";



const SegmentPage = ({ params, searchParams }) => {

    const [year, id] = params.segment || [];

    const params2 = useParams();
    const searchParams2 = useSearchParams();

    console.log(searchParams, searchParams2)

    const router = useRouter()


    return (
        <div className="text-center">
            this is block segment page {year || new Date().getFullYear()} for {id}
            <br /><p className="text-xl font-bold">{searchParams.title}</p>
            <button onClick={() => router.back()}>
                Back
            </button>
        </div>
    );
};

export default SegmentPage;