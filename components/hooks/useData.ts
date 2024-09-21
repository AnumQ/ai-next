const useData = () => {
  const introData = {
    titleIntro1: "Senior Frontend",
    titleIntro2: " Developer.",
    titleAbout: "Hello, I am Anum Qudsia",
    titleDescription1:
      "An frontend/fullstack developer with 11 \
            years of experience in complex problem solving and building applications. Skills: ",
    titleDescription2:
      "ReactJS, NextJS, Remix, Swift, Firebase, Kotlin, Android, Java, \
              Javascript/Typescript, Node, Azure, HTML, CSS",
    titleDescription3:
      "I have integrated several third-party libraries i.e. payment \
            providers such as Stripe, Adyen, Vipps, Google Pay and Apple Pay and written native modules in React Native \
            to create bridge between Android SDK (written in Java) and \
            Javascript.",
  };

  const constants = {
    scrollDown: "Scroll Down",
  };
  return { introData, constants };
};

export default useData;
