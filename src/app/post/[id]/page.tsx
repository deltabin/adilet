import prisma from '@/lib/prisma'
import { FC } from 'react'

interface BlogDetailPageProps {
	params: {
		id: string
	}
}
const BlogDetailPage: FC<BlogDetailPageProps> = async ({ params }) => {
	const post = await prisma.post.findFirst({
		where: {
			id: params.id,
		},
	})

	return (
		<div className='max-w-4xl mx-auto py-8'>
			<h1 className='text-3xl font-bold'>{post?.title}</h1>
			<p>
				{post?.author}, {`${post?.createdAt}`}
			</p>
			<div className='mt-4'>{post?.content}</div>
		</div>
	)
}

export default BlogDetailPage
