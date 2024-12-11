// import Image from "next/image";

// export default function ProjectItem({ data }) {
//   const title = data.properties.Name.title[0].plain_text;
//   const github = data.properties.Github.url;
//   const description = data.properties.Description.rich_text[0].plain_text;
//   const imgSrc = data.cover.file?.url || data.cover.external.url;
//   const tags = data.properties.Tags.multi_select;
//   const start = data.properties.WorkPeriod.date.start;
//   const end = data.properties.WorkPeriod.date.end;
//   const projectUrl = data.url; // Notion 페이지 URL 가져오기

//   const calculatedPeriod = (start, end) => {
//     const startDateStringArray = start.split("-");
//     const endDateStringArray = end.split("-");

//     var startDate = new Date(
//       startDateStringArray[0],
//       startDateStringArray[1] - 1, // 월은 0부터 시작하므로 -1
//       startDateStringArray[2]
//     );
//     var endDate = new Date(
//       endDateStringArray[0],
//       endDateStringArray[1] - 1, // 월은 0부터 시작하므로 -1
//       endDateStringArray[2]
//     );

//     const diffInMs = Math.abs(endDate - startDate);
//     const result = diffInMs / (1000 * 60 * 60 * 24);

//     return result;
//   };

//   return (
//     <div className="project-card max-w-full bg-white rounded-lg shadow-md overflow-hidden">
//       <Image
//         className="rounded-t-xl"
//         src={imgSrc}
//         alt="cover image"
//         width={800}
//         height={400}
//         layout="intrinsic"
//         objectFit="cover"
//         quality={100}
//       />

//       <div className="p-4 flex flex-col">
//         <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">{title}</h1>
//         <h3 className="mt-4 text-xl sm:text-xl md:text-2xl">{description}</h3>
//         <div className="mt-4">
//           <a href={projectUrl} className="text-blue-500 hover:underline">
//             Project Page
//           </a>
//         </div>
//         <div className="mt-2">
//           <a href={github} className="text-blue-500 hover:underline">
//             Go to GitHub
//           </a>
//         </div>
//         <p className="my-2 text-sm sm:text-base md:text-lg">
//           작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
//         </p>
//         <div className="flex flex-wrap gap-2 mt-2">
//           {tags.map((aTag) => (
//             <h1
//               className="px-3 py-2 text-sm sm:text-base md:text-lg rounded-md bg-sky-200 dark:bg-sky-700"
//               key={aTag.id}
//             >
//               {aTag.name}
//             </h1>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";

export default function ProjectItem({ data }) {
  const title = data.properties.Name.title[0].plain_text;
  const github = data.properties.Github.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;
  const projectUrl = data.url; // Notion 페이지 URL 가져오기

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1] - 1, // 월은 0부터 시작하므로 -1
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1] - 1, // 월은 0부터 시작하므로 -1
      endDateStringArray[2]
    );

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };

  return (
    <div className="project-card max-w-full bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        alt="cover image"
        width={800}
        height={400}
        layout="intrinsic"
        objectFit="cover"
        quality={100}
      />

      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl text-gray-700 dark:text-white">
          {title}
        </h1>
        <h3 className="mt-4 text-xl sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300">
          {description}
        </h3>
        <div className="mt-4">
          <a href={projectUrl} className="text-blue-500 hover:underline">
            Project Page
          </a>
        </div>
        <div className="mt-2">
          <a href={github} className="text-blue-500 hover:underline">
            Go to GitHub
          </a>
        </div>
        <p className="my-2 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((aTag) => (
            <h1
              className="px-3 py-2 text-sm sm:text-base md:text-lg rounded-md bg-sky-200 dark:bg-sky-700 text-gray-900 dark:text-gray-100"
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
