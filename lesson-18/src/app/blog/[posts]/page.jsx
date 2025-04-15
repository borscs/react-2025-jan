export default function BlogPostPage({ params })
{
	return (
		<main>
			<h1>Blog Post</h1>
			<p>{params.posts}</p>
		</main>
	)
}
