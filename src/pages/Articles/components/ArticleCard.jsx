import dayjs from "dayjs";
import { Calendar } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const { t, i18n } = useTranslation();
  return (
    <Link to={`/articles/${article.id}`}>
      <div className="group cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-lg hover:border-gray-300">
        <div className="relative h-60 w-full overflow-hidden bg-gray-100">
          <img
            src={`https://api.ifpc.uz/files/${article?.images?.[0]?.file_name}`}
            alt={article.name_uz}
            className="object-cover h-full w-full transition-transform group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-gray-500 flex items-center gap-1"> <Calendar className="w-4 h-4 text-gray-500" /> {dayjs(article.date).format("YYYY-MM-DD")}</span>
          </div>

          <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#009688] transition-colors">
            {article[`name_${i18n?.language}`]}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
