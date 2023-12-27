import { posix } from "path";

export function isElementBelowViewport(
  elementRef: React.RefObject<HTMLElement>
) {
  window.innerHeight >=
    (elementRef.current as HTMLElement).getBoundingClientRect().top;
}

export function isElementScrolledToBottom(
  elementRef: React.RefObject<HTMLElement>
) {
  window.innerHeight ==
    (elementRef.current as HTMLElement).getBoundingClientRect().bottom;
}

export function isElementScrolledToTop(
  elementRef: React.RefObject<HTMLElement>
) {
  0 == (elementRef.current as HTMLElement).getBoundingClientRect().top;
}

export function isElementOnViewport(elementRef: React.RefObject<HTMLElement>) {
  const pos = (elementRef.current as HTMLElement).getBoundingClientRect();
  return (
    (window.innerHeight > pos.top && pos.top >= 0) ||
    (0 > pos.top && pos.bottom > 0)
  );
}

export function isElementTopDivisionOnViewport(
  elementRef: React.RefObject<HTMLElement>
) {
  const pos = (elementRef.current as HTMLElement).getBoundingClientRect();
  if (pos.top > 0 && pos.top < window.innerHeight) {
    return { is: true, top: pos.top, bottom: window.innerHeight - pos.top };
  } else {
    return { is: false, top: pos.top, bottom: window.innerHeight - pos.top };
  }
}

export function isElementBottomDivisionOnViewport(
  elementRef: React.RefObject<HTMLElement>
) {
  const pos = (elementRef.current as HTMLElement).getBoundingClientRect();
  if (pos.bottom > 0 && pos.bottom < window.innerHeight) {
    return {
      is: true,
      top: pos.bottom,
      bottom: window.innerHeight - pos.bottom,
    };
  } else {
    return {
      is: false,
      top: pos.bottom,
      bottom: window.innerHeight - pos.bottom,
    };
  }
}
