import { TypeAnimation } from 'react-type-animation';

function Typing (){

  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Next.js',
        500, 
        'Typescript',
        500,
        'Node.js',
        500,
        'React.js',
        500
      ]}
      wrapper="span"
      speed={20}
      repeat={Infinity}
      preRenderFirstString={true}
      style={{ marginLeft: '5px', fontSize: '1em', textAlign: 'left', color: "#84ffff", fontWeight: 'bold', display: 'inline-block', width: '38.5%'}}
      
    />
  );
};

export default Typing;