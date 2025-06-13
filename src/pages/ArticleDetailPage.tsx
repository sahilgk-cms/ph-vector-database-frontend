import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ArticleDetail from "../components/ArticleDetail";

interface Article {
  _id: string;
  title: string;
  text: string;
  date: string;
}

function ArticleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8000/ph/${id}/`)
      .then((res) => {
        setArticle(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching article detail:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading article...</p>;

  return <ArticleDetail article={article} />;
}

export default ArticleDetailPage;
