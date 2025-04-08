export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const query = searchParams.get("query");

        const res = await fetch(
            `https://openapi.naver.com/v1/search/news.json?query=${encodeURIComponent(
                query!
            )}`,
            {
                headers: {
                    "X-Naver-Client-Id": process.env.NEXT_PUBLIC_NAVER_ID,
                    "X-Naver-Client-Secret":
                        process.env.NEXT_PUBLIC_NAVER_SECRET,
                },
            }
        );

        if (!res.ok) {
            return new Response("Failed to fetch news", { status: 500 });
        }

        const data = await res.json();
        return Response.json(data.items);
    } catch (e) {
        return new Response("Error occurred", { status: 500 });
    }
}
