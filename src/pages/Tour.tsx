import { useLanguage } from "../context/LanguageContext";
import { Page, TourDateType } from "../utils/types";
import parseCsv from "../utils/parseCsv";
import fetchSheet from "../utils/fetchSheet";
import { useEffect, useState } from "react";
import dateInPast from "../utils/dateInPast";
import TourDatesContainer from "../components/TourDates/TourDatesContainer";

const sheetTabGid = 572869052;

const french: Page = {
  title: "Tournée",
  content: "Venez voir Clark's Bowling Club en live, on a hâte de vous voir!",
};

const english: Page = {
  title: "Tour",
  content:
    "Come and see Clark's Bowling Club play live, we can't wait to see you!",
};

export default function Tour() {
  const { isFrench } = useLanguage();
  const pageContent = isFrench ? french : english;
  const [gigs, setGigs] = useState<TourDateType[]>([]);
  const [futureGigs, setFutureGigs] = useState<TourDateType[]>([]);
  const [pastGigs, setPastGigs] = useState<TourDateType[]>([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const csvData = await fetchSheet(sheetTabGid);
        setGigs(parseCsv<TourDateType>(csvData));
      } catch (error) {
        console.error("Error fetching or parsing page content:", error);
      }
    };

    fetchContent();
  }, [isFrench]);

  useEffect(() => {
    const past: TourDateType[] = [];
    const future: TourDateType[] = [];

    gigs.sort((b, a) => {
      const [dayA, monthA, yearA] = a.eventDate.split("/").map(Number);
      const [dayB, monthB, yearB] = b.eventDate.split("/").map(Number);
      return (
        new Date(yearA, monthA - 1, dayA).getTime() -
        new Date(yearB, monthB - 1, dayB).getTime()
      );
    });

    gigs.forEach((gig) => {
      if (dateInPast(gig.eventDate)) {
        past.push(gig);
      } else {
        future.push(gig);
      }
    });

    setPastGigs(past);
    setFutureGigs(future);

    console.log("Past Dates:", past);
    console.log("Future Dates:", future);
  }, [gigs]);

  return (
    <div className="container mx-auto pt-28 mb-5xl max-w-5xl p-8">
      <h2 className="text-4xl mb-6">{pageContent.title}</h2>
      <p className="text-lg leading-relaxed mb-8">{pageContent.content}</p>
      <div className="mt-10">
        <TourDatesContainer tourDates={futureGigs} title={"upcoming events"} />
        <TourDatesContainer tourDates={pastGigs} title={"past events"} />
      </div>
    </div>
  );
}
