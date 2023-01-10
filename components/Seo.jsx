import Head from 'next/head'

export default function Seo({ title, description }) {
	return (
		<Head>
			<>
				<title>{title}</title>
				{/* META */}
				<meta name='description' content={description} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				{/* FAVICON */}
				<link rel='icon' href='/icon/favicon.ico' />
				{/* OpenGraph (http://ogp.me) */}
				<meta property='og:type' content='website' />
			</>
		</Head>
	)
}
