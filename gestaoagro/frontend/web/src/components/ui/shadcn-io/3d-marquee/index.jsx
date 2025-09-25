// "use client";;
// import { motion } from "motion/react";
// import { cn } from "@/lib/utils";
// import React from "react";

// export const ThreeDMarquee = ({
//   images,
//   className
// }) => {
//   // Split the images array into 4 equal parts
//   const chunkSize = Math.ceil(images.length / 4);
//   const chunks = Array.from({ length: 4 }, (_, colIndex) => {
//     const start = colIndex * chunkSize;
//     return images.slice(start, start + chunkSize);
//   });

//   return (
//     // <div
//     //   className={cn(
//     //     "mx-auto block h-[600px] overflow-hidden rounded-2xl max-sm:h-100",
//     //     className
//     //   )}>
//     //   <div className="flex size-full items-center justify-center">
//     //     <div className="size-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
//     //       <div
//     //         style={{
//     //           // transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
//     //           transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
//     //         }}
//     //         className="relative top-96 right-[50%] grid size-full origin-top-left grid-cols-4 gap-8 transform-3d">
//     //         {chunks.map((subarray, colIndex) => (
//     //           <motion.div
//     //             animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
//     //             transition={{
//     //               duration: colIndex % 2 === 0 ? 10 : 15,
//     //               repeat: Infinity,
//     //               repeatType: "reverse",
//     //             }}
//     //             key={colIndex + "marquee"}
//     //             className="flex flex-col items-start gap-8">
//     //             <GridLineVertical className="-left-4" offset="80px" />
//     //             {subarray.map((image, imageIndex) => (
//     //               <div className="relative" key={imageIndex + image}>
//     //                 <GridLineHorizontal className="-top-4" offset="20px" />
//     //                 <motion.img
//     //                   whileHover={{
//     //                     y: -10,
//     //                   }}
//     //                   transition={{
//     //                     duration: 0.3,
//     //                     ease: "easeInOut",
//     //                   }}
//     //                   key={imageIndex + image}
//     //                   src={image}
//     //                   alt={`Image ${imageIndex + 1}`}
//     //                   className="aspect-[970/700] rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl"
//     //                   width={970}
//     //                   height={700} />
//     //               </div>
//     //             ))}
//     //           </motion.div>
//     //         ))}
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//     <div
//   className={cn(
//     "relative mx-auto block h-[600px] overflow-hidden rounded-2xl max-sm:h-100",
//     className
//   )}
// >
//   {/* Conteúdo do marquee */}
//   <div className="flex size-full items-center justify-center">
//     <div className="size-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
//       <div
//         style={{
//           // transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
//           transform: "none",
//         }}
//         className="relative top-96 right-[50%] grid size-full origin-top-left grid-cols-4 gap-8 transform-3d"
//       >
//         {chunks.map((subarray, colIndex) => (
//           <motion.div
//             animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
//             transition={{
//               duration: colIndex % 2 === 0 ? 10 : 15,
//               repeat: Infinity,
//               repeatType: "reverse",
//             }}
//             key={colIndex + "marquee"}
//             className="flex flex-col items-start gap-8"
//           >
//             <GridLineVertical className="-left-4" offset="80px" />
//             {subarray.map((image, imageIndex) => (
//               <div className="relative" key={imageIndex + image}>
//                 <GridLineHorizontal className="-top-4" offset="20px" />
//                 <motion.img
//                   whileHover={{ y: -10 }}
//                   transition={{
//                     duration: 0.3,
//                     ease: "easeInOut",
//                   }}
//                   src={image}
//                   alt={`Image ${imageIndex + 1}`}
//                   className="aspect-[970/700] rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl"
//                   width={970}
//                   height={700}
//                 />
//               </div>
//             ))}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </div>

//   {/* Overlays de fade nas laterais */}
//   <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/70 to-transparent" />
//   <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/70 to-transparent" />
// </div>

//   );
// };

