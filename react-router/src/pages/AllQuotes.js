import { useEffect } from "react";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

export const DUMMY_DATA = [
  {
    id: "q1",
    author: "Kev",
    text: "learning react is pretty interesting",
  },
  {
    id: "q1",
    author: "Pablo",
    text: "learning TS is pretty fun",
  },
];

const {
  sendRequest,
  status,
  data: loadedQuotes,
  error,
} = useHttp(getAllQuotes, true);

const AllQuotes = () => {
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={loadedQuotes} />;
};
export default AllQuotes;
