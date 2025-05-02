'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type CopypastaItem = {
    id: number;
    title: string;
    lines: [string, string][];
    explanation: string;
    slangs: { word: string; meaning: string; category: string }[];
};

export default function Home() {
    const [items, setItems] = useState<CopypastaItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchItems = async () => {
            const res = await fetch('/api/getCopypasta');
            const { data } = await res.json();
            setItems(data);
            setIsLoading(false);
        };

        fetchItems();
    }, []);

    if (isLoading) {

        return (
            <div className='h-[50vh] flex items-center justify-center'>
                <div className='text-center font-bold text-2xl'>
                    <img src="/images/dog.png"
                        className='h-40 animate-pulse'
                        alt="doge" />
                    <p>Now Loading...</p>
                </div>
            </div>
        )
    }

    return (
        <div>



            <div className="space-y-6">
                {items.map(item => (
                    <div key={item.id} className="p-4 border rounded  shadow h-20">
                        <Link href={`copypasta/${item.id}`}>

                            <h2 className="text-xl font-semibold">{item.title}</h2>
                            <p className="text-base  line-clamp-1">{item.explanation}</p>
                        </Link>
                    </div>
                ))}
            </div>

            <div className='my-20 flex justify-center'>
                <div className='text-center'>
                    <p>まだ始まったばかりでコピペが少ないです！ <br />もし良いコピペを知っていたら以下からご登録お願いいたします。</p>
                    <Link href={"/copypasta/add"} >
                        <div className='p-3 bg-blue-500 hover:bg-blue-700 rounded-xl m-3'>

                            新しいコピペを追加
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
