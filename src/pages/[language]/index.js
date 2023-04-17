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
    navigator.clipboard.writeText(value);
    Toast.fire({
      icon: "success",
      title: "Copy สำเร็จแล้ว",
    });
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col h-screen container px-40 py-20 mx-auto">
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
        <div className="grow relative flex justify-center">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer"
            onClick={generateLang}
          >
            GENERATE
          </button>
        </div>
      </div>
    </>
  );
}
