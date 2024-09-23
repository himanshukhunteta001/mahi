// import { useState } from "react";

// export default function Page() {
//   const [noCount, setNoCount] = useState(0);
//   const [yesPressed, setYesPressed] = useState(false);
//   const yesButtonSize = noCount * 20 + 16;

//   const handleNoClick = () => {
//     setNoCount(noCount + 1);
//   };

//   const getNoButtonText = () => {
//     const phrases = [
//       "No",
//       "Are you sure?",
//       "Really sure?",
//       "Think again!",
//       "Last chance!",
//       "Surely not?",
//       "You might regret this!",
//       "Give it another thought!",
//       "Are you absolutely certain?",
//       "This could be a mistake!",
//       "Have a heart bebu!",
//       "Don't be so cold!",
//       "Change of heart?",
//       "Wouldn't you reconsider?",
//       "Is that your final answer?",
//       "You're breaking my heart ;(",
//       "Plsss? :( You're breaking my heart",
//     ];
//     return phrases[Math.min(noCount, phrases.length - 1)];
//   };

//   return (
//     <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
//       {yesPressed ? (
//         <>
//           <div className="text-4xl md:text-6xl font-bold text-white md-4">
//             <div style={{ textAlign: 'center', marginTop: '500px' }}>Thanks!</div>
//             <h1>Promise Laado From Dimples.......To Wrinkles I will be there for you!</h1>
//           </div>
//           {/* Added margin to push the image down */}
//           <img 
//             src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" 
//             className="mt-12" // Add margin-top class
//           />
//         </>
//       ) : (
//         <>
//           <h1 className="text-4xl md:text-6xl my-4 text-center">
//             Will you pls comeback🥹❤️?
//           </h1>
//           <div className="flex flex-wrap justify-center gap-2 items-center">
//             <button
//               className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
//               style={{ fontSize: yesButtonSize }}
//               onClick={() => setYesPressed(true)}
//             >
//               Yes
//             </button>
//             <button
//               onClick={handleNoClick}
//               className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
//             >
//               {noCount === 0 ? "No" : getNoButtonText()}
//             </button>
//           </div>
//         </>
//       )}
//       <Footer />
//     </div>
//   );
// }

// const Footer = () => (
//   <div className="fixed bottom-2 right-2">made for my laado ❤️</div>
// );



// import { useState } from "react";

// export default function Page() {
//   const [noCount, setNoCount] = useState(0);
//   const [yesPressed, setYesPressed] = useState(false);
//   const yesButtonSize = noCount * 20 + 16;

//   const handleNoClick = () => {
//     setNoCount(noCount + 1);
//   };

//   const getNoButtonText = () => {
//     const phrases = [
//       "No",
//       "Are you sure?",
//       "Really sure?",
//       "Think again!",
//       "Last chance!",
//       "Surely not?",
//       "You might regret this!",
//       "Give it another thought!",
//       "Are you absolutely certain?",
//       "This could be a mistake!",
//       "Have a heart bebu!",
//       "Don't be so cold!",
//       "Change of heart?",
//       "Wouldn't you reconsider?",
//       "Is that your final answer?",
//       "You're breaking my heart ;(",
//       "Plsss? :( You're breaking my heart",
//     ];
//     return phrases[Math.min(noCount, phrases.length - 1)];
//   };

//   // Set the dynamic background image based on yesPressed
//   const dynamicBackgroundImage = yesPressed
//     ? 'url("./assets/bg-2.jpeg")' // Replace with your new image path
//     : 'none'; // Default background image

//   return (
//     <div
//       className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900"
//       style={{
//         backgroundImage: dynamicBackgroundImage,
//         backgroundPosition: 'center',
//         backgroundSize: 'cover', // Use 'cover' for a better fit
//       }}
//     >
//       {yesPressed ? (
//         <>
//           <div className="text-4xl md:text-6xl font-bold text-white md-4">
//             <div style={{ textAlign: 'center', marginTop: '500px' }}>Thanks!</div>
//             <h1>Promise Laado From Dimples.......To Wrinkles I will be there for you!</h1>
//           </div>
//           <img 
//             src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" 
//             className="mt-12" 
//           />
//         </>
//       ) : (
//         <>
//           <h1 className="text-4xl md:text-6xl my-6 text-center text-white"style={{marginTop: '500px'}}>
//             Will you pls comeback🥹❤️?
//           </h1>
//           <div className="flex flex-wrap justify-center gap-2 items-center">
//             <button
//               className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
//               style={{ fontSize: yesButtonSize }}
//               onClick={() => setYesPressed(true)}
//             >
//               Yes
//             </button>
//             <button
//               onClick={handleNoClick}
//               className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
//             >
//               {noCount === 0 ? "No" : getNoButtonText()}
//             </button>
//           </div>
//         </>
//       )}
//       <Footer />
//     </div>
//   );
// }

// const Footer = () => (
//   <div className="fixed bottom-2 right-2">made for my laado ❤️</div>
// );















import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart bebu!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const dynamicBackgroundImage = yesPressed
    ? 'url("./assets/bg-2.jpeg")'
    : 'none';

  return (
    <div
      className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen selection:bg-rose-600 selection:text-white text-zinc-900"
      style={{
        backgroundImage: dynamicBackgroundImage,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {/* {yesPressed ? (
        <>
          <div className="text-4xl md:text-6xl font-bold text-white mt-24">
            <div style={{ textAlign: 'center' }}>Thanks!</div>
            <h1>Promise Laado From Dimples.......To Wrinkles I will be there for you!</h1>
          </div>
          <img 
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" 
            className="mt-12" 
            style={{ maxWidth: '100%', height: 'auto' }} // Responsive image
          />
        </>
      ) : (
        <>
          <h1 className="text-4xl md:text-6xl my-6 text-center text-white mt-24">
            Will you pls comeback🥹❤️?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )} */}
      {yesPressed ? (
  <>
    <div className="text-4xl md:text-6xl font-bold text-white mt-24 text-center">
      <div>Thanks!</div>
      <h1 className="mt-4 text-lg md:text-2xl">
        Promise Laado From Dimples.......To Wrinkles I will be there for you!
      </h1>
    </div>
    <img 
      src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" 
      className="mt-12 max-w-full h-auto" 
      style={{ marginBottom: '50px' }} 
    />
  </>
) : (
  <>
    <h1 className="text-4xl md:text-6xl my-6 text-center text-white mt-24">
      Will you pls comeback🥹❤️?
    </h1>
    <div className="flex flex-wrap justify-center gap-2 items-center">
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
        style={{ fontSize: yesButtonSize }}
        onClick={() => setYesPressed(true)}
      >
        Yes
      </button>
      <button
        onClick={handleNoClick}
        className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
      >
        {noCount === 0 ? "No" : getNoButtonText()}
      </button>
    </div>
  </>
)}

      <Footer />
    </div>
  );
}

const Footer = () => (
  <div className="fixed bottom-2 right-2 text-white">made for my laado ❤️</div>
);
