import React, { useContext } from "react";
import Context from "../../Context";
import { InfoCircleFilled } from "@ant-design/icons";

export default function Menu({ paragraphs }) {
  const { setRenderInformation } = useContext(Context);

  return (
    <div className="menu">
      <InfoCircleFilled className="info-menu" onClick={setRenderInformation} />
      <p onClick={setRenderInformation}>Cristian Maschio</p>
      <ul>
        {paragraphs?.map((paragraph) => (
          <li key={paragraph.id}>
            <a href={`#${paragraph.id}`}>{paragraph.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
