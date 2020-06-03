import http from './httpService';
import config from '../config/config.json';

export async function saveArticle(article) {
    const { data } = await http.post(/*config.breakingnewsapi + */'/articles/', article)
    return data;
}

export async function updateArticle(article) {
    return http.put('/articles/' + article._id, {
        title: article.title,
        content: article.content,
        source: article.source
    });
}

export async function getArticles() {
    const { data } = await http.get('/articles/');
    return data;
}

export async function getArticle(id) {
    const { data } = await http.get('/articles/' + id);
    return data;
}

export function deleteArticle(articleId) {
    return http.delete('/articles/' + articleId);
}