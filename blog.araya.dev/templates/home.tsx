import { React } from "../deps.ts";

export const Home = () => {
    return(
    <title>Posts | Araya's reservoir</title>
    <link rel="stylesheet" href="./styles/posts-list.css">
    <link rel="stylesheet" href="./styles/index.css">
    <main>
        <div class="container">
            <h1 class="index-page-title heading__lined">Posts</h1>
            <ul class="posts-list--list">
                {% for post in posts %}
                    <li class="posts-list--item">
                        <a href="{{ post.url }}">
                            <article class="posts-list--item-content">
                                <img src="/assets/images/default-thumbnail.svg" alt="thumbnail"
                                     class="posts-list--item-thumbnail" loading="lazy">
                                <time class="posts-list--item-date" datetime="{{ post.date }}">{{ post.date }}</time>
                                <h2 class="posts-list--item-title">{{ post.title }}</h2>
                            </article>
                        </a>
                    </li>
                {% endfor %}
            </ul>
        </div>
    </main>
    )
}