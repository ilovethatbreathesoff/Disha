import AnimatedCursor from 'react-animated-cursor';

const NeonCursor = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      color='255, 255, 255' // Bright white color
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
      onHover={(event) => {
        const target = event.target;
        if (target.tagName === 'BUTTON') {
          target.style.transform = 'scale(1.05)'; // Slightly smaller enlargement
          target.style.transition = 'transform 0.2s ease-out';
        }
      }}
      onLeave={(event) => {
        const target = event.target;
        if (target.tagName === 'BUTTON') {
          target.style.transform = 'scale(1)';
          target.style.transition = 'transform 0.2s ease-out';
        }
      }}
      hasBlendMode={true}
      outerStyle={{
        border: '3px solid var(--cursor-color)'
      }}
      innerStyle={{
        backgroundColor: 'var(--cursor-color)'
      }}
    />
  );
};

export default NeonCursor;