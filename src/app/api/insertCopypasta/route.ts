// app/api/insertCopypasta/route.ts
import { supabase } from '@/utils/supabase';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { title, lines, explanation, slangs } = await request.json();

    try {
        const { data, error } = await supabase
            .from('copypasta_items')
            .insert([
                {
                    title,
                    lines,
                    explanation,
                    slangs
                }
            ]);

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ message: 'Data inserted successfully!', data });
    } catch (error) {
        return NextResponse.json({ error: `Internal server error ${error}` }, { status: 500 });
    }
}
