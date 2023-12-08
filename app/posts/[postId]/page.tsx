import getFormattedDate from '@/lib/FormattedDate';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import './page.css';

type Props = {
    params: {postId : string}
}

export function generateStaticParams(){
      const posts = getSortedPostsData();
      return posts.map(post => ({
        postId: post.id
      }))
}

export function generateMetadata({ params }: Props) {
  const posts = getSortedPostsData();
  const { postId } = params;
  const post = posts.find((post) => post.id === postId);

  return !post ? {title: "post Not Found"} : {title: post.title}
}

export default async function Post({params}: Props) {
    const posts = getSortedPostsData();
    const {postId} = params;

    if(!posts.find(post => post.id === postId)){
        return notFound();
    }

    const { title, date, contentHtml } = await getPostData(postId);
    const formattedDate = getFormattedDate(date);


    return (
      <main className="px-6 prose prose-xl prose-slate mx-auto">
        <h1 className="text-3xl mt-4 mb-0">{title}</h1>
        <p className="mt-0">{formattedDate}</p>
        <article>
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
          <p>
            <Link href="/">← Back to home</Link>
          </p>
        </article>
      </main>
    );
}
