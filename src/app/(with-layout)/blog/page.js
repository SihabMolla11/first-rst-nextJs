'use client'
import NavLink from "@/Components/Navlink/NavLink";
import { useRouter } from "next/navigation";

const blogs = [
    {
        id: 1,
        year: 2020,
        title: "title 1"
    },
    {
        id: 2,
        year: 2021,
        title: "title 2"
    },
    {
        id: 1,
        year: 2022,
        title: "title 3"
    },
    {
        id: 4,
        year: 2023,
        title: "title 4"
    }
]

const BlogPage = () => {

    const router = useRouter()


    return (
        <div className="flex gap-8  justify-center">
            {
                blogs.map(({ year, id, title }) =>
                    // <NavLink href={`/blog/${year}/${id}`} key={id}> {title} </NavLink>
                    <button
                    className=" border-2 border-blue-500 p-2 rounded-md"
                        // onClick={() => router.replace(`/blog/${year}/${id}?title=${title}`)}
                        onClick={() => router.push(`/blog/${year}/${id}?title=${title}`)}
                        key={id}
                    >
                        {title}
                    </button>
                )
            }
        </div>
    );
};

export default BlogPage;