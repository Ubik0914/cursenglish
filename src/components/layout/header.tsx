'use client';

import { usePathname, useRouter } from 'next/navigation';
// import { useEffect } from 'react';

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();



    return (
        <div className='bg-gray-900'>

            <header className="h-16  flex justify-center items-center"
            >
                <h1 className="text-2xl font-bold ">Learn CursEnglish💀</h1>



            </header >

            {pathname !== "/" && <div className='h-8'>
                <hr className='' />
                <button
                    onClick={() => router.back()}
                >
                    <div className='flex mx-2 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 mx-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        <p className='text-lg'>戻る</p>
                    </div>
                </button>
            </div>
            }
        </div>
    );
}
