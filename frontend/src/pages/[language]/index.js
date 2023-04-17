import { useState } from "react";
import NavBar from "../../../public/Components/NavBar";
import Toast from "../../../public/Components/Toast";
import words from "../../../public/JSON/words.json";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { language } = router.query;
  const selectLang = words?.[language];
  const lengthSelectLang = selectLang?.length;

  const [value, setValue] = useState("");

  const generateLang = () => {
    const randomNum = Math.floor(Math.random() * lengthSelectLang);
    const randomWords = selectLang[randomNum];
    setValue(randomWords);
  };

  const handleClick = () => {
    // navigator.clipboard.writeText(value);
    const tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    console.log("Text copied to clipboard");

    Toast.fire({
      icon: "success",
      title: "Copy สำเร็จแล้ว",
    });
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col h-screen container px-4 py-20 md:px-40 md:py-20 mx-auto">
        {selectLang ? (
          <>
            <textarea
              id="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              contenteditable
              readOnly
              rows={4}
              value={value}
              onClick={handleClick}
            ></textarea>
            <div className="grow relative flex justify-center">
              <img src={"/nong_blue.png"} className="h-96 w-96" />
            </div>
            <div className="relative flex justify-center">
              <button
                type="button"
                className="px-4 w-full md:w-64 h-16 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm text-center cursor-pointer"
                onClick={generateLang}
              >
                GENERATE
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="text-white text-2xl md:text-6xl flex items-center justify-center grow">
              ยังไม่มีภาษานี้งับ รอพัฒนาในอนาคต
            </div>
            <div className="grow relative flex justify-center">
              <img src={"/nong_blue.png"} className="h-96 w-96" />
            </div>
          </>
        )}
      </div>
    </>
  );
}
