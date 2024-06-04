import prisma from '@/lib/prisma'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
	const posts = await prisma.post.findMany({
		orderBy: {
			createdAt: 'desc',
		},
	})
	return (
		<>
			<div className='nav'>
				<Image
					src='/images/logo.png'
					width={10}
					height={5}
					alt='Logo'
					className='logo'
				/>
				<nav>
					<ul>
						<li>
							<a href='#about'>О нас</a>
						</li>
						<li>
							<a href='#services'>Сервисы</a>
						</li>
						<li>
							<a href='#blog'>Блог</a>
						</li>
						<li>
							<a href='#more'>Ещё</a>
						</li>
						<li>
							<a href='#login'>Войти</a>
						</li>
						<li>
							<a href='#details' className='button details-nav'>
								Подробнее
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<header>
				<h1>
					Открой для себя <br />
					идеи, которые <br />
					улучшат ваш бизнес
				</h1>
				<p>Будьте в курсе последних новостей бизнеса и финансов.</p>
				<div className='buttons'>
					<button className='button details'>Подробнее</button>
					<button className='button login'>Войти</button>
				</div>
			</header>
			<section className='intro'>
				<div className='container'>
					<div className='intro-content'>
						<div className='text-content'>
							<h2>
								Оставайтесь в курсе новостей с нашим Порталом о бизнесе и
								финансах
							</h2>
							<p>
								Откройте для себя последние тенденции, идеи и стратегии для
								продвижения вашего бизнеса.
							</p>
							<ul>
								<li>
									Доступ к эксклюзивным отраслевым отчетам и анализу рынка
								</li>
								<li>Следите за новостями в реальном времени</li>
								<li>
									Откройте новые возможности с помощью экспертных бизнес советов
								</li>
							</ul>
						</div>
						<div className='image-content'>
							<Image
								src='/images/second.jpeg'
								alt='Stay Updated'
								width={570}
								height={342}
							/>
						</div>
					</div>
				</div>
			</section>
			<section className='articles'>
				<div className='container'>
					<h2>Статьи</h2>
					{posts.map(post => (
						<Link key={post.id} href={`/post/${post.id}`}>
							<div className='article'>
								<h3>{post.title}</h3>
								<p>{post.content}</p>
								<small>
									{post.author}, {`${post.createdAt}`}
								</small>
							</div>
						</Link>
					))}
					<button>Смотреть все</button>
				</div>
			</section>
			<footer>
				<div className='container'>
					<p>&copy; 2024 Finance Portal. All rights reserved.</p>
				</div>
			</footer>
		</>
	)
}
