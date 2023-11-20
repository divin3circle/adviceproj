import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import LoadingComponent from "./Loading";
import AdviceTitle from "./AdviceTitle";
import Advice from "./Advice";

const AdviceCard = () => {
  const url = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    setIsLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setAdvice(data.slip);
    setIsLoading(false);
  };

  const handleNextAdvice = () => {
    fetchAdvice();
  };

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div className="flex-col relative items-center bg-card max-w-xl p-8 rounded-xl md:hover:scale-105 ease-in duration-200 hover:shadow-lg cursor-pointer hover:shadow-title">
      <AdviceTitle title={advice?.id} />
      <Advice advice={advice.advice} />
      <div className="h-[1px] mt-8 bg-gray-600"></div>
      <div className="flex justify-center p-8">
        <div
          className="bg-title h-12 w-12 hover:shadow-md hover:shadow-title ease-in duration-150 rounded-full flex items-center justify-center cursor-pointer"
          onClick={handleNextAdvice}
        >
          <FaArrowAltCircleRight />
        </div>
      </div>
    </div>
  );
};

export default AdviceCard;
