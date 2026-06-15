import classNames from 'classnames';
import { generateClasses, generateStyle } from "../../../utils";

export const Cover = ({ children, attributes }) => {
  const {
    url,
    customOverlayColor,
    hasParallax,
    dimRatio = 50,
    minHeight = 400,
    minHeightUnit = 'px'
  } = attributes;

  return (
    <div
      className={attributes ? classNames(generateClasses(attributes)) : undefined}
      style={attributes && attributes.style ? { ...generateStyle(attributes.style), '--overlay-color': customOverlayColor, '--min-height': `${minHeight}${minHeightUnit}` } : undefined}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: `url(${url})`,
          backgroundAttachment: hasParallax ? 'fixed' : 'scroll',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: customOverlayColor, opacity: dimRatio / 100 }}
        />

        {/* Min height so content is visible */}
        <div className="relative min-h-[var(--min-height)] flex flex-col justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};