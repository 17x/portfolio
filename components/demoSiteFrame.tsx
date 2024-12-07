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
  const src = (link.indexOf('.') === -1 ? DOC_URL : '') + link

  return (
    <div className={viewPortHeight + ' ' + viewPortWidth}>
      <div className={'absolute -top-6 left-0 w-full text-center'}>
        <a target={'_blank'} href={src} className={'w-8 text-white hover:text-blue-800'}>
          Open in new tab
        </a>
      </div>
      <iframe width={'100%'}
              height={'100%'}
              src={src}></iframe>
    </div>
  );
};
export default DemoSiteFrame;
