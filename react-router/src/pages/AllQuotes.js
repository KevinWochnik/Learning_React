import QuoteList from "../components/quotes/QuoteList";

export const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Max",
    text: "Learning React is funny!",
  },
  {
    id: "q2",
    author: "Kev",
    text: "Learning Typescript is funny!",
  },
];

const AllQuotes = () => <QuoteList quotes={DUMMY_QUOTES} />;

export default AllQuotes;
