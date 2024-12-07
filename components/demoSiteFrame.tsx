type Props = {
  src: string
  media?: DemoMediaType
};
const DemoSiteFrame = ({src, media = 'l'}: Props) => {
  let viewPortWidth = 'w-[50rem]'
  let viewPortHeight = 'h-[30rem]'

  if (media === 'm') {

  }

  if (media === 's') {
    viewPortWidth = 'w-[350px]'
    viewPortHeight = 'h-[600px]'
  }
  return (
    // max-w-md
    <div className={viewPortHeight + ' ' + viewPortWidth}>
      <iframe width={'100%'} height={'100%'} src={src}></iframe>
    </div>
  );
};
export default DemoSiteFrame;
