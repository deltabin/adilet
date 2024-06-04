import prisma from '@/lib/prisma'

import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	const { title, content, author } = await req.json()
	const newPost = await prisma.post.create({
		data: {
			title,
			content,
			author,
		},
	})
	return NextResponse.json({ newPost }, { status: 200 })
}
