import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import ArticleCard from "./components/ArticleCard";

const Articles = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            So'nggi Maqolalar
          </h2>
          <p className="text-gray-600">Eng yangi va foydali maqolalar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg"
          >
            Barcha maqolalarni ko'rish
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Articles;