// const GridLineHorizontal = ({
//   className,
//   offset
// }) => {
//   return (
//     <div
//       style={
//         {
//           "--background": "#ffffff",
//           "--color": "rgba(0, 0, 0, 0.2)",
//           "--height": "1px",
//           "--width": "5px",
//           "--fade-stop": "90%",

//           //-100px if you want to keep the line inside
//           "--offset": offset || "200px",

//           "--color-dark": "rgba(255, 255, 255, 0.2)",
//           maskComposite: "exclude"
//         }
//       }
//       className={cn(
//         "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
//         "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
//         "[background-size:var(--width)_var(--height)]",
//         "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
//         "[mask-composite:exclude]",
//         "z-30",
//         "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
//         className
//       )}></div>
//   );
// };

// const GridLineVertical = ({
//   className,
//   offset
// }) => {
//   return (
//     <div
//       style={
//         {
//           "--background": "#ffffff",
//           "--color": "rgba(0, 0, 0, 0.2)",
//           "--height": "5px",
//           "--width": "1px",
//           "--fade-stop": "90%",

//           //-100px if you want to keep the line inside
//           "--offset": offset || "150px",

//           "--color-dark": "rgba(255, 255, 255, 0.2)",
//           maskComposite: "exclude"
//         }
//       }
//       className={cn(
//         "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
//         "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
//         "[background-size:var(--width)_var(--height)]",
//         "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
//         "[mask-composite:exclude]",
//         "z-30",
//         "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
//         className
//       )}></div>
//   );
// };

// export { GridLineHorizontal, GridLineVertical };
"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import React from "react";

export const ThreeDMarquee = ({ images, className }) => {
  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  return (
    <div
      className={cn(
        "relative mx-auto block h-[600px] overflow-hidden rounded-2xl max-sm:h-100",
        className
      )}
    >
      {/* Conteúdo do marquee */}
      <div className="flex size-full items-center justify-center">
        <div className="size-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
          <div
            style={{ transform: "none" }}
            className="relative top-96 right-[50%] flex flex-col gap-8"
          >
            {/* Cada linha é um marquee */}
            {[0, 1, 2, 3].map((rowIndex) => (
              <motion.div
                key={rowIndex + "marquee"}
                animate={{ x: rowIndex % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: rowIndex % 2 === 0 ? 15 : 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="flex items-center gap-8 h-[220px]"
              >
                <GridLineHorizontal className="-top-4" offset="20px" />
                {images.map((image, imageIndex) => (
                  <div className="relative h-full" key={imageIndex + image}>
                    <GridLineVertical className="-left-4" offset="80px" />
                    <motion.img
                      whileHover={{ y: -10 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      src={image}
                      alt={`Image ${imageIndex + 1}`}
                      className="aspect-[970/700] h-full rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl"
                    />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlays de fade nas laterais */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/70 to-transparent" />
    </div>
  );
};

const GridLineHorizontal = ({ className, offset }) => (
  <div
    style={{
      "--background": "#ffffff",
      "--color": "rgba(0, 0, 0, 0.2)",
      "--height": "1px",
      "--width": "5px",
      "--fade-stop": "90%",
      "--offset": offset || "200px",
      "--color-dark": "rgba(255, 255, 255, 0.2)",
      maskComposite: "exclude",
    }}
    className={cn(
      "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
      "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
      "[background-size:var(--width)_var(--height)]",
      "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
      "[mask-composite:exclude]",
      "z-30",
      "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
      className
    )}
  />
);

const GridLineVertical = ({ className, offset }) => (
  <div
    style={{
      "--background": "#ffffff",
      "--color": "rgba(0, 0, 0, 0.2)",
      "--height": "5px",
      "--width": "1px",
      "--fade-stop": "90%",
      "--offset": offset || "150px",
      "--color-dark": "rgba(255, 255, 255, 0.2)",
      maskComposite: "exclude",
    }}
    className={cn(
      "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
      "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
      "[background-size:var(--width)_var(--height)]",
      "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
      "[mask-composite:exclude]",
      "z-30",
      "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
      className
    )}
  />
);

export { GridLineHorizontal, GridLineVertical };