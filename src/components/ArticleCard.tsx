import { ArticleCardBackgroundColorMap, AritcleCardDividerColor } from "../config";

interface ArticleCardProps {
    severity: keyof typeof ArticleCardBackgroundColorMap;
}

function ArticleCard({ severity }: ArticleCardProps) {
    return (
        <div className="article-card" style={{ backgroundColor: ArticleCardBackgroundColorMap[severity] }}>
            <div className="card-body">
                <h5 className="card-title">1000 cases of dengue reported in Bengaluru</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Categories: Confirmed Disease Outbreak</h6>
                <hr className="card-divider" style={{ color: AritcleCardDividerColor, backgroundColor: AritcleCardDividerColor }} />
                <p className="card-text">14-May-2025: The capital city saw an increase in cases of Dengue owing to heavy showers the previous week.</p>
                <a href="#" className="card-link">View Source</a>
            </div>
        </div>
    )  
}

export default ArticleCard;