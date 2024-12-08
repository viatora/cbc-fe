import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Page } from "../utils/types";
import Carousel from "../components/Carousel/Carousel";
import parsePageCsv from "../utils/parsePageCsv";
import fetchSheet from "../utils/fetchSheet";

import argentic from "../assets/images/carousel/argentic.jpg";
import posing from "../assets/images/carousel/posing.jpg";
import leaving from "../assets/images/carousel/leaving.jpg";
import yesDay from "../assets/images/carousel/yesday.jpg";

const carouselImages = [argentic, posing, leaving, yesDay];
const sheetTabGid = 0;

export default function About() {
  const { isFrench } = useLanguage();
  const [pageContent, setPageContent] = useState<Page | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const csvData = await fetchSheet(sheetTabGid);
        const parsedContent = parsePageCsv<Page>(csvData);
        setPageContent(isFrench ? parsedContent[0] : parsedContent[1]);
      } catch (error) {
        console.error("Error fetching or parsing page content:", error);
      }
    };

    fetchContent();
  }, [isFrench]);

  if (!pageContent) return <div>Loading...</div>;

  return (
    <div className="container mx-auto pt-28 mb-5xl max-w-5xl p-8">
      <h2 className="text-4xl font-[Blanch-Caps] mb-6">{pageContent.title}</h2>
      <p className="text-lg leading-relaxed mb-8">{pageContent.content}</p>
      <Carousel images={carouselImages} />
    </div>
  );
}
