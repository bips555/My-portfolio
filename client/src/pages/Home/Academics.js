import React from "react";
import SectionTitle from "../../components/SectionTitle.js";
import { academics } from "../../resources/academics.js";
function Academics() {
    const [selectedItemIndex,setselectedItemIndex]= React.useState(0)


  return (
    <div className="my-10">
      <SectionTitle title={"Academics"} />
      <div className="flex py-10">
        <div className="flex flex-col gap-10 border-l-4 border-[#284748]">
          {academics.map((academic,index) => (
            <div onClick={()=>
            {
                setselectedItemIndex(index)
            }}
            className="cursor-pointer"
            >
              <h1 className={`text-xl px-3 ${selectedItemIndex === index ? 'text-secondary border-secondary border-l-4 -ml-1': 'text-white'}`}>{academic.period}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Academics;
