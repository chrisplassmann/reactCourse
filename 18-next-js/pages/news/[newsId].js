import { useRouter } from "next/dist/client/router"

// our-domain.com/news

function DetailPage() {
    const router = useRouter();

    console.log(router.query.newsId);

    return <h1>The Detail Page</h1>
}

export default DetailPage