import { useState } from "react";

interface Props {
  desc: string;
}
const ExpandableText = ({ desc }: Props) => {
  const [shortenedText, setShortenedText] = useState(false);

  const reducedTextLength =
    shortenedText && desc.length > 40 ? desc.slice(0, 40) + "..." : desc;

  return (
    <section>
      <p>
        {reducedTextLength}{" "}
        <button
          onClick={() => setShortenedText(!shortenedText)}
          className="expand-text-button"
        >
          {shortenedText ? "Read more" : "Read less"}
        </button>
      </p>
    </section>
  );
};

export default ExpandableText;
