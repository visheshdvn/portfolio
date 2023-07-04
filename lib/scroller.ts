export const scrollToSection = (
  containerRef: React.MutableRefObject<null>,
  elementRef: React.MutableRefObject<null>
  //   scrollingDown?: boolean,
  //   scrollingUp?: boolean
) => {
  if (elementRef?.current && containerRef?.current) {
    let parentElement = containerRef.current as HTMLDivElement;
    const currElement = elementRef.current as HTMLDivElement;

    const position = currElement.getBoundingClientRect();
    // console.log(position);

    if (position.y > 0) {
      parentElement?.scroll({
        top:
          parentElement.scrollTop +
          position.y +
          position.height -
          window.innerHeight,
        // (currElement.getBoundingClientRect().bottom - window.innerHeight),
        // +145 for next section
        behavior: "smooth",
      });
    }
  }
};
