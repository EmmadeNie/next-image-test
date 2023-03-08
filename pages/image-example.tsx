import Image from 'next/image';

function MyImageComponent() {
  return (
    <div>
      <h1>My Image</h1>
   
      <Image
        src="https://picsum.photos/200"
        alt="My Image"
        width={400}
        height={300}
        layout="responsive"
        loading="lazy"
        quality={75}
        //@ts-ignore
        formats={['webp']}
      />
    </div>
  );
}

export default MyImageComponent;