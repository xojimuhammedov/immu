import axios from "axios";
import dayjs from "dayjs";
import { ArrowLeft, Calendar } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

const ArticleAbout = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    axios.get(`https://api.ifpc.uz/events/${id}`).then((res) => {
      setArticle(res?.data?.data);
    });
  }, [id]);
  return (
    <main className="min-h-screen">
      <div className="container mx-auto">
        <div className="max-w-6xl px-4 py-6">
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-[#009688] font-medium mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
             {t("Maqolalarga qaytish")}
          </Link>

          <img
            src={`https://api.ifpc.uz/files/${article?.images?.[0]?.file_name}`}
            alt={article.name_uz}
            className="object-cover rounded-lg h-full w-full transition-transform group-hover:scale-105"
          />

          <h1 className="text-base lg:text-2xl font-bold text-gray-900 my-4 leading-tight">
            {article[`name_${i18n?.language}`]}
          </h1>

          <div
            className="text-base text-gray-600 mb-4 w-full leading-tight article-about-text break-words overflow-hidden"
            dangerouslySetInnerHTML={{
              __html: article?.description_uz,
            }}
          />

          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{dayjs(article.date).format("YYYY-MM-DD")}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArticleAbout;
