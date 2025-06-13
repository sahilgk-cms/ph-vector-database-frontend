// src/components/ArticleList.tsx

import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";

interface Article {
  _id: string;
  title: string;
  date: string;
  summary: string;
  sentiment_color: string;
}

const PAGE_SIZE = 20;

function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const [searchParams] = useSearchParams();

  const fetchArticles = async (selectedPage: number) => {
    setLoading(true);

    const severity = searchParams.get("Severity");
    const category = searchParams.get("Categories");
    const timespan = searchParams.get("Timespan");

    const params: any = {
      page: selectedPage + 1,
    };

    if (severity && severity !== "All") {
      params.Severity = severity;
    }

    if (category && category !== "All") {
      params.Categories = category;
    }

    if (timespan && timespan !== "All") {
      params.Timespan = timespan;
    }

    try {
      const res = await axios.get("http://localhost:8000/ph/", { params });
      setArticles(res.data.results);
      const totalPages = Math.ceil(res.data.count / PAGE_SIZE);
      setPageCount(totalPages);
    } catch (err) {
      console.error("Error fetching articles:", err);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchArticles(currentPage);
  }, [currentPage, searchParams]);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  if (loading) return <p>Loading articles...</p>;

  return (
    <div className="article-list-wrapper">
      <div className="article-list">
        {articles.map((article) => (
          <div
            key={article._id}
            style={{
              borderLeft: `4px solid ${article.sentiment_color}`,
              padding: "10px",
              marginBottom: "15px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3>
              <Link
                to={`/article/${article._id}`}
                style={{ textDecoration: "none", color: "#007bff" }}
              >
                {article.title}
              </Link>
            </h3>
            <p><strong>Date:</strong> {article.date}</p>
            <p>{article.summary}</p>
          </div>
        ))}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        previousLabel="< Prev"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        forcePage={currentPage}
        containerClassName="pagination"
        activeClassName="active"
        disabledClassName="disabled"
        previousClassName="prev"
        nextClassName="next"
      />
    </div>
  );
}

export default ArticleList;
