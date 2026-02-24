import React, { useEffect, useState } from "react";
import ArticleCard from "./components/ArticleCard";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Articles = () => {
  const [article, setArticle] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    axios.get("https://api.ifpc.uz/events?limit=100&type=news").then((res) => {
      setArticle(res?.data?.data);
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
           {t("So'nggi Maqolalar")}
        </h2>
        <p className="text-gray-600">{t("Eng yangi va foydali maqolalar")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {article?.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* <div className="text-center">
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 text-[#009688] font-semibold text-lg"
        >
          Barcha maqolalarni ko'rish
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div> */}
    </div>
  );
};

export default Articles;
