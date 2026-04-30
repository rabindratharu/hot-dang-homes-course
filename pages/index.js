
export default function Home(props) {
  console.log(props);
  return <div dangerouslySetInnerHTML={{ __html: props.title }} />;
}


export async function getStaticProps() {
  return {
    props: {
      title: "Next JS &amp; WordPress course.",
      description: "Learn how to build a Next JS &amp; WordPress website.",
    },
  };
}
