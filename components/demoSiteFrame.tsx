import DOC_URL from "../global";

type Props = { demo: DemoLink }
const DemoSiteFrame = ({demo: {media, link}}: Props) => {
  let viewPortWidth = 'w-[1080px]'
  let viewPortHeight = 'h-[80vh]'
  // console.log(media, link)

  if (media === 'm') {

  }

  if (media === 's') {
    viewPortWidth = 'w-[350px]'
    viewPortHeight = 'h-[650px]'
  }

  return (
    <div className={viewPortHeight + ' ' + viewPortWidth}>
      <iframe width={'100%'}
              height={'100%'}
              src={(link.indexOf('.') === -1 ? DOC_URL : '') + link}></iframe>
    </div>
  );
};
export default DemoSiteFrame;
