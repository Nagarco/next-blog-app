import { getSortedPostsData } from '@/lib/posts'
import React from 'react'
import ListItem from '../ListItem/ListItem';
import './Posts.css'

export default function Posts() {

    const posts = getSortedPostsData();

    return (
      <section className="mt-6 mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold">
          Blog
        </h2>
        <ul className="w-full">
          {posts.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </ul>
      </section>
    );
}
