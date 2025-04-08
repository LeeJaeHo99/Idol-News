"use client";

import { useEffect, useState } from "react";

export default function Home() {
    const [news, setNews] = useState<any[]>([]);

    useEffect(() => {
        fetch("/api/getNews")
            .then((res) => res.json())
            .then((items) => setNews(items));
    }, []);

    return (
        <div>
            {news.map((item, index) => (
                <div key={index}>
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                        <p
                            dangerouslySetInnerHTML={{
                                __html: item.description,
                            }}
                        />
                    </a>
                </div>
            ))}
        </div>
    );
}
