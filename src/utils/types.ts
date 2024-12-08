export interface Page {
  title: string;
  content: string;
}

export type TourDateType = {
  eventDate: string;
  location: string;
  venue: string;
  locationUrl?: string;
  ticketUrl?: string;
};
