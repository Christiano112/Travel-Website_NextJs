import { request } from "http";

var res: {
    setHeader: (arg0: string, arg1: string) => void,
    json: () => void,
    status: (arg0: number) => void,
    send: (arg0: string) => void,
    end: () => void,
    redirect: (arg0: number, arg1: string) => void,
    cookie: (arg0: string, arg1: string, arg2: { maxAge: number; httpOnly: boolean; }) => void,
    clearCookie: (arg0: string) => void,
    locals: {
        user: {
            id: number,
            email: string,
            name: string,
            image: string,
        },
        token: string,
    },
    statusMessage: string,
    statusCode: number,
};


function Page({ data: [] }) {
    // Render data...
}

// This gets called on every request
export async function getServerSideProps({ res: [], req: [] }) {

    // This value is considered fresh for ten seconds (s-maxage=10).
    // If a request is repeated within the next 10 seconds, the previously
    // cached value will still be fresh. If the request is repeated before 59 seconds,
    // the cached value will be stale but still render (stale-while-revalidate=59).
    //
    // In the background, a revalidation request will be made to populate the cache
    // with a fresh value. If you refresh the page, you will see the new value.
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )

    // Fetch data from external API
    res = await fetch(`https://.../data`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default Page;